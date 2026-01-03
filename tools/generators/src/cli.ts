#!/usr/bin/env bun
import { input, select } from "@inquirer/prompts";
import chalk from "chalk";
import { Command } from "commander";
import { consola } from "consola";
import ora from "ora";
import { AppGenerator } from "./generators/app";
import { InternalGenerator } from "./generators/internal";
import { PackageGenerator } from "./generators/package";
import type { GeneratorResult } from "./types";

const logger = consola;

// Top-level regex constants for validation
const PACKAGE_NAME_REGEX = /^[a-z][a-z0-9-]*$/;

const program = new Command();

program
	.name("generate")
	.description("Code generators for the Frontal Design System monorepo")
	.version("0.0.1");

// Create package command
program
	.command("create-package")
	.alias("package")
	.description("Generate a new package in packages/")
	.option("-n, --name <name>", "Package name")
	.option("-d, --description <description>", "Package description")
	.option(
		"-t, --type <type>",
		"Package type (ui, blocks, charts, icons, colors, typeface, components, utility, config)",
	)
	.option("--no-tests", "Skip test file generation")
	.option("--dry-run", "Show what would be created without creating files")
	.option("-v, --verbose", "Verbose output")
	.action(async (options) => {
		const name =
			options.name ||
			(await input({
				message: "Package name:",
				validate: (v) =>
					PACKAGE_NAME_REGEX.test(v) ||
					"Must be lowercase, start with letter, use hyphens",
			}));

		const description =
			options.description ||
			(await input({
				message: "Package description:",
				default: `Frontal ${name} package`,
			}));

		const type =
			options.type ||
			(await select({
				message: "Package type:",
				choices: [
					{ value: "ui", name: "UI - UI component library" },
					{ value: "blocks", name: "Blocks - Pre-built UI blocks" },
					{
						value: "charts",
						name: "Charts - Chart and visualization components",
					},
					{ value: "icons", name: "Icons - Icon library" },
					{ value: "colors", name: "Colors - Color system" },
					{ value: "typeface", name: "Typeface - Typography and fonts" },
					{ value: "components", name: "Components - Base components" },
					{ value: "utility", name: "Utility - General purpose utilities" },
					{ value: "config", name: "Config - Configuration package" },
				],
			}));

		const generator = new PackageGenerator({
			name,
			description,
			type,
			addTests: options.tests !== false,
			dryRun: options.dryRun,
			verbose: options.verbose,
		});

		await runGenerator(generator, "package");
	});

// Create app command
program
	.command("create-app")
	.alias("app")
	.description("Generate a new app in apps/")
	.option("-n, --name <name>", "App name")
	.option("-d, --description <description>", "App description")
	.option("-t, --type <type>", "App type (storybook, web)")
	.option("-p, --port <port>", "Default port", "3000")
	.option("--dry-run", "Show what would be created without creating files")
	.option("-v, --verbose", "Verbose output")
	.action(async (options) => {
		const name =
			options.name ||
			(await input({
				message: "App name:",
				validate: (v) =>
					PACKAGE_NAME_REGEX.test(v) ||
					"Must be lowercase, start with letter, use hyphens",
			}));

		const description =
			options.description ||
			(await input({
				message: "App description:",
				default: `Frontal ${name} app`,
			}));

		const type =
			options.type ||
			(await select({
				message: "App type:",
				choices: [
					{ value: "storybook", name: "Storybook - Component documentation" },
					{ value: "web", name: "Web - Next.js web application" },
				],
			}));

		const generator = new AppGenerator({
			name,
			description,
			type,
			port: Number.parseInt(options.port, 10),
			dryRun: options.dryRun,
			verbose: options.verbose,
		});

		await runGenerator(generator, "app");
	});

// Create internal command
program
	.command("create-internal")
	.alias("internal")
	.description("Generate a new internal config package")
	.option("-n, --name <name>", "Internal package name")
	.option("-d, --description <description>", "Package description")
	.option(
		"-t, --type <type>",
		"Config type (aws, email, database, feature-flags)",
	)
	.option("--dry-run", "Show what would be created without creating files")
	.option("-v, --verbose", "Verbose output")
	.action(async (options) => {
		const name =
			options.name ||
			(await input({
				message: "Internal package name:",
				validate: (v) =>
					PACKAGE_NAME_REGEX.test(v) ||
					"Must be lowercase, start with letter, use hyphens",
			}));

		const description =
			options.description ||
			(await input({
				message: "Package description:",
				default: `Frontal ${name} configuration`,
			}));

		const type =
			options.type ||
			(await select({
				message: "Config type:",
				choices: [
					{
						value: "typescript-config",
						name: "TypeScript Config - TypeScript configuration package",
					},
					{
						value: "eslint-config",
						name: "ESLint Config - ESLint configuration package",
					},
					{
						value: "tailwind-config",
						name: "Tailwind Config - Tailwind CSS configuration package",
					},
				],
			}));

		const generator = new InternalGenerator({
			name,
			description,
			type,
			dryRun: options.dryRun,
			verbose: options.verbose,
		});

		await runGenerator(generator, "internal config");
	});

async function runGenerator(
	generator: { run: () => Promise<GeneratorResult> },
	type: string,
): Promise<void> {
	const spinner = ora(`Generating ${type}...`).start();

	try {
		const result = await generator.run();

		if (result.success) {
			spinner.succeed(chalk.green(`Created ${type}: ${result.name}`));
			logger.info(chalk.dim(`  Path: ${result.path}`));
			logger.info(chalk.dim(`  Files created: ${result.filesCreated.length}`));

			for (const file of result.filesCreated) {
				logger.info(chalk.dim(`    - ${file}`));
			}
		} else {
			spinner.fail(chalk.red(`Failed to create ${type}`));
			for (const error of result.errors) {
				logger.error(`  ✗ ${error}`);
			}
			process.exit(1);
		}
	} catch (error) {
		spinner.fail(chalk.red(`Failed to create ${type}`));
		logger.error(
			"Generation process error",
			error instanceof Error ? error : String(error),
		);
		process.exit(1);
	}
}

if (import.meta.main) {
	program.parse();
}
