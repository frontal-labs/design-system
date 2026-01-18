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
		"@frontal-labs/design-system",
		"@frontal-labs/ui",
		"@frontal-labs/icons",
		"@frontal-labs/colors",
	],
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	experimental: {
		optimizePackageImports: ["@frontal-labs/design-system", "lucide-react"],
	},
};

export default withFumadocs(withNextMDX(nextConfig));
