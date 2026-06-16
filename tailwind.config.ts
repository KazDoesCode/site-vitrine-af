import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a5f",
          dark: "#152c4a",
          light: "#2d5490",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#c0392b",
          dark: "#a93226",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f4f6fa",
          foreground: "#1e3a5f",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
} satisfies Config;
