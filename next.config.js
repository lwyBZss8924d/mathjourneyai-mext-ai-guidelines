/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["mdx-loader"]
      }
    },
    optimizeCss: true,
    legacyBrowsers: false,
    browsersListForSwc: true
  }
}

module.exports = nextConfig 