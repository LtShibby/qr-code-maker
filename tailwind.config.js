import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0A0A",         // deep black
          panel: "#111114",
          text: "#E6E6E6",
          sub: "#A6A6A6",
          blue: "#3AA3FF",       // electric blue primary
          blue2: "#3390E6",      // hover
          yellow: "#F9D342",     // optional secondary
          border: "#1E1E22",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
