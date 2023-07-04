/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
    loader: "imgix",
    path: ""
  },
  output: 'export'
};

module.exports = nextConfig;
