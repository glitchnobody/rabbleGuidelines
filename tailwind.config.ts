import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#FFFFFF",
          light: "#151320",
        },
        secondary: {
          dark: "#151320",
          light: "#F0F0F0",
        },
        muted: {
          dark: "#8C8A93",
          light: "#8C8A93",
        },
        accentTeal: {
          dark: "#08F7AF",
          light: "#21C896",
        },
        accentPink: {
          dark: "#FF8AEB",
          light: "#DC15BA",
        },
        accentYellow: {
          dark: "#FFEF5C",
          light: "#FFEF5C",
        },
        accentPurple: {
          dark: "#8B33FF",
          light: "#8B33FF",
        },
        card: {
          dark: "#1A1828",
          light: "#FFFFFF",
        },
        cardForeground: {
          dark: "#211F2E",
          light: "#E7E7E7",
        },
        chat: {
          dark: "#3D1770",
          light: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
