/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure App Router features are enabled
    metadataRoutes: true, // Ensure metadata routes work
  },
  images: {
    domains: ["picsum.photos"],
  },
}

module.exports = nextConfig
