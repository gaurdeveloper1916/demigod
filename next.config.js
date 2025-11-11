/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    unoptimized: true,
    domains: ["img.weddingbazaar.com", "images.unsplash.com", "media.istockphoto.com"],
  },
};

module.exports = nextConfig;
