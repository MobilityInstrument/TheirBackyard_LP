import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/TheirBackyard_LP",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
