/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "576",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      custom: "1160px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        "border-animate": "border-animate 0.3s ease-in-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        "border-animate": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        pink: "#FEF4E6",
        caution: "#F8BD00",
        primary: {
          DEFAULT: "#007CD7",
          5: "#0000FF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#050306",
          foreground: "hsl(var(--secondary-foreground))",
          5: "#7B8794",
          10: "#D0D5DD",
          15: "#D9D9D9",
          20: "#101010",
          25: "#232323",
          30: "#101828",
          35: "#878787",
        },
        destructive: {
          DEFAULT: "#990505",
          foreground: "hsl(var(--destructive-foreground))",
        },

        muted: {
          DEFAULT: "#323F4B",
          gray: "#7B8794",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
