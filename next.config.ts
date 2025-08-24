import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'tribratanews.polri.go.id'
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
