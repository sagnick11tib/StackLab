import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@stacklab/design-tokens"],
};

export default nextConfig;
