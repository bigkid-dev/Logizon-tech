export default function SettingsPage() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 4 }}>Settings</h1>
        <p style={{ fontSize: 13, color: "#555" }}>Manage your account and portal preferences</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24, alignItems: "start" }}>
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden" }}>
          {["Profile", "Notifications", "Security", "Appearance"].map((item, i) => (
            <div key={item} style={{
              padding: "12px 20px", fontSize: 13, color: i === 0 ? "#fff" : "#555",
              background: i === 0 ? "rgba(255,255,255,0.05)" : "transparent",
              borderBottom: "1px solid rgba(255,255,255,0.04)", cursor: "pointer",
              fontWeight: i === 0 ? 600 : 400,
            }}>{item}</div>
          ))}
        </div>
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "32px 36px" }}>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: 18, color: "#fff", marginBottom: 28 }}>Profile</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 440 }}>
            {[{ label: "Full Name", placeholder: "Your name" }, { label: "Email", placeholder: "you@logizon.tech" }, { label: "Department", placeholder: "Engineering" }, { label: "Role", placeholder: "Developer" }].map(f => (
              <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>{f.label}</label>
                <input type="text" placeholder={f.placeholder} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 13, outline: "none", fontFamily: "Inter, sans-serif" }} />
              </div>
            ))}
            <button style={{ marginTop: 8, padding: "12px 24px", borderRadius: 100, background: "#fff", color: "#0a0a0a", fontWeight: 600, fontSize: 13, border: "none", cursor: "pointer", width: "fit-content" }}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
