/** @type {import('release-it').Config} */
export default {
	git: {
		// biome-ignore lint/suspicious/noTemplateCurlyInString: release-it template placeholders
		commitMessage: "chore: release v${version}",
		// biome-ignore lint/suspicious/noTemplateCurlyInString: release-it template placeholders
		tagName: "v${version}",
		requireCleanWorkingDir: true,
		requireUpstream: true,
		requireCommits: true,
	},
	github: {
		release: true,
		// biome-ignore lint/suspicious/noTemplateCurlyInString: release-it template placeholders
		releaseName: "v${version}",
		draft: false,
		preRelease: false,
	},
	npm: {
		publish: false, // Private package, don't publish to npm
	},
	plugins: {
		"@release-it/conventional-changelog": {
			preset: "conventionalcommits",
			infile: "CHANGELOG.md",
		},
	},
	hooks: {
		"before:init": ["bun run lint", "bun run type-check", "bun run test"],
		"after:bump": ["bun run build"],
	},
};
