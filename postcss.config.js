/** @type {import('postcss-load-config').Config} */
import tailwindConfig from './tailwind.config.js/index.js';

const config = {
  plugins: {
    tailwindcss: tailwindConfig,
    autoprefixer: {},
  },
};

export default config;
