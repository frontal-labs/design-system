import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@frontal-labs/ui", "@frontal-labs/icons", "@frontal-labs/colors"],
	experimental: {
		optimizePackageImports: ["@frontal-labs/ui", "lucide-react"],
	},
};

export default nextConfig;
