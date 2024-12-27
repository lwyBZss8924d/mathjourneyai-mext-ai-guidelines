/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["mdx-loader"]
      }
    },
    optimizeCss: true
  },
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig 