// next.config.js
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['your-domain.com'], // Update with your allowed image domains
    },
    experimental: {
      appDir: true,
    },
    webpack(config) {
      return config; // Customize Webpack if needed
    },
  };
  