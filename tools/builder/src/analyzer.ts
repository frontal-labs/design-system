import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { gzipSync } from "node:zlib";
import type { AnalysisReport, BundleInfo } from "./types";

const ROOT_DIR = resolve(import.meta.dir, "../../..");
const PACKAGES_DIR = join(ROOT_DIR, "packages");
const APPS_DIR = join(ROOT_DIR, "apps");

/**
 * Analyze bundle sizes for all packages
 */
export function analyze(): AnalysisReport {
	const packages = analyzeDirectory(PACKAGES_DIR);
	const apps = analyzeDirectory(APPS_DIR);
	const allPackages = [...packages, ...apps];

	const totalSize = allPackages.reduce((sum, p) => sum + p.size, 0);
	const totalGzipSize = allPackages.reduce((sum, p) => sum + p.gzipSize, 0);

	const largestPackages = [...allPackages]
		.sort((a, b) => b.size - a.size)
		.slice(0, 10);

	const duplicateDependencies = findDuplicateDependencies(allPackages);

	return {
		timestamp: new Date().toISOString(),
		packages: allPackages,
		totalSize,
		totalGzipSize,
		largestPackages,
		duplicateDependencies,
	};
}

/**
 * Analyze a specific bundle
 */
export function analyzeBundle(bundlePath: string): BundleInfo {
	if (!existsSync(bundlePath)) {
		throw new Error(`Bundle not found: ${bundlePath}`);
	}

	const content = readFileSync(bundlePath);
	const gzipped = gzipSync(content);

	return {
		name: basename(bundlePath),
		path: bundlePath,
		size: content.length,
		gzipSize: gzipped.length,
		dependencies: extractDependencies(content.toString()),
	};
}

/**
 * Generate a human-readable report
 */
export function generateReport(analysis: AnalysisReport): string {
	const lines: string[] = [
		"=".repeat(60),
		"Bundle Analysis Report",
		`Generated: ${analysis.timestamp}`,
		"=".repeat(60),
		"",
		`Total Packages: ${analysis.packages.length}`,
		`Total Size: ${formatBytes(analysis.totalSize)}`,
		`Total Gzip Size: ${formatBytes(analysis.totalGzipSize)}`,
		"",
		"-".repeat(60),
		"Top 10 Largest Packages:",
		"-".repeat(60),
	];

	for (const pkg of analysis.largestPackages) {
		lines.push(
			`  ${pkg.name.padEnd(30)} ${formatBytes(pkg.size).padStart(10)} (${formatBytes(pkg.gzipSize)} gzip)`,
		);
	}

	if (analysis.duplicateDependencies.length > 0) {
		lines.push("");
		lines.push("-".repeat(60));
		lines.push("Duplicate Dependencies:");
		lines.push("-".repeat(60));
		for (const dep of analysis.duplicateDependencies) {
			lines.push(`  - ${dep}`);
		}
	}

	lines.push("");
	lines.push("=".repeat(60));

	return lines.join("\n");
}

function analyzeDirectory(dir: string): BundleInfo[] {
	if (!existsSync(dir)) {
		return [];
	}

	const results: BundleInfo[] = [];
	const packages = readdirSync(dir, { withFileTypes: true }).filter((d) =>
		d.isDirectory(),
	);

	for (const pkg of packages) {
		const distPath = join(dir, pkg.name, "dist");
		if (!existsSync(distPath)) {
			continue;
		}

		const files = readdirSync(distPath).filter((f) => f.endsWith(".js"));
		let totalSize = 0;
		let totalGzipSize = 0;
		const dependencies: string[] = [];

		for (const file of files) {
			const filePath = join(distPath, file);
			const stat = statSync(filePath);
			totalSize += stat.size;

			const content = readFileSync(filePath);
			totalGzipSize += gzipSync(content).length;
			dependencies.push(...extractDependencies(content.toString()));
		}

		results.push({
			name: pkg.name,
			path: join(dir, pkg.name),
			size: totalSize,
			gzipSize: totalGzipSize,
			dependencies: [...new Set(dependencies)],
		});
	}

	return results;
}

// Top-level regex constants to avoid performance issues
const IMPORT_REGEX = /from\s+["']([^"']+)["']/g;
const REQUIRE_REGEX = /require\(["']([^"']+)["']\)/g;

function extractDependencies(code: string): string[] {
	const deps: string[] = [];

	// Reset regex lastIndex for reuse
	IMPORT_REGEX.lastIndex = 0;
	REQUIRE_REGEX.lastIndex = 0;

	let match: RegExpExecArray | null = IMPORT_REGEX.exec(code);
	while (match !== null) {
		if (!match[1].startsWith(".")) {
			deps.push(match[1].split("/")[0]);
		}
		match = IMPORT_REGEX.exec(code);
	}

	match = REQUIRE_REGEX.exec(code);
	while (match !== null) {
		if (!match[1].startsWith(".")) {
			deps.push(match[1].split("/")[0]);
		}
		match = REQUIRE_REGEX.exec(code);
	}

	return [...new Set(deps)];
}

function findDuplicateDependencies(packages: BundleInfo[]): string[] {
	const depCount = new Map<string, number>();

	for (const pkg of packages) {
		for (const dep of pkg.dependencies) {
			depCount.set(dep, (depCount.get(dep) || 0) + 1);
		}
	}

	return [...depCount.entries()]
		.filter(([, count]) => count > 1)
		.map(([dep]) => dep)
		.sort();
}

function formatBytes(bytes: number): string {
	if (bytes === 0) {
		return "0 B";
	}
	const k = 1024;
	const sizes = ["B", "KB", "MB", "GB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
}
