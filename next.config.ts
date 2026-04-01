import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   optimizePackageImports: ["lucide-react"],
  //   serverComponentsHmrCache: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
    ],
  },
};

export default withPayload(nextConfig);
