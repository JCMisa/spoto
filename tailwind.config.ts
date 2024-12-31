/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        map: "url('/map-bg.png')",
      },
      colors: {
        background: "#111111",
        foreground: "#ffffff",
        card: {
          DEFAULT: "#141414",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#141414",
          foreground: "#ffffff",
        },
        dark: {
          DEFAULT: "#111111",
          100: "#E0E0E0",
          200: "#B3B3B3",
          300: "#808080",
          400: "#4D4D4D",
          500: "#333333",
          600: "#2A2A2A",
          700: "#1F1F1F",
          800: "#141414",
          900: "#0A0A0A",
          foreground: "hsl(var(--secondary-foreground))",
        },
        primary: {
          DEFAULT: "#25CAAC",
          100: "#E0F6F3",
          200: "#B3EDE6",
          300: "#80E3D6",
          400: "#4ED9C8",
          500: "#25CAAC",
          600: "#1DA28B",
          700: "#15786A",
          800: "#0D4F49",
          900: "#052728",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "#111111",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
