const mongoose = require("mongoose");

const authoritySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    school: { type: String, required: true, trim: true },
    role: { type: String, enum: ["principal", "admin", "authority"], default: "authority" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Authority", authoritySchema);
