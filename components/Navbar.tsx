"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const divisions = [
  { label: "Edutech", href: "/divisions/edutech" },
  { label: "Fintech", href: "/divisions/fintech" },
  { label: "FaithTech", href: "/divisions/faithtech" },
  { label: "Logistics", href: "/divisions/logistics" },
  { label: "For Developers", href: "/divisions/developers" },
  { label: "For Companies", href: "/divisions/companies" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logizon-log.png" alt="Logizon" width={42} height={42} style={{ filter: "invert(1)" }} />
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>
              LOGIZON
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            <Link href="/about" style={navLinkStyle}>About</Link>

            {/* Divisions dropdown */}
            <div style={{ position: "relative" }} onMouseEnter={() => setDivOpen(true)} onMouseLeave={() => setDivOpen(false)}>
              <button style={{ ...navLinkStyle, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                Divisions <ChevronDown size={13} />
              </button>
              {divOpen && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, marginTop: 8,
                  background: "#161616", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12, padding: 8, minWidth: 180,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
                }}>
                  {divisions.map(d => (
                    <Link key={d.href} href={d.href} style={{
                      display: "block", padding: "9px 14px", color: "#aaa",
                      textDecoration: "none", fontSize: 13, fontWeight: 500,
                      borderRadius: 8, transition: "all 0.15s"
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = "#fff"; (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = "#aaa"; (e.target as HTMLElement).style.background = "transparent"; }}
                    >{d.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/products" style={navLinkStyle}>Products</Link>
            <Link href="/about#careers" style={navLinkStyle}>Careers</Link>
            <Link href="/contact" style={navLinkStyle}>Contact</Link>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "none" }} className="show-mobile">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#111", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px 24px" }}>
          {[{ label: "About", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }, ...divisions].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 0", color: "#aaa", textDecoration: "none", fontSize: 15, fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#aaa", textDecoration: "none", fontSize: 13, fontWeight: 500,
  padding: "8px 14px", borderRadius: 8, transition: "color 0.15s",
  letterSpacing: "0.01em",
};
