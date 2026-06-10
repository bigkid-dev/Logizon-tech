const stats = [
  { value: "6", label: "Technology Divisions" },
  { value: "10+", label: "Products Shipped" },
  { value: "50K+", label: "Users Across Platforms" },
  { value: "2019", label: "Founded in Nigeria" },
];

export default function StatsSection() {
  return (
    <section style={{ padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: 64 }}>
          By the numbers
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                letterSpacing: "-0.04em",
                color: "#fff",
                marginBottom: 8,
              }}>{s.value}</p>
              <p style={{ fontSize: 13, color: "#444", letterSpacing: "0.02em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
