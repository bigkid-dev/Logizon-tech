import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0f1a",
        "bg-secondary": "#131629",
        "bg-card": "#181c2e",
        "bg-card-hover": "#1e2238",
        border: "rgba(255,255,255,0.07)",
        "border-hover": "rgba(255,255,255,0.13)",
        "text-primary": "#eef0f8",
        "text-secondary": "#8b90b0",
        "text-muted": "#4a5070",
        accent: "#7c6bfa",
        "accent-blue": "#4f8ef7",
        "accent-glow": "rgba(124,107,250,0.15)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;