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
        bg: "#0C1220",
        surface: "#111827",
        "surface-2": "#172035",
        "surface-3": "#1C2840",
        primary: "#2DD4BF",
        "primary-dark": "#14B8A6",
        indigo: "#6366F1",
        "indigo-light": "#818CF8",
        slate: {
          text: "#F1F5F9",
          muted: "#94A3B8",
          subtle: "#475569",
        },
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Iowan Old Style", "Palatino", "Book Antiqua", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2DD4BF 0%, #6366F1 100%)",
        "gradient-primary-soft": "linear-gradient(135deg, rgba(45,212,191,0.15) 0%, rgba(99,102,241,0.15) 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        "gradient-hero": "radial-gradient(ellipse 90% 70% at 50% -20%, rgba(99,102,241,0.18) 0%, transparent 65%)",
        "gradient-teal-glow": "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45,212,191,0.12) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-teal": "0 0 40px rgba(45,212,191,0.12), 0 0 80px rgba(45,212,191,0.06)",
        "glow-indigo": "0 0 40px rgba(99,102,241,0.15), 0 0 80px rgba(99,102,241,0.08)",
        "card": "0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.4), 0 16px 40px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
