import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import swc from "@rollup/plugin-swc";
import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "esm",
			sourcemap: true,
		},
		{
			file: "dist/index.cjs",
			format: "cjs",
			sourcemap: true,
		},
	],
	external: [
		"react",
		"react-dom",
		"react/jsx-runtime",
		/^react\//,
		/^@frontal\//,
		/^next\//,
	],
	plugins: [
		resolve({
			extensions: [".ts", ".tsx", ".js", ".jsx"],
		}),
		commonjs(),
		typescript({
			tsconfig: "./tsconfig.json",
			declaration: true,
			declarationDir: "./dist",
			rootDir: "./src",
		}),
		swc({
			jsc: {
				parser: {
					syntax: "typescript",
					tsx: true,
				},
				transform: {
					react: {
						runtime: "automatic",
					},
				},
			},
		}),
	],
};
