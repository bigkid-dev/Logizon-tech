// app/products/page.tsx
const products = [
  {
    name: "PassCBT",
    division: "Edutech",
    desc: "Nigeria's leading exam preparation platform for WAEC, JAMB, NECO and more. Used by thousands of students to practice past questions and prepare confidently.",
    url: "https://passcbt.com",
    status: "Live",
  },
  {
    name: "Schoolrisma",
    division: "Edutech",
    desc: "Custom school management software for CBT centers, WAEC and JAMB institutions. Built for schools that need a reliable, white-label exam solution.",
    url: "#",
    status: "Live",
  },
  {
    name: "Learnly",
    division: "Edutech",
    desc: "An AI-first personalized learning platform. Visual, adaptive lessons that adjust to every student — from coding to core school subjects.",
    url: "#",
    status: "In Development",
  },
  {
    name: "LogiPay",
    division: "Fintech",
    desc: "Seamless payment infrastructure that connects merchants to customers across all platforms — including Instagram, WhatsApp, and other social commerce channels.",
    url: "https://logipay.tech",
    status: "Live",
  },
  {
    name: "BitSpace",
    division: "Fintech",
    desc: "Online store services that make it easy for anyone to set up and run a digital storefront without technical expertise.",
    url: "#",
    status: "In Development",
  },
  {
    name: "SprayCash",
    division: "Fintech",
    desc: "Digital crowdfunding for celebrations and parties. Spray money at events digitally — no more wet notes.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Ministry Suite",
    division: "FaithTech",
    desc: "A comprehensive platform for churches and ministries — member management, digital giving, event scheduling, and community engagement tools.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Shoyah",
    division: "Logistics",
    desc: "On-demand logistics platform connecting senders to trusted riders and drivers. Seamless pickup, real-time tracking, fast delivery.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Sling-ID",
    division: "For Developers",
    desc: "Developer identity and authentication infrastructure. Drop-in auth for any app, built for scale with Africa's network conditions in mind.",
    url: "#",
    status: "In Development",
  },
  {
    name: "Chrafty",
    division: "For Companies",
    desc: "Nigeria's marketplace for verified artisans and skilled tradespeople. Connects homeowners and businesses to plumbers, electricians, carpenters and more.",
    url: "https://chrafty.com",
    status: "Live",
  },
];

export default function ProductsPage() {
  const live = products.filter(p => p.status === "Live");
  const inDev = products.filter(p => p.status === "In Development");

  return (
    <main style={{ background: "white", paddingTop: 100 }}>
      <section style={{ padding: "40px 32px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <h1 style={{
          fontSize: "clamp(44px, 8vw, 64px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#171717",
          marginBottom: 60,
          lineHeight: 1.1
        }}>
          What we've built.
        </h1>

        {/* Live */}
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#00a651",
          marginBottom: 24
        }}>
          Live
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: 80
        }}>
          {live.map(p => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>

        {/* In Development */}
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#999",
          marginBottom: 24
        }}>
          In Development
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24
        }}>
          {inDev.map(p => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ProductCard({ name, division, desc, url, status }: {
  name: string;
  division: string;
  desc: string;
  url: string;
  status: string;
}) {
  return (
    <div style={{
      padding: "32px",
      background: "white",
      border: "1px solid #eee",
      borderRadius: 12,
      transition: "border-color 0.15s"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
      }}>
        <p style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#999"
        }}>
          {division}
        </p>
        <span style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.5px",
          color: status === "Live" ? "#00a651" : "#999",
          background: status === "Live" ? "#e6f7ed" : "#f5f5f5",
          padding: "4px 10px",
          borderRadius: 100
        }}>
          {status}
        </span>
      </div>
      <h3 style={{
        fontSize: 20,
        fontWeight: 600,
        color: "#171717",
        marginBottom: 12
      }}>
        {name}
      </h3>
      <p style={{
        color: "#666",
        fontSize: 13,
        lineHeight: 1.5,
        marginBottom: 24
      }}>
        {desc}
      </p>
      {url && url !== "#" && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "#171717",
            textDecoration: "none",
            borderBottom: "1px solid #ddd",
            paddingBottom: 2
          }}
        >
          Visit {name} →
        </a>
      )}
    </div>
  );
}