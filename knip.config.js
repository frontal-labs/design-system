/** @type {import('knip').Config} */
export default {
	$schema: "https://unpkg.com/knip@5/schema.json",
	workspaces: {
		".": {
			entry: [
				"apps/**/*.{ts,tsx}",
				"packages/**/src/index.ts",
				"tools/**/src/**/*.ts",
				"scripts/**/*.ts",
			],
			project: [
				"**/*.{ts,tsx}",
				"!**/*.test.{ts,tsx}",
				"!**/*.spec.{ts,tsx}",
				"!**/node_modules/**",
				"!**/dist/**",
				"!**/.turbo/**",
			],
			ignore: [
				"**/coverage/**",
				"**/.next/**",
				"**/storybook-static/**",
				"**/generated/**",
			],
			ignoreDependencies: [
				"@types/*",
				"@biomejs/biome",
				"@commitlint/*",
				"husky",
				"lint-staged",
				"vitest",
				"turbo",
				"typescript",
			],
		},
	},
	ignore: [
		"**/node_modules/**",
		"**/dist/**",
		"**/.turbo/**",
		"**/.next/**",
		"**/storybook-static/**",
	],
};
