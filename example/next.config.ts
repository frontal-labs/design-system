import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@frontal-ds/ui", "@frontal-ds/icons", "@frontal-ds/colors"],
	experimental: {
		optimizePackageImports: ["@frontal-ds/ui", "lucide-react"],
	},
};

export default nextConfig;
