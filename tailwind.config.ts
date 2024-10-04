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
        brown: { DEFAULT: "#7E583D", foreground: "#FFF" },
        "light-brown": { DEFAULT: "#BE8B66", foreground: "#4A2F1C" },
      },
    },
  },
  plugins: [],
};
export default config;
