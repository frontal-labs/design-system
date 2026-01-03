import type { BuildOptions as EsbuildOptions } from "esbuild";

export interface BuildOptions {
	/** Package or app name to build */
	target?: string;
	/** Build all packages and apps */
	all?: boolean;
	/** Watch mode for development */
	watch?: boolean;
	/** Enable minification */
	minify?: boolean;
	/** Source maps generation */
	sourcemap?: boolean | "linked" | "inline" | "external";
	/** Output format */
	format?: "esm" | "cjs" | "iife";
	/** Output directory override */
	outdir?: string;
	/** Additional esbuild options */
	esbuildOptions?: Partial<EsbuildOptions>;
}

export interface BuildResult {
	success: boolean;
	target: string;
	duration: number;
	outputFiles: string[];
	errors: string[];
	warnings: string[];
}

export interface BundleInfo {
	name: string;
	path: string;
	size: number;
	gzipSize: number;
	brotliSize?: number;
	dependencies: string[];
}

export interface AnalysisReport {
	timestamp: string;
	packages: BundleInfo[];
	totalSize: number;
	totalGzipSize: number;
	largestPackages: BundleInfo[];
	duplicateDependencies: string[];
}

export interface CleanOptions {
	/** Clean specific package/app */
	target?: string;
	/** Clean all packages and apps */
	all?: boolean;
	/** Clean node_modules as well */
	nodeModules?: boolean;
	/** Dry run mode */
	dryRun?: boolean;
}
