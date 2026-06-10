const products = [
  {
    name: "PassCBT",
    division: "Edutech",
    accent: "#4ade80",
    desc: "Nigeria's leading exam preparation platform for WAEC, JAMB, NECO and more. Used by thousands of students to practice past questions and prepare confidently.",
    url: "https://passcbt.com",
    status: "Live",
  },
  {
    name: "Schoolrisma",
    division: "Edutech",
    accent: "#4ade80",
    desc: "Custom school management software for CBT centers, WAEC and JAMB institutions. Built for schools that need a reliable, white-label exam solution.",
    url: "#",
    status: "Live",
  },
  {
    name: "Learnly",
    division: "Edutech",
    accent: "#4ade80",
    desc: "An AI-first personalized learning platform. Visual, adaptive lessons that adjust to every student — from coding to core school subjects.",
    url: "#",
    status: "In Development",
  },
  {
    name: "LogiPay",
    division: "Fintech",
    accent: "#60a5fa",
    desc: "Seamless payment infrastructure that connects merchants to customers across all platforms — including Instagram, WhatsApp, and other social commerce channels.",
    url: "https://logipay.tech",
    status: "Live",
  },
  {
    name: "BitSpace",
    division: "Fintech",
    accent: "#60a5fa",
    desc: "Online store services that make it easy for anyone to set up and run a digital storefront without technical expertise.",
    url: "#",
    status: "In Development",
  },
  {
    name: "SprayCash",
    division: "Fintech",
    accent: "#60a5fa",
    desc: "Digital crowdfunding for celebrations and parties. Spray money at events digitally — no more wet notes.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Ministry Suite",
    division: "FaithTech",
    accent: "#fb923c",
    desc: "A comprehensive platform for churches and ministries — member management, digital giving, event scheduling, and community engagement tools.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Shoyah",
    division: "Logistics",
    accent: "#facc15",
    desc: "On-demand logistics platform connecting senders to trusted riders and drivers. Seamless pickup, real-time tracking, fast delivery.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Sling-ID",
    division: "For Developers",
    accent: "#a78bfa",
    desc: "Developer identity and authentication infrastructure. Drop-in auth for any app, built for scale with Africa's network conditions in mind.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Chrafty",
    division: "For Companies",
    accent: "#f472b6",
    desc: "Nigeria's marketplace for verified artisans and skilled tradespeople. Connects homeowners and businesses to plumbers, electricians, carpenters and more.",
    url: "https://chrafty.com",
    status: "Live",
  },
];

export default function ProductsPage() {
  const live = products.filter(p => p.status === "Live");
  const inDev = products.filter(p => p.status === "In Development");

  return (
    <div style={{ background: "#0a0a0a", paddingTop: 140 }}>
      <section style={{ padding: "40px 24px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#555", marginBottom: 24 }}>All Products</p>
        <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.035em", color: "#fff", marginBottom: 60, lineHeight: 1.08 }}>
          What we&apos;ve built.
        </h1>

        {/* Live */}
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4ade80", marginBottom: 32, opacity: 0.8 }}>Live</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, marginBottom: 80 }}>
          {live.map(p => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>

        {/* In Development */}
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: 32 }}>In Development</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
          {inDev.map(p => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProductCard({ name, division, accent, desc, url, status }: typeof products[0]) {
  return (
    <div style={{
      padding: "36px 32px",
      background: "#111",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: 12,
      margin: 4,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, opacity: 0.8 }}>{division}</p>
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
          color: status === "Live" ? "#4ade80" : "#444",
          background: status === "Live" ? "rgba(74,222,128,0.08)" : "rgba(255,255,255,0.03)",
          padding: "4px 10px", borderRadius: 100,
        }}>{status}</span>
      </div>
      <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff", marginBottom: 12 }}>{name}</h3>
      <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7, marginBottom: 24 }}>{desc}</p>
      {url && url !== "#" && (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{
          fontSize: 12, fontWeight: 500, color: accent, textDecoration: "none", opacity: 0.7,
        }}>Visit {name} ↗</a>
      )}
    </div>
  );
}
