/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure App Router features are enabled
  },
  images: {
    domains: ["picsum.photos"],
  },
}

module.exports = nextConfig
