import nextPWA from"next-pwa"

const withPWA = nextPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  });

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
  };
  
//   module.exports = withPWA(nextConfig);
const config = withPWA(nextConfig)
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

export default config;
