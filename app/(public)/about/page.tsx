export default function AboutPage() {
  const values = [
    { title: "AI-First", desc: "We build AI into every product from day one, not as an afterthought." },
    { title: "Africa-Focused", desc: "Every decision is made with the African user, context, and infrastructure in mind." },
    { title: "Ship Fast", desc: "We believe in getting real products to real users and iterating from there." },
    { title: "Full Stack", desc: "From mobile apps to backend APIs, we own the entire product lifecycle." },
  ];

  const team = [
    { name: "Leadership", role: "Founders & Directors" },
    { name: "Engineering", role: "Frontend, Backend, Mobile & AI" },
    { name: "Design", role: "Product & Visual Design" },
    { name: "Operations", role: "Marketing & Growth" },
  ];

  return (
    <div style={{ background: "#0a0a0a", paddingTop: 120 }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 120px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555", marginBottom: 24 }}>About Logizon</p>
          <h1 style={{
            fontFamily: "Space Grotesk, sans-serif", fontWeight: 700,
            fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.06,
            letterSpacing: "-0.035em", color: "#fff", marginBottom: 32,
          }}>
            We are a technology<br />
            <span style={{ color: "rgba(255,255,255,0.25)" }}>company from Nigeria.</span>
          </h1>
          <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, maxWidth: 600 }}>
            Logizon Technologies is a multi-vertical software company building AI-first products across education, finance, faith, logistics, and developer infrastructure. We are headquartered in Ibadan, Oyo State, Nigeria.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: 64 }}>
            How we work
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
            {values.map((v, i) => (
              <div key={v.title}>
                <p style={{ fontSize: 11, color: "#333", fontWeight: 600, letterSpacing: "0.1em", marginBottom: 16 }}>0{i + 1}</p>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: 22, color: "#fff", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: 24 }}>Our story</p>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", color: "#fff", marginBottom: 24 }}>
              Started with a single product.<br />Now building six.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}>
              Logizon started with a simple observation: Africa's students were being underserved by outdated exam prep tools. We built PassCBT to fix that — and it worked. Students across Nigeria now use it to prepare for WAEC and JAMB.
            </p>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}>
              That success gave us the confidence to build more. Today, Logizon spans six divisions with products touching millions of lives — from how churches manage their members to how traders get paid on Instagram.
            </p>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}>
              We are still building. The mission hasn't changed: write software that works for Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions overview */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: 64 }}>
            Six divisions
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, overflow: "hidden" }}>
            {[
              { label: "Edutech", desc: "Exam prep, school software, AI tutors", href: "/divisions/edutech", accent: "#4ade80" },
              { label: "Fintech", desc: "Payments, e-commerce, crowdfunding", href: "/divisions/fintech", accent: "#60a5fa" },
              { label: "FaithTech", desc: "Church and ministry management tools", href: "/divisions/faithtech", accent: "#fb923c" },
              { label: "Logistics", desc: "On-demand delivery and tracking", href: "/divisions/logistics", accent: "#facc15" },
              { label: "For Developers", desc: "APIs, identity, and infrastructure", href: "/divisions/developers", accent: "#a78bfa" },
              { label: "For Companies", desc: "Custom software and digital products", href: "/divisions/companies", accent: "#f472b6" },
            ].map(div => (
              <a key={div.label} href={div.href} style={{
                padding: "40px 32px",
                background: "#111",
                borderRight: "1px solid rgba(255,255,255,0.05)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                textDecoration: "none",
                display: "block",
              }}
              >
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: div.accent, marginBottom: 12, opacity: 0.8 }}>{div.label}</p>
                <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6 }}>{div.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: 24 }}>Careers</p>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", color: "#fff", marginBottom: 24 }}>
            Join the team.
          </h2>
          <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
            We are always looking for exceptional engineers, designers, and operators who want to build for Africa.
          </p>
          <a href="/contact" style={{
            display: "inline-block", background: "#fff", color: "#0a0a0a",
            fontWeight: 600, fontSize: 14, padding: "14px 32px",
            borderRadius: 100, textDecoration: "none",
          }}>
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
