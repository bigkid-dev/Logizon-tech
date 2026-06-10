// app/about/page.tsx
export default function AboutPage() {
  const values = [
    {
      title: "AI-First",
      desc: "We build AI into every product from day one, not as an afterthought.",
    },
    {
      title: "Africa-Focused",
      desc: "Every decision is made with the African user, context, and infrastructure in mind.",
    },
    {
      title: "Ship Fast",
      desc: "We believe in getting real products to real users and iterating from there.",
    },
    {
      title: "Full Stack",
      desc: "From mobile apps to backend APIs, we own the entire product lifecycle.",
    },
  ];

  return (
    <main style={{ background: "white" }}>
      {/* Hero */}
      <section style={{ padding: "120px 32px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(44px, 8vw, 72px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#171717",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            We are a technology
            <br />
            <span style={{ color: "#999" }}>company from Nigeria.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#666",
              lineHeight: 1.5,
              maxWidth: 600,
            }}
          >
            Logizon Technologies is a multi-vertical software company building
            AI-first products across education, finance, faith, logistics, and
            developer infrastructure. We are headquartered in Ibadan, Oyo State,
            Nigeria.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 48,
            }}
          >
            {values.map((v, i) => (
              <div key={v.title}>
                <p
                  style={{
                    fontSize: 13,
                    color: "#ccc",
                    fontWeight: 500,
                    marginBottom: 16,
                  }}
                >
                  0{i + 1}
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#171717",
                    marginBottom: 12,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.5 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid #eee" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 44px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#171717",
                marginBottom: 24,
              }}
            >
              Started with a single product.
              <br />
              Now building six.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.6 }}>
              Logizon started with a simple observation: Africa's students were
              being underserved by outdated exam prep tools. We built PassCBT to
              fix that — and it worked. Students across Nigeria now use it to
              prepare for WAEC and JAMB.
            </p>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.6 }}>
              That success gave us the confidence to build more. Today, Logizon
              spans six divisions with products touching millions of lives —
              from how churches manage their members to how traders get paid on
              Instagram.
            </p>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.6 }}>
              We are still building. The mission hasn't changed: write software
              that works for Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions overview */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#eee",
              border: "1px solid #eee",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {[
              {
                label: "Edutech",
                desc: "Exam prep, school software, AI tutors",
                href: "/divisions/edutech",
              },
              {
                label: "Fintech",
                desc: "Payments, e-commerce, crowdfunding",
                href: "/divisions/fintech",
              },
              {
                label: "FaithTech",
                desc: "Church and ministry management tools",
                href: "/divisions/faithtech",
              },
              {
                label: "Logistics",
                desc: "On-demand delivery and tracking",
                href: "/divisions/logistics",
              },
              {
                label: "For Developers",
                desc: "APIs, identity, and infrastructure",
                href: "/divisions/developers",
              },
              {
                label: "For Companies",
                desc: "Custom software and digital products",
                href: "/divisions/companies",
              },
            ].map((div) => (
              <a
                key={div.label}
                href={div.href}
                style={{
                  padding: "32px 28px",
                  background: "white",
                  textDecoration: "none",
                  borderRight: "1px solid #eee",
                  borderBottom: "1px solid #eee",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "1px",
                    color: "#999",
                    marginBottom: 12,
                  }}
                >
                  {div.label}
                </p>
                <p style={{ color: "#333", fontSize: 13, lineHeight: 1.5 }}>
                  {div.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section style={{ padding: "80px 32px", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#171717",
              marginBottom: 20,
            }}
          >
            Join the team.
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: 16,
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            We are always looking for exceptional engineers, designers, and
            operators who want to build for Africa.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#171717",
              color: "white",
              padding: "12px 32px",
              borderRadius: 30,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
