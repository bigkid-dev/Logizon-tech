const team = [
  { name: "Tunde Adeyemi", role: "Lead Backend Engineer", dept: "Engineering", email: "tunde@logizon.tech", tasks: 8, projects: 3 },
  { name: "Kemi Okafor", role: "Frontend Engineer", dept: "Engineering", email: "kemi@logizon.tech", tasks: 5, projects: 2 },
  { name: "Seun Babatunde", role: "Mobile Engineer", dept: "Engineering", email: "seun@logizon.tech", tasks: 6, projects: 2 },
  { name: "Ada Kalu", role: "Product Designer", dept: "Design", email: "ada@logizon.tech", tasks: 4, projects: 3 },
  { name: "Bisi Adeyemi", role: "Growth & Marketing", dept: "Operations", email: "bisi@logizon.tech", tasks: 3, projects: 2 },
  { name: "Emeka Nwosu", role: "AI Engineer", dept: "Engineering", email: "emeka@logizon.tech", tasks: 7, projects: 2 },
];

const deptColors: Record<string, string> = { Engineering: "#60a5fa", Design: "#a78bfa", Operations: "#fb923c", Management: "#facc15" };

export default function TeamPage() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 4 }}>Team</h1>
        <p style={{ fontSize: 13, color: "#555" }}>{team.length} staff members</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {team.map(member => (
          <div key={member.email} style={{
            background: "#111", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14, padding: "24px 24px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{member.name}</p>
                <p style={{ fontSize: 12, color: "#555" }}>{member.role}</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                color: deptColors[member.dept] || "#888",
                background: `${deptColors[member.dept]}15` || "rgba(255,255,255,0.04)",
                padding: "4px 10px", borderRadius: 100,
              }}>{member.dept}</span>
            </div>

            <p style={{ fontSize: 11, color: "#333", marginBottom: 16 }}>{member.email}</p>

            <div style={{ display: "flex", gap: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "Space Grotesk, sans-serif" }}>{member.tasks}</p>
                <p style={{ fontSize: 10, color: "#444" }}>Tasks</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "Space Grotesk, sans-serif" }}>{member.projects}</p>
                <p style={{ fontSize: 10, color: "#444" }}>Projects</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
