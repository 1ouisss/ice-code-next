// postcss.config.js
module.exports = {
  plugins: [
    "tailwindcss", // Ensure tailwindcss is loaded first
    "autoprefixer", // Add vendor prefixes
    // Optionally, you can add other plugins here like cssnano for production minification.
  ],
};
