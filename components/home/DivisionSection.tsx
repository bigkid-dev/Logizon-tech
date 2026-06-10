// components/DivisionSection.tsx
interface Props {
  label: string;
  headline: string;
  sub: string;
  products: string[];
  image: string;
  link: string;
  linkText: string;
  reverse?: boolean;
}

export default function DivisionSection({ label, headline, sub, products, image, link, linkText, reverse }: Props) {
  return (
    <section style={{
      padding: "80px 32px",
      borderTop: "1px solid #eee",
      background: "white"
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        gap: 60,
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        {/* Text */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "2px",
            color: "#999",
            marginBottom: 20,
            textTransform: "uppercase"
          }}>
            {label}
          </p>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: 20,
            color: "#171717"
          }}>
            {headline}
          </h2>
          <p style={{
            fontSize: 16,
            color: "#666",
            lineHeight: 1.5,
            marginBottom: 32,
            maxWidth: 460
          }}>
            {sub}
          </p>
          
          {/* Product tags (Tesla-style simple list) */}
          <div style={{ marginBottom: 32 }}>
            {products.map(p => (
              <div key={p} style={{
                padding: "12px 0",
                borderTop: "1px solid #eee",
                fontSize: 15,
                color: "#333",
                fontWeight: 500
              }}>
                {p}
              </div>
            ))}
          </div>
          
          <a href={link} style={{
            color: "#171717",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            borderBottom: "2px solid #000",
            paddingBottom: 4
          }}>
            {linkText}
          </a>
        </div>
        
        {/* Image */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <img
            src={image}
            alt={label}
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />
        </div>
      </div>
    </section>
  );
}