import { existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import * as esbuild from "esbuild";
import type { BuildOptions, BuildResult } from "./types";

const ROOT_DIR = resolve(import.meta.dir, "../../..");
const PACKAGES_DIR = join(ROOT_DIR, "packages");
const APPS_DIR = join(ROOT_DIR, "apps");

/**
 * Build a specific package or app
 */
export async function build(options: BuildOptions): Promise<BuildResult> {
	const startTime = performance.now();
	const target = options.target || "all";

	if (options.all || target === "all") {
		return await buildAll(options);
	}

	const packagePath = findPackagePath(target);
	if (!packagePath) {
		return {
			success: false,
			target,
			duration: performance.now() - startTime,
			outputFiles: [],
			errors: [`Package or app "${target}" not found`],
			warnings: [],
		};
	}

	return buildSingle(packagePath, target, options);
}

/**
 * Build a package from packages/ directory
 */
export function buildPackage(
	name: string,
	options: Omit<BuildOptions, "target"> = {},
): Promise<BuildResult> {
	return build({ ...options, target: name });
}

/**
 * Build an app from apps/ directory
 */
export function buildApp(
	name: string,
	options: Omit<BuildOptions, "target"> = {},
): Promise<BuildResult> {
	return build({ ...options, target: name });
}

/**
 * Build all packages and apps
 */
export async function buildAll(
	options: BuildOptions = {},
): Promise<BuildResult> {
	const startTime = performance.now();
	const results: BuildResult[] = [];
	const allOutputFiles: string[] = [];
	const allErrors: string[] = [];
	const allWarnings: string[] = [];

	// Get all packages
	const packages = getWorkspacePackages(PACKAGES_DIR);
	const apps = getWorkspacePackages(APPS_DIR);

	for (const pkg of [...packages, ...apps]) {
		const result = await buildSingle(pkg.path, pkg.name, options);
		results.push(result);
		allOutputFiles.push(...result.outputFiles);
		allErrors.push(...result.errors);
		allWarnings.push(...result.warnings);
	}

	return {
		success: allErrors.length === 0,
		target: "all",
		duration: performance.now() - startTime,
		outputFiles: allOutputFiles,
		errors: allErrors,
		warnings: allWarnings,
	};
}

async function buildSingle(
	packagePath: string,
	name: string,
	options: BuildOptions,
): Promise<BuildResult> {
	const startTime = performance.now();
	const entryPoint = join(packagePath, "src/index.ts");
	const outdir = options.outdir || join(packagePath, "dist");

	if (!existsSync(entryPoint)) {
		return {
			success: false,
			target: name,
			duration: performance.now() - startTime,
			outputFiles: [],
			errors: [`Entry point not found: ${entryPoint}`],
			warnings: [],
		};
	}

	try {
		const result = await esbuild.build({
			entryPoints: [entryPoint],
			bundle: true,
			outdir,
			format: options.format || "esm",
			platform: "node",
			target: "node20",
			minify: options.minify ?? false,
			sourcemap: options.sourcemap ?? true,
			external: ["bun", "bun:*"],
			...options.esbuildOptions,
		});

		return {
			success: result.errors.length === 0,
			target: name,
			duration: performance.now() - startTime,
			outputFiles: result.outputFiles?.map((f) => f.path) || [],
			errors: result.errors.map((e) => e.text),
			warnings: result.warnings.map((w) => w.text),
		};
	} catch (error) {
		return {
			success: false,
			target: name,
			duration: performance.now() - startTime,
			outputFiles: [],
			errors: [error instanceof Error ? error.message : String(error)],
			warnings: [],
		};
	}
}

function findPackagePath(name: string): string | null {
	const packagePath = join(PACKAGES_DIR, name);
	if (existsSync(packagePath)) {
		return packagePath;
	}

	const appPath = join(APPS_DIR, name);
	if (existsSync(appPath)) {
		return appPath;
	}

	return null;
}

function getWorkspacePackages(dir: string): { name: string; path: string }[] {
	if (!existsSync(dir)) {
		return [];
	}

	return readdirSync(dir, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => ({
			name: d.name,
			path: join(dir, d.name),
		}));
}
