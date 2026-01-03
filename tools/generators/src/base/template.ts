import { readFileSync } from "node:fs";
import { join } from "node:path";
import Handlebars from "handlebars";
import type { TemplateContext } from "../types";

// Top-level regex constants for performance
const WORD_SEPARATOR_REGEX = /[-_\s]+/;

/**
 * Template engine using Handlebars
 */
export class TemplateEngine {
	private handlebars: typeof Handlebars;
	private templatesDir: string;

	constructor(templatesDir?: string) {
		this.handlebars = Handlebars.create();
		this.templatesDir =
			templatesDir || join(import.meta.dir, "..", "templates");
		this.registerHelpers();
	}

	/**
	 * Compile and render a template string
	 */
	render(template: string, context: TemplateContext): string {
		const compiled = this.handlebars.compile(template);
		return compiled(context);
	}

	/**
	 * Load and render a template file
	 */
	renderFile(templatePath: string, context: TemplateContext): string {
		const fullPath = join(this.templatesDir, templatePath);
		const template = readFileSync(fullPath, "utf-8");
		return this.render(template, context);
	}

	/**
	 * Register custom helpers
	 */
	private registerHelpers(): void {
		// Capitalize first letter
		this.handlebars.registerHelper("capitalize", (str: string) => {
			if (!str) {
				return "";
			}
			return str.charAt(0).toUpperCase() + str.slice(1);
		});

		// Convert to PascalCase
		this.handlebars.registerHelper("pascalCase", (str: string) => {
			if (!str) {
				return "";
			}
			return str
				.split(WORD_SEPARATOR_REGEX)
				.map(
					(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
				)
				.join("");
		});

		// Convert to camelCase
		this.handlebars.registerHelper("camelCase", (str: string) => {
			if (!str) {
				return "";
			}
			const pascal = str
				.split(WORD_SEPARATOR_REGEX)
				.map(
					(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
				)
				.join("");
			return pascal.charAt(0).toLowerCase() + pascal.slice(1);
		});

		// Convert to kebab-case
		this.handlebars.registerHelper("kebabCase", (str: string) => {
			if (!str) {
				return "";
			}
			return str
				.replace(/([a-z])([A-Z])/g, "$1-$2")
				.replace(/[\s_]+/g, "-")
				.toLowerCase();
		});

		// Convert to UPPER_SNAKE_CASE
		this.handlebars.registerHelper("upperSnakeCase", (str: string) => {
			if (!str) {
				return "";
			}
			return str
				.replace(/([a-z])([A-Z])/g, "$1_$2")
				.replace(/[\s-]+/g, "_")
				.toUpperCase();
		});

		// JSON stringify helper
		this.handlebars.registerHelper("json", (obj: unknown) => {
			return JSON.stringify(obj, null, 2);
		});

		// Current year
		this.handlebars.registerHelper("year", () => {
			return new Date().getFullYear();
		});

		// Conditional block helper
		this.handlebars.registerHelper(
			"ifEquals",
			function (
				this: unknown,
				arg1: unknown,
				arg2: unknown,
				options: Handlebars.HelperOptions,
			) {
				return arg1 === arg2 ? options.fn(this) : options.inverse(this);
			},
		);

		// Date helper
		this.handlebars.registerHelper("date", (format?: string) => {
			const date = new Date();
			if (format === "iso") {
				return date.toISOString();
			}
			return date.toDateString();
		});
	}
}
