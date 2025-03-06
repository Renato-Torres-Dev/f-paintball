/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  }
}

module.exports = nextConfig
