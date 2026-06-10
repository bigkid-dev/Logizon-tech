import DashboardNav from "@/components/dashboard/DashboardNav";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#080808", overflow: "hidden" }}>
      <DashboardSidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <DashboardNav />
        <main style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
