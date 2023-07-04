/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"]
  },
  output: 'export',
  assetPrefix: "/car-showcase/",
};

module.exports = nextConfig;
