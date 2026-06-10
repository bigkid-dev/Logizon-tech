import HeroSection from "@/components/home/HeroSection";
import DivisionSection from "@/components/home/DivisionSection";
import StatsSection from "@/components/home/StatsSection";
import ManifestoSection from "@/components/home/ManifestoSection";

const divisions = [
  {
    id: "edutech",
    label: "Edutech",
    headline: "Education,\nReimagined.",
    sub: "AI-powered learning tools, CBT platforms, and smart school software built for African students and institutions.",
    products: [
      { name: "PassCBT", desc: "Nigeria's leading exam prep platform for WAEC, JAMB and more.", url: "https://passcbt.com" },
      { name: "Schoolrisma", desc: "Custom school management software for CBT centers and institutions.", url: "#" },
      { name: "Learnly", desc: "An AI-first personalized learning experience — visual, adaptive, boundless.", url: "#" },
    ],
    bg: "linear-gradient(160deg, #0a0a0a 0%, #0d1a0d 100%)",
    accent: "#4ade80",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
  },
  {
    id: "fintech",
    label: "Fintech",
    headline: "Payments\nWithout Borders.",
    sub: "Seamless payment infrastructure, online commerce, and crowdfunding tools built for the way Africans transact.",
    products: [
      { name: "LogiPay", desc: "Payment solutions across all platforms and social media.", url: "https://logipay.tech" },
      { name: "BitSpace", desc: "Online store services that make selling easy for everyone.", url: "#" },
      { name: "SprayCash", desc: "Crowdfunding for celebrations — spray money digitally at events.", url: "#" },
    ],
    bg: "linear-gradient(160deg, #0a0a0a 0%, #0a0d1a 100%)",
    accent: "#60a5fa",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
  },
  {
    id: "faithtech",
    label: "FaithTech",
    headline: "Technology\nFor Ministry.",
    sub: "Digital solutions that empower churches and ministries to connect, engage, and grow their communities.",
    products: [
      { name: "Ministry Suite", desc: "Church management, giving platforms, and community tools.", url: "#" },
    ],
    bg: "linear-gradient(160deg, #0a0a0a 0%, #1a0d0a 100%)",
    accent: "#fb923c",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&q=80",
  },
  {
    id: "logistics",
    label: "Logistics",
    headline: "Move Anything,\nAnywhere.",
    sub: "Seamless logistics and delivery infrastructure designed for speed, reliability, and scale across Nigeria.",
    products: [
      { name: "Shoyah", desc: "On-demand logistics platform connecting senders to riders instantly.", url: "#" },
    ],
    bg: "linear-gradient(160deg, #0a0a0a 0%, #1a1a0a 100%)",
    accent: "#facc15",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80",
  },
  {
    id: "developers",
    label: "For Developers",
    headline: "Built By Devs,\nFor Devs.",
    sub: "Infrastructure, tools, and APIs that help developers build faster, ship confidently, and scale without limits.",
    products: [
      { name: "Sling-ID", desc: "Developer identity and authentication infrastructure.", url: "#" },
    ],
    bg: "linear-gradient(160deg, #0a0a0a 0%, #0f0a1a 100%)",
    accent: "#a78bfa",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  },
  {
    id: "companies",
    label: "For Companies",
    headline: "Your Vision,\nOur Expertise.",
    sub: "We partner with businesses to build custom digital products — from concept to launch, backed by our full-stack team.",
    products: [
      { name: "Chrafty", desc: "Nigeria's marketplace for verified artisans and skilled tradespeople.", url: "https://chrafty.com" },
    ],
    bg: "linear-gradient(160deg, #0a0a0a 0%, #0d0a0a 100%)",
    accent: "#f472b6",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "#0a0a0a" }}>
      <HeroSection />
      <ManifestoSection />
      {divisions.map((div, i) => (
        <DivisionSection key={div.id} {...div} flip={i % 2 !== 0} />
      ))}
      <StatsSection />
    </div>
  );
}
