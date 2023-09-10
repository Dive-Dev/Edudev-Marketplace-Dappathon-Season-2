/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  
  images: {
    maxWidth: 8192, // Set a maximum width
    maxHeight: 8192, // Set a maximum height
  },
};

module.exports = nextConfig
