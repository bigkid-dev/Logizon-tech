"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,245,233,${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section style={{
      position: "relative", height: "100vh", minHeight: 700,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 800, height: 800, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
        {/* Logo mark */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <Image src="/logizon-log.png" alt="Logizon" width={80} height={80}
            style={{ filter: "invert(1)", opacity: 0.9 }} />
        </div>

        {/* Eyebrow */}
        <p style={{
          fontSize: 11, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase",
          color: "#4ade80", marginBottom: 24,
        }}>Logizon Technologies</p>

        {/* Headline */}
        <h1 style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(3rem, 7vw, 6rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#fff",
          marginBottom: 28,
        }}>
          Building Africa's<br />
          <span style={{ color: "rgba(255,255,255,0.3)" }}>Digital Future.</span>
        </h1>

        {/* Sub */}
        <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 48px" }}>
          Six divisions. One mission. We build technology that works for Africa —
          in education, finance, faith, logistics, and beyond.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/about" style={{
            background: "#fff", color: "#0a0a0a",
            fontWeight: 600, fontSize: 14, padding: "14px 32px",
            borderRadius: 100, textDecoration: "none", letterSpacing: "0.01em",
            transition: "opacity 0.15s",
          }}>
            Learn More
          </Link>
          <Link href="/products" style={{
            background: "transparent", color: "#fff",
            fontWeight: 500, fontSize: 14, padding: "13px 32px",
            borderRadius: 100, textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "border-color 0.15s",
          }}>
            Explore Products
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, #fff)" }} />
        <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff" }}>Scroll</p>
      </div>
    </section>
  );
}
