import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@frontal/ui", "@frontal/icons", "@frontal/colors"],
	experimental: {
		optimizePackageImports: ["@frontal/ui", "lucide-react"],
	},
};

export default nextConfig;
