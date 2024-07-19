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
          dark: "#0C0E0D",
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
          dark: "#171717",
          light: "#FFFFFF",
        },
        cardForeground: {
          dark: "#1D2422",
          light: "#E7E7E7",
        },
        chat: {
          dark: "#3D1770",
          light: "#FFFFFF",
        },
        logoBackground: "#151320",
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
