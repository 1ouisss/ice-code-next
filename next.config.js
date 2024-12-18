// next.config.js
module.exports = {
    reactStrictMode: true, // Enforces strict mode for React to catch potential problems
    swcMinify: true, // Enable SWC compiler for minification (improves performance)
    images: {
      domains: ['your-domain.com'], // If you use external image domains, add them here
    },
    experimental: {
      appDir: true, // Enable experimental features for app directory structure (if using)
    },
    webpack(config) {
      // Customize the Webpack config if needed
      return config;
    },
  };
  