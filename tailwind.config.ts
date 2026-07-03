import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — see README for the palette rationale.
        basalt: "#0E0D0C",       // primary background — warm near-black, not pure black
        "basalt-2": "#17140F",   // raised surface (cards, alternating sections)
        "basalt-3": "#1D1A14",   // hairline-bordered surface, slightly lighter still
        bone: "#ECE6D9",         // primary text — warm ivory, not pure white
        stone: "#8C8478",        // secondary / muted text
        "stone-dim": "#5B564C",  // tertiary text, disabled states
        patina: "#7E9280",       // primary accent — oxidized bronze-green
        "patina-bright": "#9FB49F",
        oxide: "#8A4632",        // secondary accent — used sparingly, scarcity/urgency only
        hairline: "rgba(236,230,217,0.12)",
        "hairline-bright": "rgba(236,230,217,0.24)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "40rem",
      },
      keyframes: {
        "door-part": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(var(--door-shift, -6px))" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
