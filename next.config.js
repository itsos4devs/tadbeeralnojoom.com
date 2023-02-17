/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
