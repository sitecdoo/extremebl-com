import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   optimizePackageImports: ["lucide-react"],
  //   serverComponentsHmrCache: true,
  // },
  // serverExternalPackages: [
  //   "payload",
  //   "@payloadcms/db-sqlite",
  //   "@payloadcms/richtext-lexical",
  //   "@payloadcms/storage-uploadthing",
  //   "@payloadcms/payload-cloud",
  //   "graphql",
  //   "sharp",
  //   "@libsql/client",
  // ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "behold.pictures",
      },
    ],
  },
};

export default withPayload(nextConfig);
