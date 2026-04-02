import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    qualities: [65],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
    ],
  },
};

const config = withPayload(nextConfig);

// withPayload sets experimental.turbo which is deprecated in favour of turbopack.
// Move it here to suppress the warning without updating dependencies.
if (config.experimental?.turbo) {
  (config as NextConfig & { turbopack?: object }).turbopack = {
    ...(config as NextConfig & { turbopack?: object }).turbopack,
    ...config.experimental.turbo,
  };
  delete config.experimental.turbo;
}

export default config;
