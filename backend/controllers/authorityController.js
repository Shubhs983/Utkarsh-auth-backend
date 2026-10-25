const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authority = require("../models/Authority");

const makeToken = (authority) =>
  jwt.sign({ id: authority._id, role: authority.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

exports.register = async (req, res) => {
  try {
    const { name, email, password, school, role } = req.body;
    if (!name || !email || !password || !school) {
      return res.status(400).json({ message: "name, email, password and school are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    const exists = await Authority.findOne({ email: email.toLowerCase() });
    if (exists) {
      return res.status(409).json({ message: "Email already registered" });
    }
    const hashed = await bcrypt.hash(password, 10);
    const authority = await Authority.create({ name, email, password: hashed, school, role });
    res.status(201).json({
      token: makeToken(authority),
      authority: { id: authority._id, name: authority.name, email: authority.email, school: authority.school, role: authority.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }
    const authority = await Authority.findOne({ email: email.toLowerCase() });
    if (!authority || !(await bcrypt.compare(password, authority.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json({
      token: makeToken(authority),
      authority: { id: authority._id, name: authority.name, email: authority.email, school: authority.school, role: authority.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
