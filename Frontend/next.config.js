/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        "fs": false,
        "net": false,
        "tls": false
      }
    }
    return config
  },
  
  images :{
    unoptimized: true,
    domains :["ipfs.infura.io","sal-dapp.infura-ipfs.io"]
  }
};

module.exports = nextConfig