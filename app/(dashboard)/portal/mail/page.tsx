"use client";
import { useState } from "react";
import { Plus, Paperclip, Send, Inbox } from "lucide-react";

const mockMails = [
  { id: "1", from: "Tunde Adeyemi", subject: "LogiPay v2 — Backend kickoff", preview: "We are starting the backend phase this Monday. Please review the schema...", time: "Today, 9:14 AM", read: false },
  { id: "2", from: "Kemi Okafor", subject: "Learnly Design Review", preview: "Hi team, I've updated the Figma file with the new onboarding screens...", time: "Yesterday", read: true },
  { id: "3", from: "Seun Babatunde", subject: "Shoyah rider app — sprint 2 plan", preview: "Sharing the sprint 2 breakdown. We have 6 tasks for this week...", time: "Jun 7", read: true },
  { id: "4", from: "Ada Kalu", subject: "Component tokens final version", preview: "All design tokens are finalized. Attached is the exported file from Figma...", time: "Jun 6", read: true },
];

export default function MailPage() {
  const [composing, setComposing] = useState(false);
  const [selected, setSelected] = useState<string | null>("1");

  const selectedMail = mockMails.find(m => m.id === selected);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 4 }}>Mail</h1>
          <p style={{ fontSize: 13, color: "#555" }}>Internal team communications via Resend</p>
        </div>
        <button onClick={() => setComposing(true)} style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#fff", color: "#0a0a0a", fontWeight: 600, fontSize: 13,
          padding: "10px 20px", borderRadius: 100, border: "none", cursor: "pointer",
        }}>
          <Plus size={14} /> Compose
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 16, height: "calc(100vh - 220px)" }}>
        {/* Inbox list */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 8 }}>
            <Inbox size={14} color="#555" />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#555" }}>Inbox</span>
            <span style={{ marginLeft: "auto", fontSize: 10, background: "rgba(74,222,128,0.1)", color: "#4ade80", padding: "2px 8px", borderRadius: 100, fontWeight: 600 }}>1 new</span>
          </div>
          <div style={{ overflowY: "auto", flex: 1 }}>
            {mockMails.map(mail => (
              <div key={mail.id} onClick={() => setSelected(mail.id)} style={{
                padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer", background: selected === mail.id ? "rgba(255,255,255,0.04)" : "transparent",
                transition: "background 0.1s",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                  <p style={{ fontSize: 12, fontWeight: mail.read ? 400 : 700, color: mail.read ? "#666" : "#fff" }}>{mail.from}</p>
                  <p style={{ fontSize: 10, color: "#333" }}>{mail.time}</p>
                </div>
                <p style={{ fontSize: 12, color: "#888", marginBottom: 4, fontWeight: mail.read ? 400 : 600 }}>{mail.subject}</p>
                <p style={{ fontSize: 11, color: "#444", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{mail.preview}</p>
                {!mail.read && (
                  <div style={{ width: 6, height: 6, background: "#4ade80", borderRadius: "50%", marginTop: 8 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mail view */}
        {selectedMail ? (
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "32px 36px", overflowY: "auto" }}>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 12 }}>{selectedMail.subject}</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{selectedMail.from[0]}</span>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{selectedMail.from}</p>
                <p style={{ fontSize: 11, color: "#444" }}>to Team — {selectedMail.time}</p>
              </div>
            </div>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.8 }}>
              {selectedMail.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at turpis nec erat tincidunt luctus. Sed tincidunt, est nec efficitur fringilla, odio risus pretium nisl, vel volutpat mauris nisl vel lorem.
              <br /><br />
              Please review and let me know your thoughts. I&apos;ll be available on Slack for quick questions.
              <br /><br />
              Best,<br />{selectedMail.from}
            </p>
          </div>
        ) : (
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: "#333", fontSize: 13 }}>Select a mail to read</p>
          </div>
        )}
      </div>

      {/* Compose Modal */}
      {composing && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          onClick={() => setComposing(false)}>
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 36, width: "100%", maxWidth: 560 }}
            onClick={e => e.stopPropagation()}>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 24 }}>New Mail</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ComposeField label="To" placeholder="Select staff members..." />
              <ComposeField label="Subject" placeholder="Mail subject..." />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Message</label>
                <textarea rows={6} placeholder="Write your message here..." style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 100, padding: "10px 16px", color: "#666", fontSize: 12, cursor: "pointer",
                }}>
                  <Paperclip size={13} /> Attach File
                </button>
                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => setComposing(false)} style={{ padding: "10px 20px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "#555", fontSize: 13, cursor: "pointer" }}>Cancel</button>
                  <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 100, border: "none", background: "#fff", color: "#0a0a0a", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                    <Send size={13} /> Send
                  </button>
                </div>
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

function ComposeField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={labelStyle}>{label}</label>
      <input type="text" placeholder={placeholder} style={inputStyle} />
    </div>
  );
}
