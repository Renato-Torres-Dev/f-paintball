/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig
