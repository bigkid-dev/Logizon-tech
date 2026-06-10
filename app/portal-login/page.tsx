"use client";
import Image from "next/image";
import Link from "next/link";

export default function PortalLoginPage() {
  return (
    <div style={{
      minHeight: "100vh", background: "#080808",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
    }}>
      {/* Background glow */}
      <div style={{
        position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,222,128,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ width: "100%", maxWidth: 420, position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48 }}>
          <Image src="/logizon-loo.png" alt="Logizon" width={52} height={52} style={{ filter: "invert(1)", marginBottom: 16 }} />
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", letterSpacing: "-0.02em" }}>LOGIZON</h1>
          <p style={{ fontSize: 12, color: "#444", marginTop: 4, letterSpacing: "0.1em" }}>STAFF PORTAL</p>
        </div>

        {/* Card */}
        <div style={{
          background: "#111", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 20, padding: "40px 36px",
        }}>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff", marginBottom: 6 }}>
            Sign in
          </h2>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 32 }}>Access your workspace and tasks.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={labelStyle}>Work Email</label>
              <input type="email" placeholder="you@logizon.tech" style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={labelStyle}>Password</label>
                <a href="#" style={{ fontSize: 11, color: "#555", textDecoration: "none" }}>Forgot?</a>
              </div>
              <input type="password" placeholder="••••••••••" style={inputStyle} />
            </div>

            <Link href="/portal" style={{
              display: "block", textAlign: "center", marginTop: 8,
              background: "#fff", color: "#0a0a0a",
              fontWeight: 700, fontSize: 14, padding: "14px",
              borderRadius: 100, textDecoration: "none",
              transition: "opacity 0.15s",
            }}>
              Sign In
            </Link>
          </div>

          <p style={{ fontSize: 11, color: "#333", textAlign: "center", marginTop: 24, lineHeight: 1.6 }}>
            Access is restricted to Logizon staff.<br />Contact your administrator for access.
          </p>
        </div>

        <Link href="/" style={{ display: "block", textAlign: "center", marginTop: 24, fontSize: 12, color: "#333", textDecoration: "none" }}>
          ← Back to logizon.tech
        </Link>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" };
const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10, padding: "13px 16px", color: "#fff", fontSize: 14,
  outline: "none", fontFamily: "Inter, sans-serif",
};
