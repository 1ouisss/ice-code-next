/** @type {import('postcss-load-config').Config} */
import tailwindConfig from './tailwind.config.mjs';

const config = {
  plugins: {
    tailwindcss: tailwindConfig,
    autoprefixer: {},
  },
};

export default config;
