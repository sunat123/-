/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;