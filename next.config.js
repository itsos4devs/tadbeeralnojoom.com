/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    stripe_public_key: process.env.STRIPE_PUPLIC_KEY,
  },
};

module.exports = nextConfig;
