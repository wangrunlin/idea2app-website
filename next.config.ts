import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname:
          "nocodb.4c0a56669c4be111f209c9151999e2e7.r2.cloudflarestorage.com",
      },
    ],
  },
};

export default nextConfig;
