import './TeacherClassroom.css';

export default function TeacherClassroom() {
  return (
    <div className="TeacherClassroom">
<div className="p"><div className="h"><div style={{fontSize: "24px", fontWeight: "700"}}>Classroom</div><div style={{fontSize: "14px", color: "#CFE3E1", marginTop: "4px"}}>Language: English | हिन्दी | ಕನ್ನಡ</div></div>
<div className="m"><div className="c"><b style={{fontSize: "17px"}}>Study material</b><div className="r" style={{padding: "6px 0", borderBottom: "1px solid #E3EAE7"}}><span style={{fontSize: "16px"}}>Curriculum</span><button className="o">Download</button></div><div className="r" style={{padding: "6px 0", borderBottom: "1px solid #E3EAE7"}}><span style={{fontSize: "16px"}}>Worksheets</span><button className="o">Download</button></div><div className="r" style={{padding: "6px 0", borderBottom: "1px solid #E3EAE7"}}><span style={{fontSize: "16px"}}>Assignments and tests</span><button className="o">Download</button></div></div>
<div className="r"><button className="b" style={{flex: "1"}}>Give assignment</button><button className="b" style={{flex: "1"}}>Give test</button></div>
<div className="c"><b style={{fontSize: "17px"}}>How was today's food?</b><div className="r"><button className="o" style={{flex: "1"}}>Good</button><button className="o" style={{flex: "1"}}>Okay</button><button className="o" style={{flex: "1"}}>Poor</button></div></div>
<div className="c"><div className="r"><b style={{fontSize: "17px"}}>My documents</b><span className="lo">Waiting for check</span></div><button className="o">Upload documents</button></div></div><div className="n"><span className="">Home</span><span className="on">Classroom</span><span className="">NGO sessions</span></div></div>
    </div>
  );
}
