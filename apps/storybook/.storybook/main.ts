import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs";

const require = createRequire(import.meta.url);
const currentDir = dirname(fileURLToPath(import.meta.url));

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string) =>
	dirname(require.resolve(join(value, "package.json")));

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-themes"),
	],
	framework: {
		name: getAbsolutePath("@storybook/nextjs"),
		options: {},
	},
	staticDirs: ["../public"],
	webpackFinal: async (config) => {
		const packagesDir = resolve(currentDir, "../../../packages");

		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...config.resolve.alias,
			// Main package entries
			"@frontal/design-system": resolve(packagesDir, "design-system/src"),
			"@frontal/ui": resolve(packagesDir, "ui/src"),
			"@frontal/icons": resolve(packagesDir, "icons/src"),
			"@frontal/blocks": resolve(packagesDir, "blocks/src"),
			"@frontal/charts": resolve(packagesDir, "charts/src"),
			"@frontal/colors": resolve(packagesDir, "colors/src"),
			"@frontal/components": resolve(packagesDir, "components/src"),
			"@frontal/typeface": resolve(packagesDir, "typeface/src"),
			// CSS subpath exports
			"@frontal/colors/styles.css": resolve(
				packagesDir,
				"colors/src/styles/styles.css",
			),
			"@frontal/colors/theme.css": resolve(
				packagesDir,
				"colors/src/styles/theme.css",
			),
			"@frontal/blocks/styles.css": resolve(
				packagesDir,
				"blocks/src/styles/styles.css",
			),
			"@frontal/design-system/styles/globals.css": resolve(
				packagesDir,
				"design-system/src/styles/globals.css",
			),
		};

		return config;
	},
};

export default config;
