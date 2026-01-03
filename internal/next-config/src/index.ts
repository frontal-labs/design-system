import type { NextConfig } from "next";
import { keys } from "./keys";

export const config: NextConfig = {
	reactStrictMode: true,
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
			"*.yaml": {
				loaders: ["yaml-loader"],
				as: "*.js",
			},
			"*.yml": {
				loaders: ["yaml-loader"],
				as: "*.js",
			},
			"*.graphql": {
				loaders: ["graphql-tag/loader"],
				as: "*.js",
			},
			"*.gql": {
				loaders: ["graphql-tag/loader"],
				as: "*.js",
			},
		},
		resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".cjs", ".json"],
	},
	skipTrailingSlashRedirect: keys().TRAILING_SLASH,
};
