import { join } from "node:path";
import { BaseGenerator } from "../base/generator";
import type {
	GeneratorResult,
	InternalOptions,
	TemplateContext,
} from "../types";

const INTERNAL_NAME_REGEX = /^[a-z][a-z0-9-]*$/;

/**
 * Generator for creating internal config packages
 */
export class InternalGenerator extends BaseGenerator<InternalOptions> {
	getTargetDir(): string {
		return join(this.rootDir, "internal", this.options.name);
	}

	protected validate(): void {
		if (!this.options.name) {
			throw new Error("Internal package name is required");
		}
		if (!INTERNAL_NAME_REGEX.test(this.options.name)) {
			throw new Error(
				"Package name must be lowercase, start with a letter, and contain only letters, numbers, and hyphens",
			);
		}
	}

	protected getContext(): TemplateContext {
		return {
			...super.getContext(),
			type: this.options.type || "config",
			envVars: this.options.envVars || [],
		};
	}

	run(): Promise<GeneratorResult> {
		try {
			this.validate();
			this.checkExists();

			const targetDir = this.getTargetDir();
			const context = this.getContext();

			// Create directories
			this.createDir(targetDir);
			this.createDir(join(targetDir, "src"));

			// Create package.json
			this.writeTemplate(
				"internal/package.json.hbs",
				join(targetDir, "package.json"),
				context,
			);

			// Create tsconfig.json
			this.writeTemplate(
				"internal/tsconfig.json.hbs",
				join(targetDir, "tsconfig.json"),
				context,
			);

			// Create src/index.ts
			this.writeTemplate(
				"internal/index.ts.hbs",
				join(targetDir, "src/index.ts"),
				context,
			);

			// Create src/keys.ts with env vars
			this.writeTemplate(
				"internal/keys.ts.hbs",
				join(targetDir, "src/keys.ts"),
				context,
			);

			// Create src/config.ts
			this.writeTemplate(
				"internal/config.ts.hbs",
				join(targetDir, "src/config.ts"),
				context,
			);

			// Create README.md
			this.writeTemplate(
				"internal/README.md.hbs",
				join(targetDir, "README.md"),
				context,
			);

			return Promise.resolve(this.success());
		} catch (error) {
			return Promise.resolve(
				this.failure([error instanceof Error ? error.message : String(error)]),
			);
		}
	}
}
