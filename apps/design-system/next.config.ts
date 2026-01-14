import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";
import createNextMDX from "@next/mdx";

const withFumadocs = createMDX();
const withNextMDX = createNextMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

const nextConfig: NextConfig = {
	transpilePackages: [
		"@frontal/design-system",
		"@frontal-ds/ui",
		"@frontal-ds/icons",
		"@frontal-ds/colors",
	],
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	experimental: {
		optimizePackageImports: ["@frontal/design-system", "lucide-react"],
	},
};

export default withFumadocs(withNextMDX(nextConfig));
