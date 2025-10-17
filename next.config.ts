import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com", // used for hqdefault.jpg
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com", // YouTube sometimes serves from this host
      },
    ],
  },
};

export default nextConfig;
