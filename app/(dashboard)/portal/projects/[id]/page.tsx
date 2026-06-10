"use client";
import { useState } from "react";
import { CheckCircle2, Circle, Clock, Plus, PenSquare, Code2, Globe, Smartphone, MoreHorizontal } from "lucide-react";
const Figma = PenSquare;

const sections = [
  { id: "design", label: "Design", icon: Figma, color: "#a78bfa" },
  { id: "backend", label: "Backend", icon: Code2, color: "#60a5fa" },
  { id: "web", label: "Web", icon: Globe, color: "#4ade80" },
  { id: "mobile", label: "Mobile", icon: Smartphone, color: "#fb923c" },
  { id: "others", label: "Others", icon: MoreHorizontal, color: "#888" },
];

const mockTasks: Record<string, { id: string; title: string; assignee: string; status: string; priority: string; due: string; figmaUrl?: string }[]> = {
  design: [
    { id: "d1", title: "Create component library in Figma", assignee: "Ada K.", status: "done", priority: "high", due: "Jun 8" },
    { id: "d2", title: "Design onboarding flow screens", assignee: "Ada K.", status: "in_progress", priority: "high", due: "Jun 12" },
    { id: "d3", title: "Define typography and color tokens", assignee: "Unassigned", status: "pending", priority: "medium", due: "Jun 15" },
  ],
  backend: [
    { id: "b1", title: "Set up PostgreSQL schema for payments", assignee: "Tunde A.", status: "done", priority: "high", due: "Jun 5" },
    { id: "b2", title: "Build payment webhook handler", assignee: "Tunde A.", status: "in_progress", priority: "high", due: "Jun 12" },
    { id: "b3", title: "Write unit tests for auth module", assignee: "Unassigned", status: "pending", priority: "medium", due: "Jun 18" },
  ],
  web: [
    { id: "w1", title: "Scaffold Next.js dashboard", assignee: "Kemi O.", status: "done", priority: "high", due: "Jun 7" },
    { id: "w2", title: "Integrate payment API on frontend", assignee: "Kemi O.", status: "in_progress", priority: "high", due: "Jun 13" },
  ],
  mobile: [
    { id: "m1", title: "Set up React Native project", assignee: "Seun B.", status: "done", priority: "high", due: "Jun 6" },
    { id: "m2", title: "Build transaction history screen", assignee: "Seun B.", status: "pending", priority: "medium", due: "Jun 19" },
  ],
  others: [
    { id: "o1", title: "Write launch blog post", assignee: "Marketing", status: "pending", priority: "low", due: "Jun 25" },
    { id: "o2", title: "Set up social media accounts", assignee: "Marketing", status: "in_progress", priority: "medium", due: "Jun 14" },
  ],
};

const statusIcon = (status: string) => {
  if (status === "done") return <CheckCircle2 size={14} color="#4ade80" />;
  if (status === "in_progress") return <Clock size={14} color="#60a5fa" />;
  return <Circle size={14} color="#444" />;
};

const priorityBadge = (p: string) => {
  const colors: Record<string, string> = { high: "#fb923c", medium: "#facc15", low: "#555" };
  return (
    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors[p] || "#555" }}>{p}</span>
  );
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [activeSection, setActiveSection] = useState("design");
  const [addingTask, setAddingTask] = useState(false);

  const tasks = mockTasks[activeSection] || [];
  const total = Object.values(mockTasks).flat().length;
  const done = Object.values(mockTasks).flat().filter(t => t.status === "done").length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 11, color: "#444", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
              Fintech — Project #{params.id}
            </p>
            <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 28, color: "#fff", marginBottom: 8 }}>
              LogiPay v2.0
            </h1>
            <p style={{ fontSize: 13, color: "#555", maxWidth: 560, lineHeight: 1.6 }}>
              Cross-platform payment API overhaul with new webhooks, social commerce integrations, and improved developer experience.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 11, color: "#444", marginBottom: 4 }}>Manager: Tunde A.</p>
            <span style={{ fontSize: 10, background: "rgba(74,222,128,0.1)", color: "#4ade80", padding: "4px 10px", borderRadius: 100, fontWeight: 600 }}>Active</span>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
            <div style={{ height: "100%", width: `${Math.round((done / total) * 100)}%`, background: "#4ade80", borderRadius: 2, opacity: 0.7 }} />
          </div>
          <span style={{ fontSize: 12, color: "#666", flexShrink: 0 }}>{done}/{total} tasks done</span>
        </div>
      </div>

      {/* Section tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 28, padding: "4px", background: "rgba(255,255,255,0.03)", borderRadius: 12, width: "fit-content" }}>
        {sections.map(s => {
          const sectionTasks = mockTasks[s.id] || [];
          const sectionDone = sectionTasks.filter(t => t.status === "done").length;
          const active = activeSection === s.id;
          return (
            <button key={s.id} onClick={() => setActiveSection(s.id)} style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "8px 16px", borderRadius: 9, border: "none", cursor: "pointer",
              background: active ? "#1a1a1a" : "transparent",
              color: active ? s.color : "#444",
              fontSize: 12, fontWeight: active ? 600 : 400,
              transition: "all 0.15s",
            }}>
              <s.icon size={13} />
              {s.label}
              <span style={{ fontSize: 10, background: "rgba(255,255,255,0.06)", padding: "1px 6px", borderRadius: 100, color: "#555" }}>
                {sectionDone}/{sectionTasks.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Design-specific: Figma embed note */}
      {activeSection === "design" && (
        <div style={{ background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.1)", borderRadius: 12, padding: "14px 18px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
          <Figma size={14} color="#a78bfa" />
          <p style={{ fontSize: 12, color: "#888" }}>Add a Figma URL or HTML file to embed your design directly in this section.</p>
          <button style={{ marginLeft: "auto", fontSize: 11, color: "#a78bfa", background: "none", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 100, padding: "5px 12px", cursor: "pointer", fontWeight: 500 }}>
            Add Figma Link
          </button>
        </div>
      )}

      {/* Task list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
        {tasks.map(task => (
          <div key={task.id} style={{
            display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
            background: "#111", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10,
            transition: "border-color 0.15s",
          }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
              {statusIcon(task.status)}
            </button>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, color: task.status === "done" ? "#555" : "#ddd", fontWeight: 500, textDecoration: task.status === "done" ? "line-through" : "none" }}>
                {task.title}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
              {priorityBadge(task.priority)}
              <span style={{ fontSize: 11, color: "#444" }}>{task.assignee}</span>
              <span style={{ fontSize: 11, color: "#333" }}>Due {task.due}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add task */}
      {addingTask ? (
        <div style={{ display: "flex", gap: 10, padding: "12px 18px", background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10 }}>
          <input
            autoFocus
            placeholder="Task title..."
            style={{ flex: 1, background: "none", border: "none", outline: "none", color: "#fff", fontSize: 13, fontFamily: "Inter, sans-serif" }}
            onKeyDown={e => { if (e.key === "Escape") setAddingTask(false); }}
          />
          <button onClick={() => setAddingTask(false)} style={{ fontSize: 11, color: "#555", background: "none", border: "none", cursor: "pointer" }}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setAddingTask(true)} style={{
          display: "flex", alignItems: "center", gap: 8, padding: "10px 18px",
          background: "none", border: "1px dashed rgba(255,255,255,0.08)",
          borderRadius: 10, color: "#444", fontSize: 12, cursor: "pointer", width: "100%",
          transition: "all 0.15s",
        }}>
          <Plus size={13} /> Add task to {sections.find(s => s.id === activeSection)?.label}
        </button>
      )}
    </div>
  );
}
