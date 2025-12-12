import { resolve } from "node:path";
import { configDefaults, defineConfig } from "vitest/config";

/**
 * Vitest configuration for @frontal/primitives package
 */
export default defineConfig({
	test: {
		environment: "jsdom",
		exclude: [...configDefaults.exclude],
		globals: true,
		coverage: {
			enabled: true,
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: [
				"node_modules/**",
				"tests/**",
				"**/*.d.ts",
				"**/*.config.*",
				"dist/**",
			],
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
