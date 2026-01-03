/** @type {import('bumpp').Config} */
export default {
	files: ["package.json", "**/package.json"],
	execute: "bun run build",
	commit: true,
	tag: true,
	push: true,
	all: false,
	noVerify: false,
	recursive: false,
};
