module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/signup",
        permanent: true,
      },
    ];
  },
  env: {
    MONGO_URI: process.env.MONGO_URI, // Ensure your .env file contains this variable
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET, // Ensure your .env file contains this variable
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
