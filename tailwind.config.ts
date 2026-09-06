import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      DEFAULT: "0",
      full: "9999px", // reserved only for true circles: dots, avatars, clock
    },
    extend: {
      colors: {
        ink: "#14110F",
        paper: "#F7F5F2",
        "paper-dim": "#EEEAE3",
        muted: "#6B645C",
        line: "#DAD4CA",
        accent: "#2D6CDF",
        rust: "#B43B1F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        prose: "42rem",
        content: "84rem",
      },
      transitionTimingFunction: {
        swiss: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
