"use client";
import { useState } from "react";
import { CheckCircle2, Circle, Clock, Filter } from "lucide-react";

const allTasks = [
  { id: "1", title: "Build payment webhook handler", project: "LogiPay v2.0", section: "backend", status: "in_progress", priority: "high", due: "Jun 12", assignee: "Tunde A." },
  { id: "2", title: "Design onboarding flow screens", project: "Learnly MVP", section: "design", status: "in_progress", priority: "high", due: "Jun 12", assignee: "Ada K." },
  { id: "3", title: "Fix iOS crash on login screen", project: "PassCBT Mobile", section: "mobile", status: "pending", priority: "high", due: "Jun 11", assignee: "Seun B." },
  { id: "4", title: "Integrate payment API on frontend", project: "LogiPay v2.0", section: "web", status: "in_progress", priority: "high", due: "Jun 13", assignee: "Kemi O." },
  { id: "5", title: "Set up PostgreSQL schema", project: "Shoyah Rider App", section: "backend", status: "done", priority: "high", due: "Jun 6", assignee: "Tunde A." },
  { id: "6", title: "Build transaction history screen", project: "LogiPay v2.0", section: "mobile", status: "pending", priority: "medium", due: "Jun 19", assignee: "Seun B." },
  { id: "7", title: "Write launch blog post", project: "Shoyah Rider App", section: "others", status: "pending", priority: "low", due: "Jun 25", assignee: "Marketing" },
  { id: "8", title: "Scaffold Next.js dashboard", project: "LogiPay v2.0", section: "web", status: "done", priority: "high", due: "Jun 7", assignee: "Kemi O." },
];

const statusColors: Record<string, string> = { in_progress: "#60a5fa", pending: "#555", done: "#4ade80" };
const priorityColors: Record<string, string> = { high: "#fb923c", medium: "#facc15", low: "#555" };
const sectionColors: Record<string, string> = { design: "#a78bfa", backend: "#60a5fa", web: "#4ade80", mobile: "#fb923c", others: "#888" };

export default function TasksPage() {
  const [filter, setFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = allTasks.filter(t => {
    const sectionOk = filter === "all" || t.section === filter;
    const statusOk = statusFilter === "all" || t.status === statusFilter;
    return sectionOk && statusOk;
  });

  const pending = allTasks.filter(t => t.status === "pending").length;
  const inProg = allTasks.filter(t => t.status === "in_progress").length;
  const done = allTasks.filter(t => t.status === "done").length;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 4 }}>Tasks</h1>
          <p style={{ fontSize: 13, color: "#555" }}>{allTasks.length} tasks across all projects</p>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#60a5fa", fontFamily: "Space Grotesk, sans-serif" }}>{inProg}</p>
            <p style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em" }}>IN PROGRESS</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#555", fontFamily: "Space Grotesk, sans-serif" }}>{pending}</p>
            <p style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em" }}>PENDING</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#4ade80", fontFamily: "Space Grotesk, sans-serif" }}>{done}</p>
            <p style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em" }}>DONE</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["all", "design", "backend", "web", "mobile", "others"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 100, cursor: "pointer",
              border: `1px solid ${filter === f ? (sectionColors[f] || "#fff") : "rgba(255,255,255,0.08)"}`,
              background: filter === f ? "rgba(255,255,255,0.04)" : "transparent",
              color: filter === f ? "#fff" : "#555", textTransform: "capitalize",
            }}>{f}</button>
          ))}
        </div>
        <div style={{ height: 20, width: 1, background: "rgba(255,255,255,0.06)" }} />
        <div style={{ display: "flex", gap: 6 }}>
          {["all", "in_progress", "pending", "done"].map(f => (
            <button key={f} onClick={() => setStatusFilter(f)} style={{
              fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 100, cursor: "pointer",
              border: `1px solid ${statusFilter === f ? "#fff" : "rgba(255,255,255,0.08)"}`,
              background: statusFilter === f ? "rgba(255,255,255,0.04)" : "transparent",
              color: statusFilter === f ? "#fff" : "#555", textTransform: "capitalize",
            }}>{f.replace("_", " ")}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "32px 1fr 160px 80px 80px 100px 120px", gap: 16, padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          {["", "Task", "Project", "Section", "Priority", "Assignee", "Due / Status"].map(h => (
            <p key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#333" }}>{h}</p>
          ))}
        </div>

        {/* Rows */}
        {filtered.map(task => (
          <div key={task.id} style={{
            display: "grid", gridTemplateColumns: "32px 1fr 160px 80px 80px 100px 120px",
            gap: 16, padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)",
            alignItems: "center", transition: "background 0.1s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
          >
            {/* Status toggle */}
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
              {task.status === "done" ? <CheckCircle2 size={15} color="#4ade80" /> :
               task.status === "in_progress" ? <Clock size={15} color="#60a5fa" /> :
               <Circle size={15} color="#333" />}
            </button>

            {/* Title */}
            <p style={{ fontSize: 13, color: task.status === "done" ? "#444" : "#ddd", textDecoration: task.status === "done" ? "line-through" : "none", fontWeight: 500 }}>
              {task.title}
            </p>

            {/* Project */}
            <p style={{ fontSize: 11, color: "#555" }}>{task.project}</p>

            {/* Section */}
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: sectionColors[task.section] || "#555" }}>
              {task.section}
            </span>

            {/* Priority */}
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: priorityColors[task.priority] || "#555" }}>
              {task.priority}
            </span>

            {/* Assignee */}
            <p style={{ fontSize: 11, color: "#555" }}>{task.assignee}</p>

            {/* Due */}
            <div>
              <p style={{ fontSize: 11, color: "#444" }}>Due {task.due}</p>
              <p style={{ fontSize: 10, fontWeight: 600, color: statusColors[task.status] || "#555", marginTop: 2 }}>{task.status.replace("_", " ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
