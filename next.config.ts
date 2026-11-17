
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.STATIC_EXPORT === "1" ? "export" : undefined, trailingSlash: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

  reactCompiler: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
