#!/usr/bin/env bun
import chalk from "chalk";
import { Command } from "commander";
import { consola } from "consola";
import ora from "ora";
import {
	checkAll,
	checkCircular,
	checkDependencies,
	checkVersions,
} from "./rules";
import type { ConstraintResult, ConstraintViolation } from "./types";

const logger = consola;

const program = new Command();

program
	.name("constraints")
	.description("Workspace constraints validation for the Frontal Design System")
	.version("0.0.1");

// Check all command
program
	.command("check")
	.description("Run all constraint checks")
	.option("-j, --json", "Output as JSON")
	.option("--fail-on-warning", "Exit with error on warnings")
	.action(async (options: { json?: boolean; failOnWarning?: boolean }) => {
		const spinner = ora("Running constraint checks...").start();

		try {
			const result = await checkAll();
			spinner.stop();

			if (options.json) {
				console.log(JSON.stringify(result, null, 2));
			} else {
				printResult(result);
			}

			const hasErrors = result.violations.some((v) => v.severity === "error");
			const hasWarnings = result.violations.some(
				(v) => v.severity === "warning",
			);

			if (hasErrors || (options.failOnWarning && hasWarnings)) {
				process.exit(1);
			}
		} catch (error) {
			spinner.fail(chalk.red("Constraint check failed"));
			logger.error(
				"Constraint check process error",
				error instanceof Error ? error : String(error),
			);
			process.exit(1);
		}
	});

// Dependencies check
program
	.command("deps")
	.description("Check dependency constraints")
	.option("-j, --json", "Output as JSON")
	.action(async (options: { json?: boolean }) => {
		const spinner = ora("Checking dependencies...").start();

		try {
			const result = await checkDependencies();
			spinner.stop();

			if (options.json) {
				console.log(JSON.stringify(result, null, 2));
			} else {
				printResult(result);
			}

			if (!result.success) {
				process.exit(1);
			}
		} catch (error) {
			spinner.fail(chalk.red("Dependency check failed"));
			logger.error(
				"Dependency check process error",
				error instanceof Error ? error : String(error),
			);
			process.exit(1);
		}
	});

// Versions check
program
	.command("versions")
	.description("Check version consistency")
	.option("-j, --json", "Output as JSON")
	.action(async (options: { json?: boolean }) => {
		const spinner = ora("Checking versions...").start();

		try {
			const result = await checkVersions();
			spinner.stop();

			if (options.json) {
				console.log(JSON.stringify(result, null, 2));
			} else {
				printResult(result);
			}

			if (!result.success) {
				process.exit(1);
			}
		} catch (error) {
			spinner.fail(chalk.red("Version check failed"));
			logger.error(
				"Version check process error",
				error instanceof Error ? error : String(error),
			);
			process.exit(1);
		}
	});

// Circular check
program
	.command("circular")
	.description("Detect circular dependencies")
	.option("-j, --json", "Output as JSON")
	.action(async (options: { json?: boolean }) => {
		const spinner = ora("Checking for circular dependencies...").start();

		try {
			const result = await checkCircular();
			spinner.stop();

			if (options.json) {
				console.log(JSON.stringify(result, null, 2));
			} else {
				printResult(result);
			}

			if (!result.success) {
				process.exit(1);
			}
		} catch (error) {
			spinner.fail(chalk.red("Circular dependency check failed"));
			logger.error(
				"Circular dependency check process error",
				error instanceof Error ? error : String(error),
			);
			process.exit(1);
		}
	});

function printResult(result: ConstraintResult): void {
	logger.info("");
	logger.info(chalk.bold("Constraint Check Results"));
	logger.info(chalk.dim("─".repeat(50)));
	logger.info(`Packages checked: ${result.checked}`);
	logger.info(`Duration: ${result.duration.toFixed(0)}ms`);
	logger.info("");

	const errors = result.violations.filter((v) => v.severity === "error");
	const warnings = result.violations.filter((v) => v.severity === "warning");

	if (errors.length > 0) {
		logger.info(chalk.red.bold(`✗ ${errors.length} Error(s)`));
		for (const v of errors) {
			printViolation(v);
		}
		logger.info("");
	}

	if (warnings.length > 0) {
		logger.info(chalk.yellow.bold(`⚠ ${warnings.length} Warning(s)`));
		for (const v of warnings) {
			printViolation(v);
		}
		logger.info("");
	}

	if (result.success && result.violations.length === 0) {
		logger.info(chalk.green.bold("✓ All constraints passed"));
	} else if (result.success) {
		logger.info(chalk.yellow.bold("✓ Passed with warnings"));
	} else {
		logger.info(chalk.red.bold("✗ Constraint violations found"));
	}
}

function printViolation(v: ConstraintViolation): void {
	const icon = v.severity === "error" ? chalk.red("✗") : chalk.yellow("⚠");
	const rule = chalk.dim(`[${v.rule}]`);
	const pkg = v.package ? chalk.cyan(` (${v.package})`) : "";

	logger.info(`  ${icon} ${v.message}${pkg} ${rule}`);
	if (v.suggestion) {
		logger.info(chalk.dim(`    → ${v.suggestion}`));
	}
}

if (import.meta.main) {
	program.parse();
}
