// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scans all JS/TS files in app
    "./pages/**/*.{js,ts,jsx,tsx}", // Scans pages for Tailwind classes
    "./components/**/*.{js,ts,jsx,tsx}", // Scans components for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        iceRed: "#FF0000", // Custom red color
        iceWhite: "#FFFFFF", // Custom white color
      },
    },
  },
  plugins: [],
};

export default config;
