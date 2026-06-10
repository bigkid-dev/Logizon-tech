"use client";
import { Bell, Search } from "lucide-react";

export default function DashboardNav() {
  return (
    <header style={{
      height: 60, borderBottom: "1px solid rgba(255,255,255,0.05)",
      display: "flex", alignItems: "center", padding: "0 40px",
      justifyContent: "space-between", background: "#080808", flexShrink: 0,
    }}>
      {/* Search */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "8px 14px", width: 260 }}>
        <Search size={13} color="#444" />
        <input
          type="text"
          placeholder="Search projects, tasks..."
          style={{ background: "none", border: "none", outline: "none", color: "#fff", fontSize: 13, width: "100%", fontFamily: "Inter, sans-serif" }}
        />
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#444", position: "relative" }}>
          <Bell size={16} />
          <span style={{ position: "absolute", top: -2, right: -2, width: 6, height: 6, background: "#4ade80", borderRadius: "50%" }} />
        </button>

        {/* Avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>S</span>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Staff</p>
            <p style={{ fontSize: 10, color: "#444" }}>Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
