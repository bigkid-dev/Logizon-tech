import Link from "next/link";
import { FolderKanban, CheckSquare, Mail, Clock } from "lucide-react";

const stats = [
  { label: "Active Projects", value: "8", icon: FolderKanban, color: "#60a5fa" },
  { label: "My Open Tasks", value: "12", icon: CheckSquare, color: "#4ade80" },
  { label: "Unread Mails", value: "3", icon: Mail, color: "#fb923c" },
  { label: "Due This Week", value: "5", icon: Clock, color: "#facc15" },
];

const recentProjects = [
  { name: "LogiPay v2.0", category: "Fintech", status: "active", progress: 65 },
  { name: "Learnly MVP", category: "Edutech", status: "active", progress: 30 },
  { name: "Shoyah Rider App", category: "Logistics", status: "active", progress: 45 },
];

const myTasks = [
  { title: "Build payment webhook handler", project: "LogiPay", section: "backend", status: "in_progress", due: "Jun 12" },
  { title: "Design onboarding screens", project: "Learnly", section: "design", status: "pending", due: "Jun 14" },
  { title: "Fix iOS crash on login", project: "PassCBT", section: "mobile", status: "pending", due: "Jun 11" },
];

const statusColors: Record<string, string> = {
  in_progress: "#60a5fa",
  pending: "#555",
  done: "#4ade80",
};

export default function PortalOverview() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 26, color: "#fff", marginBottom: 6 }}>
          Good morning 👋
        </h1>
        <p style={{ color: "#555", fontSize: 13 }}>Here&apos;s what&apos;s happening across Logizon today.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <s.icon size={16} color={s.color} />
              <span style={{ fontSize: 10, color: "#333", fontWeight: 600, letterSpacing: "0.1em" }}>THIS WEEK</span>
            </div>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 32, color: "#fff", letterSpacing: "-0.03em", marginBottom: 4 }}>{s.value}</p>
            <p style={{ fontSize: 12, color: "#555" }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Projects */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "28px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: 15, color: "#fff" }}>Active Projects</h2>
            <Link href="/portal/projects" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>View all →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {recentProjects.map(p => (
              <Link key={p.name} href="/portal/projects" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{p.name}</p>
                    <p style={{ fontSize: 11, color: "#444" }}>{p.category}</p>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#aaa" }}>{p.progress}%</span>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                  <div style={{ height: "100%", width: `${p.progress}%`, background: "#4ade80", borderRadius: 2, opacity: 0.7 }} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* My Tasks */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "28px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: 15, color: "#fff" }}>My Tasks</h2>
            <Link href="/portal/tasks" style={{ fontSize: 12, color: "#555", textDecoration: "none" }}>View all →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {myTasks.map(t => (
              <div key={t.title} style={{ padding: "14px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, color: "#ddd", fontWeight: 500, marginBottom: 6, lineHeight: 1.4 }}>{t.title}</p>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ fontSize: 10, color: "#444", background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 100 }}>{t.project}</span>
                      <span style={{ fontSize: 10, color: "#444", background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 100 }}>{t.section}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <span style={{ fontSize: 10, color: statusColors[t.status], fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.status.replace("_", " ")}</span>
                    <p style={{ fontSize: 10, color: "#333", marginTop: 4 }}>Due {t.due}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
