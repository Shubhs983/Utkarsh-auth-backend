import './TeacherLogin.css';

export default function TeacherLogin() {
  return (
    <div className="TeacherLogin">
<div style={{width: "390px", height: "844px", boxSizing: "border-box", background: "#F4F6F1", color: "#0A3F45", display: "flex", flexDirection: "column", fontFamily: "'Mukta',sans-serif"}}>
<div style={{background: "#0F5C63", padding: "48px 24px 40px", color: "#fff", display: "flex", flexDirection: "column", gap: "12px"}}>
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="#E8A33D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-label="Utkarsh logo"><path d="M4 38H40"></path><path d="M12 38A10 10 0 0 1 32 38"></path><path d="M22 24V19M12 28L9 25M32 28L35 25"></path></svg>
<div style={{fontSize: "32px", fontWeight: "700", lineHeight: "1.1"}}>Utkarsh</div>
<div style={{fontSize: "16px", color: "#CFE3E1"}}>Teacher portal for government schools</div>
</div>
<div style={{padding: "24px", display: "flex", flexDirection: "column", gap: "20px", flex: "1"}}>
<div style={{display: "flex", gap: "8px"}}>
<button style={{minHeight: "44px", padding: "0 16px", border: "0", borderRadius: "22px", background: "#0F5C63", color: "#fff", font: "600 15px 'Mukta',sans-serif"}}>English</button>
<button style={{minHeight: "44px", padding: "0 16px", border: "2px solid #0F5C63", borderRadius: "22px", background: "transparent", color: "#0F5C63", font: "600 15px 'Mukta',sans-serif"}}>हिन्दी</button>
<button style={{minHeight: "44px", padding: "0 16px", border: "2px solid #0F5C63", borderRadius: "22px", background: "transparent", color: "#0F5C63", font: "600 15px 'Mukta',sans-serif"}}>ಕನ್ನಡ</button>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<label htmlFor="tid" style={{fontSize: "15px", fontWeight: "600"}}>Teacher ID or mobile number</label>
<input id="tid" type="text" style={{minHeight: "48px", boxSizing: "border-box", border: "2px solid #7C9496", borderRadius: "10px", padding: "0 14px", font: "400 17px 'Mukta',sans-serif", background: "#fff"}} />
</div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<label htmlFor="tpw" style={{fontSize: "15px", fontWeight: "600"}}>Password</label>
<input id="tpw" type="password" style={{minHeight: "48px", boxSizing: "border-box", border: "2px solid #7C9496", borderRadius: "10px", padding: "0 14px", font: "400 17px 'Mukta',sans-serif", background: "#fff"}} />
</div>
<button style={{minHeight: "52px", border: "0", borderRadius: "10px", background: "#E8A33D", color: "#0A3F45", font: "700 18px 'Mukta',sans-serif"}}>Login</button>
<div style={{background: "#DDEFE8", borderRadius: "10px", padding: "14px 16px", fontSize: "15px", lineHeight: "1.4", color: "#14532D"}}>Login works only after the school authority has verified your documents.</div>
<div style={{fontSize: "16px"}}>New teacher? <a href="#">Upload documents for verification</a></div>
</div>
</div>
    </div>
  );
}
