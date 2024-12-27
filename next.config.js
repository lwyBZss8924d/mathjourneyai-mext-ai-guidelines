/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  experimental: {
    optimizeCss: true,
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  }
}

module.exports = nextConfig 