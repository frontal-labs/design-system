import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import type {
	GeneratorOptions,
	GeneratorResult,
	TemplateContext,
} from "../types";
import { TemplateEngine } from "./template";

const ROOT_DIR = resolve(import.meta.dir, "../../../..");

/**
 * Base generator class with common functionality
 */
export abstract class BaseGenerator<
	T extends GeneratorOptions = GeneratorOptions,
> {
	protected templateEngine: TemplateEngine;
	protected rootDir: string;
	protected options: T;
	protected filesCreated: string[] = [];

	constructor(options: T) {
		this.templateEngine = new TemplateEngine();
		this.rootDir = ROOT_DIR;
		this.options = options;
	}

	/**
	 * Run the generator
	 */
	abstract run(): Promise<GeneratorResult>;

	/**
	 * Get the target directory for generation
	 */
	abstract getTargetDir(): string;

	/**
	 * Validate the generator options
	 */
	protected abstract validate(): void;

	/**
	 * Get the template context
	 */
	protected getContext(): TemplateContext {
		return {
			name: this.options.name,
			packageName: `@frontal/${this.options.name}`,
			description:
				this.options.description || `Frontal ${this.options.name} package`,
			type: "utility",
			timestamp: new Date().toISOString(),
		};
	}

	/**
	 * Create a directory
	 */
	protected createDir(path: string): void {
		if (this.options.dryRun) {
			this.log(`Would create directory: ${path}`);
			return;
		}

		if (!existsSync(path)) {
			mkdirSync(path, { recursive: true });
		}
	}

	/**
	 * Render a template from a file
	 */
	protected renderTemplate(
		templateName: string,
		context?: TemplateContext,
	): string {
		return this.templateEngine.renderFile(
			templateName,
			context || this.getContext(),
		);
	}

	/**
	 * Write a file with template rendering
	 */
	protected writeFile(
		path: string,
		content: string,
		context?: TemplateContext,
	): void {
		const renderedContent = context
			? this.templateEngine.render(content, context)
			: content;

		if (this.options.dryRun) {
			this.log(`Would create file: ${path}`);
			return;
		}

		writeFileSync(path, renderedContent, "utf-8");
		this.filesCreated.push(path);
	}

	/**
	 * Render and write a template file to a target path
	 */
	protected writeTemplate(
		templateName: string,
		targetPath: string,
		context?: TemplateContext,
	): void {
		const renderedContent = this.renderTemplate(templateName, context);

		if (this.options.dryRun) {
			this.log(
				`Would create file from template ${templateName}: ${targetPath}`,
			);
			return;
		}

		writeFileSync(targetPath, renderedContent, "utf-8");
		this.filesCreated.push(targetPath);
	}

	/**
	 * Log a message (if verbose)
	 */
	protected log(message: string): void {
		if (this.options.verbose || this.options.dryRun) {
			console.log(message);
		}
	}

	/**
	 * Create a success result
	 */
	protected success(): GeneratorResult {
		return {
			success: true,
			name: this.options.name,
			path: this.getTargetDir(),
			filesCreated: this.filesCreated,
			errors: [],
		};
	}

	/**
	 * Create a failure result
	 */
	protected failure(errors: string[]): GeneratorResult {
		return {
			success: false,
			name: this.options.name,
			path: this.getTargetDir(),
			filesCreated: this.filesCreated,
			errors,
		};
	}

	/**
	 * Check if the target already exists
	 */
	protected checkExists(): void {
		const targetDir = this.getTargetDir();
		if (existsSync(targetDir)) {
			throw new Error(`Directory already exists: ${targetDir}`);
		}
	}
}
