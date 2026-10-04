import './AdminLogin.css';

export default function AdminLogin() {
  return (
    <div className="AdminLogin">
<div style={{width: "1280px", height: "800px", boxSizing: "border-box", display: "flex", fontFamily: "'Mukta',sans-serif", color: "#0A3F45"}}>
<div style={{flex: "1", background: "#0F5C63", color: "#fff", padding: "72px 64px", display: "flex", flexDirection: "column", gap: "28px"}}>
<div style={{display: "flex", alignItems: "center", gap: "14px"}}>
<svg width="48" height="48" viewBox="0 0 44 44" fill="none" stroke="#E8A33D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-label="Utkarsh logo"><path d="M4 38H40"></path><path d="M12 38A10 10 0 0 1 32 38"></path><path d="M22 24V19M12 28L9 25M32 28L35 25"></path></svg>
<div style={{fontSize: "34px", fontWeight: "700"}}>Utkarsh</div>
</div>
<div style={{fontSize: "44px", fontWeight: "700", lineHeight: "1.15", maxWidth: "520px"}}>One clear view of every government school</div>
<div style={{fontSize: "19px", lineHeight: "1.5", color: "#CFE3E1", maxWidth: "520px"}}>Watch supplies, send refills before stock runs out, and approve teachers and NGOs, all in one place.</div>
<div style={{marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px", fontSize: "17px"}}>
<div style={{fontWeight: "600", color: "#CFE3E1"}}>School status on the map</div>
<div style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{width: "16px", height: "16px", borderRadius: "8px", background: "#3D9A6B", display: "inline-block"}}></span>Green: supplies and classes running well</div>
<div style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{width: "16px", height: "16px", borderRadius: "8px", background: "#E8B63D", display: "inline-block"}}></span>Yellow: stock is getting low</div>
<div style={{display: "flex", alignItems: "center", gap: "10px"}}><span style={{width: "16px", height: "16px", borderRadius: "8px", background: "#D4583F", display: "inline-block"}}></span>Red: needs urgent action</div>
</div>
</div>
<div style={{flex: "1", background: "#F4F6F1", display: "flex", alignItems: "center", justifyContent: "center"}}>
<div style={{width: "400px", display: "flex", flexDirection: "column", gap: "20px"}}>
<div style={{display: "flex", gap: "8px"}}>
<button style={{minHeight: "44px", padding: "0 16px", border: "0", borderRadius: "22px", background: "#0F5C63", color: "#fff", font: "600 15px 'Mukta',sans-serif"}}>English</button>
<button style={{minHeight: "44px", padding: "0 16px", border: "2px solid #0F5C63", borderRadius: "22px", background: "transparent", color: "#0F5C63", font: "600 15px 'Mukta',sans-serif"}}>हिन्दी</button>
<button style={{minHeight: "44px", padding: "0 16px", border: "2px solid #0F5C63", borderRadius: "22px", background: "transparent", color: "#0F5C63", font: "600 15px 'Mukta',sans-serif"}}>ಕನ್ನಡ</button>
</div>
<div style={{fontSize: "30px", fontWeight: "700"}}>School Authority login</div>
<div style={{fontSize: "16px", color: "#3F5A5D"}}>For district, state and national officials</div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<label htmlFor="aem" style={{fontSize: "15px", fontWeight: "600"}}>Official email</label>
<input id="aem" type="email" style={{minHeight: "48px", boxSizing: "border-box", border: "2px solid #7C9496", borderRadius: "10px", padding: "0 14px", font: "400 17px 'Mukta',sans-serif", background: "#fff"}} />
</div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<label htmlFor="apw" style={{fontSize: "15px", fontWeight: "600"}}>Password</label>
<input id="apw" type="password" style={{minHeight: "48px", boxSizing: "border-box", border: "2px solid #7C9496", borderRadius: "10px", padding: "0 14px", font: "400 17px 'Mukta',sans-serif", background: "#fff"}} />
</div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<label htmlFor="aotp" style={{fontSize: "15px", fontWeight: "600"}}>OTP sent to your registered mobile</label>
<input id="aotp" type="text" style={{minHeight: "48px", boxSizing: "border-box", border: "2px solid #7C9496", borderRadius: "10px", padding: "0 14px", font: "400 17px 'Mukta',sans-serif", background: "#fff"}} />
</div>
<button style={{minHeight: "52px", border: "0", borderRadius: "10px", background: "#E8A33D", color: "#0A3F45", font: "700 18px 'Mukta',sans-serif"}}>Login</button>
<div style={{fontSize: "15px"}}><a href="#">Forgot password?</a></div>
</div>
</div>
</div>
    </div>
  );
}
