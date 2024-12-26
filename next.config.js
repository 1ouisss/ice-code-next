module.exports = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/signup',
          permanent: true,
        },
      ];
    },
    env: {
      MONGO_URI: process.env.MONGO_URI,
    },
  };
  