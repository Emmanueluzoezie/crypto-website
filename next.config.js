/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack5: true,
  images: {
    domains: ['assets.coingecko.com'],
  },
};