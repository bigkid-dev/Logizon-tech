"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard, FolderKanban, CheckSquare, Mail, Users, Settings, LogOut,
} from "lucide-react";

const nav = [
  { label: "Overview", href: "/portal", icon: LayoutDashboard },
  { label: "Projects", href: "/portal/projects", icon: FolderKanban },
  { label: "My Tasks", href: "/portal/tasks", icon: CheckSquare },
  { label: "Mail", href: "/portal/mail", icon: Mail },
  { label: "Team", href: "/portal/team", icon: Users },
  { label: "Settings", href: "/portal/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const path = usePathname();

  return (
    <aside style={{
      width: 220, background: "#0d0d0d", borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column", flexShrink: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/logizon-log.png" alt="Logizon" width={28} height={28} style={{ filter: "invert(1)" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", letterSpacing: "-0.01em" }}>LOGIZON</span>
        </Link>
        <p style={{ fontSize: 10, color: "#333", marginTop: 8, letterSpacing: "0.08em" }}>Staff Portal</p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "16px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
        {nav.map(({ label, href, icon: Icon }) => {
          const active = path === href || (href !== "/portal" && path.startsWith(href));
          return (
            <Link key={href} href={href} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 8, textDecoration: "none",
              background: active ? "rgba(255,255,255,0.06)" : "transparent",
              color: active ? "#fff" : "#555",
              fontSize: 13, fontWeight: active ? 600 : 400,
              transition: "all 0.15s",
            }}>
              <Icon size={15} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div style={{ padding: "12px 10px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <button style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "9px 12px", borderRadius: 8,
          background: "none", border: "none", cursor: "pointer",
          color: "#444", fontSize: 13, width: "100%",
          transition: "color 0.15s",
        }}>
          <LogOut size={15} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
