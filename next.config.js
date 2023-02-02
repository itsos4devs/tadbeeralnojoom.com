/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = withSentryConfig(
  nextConfig,
  { silent: true },
  { hideSourcemaps: true }
);
