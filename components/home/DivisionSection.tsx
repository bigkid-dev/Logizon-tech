import Link from "next/link";

interface Product {
  name: string;
  desc: string;
  url: string;
}

interface DivisionSectionProps {
  id: string;
  label: string;
  headline: string;
  sub: string;
  products: Product[];
  bg: string;
  accent: string;
  image: string;
  flip?: boolean;
}

export default function DivisionSection({ id, label, headline, sub, products, bg, accent, image, flip }: DivisionSectionProps) {
  return (
    <section id={id} style={{ background: bg, borderTop: "1px solid rgba(255,255,255,0.04)", padding: "120px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Label */}
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: accent, marginBottom: 80, opacity: 0.8 }}>
          {label}
        </p>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          direction: flip ? "rtl" : "ltr",
        }}>
          {/* Text side */}
          <div style={{ direction: "ltr" }}>
            <h2 style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: 24,
              whiteSpace: "pre-line",
            }}>
              {headline}
            </h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.75, maxWidth: 440, marginBottom: 48 }}>
              {sub}
            </p>

            {/* Products */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
              {products.map(p => (
                <div key={p.name} style={{
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{p.name}</p>
                    <p style={{ color: "#555", fontSize: 12, lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                  {p.url && p.url !== "#" && (
                    <Link href={p.url} target="_blank" style={{
                      color: accent, fontSize: 12, fontWeight: 500,
                      textDecoration: "none", whiteSpace: "nowrap", opacity: 0.8,
                      border: `1px solid ${accent}30`, borderRadius: 100, padding: "6px 14px",
                      transition: "opacity 0.15s",
                    }}>
                      Visit ↗
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Link href={`/divisions/${id}`} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "#fff", fontWeight: 500, fontSize: 13, textDecoration: "none",
              borderBottom: `1px solid rgba(255,255,255,0.2)`, paddingBottom: 4,
              transition: "border-color 0.15s",
            }}>
              Explore {label} →
            </Link>
          </div>

          {/* Image side */}
          <div style={{
            direction: "ltr",
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            aspectRatio: "4/3",
          }}>
            <img
              src={image}
              alt={label}
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6, filter: "grayscale(20%)" }}
            />
            {/* Accent overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(135deg, ${accent}15 0%, transparent 60%)`,
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
