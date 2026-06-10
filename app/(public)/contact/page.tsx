export default function ContactPage() {
  return (
    <div style={{ background: "#0a0a0a", paddingTop: 140 }}>
      <section style={{ padding: "40px 24px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555", marginBottom: 24 }}>Contact</p>
            <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.035em", color: "#fff", marginBottom: 32, lineHeight: 1.08 }}>
              Let&apos;s build<br />something.
            </h1>
            <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 48, maxWidth: 380 }}>
              Whether you want to partner, invest, join the team, or just say hello — we&apos;d love to hear from you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { label: "General", value: "hello@logizon.tech" },
                { label: "Careers", value: "careers@logizon.tech" },
                { label: "Location", value: "Ibadan, Oyo State, Nigeria" },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#333", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ color: "#888", fontSize: 14 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <FormField label="First Name" placeholder="Tunde" />
                <FormField label="Last Name" placeholder="Adeyemi" />
              </div>
              <FormField label="Email" placeholder="you@company.com" type="email" />
              <FormField label="Subject" placeholder="What is this about?" />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>Message</label>
                <textarea
                  placeholder="Tell us more..."
                  rows={5}
                  style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10, padding: "14px 16px", color: "#fff", fontSize: 14,
                    resize: "vertical", outline: "none", fontFamily: "Inter, sans-serif",
                  }}
                />
              </div>
              <button style={{
                background: "#fff", color: "#0a0a0a", fontWeight: 600, fontSize: 14,
                padding: "14px 24px", borderRadius: 100, border: "none", cursor: "pointer",
                marginTop: 8, transition: "opacity 0.15s",
              }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 10, padding: "13px 16px", color: "#fff", fontSize: 14,
          outline: "none", fontFamily: "Inter, sans-serif",
        }}
      />
    </div>
  );
}
