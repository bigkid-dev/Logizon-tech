export default function ManifestoSection() {
  return (
    <section style={{ padding: "120px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: 32 }}>
          Our Mission
        </p>
        <h2 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "#fff",
          marginBottom: 40,
        }}>
          Africa has the talent.<br />
          <span style={{ color: "rgba(255,255,255,0.25)" }}>We build the tools.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, maxWidth: 700 }}>
          <div>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}>
              We are an AI-first technology company building across six verticals — each one solving a real problem faced by millions of Africans every day.
            </p>
          </div>
          <div>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}>
              From students preparing for exams to churches managing their congregations, we write software that just works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
