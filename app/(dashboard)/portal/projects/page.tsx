"use client";
import Link from "next/link";
import { useState } from "react";
import { Plus, FolderKanban } from "lucide-react";

const categoryColors: Record<string, string> = {
  edutech: "#4ade80", fintech: "#60a5fa", faithtech: "#fb923c",
  logistics: "#facc15", developers: "#a78bfa", companies: "#f472b6", freelance: "#888",
};

const mockProjects = [
  { id: "1", name: "LogiPay v2.0", category: "fintech", status: "active", manager: "Tunde A.", description: "Cross-platform payment API overhaul with new webhooks and social commerce integrations.", tasks: 24, completedTasks: 16 },
  { id: "2", name: "Learnly MVP", category: "edutech", status: "active", manager: "Kemi O.", description: "AI-first adaptive learning platform with personalized lesson delivery for Nigerian students.", tasks: 38, completedTasks: 11 },
  { id: "3", name: "Shoyah Rider App", category: "logistics", status: "active", manager: "Seun B.", description: "Mobile app for delivery riders — order management, navigation, and payout dashboard.", tasks: 19, completedTasks: 9 },
  { id: "4", name: "PassCBT Mobile", category: "edutech", status: "active", manager: "Tunde A.", description: "Native mobile app for PassCBT with offline mode and push notification support.", tasks: 31, completedTasks: 25 },
  { id: "5", name: "Sling-ID Beta", category: "developers", status: "active", manager: "Dev Lead", description: "Developer identity infrastructure with OAuth 2.0 and Africa-optimized auth flows.", tasks: 15, completedTasks: 4 },
];

export default function ProjectsPage() {
  const [showNew, setShowNew] = useState(false);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? mockProjects : mockProjects.filter(p => p.category === filter);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 4 }}>Projects</h1>
          <p style={{ fontSize: 13, color: "#555" }}>{mockProjects.length} active projects across all divisions</p>
        </div>
        <button onClick={() => setShowNew(true)} style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#fff", color: "#0a0a0a", fontWeight: 600, fontSize: 13,
          padding: "10px 20px", borderRadius: 100, border: "none", cursor: "pointer",
        }}>
          <Plus size={15} /> New Project
        </button>
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {["all", "edutech", "fintech", "faithtech", "logistics", "developers", "companies", "freelance"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "capitalize", padding: "6px 14px", borderRadius: 100,
            border: `1px solid ${filter === f ? (categoryColors[f] || "#fff") : "rgba(255,255,255,0.08)"}`,
            background: filter === f ? "rgba(255,255,255,0.04)" : "transparent",
            color: filter === f ? "#fff" : "#555",
            cursor: "pointer",
          }}>{f}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {filtered.map(p => {
          const accent = categoryColors[p.category] || "#888";
          const progress = Math.round((p.completedTasks / p.tasks) * 100);
          return (
            <Link key={p.id} href={`/portal/projects/${p.id}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#111", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14, padding: "24px 24px", cursor: "pointer",
                transition: "border-color 0.15s, background 0.15s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.background = "#141414";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.background = "#111";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, opacity: 0.8 }}>{p.category}</span>
                  <FolderKanban size={14} color="#333" />
                </div>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 20 }}>{p.description}</p>
                {/* Progress */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 11, color: "#444" }}>{p.completedTasks}/{p.tasks} tasks</span>
                    <span style={{ fontSize: 11, color: "#aaa", fontWeight: 600 }}>{progress}%</span>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                    <div style={{ height: "100%", width: `${progress}%`, background: accent, borderRadius: 2, opacity: 0.7 }} />
                  </div>
                </div>
                <p style={{ fontSize: 11, color: "#333" }}>Manager: {p.manager}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* New Project Modal */}
      {showNew && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
        }} onClick={() => setShowNew(false)}>
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 40, width: "100%", maxWidth: 560 }}
            onClick={e => e.stopPropagation()}
          >
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff", marginBottom: 8 }}>New Project</h2>
            <p style={{ fontSize: 13, color: "#555", marginBottom: 28 }}>AI will automatically generate tasks from your description.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <ModalField label="Project Name" placeholder="e.g. LogiPay Android App" />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Division</label>
                <select style={inputStyle}>
                  {["edutech", "fintech", "faithtech", "logistics", "developers", "companies", "freelance"].map(c => (
                    <option key={c} value={c} style={{ background: "#111" }}>{c}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Description & Aim</label>
                <textarea rows={3} placeholder="Describe the project, its goals, and what success looks like..." style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Marketing Plan</label>
                <textarea rows={2} placeholder="How will this be launched and promoted?" style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <ModalField label="Tech Stack (comma separated)" placeholder="Next.js, Prisma, PostgreSQL, React Native" />
              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                <button onClick={() => setShowNew(false)} style={{
                  flex: 1, padding: "12px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent", color: "#555", fontWeight: 500, fontSize: 14, cursor: "pointer",
                }}>Cancel</button>
                <button style={{
                  flex: 2, padding: "12px", borderRadius: 100, border: "none",
                  background: "#fff", color: "#0a0a0a", fontWeight: 600, fontSize: 14, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}>
                  ✦ Create with AI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" };
const inputStyle: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 13, outline: "none", fontFamily: "Inter, sans-serif" };

function ModalField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={labelStyle}>{label}</label>
      <input type="text" placeholder={placeholder} style={inputStyle} />
    </div>
  );
}
