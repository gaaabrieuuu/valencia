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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          100: "#D9A778",
          200: "#C69970",
          300: "#BE8B66",
          400: "#7E583D",
          500: "#5B4536",
          600: "#523316",
          700: "#4A2F1C",
        },
        "diddy-red": { DEFAULT: "#B14A43" },
        "wooden-grey": { DEFAULT: "#2B2828" },
      },
    },
  },
  plugins: [],
};
export default config;
