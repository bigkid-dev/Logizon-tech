// components/StatsSection.tsx
export default function StatsSection() {
  const stats = [
    { value: "6", label: "Divisions" },
    { value: "10+", label: "Products" },
    { value: "50K+", label: "Users" },
    { value: "2019", label: "Founded" }
  ];

  return (
    <section style={{
      padding: "80px 32px",
      borderTop: "1px solid #eee",
      background: "white"
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 40,
        textAlign: "center"
      }}>
        {stats.map(s => (
          <div key={s.label} style={{ flex: 1, minWidth: 120 }}>
            <div style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 600,
              color: "#171717",
              marginBottom: 8
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: 13, color: "#999", letterSpacing: "1px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}