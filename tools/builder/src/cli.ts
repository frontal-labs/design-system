#!/usr/bin/env bun
import { existsSync, readdirSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import chalk from "chalk";
import { Command } from "commander";
import { consola } from "consola";
import ora from "ora";
import { analyze, generateReport } from "./analyzer";
import { build } from "./bundler";
import type { BuildOptions, CleanOptions } from "./types";

const logger = consola;

const ROOT_DIR = resolve(import.meta.dir, "../../..");

const program = new Command();

program
	.name("frontal-build")
	.description("Build utilities for the Frontal Design System monorepo")
	.version("0.0.1");

// Build command
program
	.command("build")
	.description("Build packages and apps")
	.option("-t, --target <name>", "Target package or app to build")
	.option("-a, --all", "Build all packages and apps")
	.option("-w, --watch", "Watch mode")
	.option("-m, --minify", "Minify output")
	.option("--no-sourcemap", "Disable source maps")
	.option("-f, --format <format>", "Output format (esm, cjs, iife)", "esm")
	.action(async (options: BuildOptions) => {
		const spinner = ora("Building...").start();

		try {
			const result = await build({
				target: options.target,
				all: options.all || !options.target,
				watch: options.watch,
				minify: options.minify,
				sourcemap: options.sourcemap,
				format: options.format,
			});

			if (result.success) {
				spinner.succeed(
					chalk.green(`Build completed in ${result.duration.toFixed(0)}ms`),
				);
				logger.info(`Output files: ${result.outputFiles.length}`);
			} else {
				spinner.fail(chalk.red("Build failed"));
				for (const error of result.errors) {
					logger.error(`  ✗ ${error}`);
				}
				process.exit(1);
			}

			if (result.warnings.length > 0) {
				logger.info("\nWarnings:");
				for (const warning of result.warnings) {
					logger.info(`  ⚠ ${warning}`);
				}
			}
		} catch (error) {
			spinner.fail(chalk.red("Build failed"));
			logger.error(
				"Build process error",
				error instanceof Error ? error : String(error),
			);
			process.exit(1);
		}
	});

// Bundle command (alias for build with minify)
program
	.command("bundle")
	.description("Create optimized production bundles")
	.option("-t, --target <name>", "Target package or app")
	.option("-a, --all", "Bundle all packages and apps")
	.action(async (options: { target?: string; all?: boolean }) => {
		const spinner = ora("Creating optimized bundles...").start();

		try {
			const result = await build({
				target: options.target,
				all: options.all || !options.target,
				minify: true,
				sourcemap: true,
			});

			if (result.success) {
				spinner.succeed(
					chalk.green(`Bundling completed in ${result.duration.toFixed(0)}ms`),
				);
			} else {
				spinner.fail(chalk.red("Bundling failed"));
				for (const error of result.errors) {
					logger.error(`  ✗ ${error}`);
				}
				process.exit(1);
			}
		} catch (error) {
			spinner.fail(chalk.red("Bundling failed"));
			logger.error(
				"Bundling process error",
				error instanceof Error ? error : String(error),
			);
			process.exit(1);
		}
	});

// Analyze command
program
	.command("analyze")
	.description("Analyze bundle sizes")
	.option("-j, --json", "Output as JSON")
	.action((options: { json?: boolean }) => {
		const spinner = ora("Analyzing bundles...").start();

		try {
			const analysis = analyze();
			spinner.stop();

			if (options.json) {
				// Use raw console for JSON output as it's intended for piping/parsing
				console.log(JSON.stringify(analysis, null, 2));
			} else {
				logger.info(generateReport(analysis));
			}
		} catch (error) {
			spinner.fail(chalk.red("Analysis failed"));
			logger.error(
				"Analysis process error",
				error instanceof Error ? error : String(error),
			);
			process.exit(1);
		}
	});

// Clean command
program
	.command("clean")
	.description("Clean build artifacts")
	.option("-t, --target <name>", "Target package or app to clean")
	.option("-a, --all", "Clean all packages and apps")
	.option("--node-modules", "Also remove node_modules")
	.option("-d, --dry-run", "Show what would be deleted")
	.action((options: CleanOptions) => {
		const spinner = ora("Cleaning...").start();

		const dirsToClean: string[] = [];
		const packagesDir = join(ROOT_DIR, "packages");
		const appsDir = join(ROOT_DIR, "apps");

		const collectDirs = (baseDir: string, target?: string) => {
			if (!existsSync(baseDir)) {
				return;
			}

			const packages = target ? [target] : readdirSync(baseDir);

			for (const pkg of packages) {
				const pkgPath = join(baseDir, pkg);
				if (!existsSync(pkgPath)) {
					continue;
				}

				const distPath = join(pkgPath, "dist");
				const cachePath = join(pkgPath, ".cache");
				const nodeModulesPath = join(pkgPath, "node_modules");

				if (existsSync(distPath)) {
					dirsToClean.push(distPath);
				}
				if (existsSync(cachePath)) {
					dirsToClean.push(cachePath);
				}
				if (options.nodeModules && existsSync(nodeModulesPath)) {
					dirsToClean.push(nodeModulesPath);
				}
			}
		};

		if (options.target) {
			collectDirs(packagesDir, options.target);
			collectDirs(appsDir, options.target);
		} else {
			collectDirs(packagesDir);
			collectDirs(appsDir);
		}

		if (options.dryRun) {
			spinner.stop();
			logger.info(chalk.yellow("Dry run - would delete:"));
			for (const dir of dirsToClean) {
				logger.info(chalk.dim(`  ${dir}`));
			}
		} else {
			for (const dir of dirsToClean) {
				rmSync(dir, { recursive: true, force: true });
			}
			spinner.succeed(chalk.green(`Cleaned ${dirsToClean.length} directories`));
		}
	});

if (import.meta.main) {
	program.parse();
}
