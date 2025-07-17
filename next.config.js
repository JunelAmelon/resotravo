/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ou ne mets rien
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;