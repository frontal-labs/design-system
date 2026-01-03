import { join } from "node:path";
import { BaseGenerator } from "../base/generator";
import type {
	GeneratorResult,
	PackageOptions,
	TemplateContext,
} from "../types";

const PACKAGE_NAME_REGEX = /^[a-z][a-z0-9-]*$/;

/**
 * Generator for creating new packages in packages/
 */
export class PackageGenerator extends BaseGenerator<PackageOptions> {
	getTargetDir(): string {
		return join(this.rootDir, "packages", this.options.name);
	}

	protected validate(): void {
		if (!this.options.name) {
			throw new Error("Package name is required");
		}
		if (!PACKAGE_NAME_REGEX.test(this.options.name)) {
			throw new Error(
				"Package name must be lowercase, start with a letter, and contain only letters, numbers, and hyphens",
			);
		}
	}

	protected getContext(): TemplateContext {
		return {
			...super.getContext(),
			type: this.options.type || "utility",
			dependencies: this.options.dependencies || [],
			addTests: this.options.addTests ?? true,
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
			if (this.options.addTests) {
				this.createDir(join(targetDir, "tests"));
			}

			// Create package.json
			this.writeTemplate(
				"package/package.json.hbs",
				join(targetDir, "package.json"),
				context,
			);

			// Create tsconfig.json
			this.writeTemplate(
				"package/tsconfig.json.hbs",
				join(targetDir, "tsconfig.json"),
				context,
			);

			// Create src/index.ts
			this.writeTemplate(
				"package/index.ts.hbs",
				join(targetDir, "src/index.ts"),
				context,
			);

			// Create src/keys.ts
			this.writeTemplate(
				"package/keys.ts.hbs",
				join(targetDir, "src/keys.ts"),
				context,
			);

			// Create README.md
			this.writeTemplate(
				"package/README.md.hbs",
				join(targetDir, "README.md"),
				context,
			);

			// Create test file if enabled
			if (this.options.addTests) {
				this.writeTemplate(
					"package/index.test.ts.hbs",
					join(targetDir, "tests/index.test.ts"),
					context,
				);
			}

			return Promise.resolve(this.success());
		} catch (error) {
			return Promise.resolve(
				this.failure([error instanceof Error ? error.message : String(error)]),
			);
		}
	}
}
