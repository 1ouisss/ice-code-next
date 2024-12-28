// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust this to your app folder structure
    "./pages/**/*.{js,ts,jsx,tsx}", // Include pages folder for content scanning
    "./components/**/*.{js,ts,jsx,tsx}", // Include components if you have reusable ones
  ],
  theme: {
    extend: {
      colors: {
        iceRed: "#FF0000", // Example custom color
        iceWhite: "#FFFFFF", // Another custom color
      },
    },
  },
  plugins: [],
};
