import './TeacherNGO.css';

export default function TeacherNGO() {
  return (
    <div className="TeacherNGO">
<div className="p"><div className="h"><div style={{fontSize: "24px", fontWeight: "700"}}>NGO and SHG sessions</div><div style={{fontSize: "14px", color: "#CFE3E1", marginTop: "4px"}}>Only certified groups can be booked</div></div>
<div className="m"><div className="c"><div className="r"><b style={{fontSize: "17px"}}>[NGO name 1]</b><span className="ok">Certified</span></div><div className="s">Topics: period education, health education</div><div className="s">Approved by authority, certificate checked</div><button className="b">Request session</button></div><div className="c"><div className="r"><b style={{fontSize: "17px"}}>[SHG name 2]</b><span className="ok">Certified</span></div><div className="s">Topics: period education, health education</div><div className="s">Approved by authority, certificate checked</div><button className="b">Request session</button></div><div className="c"><div className="r"><b style={{fontSize: "17px"}}>[NGO name 3]</b><span className="re">Not certified</span></div><div className="s">Topics: period education, health education</div><div className="s">Certificate not verified yet</div><button className="o" disabled="" style={{opacity: ".5"}}>Cannot request</button></div>
<div className="s">A teacher must be present during every session.</div></div><div className="n"><span className="">Home</span><span className="">Classroom</span><span className="on">NGO sessions</span></div></div>
    </div>
  );
}
