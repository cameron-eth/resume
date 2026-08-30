import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        raised: "var(--raised)",
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
        },
        rule: {
          DEFAULT: "var(--rule)",
          strong: "var(--rule-2)",
        },
        // Semantic polarity for data — contrast-checked, unlike the spectrum.
        pos: "var(--pos)",
        neg: "var(--neg)",
        // Decorative only — never used under type.
        spectrum: {
          red: "var(--s-red)",
          orange: "var(--s-orange)",
          yellow: "var(--s-yellow)",
          green: "var(--s-green)",
          teal: "var(--s-teal)",
          blue: "var(--s-blue)",
          violet: "var(--s-violet)",
          magenta: "var(--s-magenta)",
        },
      },
      fontFamily: {
        sans: ["CursorGothic", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      spacing: {
        cell: "var(--cell)",
      },
      borderRadius: {
        DEFAULT: "0px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
