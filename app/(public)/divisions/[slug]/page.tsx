import Link from "next/link";

const divisionData: Record<string, {
  label: string; headline: string; sub: string;
  products: { name: string; desc: string; url?: string; status: string }[];
  accent: string; body: string;
}> = {
  edutech: {
    label: "Edutech",
    accent: "#4ade80",
    headline: "Reimagining education\nfor African students.",
    sub: "From exam prep to AI-powered personalized learning, we are building the tools that students and schools in Africa deserve.",
    body: "Africa has millions of students who are intelligent, ambitious, and ready to learn — but the software available to them hasn't kept pace. We started with CBT exam preparation and expanded to full school management, custom CBT center software, and an AI-first adaptive learning platform.",
    products: [
      { name: "PassCBT", desc: "Practice past questions for WAEC, JAMB, NECO and more. Trusted by thousands of students across Nigeria.", url: "https://passcbt.com", status: "Live" },
      { name: "Schoolrisma", desc: "White-label CBT and school management software for institutions, CBT centers, and examination bodies.", status: "Live" },
      { name: "Learnly", desc: "AI-powered adaptive learning platform with visual, personalized lessons. Built for students and lifelong learners.", status: "In Development" },
    ],
  },
  fintech: {
    label: "Fintech",
    accent: "#60a5fa",
    headline: "Payments that work\nfor how Africa transacts.",
    sub: "We build payment infrastructure, commerce tools, and crowdfunding products for the African digital economy.",
    body: "Commerce in Africa happens on WhatsApp groups, Instagram DMs, and Facebook pages. Traditional payment tools weren't built for this. We are building the infrastructure that connects where business actually happens to how money moves.",
    products: [
      { name: "LogiPay", desc: "Cross-platform payment solutions that work across social media, apps, and websites.", url: "https://logipay.tech", status: "Live" },
      { name: "BitSpace", desc: "Zero-code online store builder — anyone can sell online in minutes.", status: "In Development" },
      { name: "SprayCash", desc: "Digital event gifting and crowdfunding — send money at celebrations, weddings, and parties from anywhere.", status: "In Development" },
    ],
  },
  faithtech: {
    label: "FaithTech",
    accent: "#fb923c",
    headline: "Technology built\nfor ministry.",
    sub: "We help churches, ministries, and faith communities grow, connect, and manage with purpose-built digital tools.",
    body: "Faith communities are some of the most active and connected groups in Africa. They deserve software built with their specific workflows in mind — not adapted from generic CRMs or event tools.",
    products: [
      { name: "Ministry Suite", desc: "Member management, digital giving, event scheduling, sermon archives, and community engagement — all in one platform.", status: "In Development" },
    ],
  },
  logistics: {
    label: "Logistics",
    accent: "#facc15",
    headline: "Move anything,\nanywhere in Nigeria.",
    sub: "Seamless, reliable logistics infrastructure for individuals and businesses — built around Nigeria's unique delivery landscape.",
    body: "Getting a package from point A to point B in Nigeria shouldn't be a stressful experience. Shoyah is our answer — a platform that connects senders to verified riders and drivers with real-time tracking.",
    products: [
      { name: "Shoyah", desc: "On-demand logistics and delivery platform. Request a pickup, track in real time, deliver on time.", status: "In Development" },
    ],
  },
  developers: {
    label: "For Developers",
    accent: "#a78bfa",
    headline: "Infrastructure\nfor what you're building.",
    sub: "We build developer tools, APIs, and infrastructure products that help engineers ship faster and more confidently.",
    body: "Great software needs great foundations. We build the plumbing — identity, auth, and infrastructure primitives — so developers across Africa don't have to reinvent the wheel.",
    products: [
      { name: "Sling-ID", desc: "Drop-in developer identity and authentication. Secure, fast, and built to work on African network conditions.", status: "In Development" },
    ],
  },
  companies: {
    label: "For Companies",
    accent: "#f472b6",
    headline: "Your vision.\nOur full-stack team.",
    sub: "We partner with businesses and organizations to build custom digital products from concept to launch.",
    body: "Some problems need a custom solution. We've partnered with companies across Nigeria to design, build, and ship products that match their exact needs — including Chrafty, now Nigeria's fastest-growing artisan marketplace.",
    products: [
      { name: "Chrafty", desc: "Nigeria's marketplace for verified artisans — plumbers, electricians, carpenters, and more. Hire with confidence.", url: "https://chrafty.com", status: "Live" },
    ],
  },
};

export default function DivisionPage({ params }: { params: { slug: string } }) {
  const data = divisionData[params.slug];
  if (!data) return <div style={{ padding: 120, textAlign: "center", color: "#555" }}>Division not found.</div>;

  return (
    <div style={{ background: "#0a0a0a", paddingTop: 140 }}>
      {/* Hero */}
      <section style={{ padding: "40px 24px 100px", borderBottom: "1px solid rgba(255,255,255,0.05)", maxWidth: 1280, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: data.accent, marginBottom: 24, opacity: 0.8 }}>{data.label}</p>
        <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5.5vw, 5rem)", lineHeight: 1.06, letterSpacing: "-0.035em", color: "#fff", marginBottom: 28, whiteSpace: "pre-line" }}>{data.headline}</h1>
        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.75, maxWidth: 540 }}>{data.sub}</p>
      </section>

      {/* Body */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: 640 }}>
          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.85 }}>{data.body}</p>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: "80px 24px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: 48 }}>Products</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {data.products.map(p => (
            <div key={p.name} style={{
              padding: "36px 40px", background: "#111",
              border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, marginBottom: 8,
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff" }}>{p.name}</h3>
                  <span style={{
                    fontSize: 10, fontWeight: 600, color: p.status === "Live" ? "#4ade80" : "#444",
                    background: p.status === "Live" ? "rgba(74,222,128,0.08)" : "rgba(255,255,255,0.03)",
                    padding: "4px 10px", borderRadius: 100, letterSpacing: "0.05em",
                  }}>{p.status}</span>
                </div>
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, maxWidth: 500 }}>{p.desc}</p>
              </div>
              {p.url && (
                <Link href={p.url} target="_blank" style={{
                  color: data.accent, fontSize: 13, fontWeight: 500, textDecoration: "none",
                  border: `1px solid ${data.accent}30`, borderRadius: 100, padding: "10px 20px",
                  whiteSpace: "nowrap", opacity: 0.8,
                }}>Visit ↗</Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: "edutech" }, { slug: "fintech" }, { slug: "faithtech" },
    { slug: "logistics" }, { slug: "developers" }, { slug: "companies" },
  ];
}
