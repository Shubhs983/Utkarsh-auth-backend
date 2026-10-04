import './TeacherHome.css';

export default function TeacherHome() {
  return (
    <div className="TeacherHome">
<div className="p"><div className="h"><div style={{fontSize: "14px", color: "#CFE3E1"}}>[School name]</div><div style={{fontSize: "24px", fontWeight: "700"}}>Hello, [Teacher name]</div></div>
<div className="m"><div style={{fontSize: "18px", fontWeight: "700"}}>Stock in your school</div>
<div className="c"><div className="r"><b style={{fontSize: "17px"}}>Sanitary napkins</b><span className="lo">Low</span></div><div className="bar"><i style={{width: "20%", background: "#E8B63D"}}></i></div><div className="r"><span className="s">[00] left</span><button className="b">Request now</button></div></div>
<div className="c"><div className="r"><b style={{fontSize: "17px"}}>Medicines</b><span className="re">Running out</span></div><div className="bar"><i style={{width: "8%", background: "#D4583F"}}></i></div><div className="r"><span className="s">[00] left</span><button className="b">Request now</button></div></div>
<div className="c"><div className="r"><b style={{fontSize: "17px"}}>Food (mid-day meal)</b><span className="ok">Enough</span></div><div className="bar"><i style={{width: "75%", background: "#3D9A6B"}}></i></div><div className="r"><span className="s">[00] left</span><span className="s">No request needed</span></div></div>
<div className="r"><button className="o" style={{flex: "1"}}>Record received</button><button className="o" style={{flex: "1"}}>Record used</button></div></div><div className="n"><span className="on">Home</span><span className="">Classroom</span><span className="">NGO sessions</span></div></div>
    </div>
  );
}
