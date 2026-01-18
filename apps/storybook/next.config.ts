import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@frontal-labs/design-system",
    "@frontal-labs/ui",
    "@frontal-labs/icons",
    "@frontal-labs/colors",
  ],
  experimental: {
    optimizePackageImports: ["@frontal-labs/design-system", "lucide-react"],
  },
};

export default nextConfig;
