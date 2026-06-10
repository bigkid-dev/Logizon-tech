"use client";
import Link from "next/link";
import Image from "next/image";

const divisions = [
  { label: "Edutech", href: "/divisions/edutech" },
  { label: "Fintech", href: "/divisions/fintech" },
  { label: "FaithTech", href: "/divisions/faithtech" },
  { label: "Logistics", href: "/divisions/logistics" },
  { label: "For Developers", href: "/divisions/developers" },
  { label: "For Companies", href: "/divisions/companies" },
];

const products = [
  { label: "PassCBT", href: "https://passcbt.com", external: true },
  { label: "LogiPay", href: "https://logipay.tech", external: true },
  { label: "Chrafty", href: "https://chrafty.com", external: true },
  { label: "Learnly", href: "/products" },
  { label: "SprayCash", href: "/products" },
  { label: "Shoyah", href: "/products" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 80, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <Image src="/logizon-log.png" alt="Logizon" width={36} height={36} style={{ filter: "invert(1)" }} />
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>LOGIZON</span>
            </Link>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              Building Africa's next generation of technology companies across education, finance, faith, logistics, and beyond.
            </p>
            <p style={{ color: "#333", fontSize: 12, marginTop: 20 }}>Ibadan, Oyo State, Nigeria</p>
          </div>

          {/* Divisions */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Divisions</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {divisions.map(d => (
                <Link key={d.href} href={d.href} style={{ color: "#555", fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "#aaa"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "#555"}
                >{d.label}</Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Products</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {products.map(p => (
                <Link key={p.label} href={p.href} target={p.external ? "_blank" : undefined}
                  style={{ color: "#555", fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "#aaa"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "#555"}
                >{p.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[{ label: "About", href: "/about" }, { label: "Products", href: "/products" }, { label: "Careers", href: "/about#careers" }, { label: "Contact", href: "/contact" }].map(item => (
                <Link key={item.href} href={item.href} style={{ color: "#555", fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "#aaa"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "#555"}
                >{item.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#333", fontSize: 12 }}>© {new Date().getFullYear()} Logizon Technologies. All rights reserved.</p>
          <p style={{ color: "#222", fontSize: 11, letterSpacing: "0.05em" }}>BUILT IN NIGERIA</p>
        </div>
      </div>
    </footer>
  );
}
