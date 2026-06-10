// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main style={{ background: "white", paddingTop: 100 }}>
      <section style={{ padding: "40px 32px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Left side - Info */}
          <div>
            <h1 style={{
              fontSize: "clamp(44px, 8vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#171717",
              marginBottom: 32,
              lineHeight: 1.1
            }}>
              Let's build<br />something.
            </h1>
            <p style={{
              color: "#666",
              fontSize: 16,
              lineHeight: 1.5,
              marginBottom: 48,
              maxWidth: 380
            }}>
              Whether you want to partner, invest, join the team, or just say hello — we'd love to hear from you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { label: "General", value: "hello@logizon.tech" },
                { label: "Careers", value: "careers@logizon.tech" },
                { label: "Location", value: "Ibadan, Oyo State, Nigeria" },
              ].map(item => (
                <div key={item.label}>
                  <p style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#999",
                    marginBottom: 6
                  }}>
                    {item.label}
                  </p>
                  <p style={{ color: "#171717", fontSize: 15 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div style={{
            background: "white",
            border: "1px solid #eee",
            borderRadius: 16,
            padding: 40
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <FormField label="First Name" placeholder="Tunde" />
                <FormField label="Last Name" placeholder="Adeyemi" />
              </div>
              <FormField label="Email" placeholder="you@company.com" type="email" />
              <FormField label="Subject" placeholder="What is this about?" />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#999"
                }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell us more..."
                  rows={5}
                  style={{
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    padding: "12px 14px",
                    color: "#171717",
                    fontSize: 14,
                    resize: "vertical",
                    outline: "none",
                    fontFamily: "inherit"
                  }}
                />
              </div>
              <button style={{
                background: "#171717",
                color: "white",
                fontWeight: 500,
                fontSize: 14,
                padding: "12px 24px",
                borderRadius: 30,
                border: "none",
                cursor: "pointer",
                marginTop: 8,
                transition: "opacity 0.15s"
              }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "#999"
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "white",
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: "11px 14px",
          color: "#171717",
          fontSize: 14,
          outline: "none",
          fontFamily: "inherit"
        }}
      />
    </div>
  );
}