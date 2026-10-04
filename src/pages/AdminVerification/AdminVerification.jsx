import './AdminVerification.css';

export default function AdminVerification() {
  return (
    <div className="AdminVerification">
<div className="w"><div className="sb"><div style={{fontSize: "24px", fontWeight: "700", paddingBottom: "16px"}}>Utkarsh</div><div className="">Dashboard</div><div className="">Supplies</div><div className="on">Teachers and NGOs</div><div className="">CCTV review</div><div className="">Reports</div></div><div className="mn"><div style={{fontSize: "30px", fontWeight: "700"}}>Teacher and NGO verification</div>
<div className="g" style={{flex: "1"}}><div className="c" style={{flex: "2"}}><b style={{fontSize: "17px"}}>Waiting for approval</b><table><tr><th>Name</th><th>School or group</th><th>Documents</th><th>Decision</th></tr>
<tr><td>[Teacher name]</td><td>[School name]</td><td><a href="#">View documents</a></td><td><button className="b" style={{minHeight: "40px"}}>Approve</button> <button className="o" style={{minHeight: "40px"}}>Reject</button></td></tr><tr><td>[Teacher name]</td><td>[School name]</td><td><a href="#">View documents</a></td><td><button className="b" style={{minHeight: "40px"}}>Approve</button> <button className="o" style={{minHeight: "40px"}}>Reject</button></td></tr><tr><td>[NGO name]</td><td>NGO</td><td><a href="#">View certificate</a></td><td><button className="b" style={{minHeight: "40px"}}>Approve</button> <button className="o" style={{minHeight: "40px"}}>Reject</button></td></tr><tr><td>[SHG name]</td><td>SHG</td><td><a href="#">View certificate</a></td><td><button className="b" style={{minHeight: "40px"}}>Approve</button> <button className="o" style={{minHeight: "40px"}}>Reject</button></td></tr></table></div>
<div className="c" style={{flex: "1", alignSelf: "flex-start"}}><b style={{fontSize: "17px"}}>Reports</b><div className="r" style={{padding: "8px 0", borderBottom: "1px solid #E3EAE7"}}><span>Stock report</span><button className="o">Download</button></div><div className="r" style={{padding: "8px 0", borderBottom: "1px solid #E3EAE7"}}><span>Attendance report</span><button className="o">Download</button></div><div className="r" style={{padding: "8px 0", borderBottom: "1px solid #E3EAE7"}}><span>Delivery delays</span><button className="o">Download</button></div></div></div></div></div>
    </div>
  );
}
