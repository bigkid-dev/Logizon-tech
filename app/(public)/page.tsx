import HeroSection from "@/components/home/HeroSection";
import DivisionSection from "@/components/home/DivisionSection";
import StatsSection from "@/components/home/StatsSection";
import ManifestoSection from "@/components/home/ManifestoSection";


const divisions = [
  {
    id: "edutech",
    label: "Edutech",
    headline: "Education, Reimagined.",
    sub: "AI-powered learning tools, CBT platforms, and smart school software built for African students and institutions.",
    products: ["PassCBT", "Schoolrisma", "Learnly"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80",
    link: "https://passcbt.com",
    linkText: "Try PassCBT →"
  },
  {
    id: "fintech",
    label: "Fintech",
    headline: "Payments Without Borders.",
    sub: "Seamless payment infrastructure, online commerce, and crowdfunding tools built for the way Africans transact.",
    products: ["LogiPay", "BitSpace", "SprayCash"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=80",
    link: "https://logipay.tech",
    linkText: "Try LogiPay →"
  },
  {
    id: "faithtech",
    label: "FaithTech",
    headline: "Technology For Ministry.",
    sub: "Digital solutions that empower churches and ministries to connect, engage, and grow their communities.",
    products: ["Ministry Suite"],
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1400&q=80",
    link: "#",
    linkText: "Learn More →"
  },
  {
    id: "logistics",
    label: "Logistics",
    headline: "Move Anything, Anywhere.",
    sub: "Seamless logistics and delivery infrastructure designed for speed, reliability, and scale across Nigeria.",
    products: ["Shoyah"],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1400&q=80",
    link: "#",
    linkText: "Coming Soon →"
  },
  {
    id: "developers",
    label: "For Developers",
    headline: "Built By Devs, For Devs.",
    sub: "Infrastructure, tools, and APIs that help developers build faster, ship confidently, and scale without limits.",
    products: ["Sling-ID"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80",
    link: "#",
    linkText: "Explore APIs →"
  },
  {
    id: "companies",
    label: "For Companies",
    headline: "Your Vision, Our Expertise.",
    sub: "We partner with businesses to build custom digital products — from concept to launch, backed by our full-stack team.",
    products: ["Chrafty"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80",
    link: "https://chrafty.com",
    linkText: "Visit Chrafty →"
  }
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 32px",
        background: "white"
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(44px, 8vw, 80px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            color: "#171717",
            lineHeight: 1.1
          }}>
            Building Africa's<br />
            <span style={{ color: "#999" }}>Digital Future.</span>
          </h1>
          <p style={{
            fontSize: 18,
            color: "#666",
            maxWidth: 500,
            marginBottom: 48,
            lineHeight: 1.5
          }}>
            Six divisions. One mission. Technology that works for Africa — in education, finance, faith, logistics, and beyond.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="/about" style={{
              background: "#171717",
              color: "white",
              padding: "12px 32px",
              borderRadius: 30,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500
            }}>
              Learn More
            </a>
            <a href="/products" style={{
              border: "1px solid #ddd",
              color: "#171717",
              padding: "12px 32px",
              borderRadius: 30,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500
            }}>
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* Divisions */}
      {divisions.map((div, i) => (
        <DivisionSection key={div.id} {...div} reverse={i % 2 === 1} />
      ))}

      {/* Stats */}
      <StatsSection />
    </main>
  );
}