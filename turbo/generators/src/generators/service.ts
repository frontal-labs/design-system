import { join } from "node:path";
import { BaseGenerator } from "../base/generator";
import type {
  GeneratorOptions,
  GeneratorResult,
  TemplateContext,
} from "../types";

const PACKAGE_NAME_REGEX = /^[a-z][a-z0-9-]*$/;

export class ServiceGenerator extends BaseGenerator<GeneratorOptions> {
  getTargetDir(): string {
    return join(this.rootDir, "services", this.options.name);
  }

  protected validate(): void {
    if (!this.options.name) {
      throw new Error("Service name is required");
    }
    if (!PACKAGE_NAME_REGEX.test(this.options.name)) {
      throw new Error(
        "Service name must be lowercase, start with a letter, and contain only letters, numbers, and hyphens"
      );
    }
  }

  protected getContext(): TemplateContext {
    return {
      ...super.getContext(),
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
      this.createDir(join(targetDir, "src/rules"));
      this.createDir(join(targetDir, "src/events"));
      this.createDir(join(targetDir, "src/validation"));

      // Create package.json
      this.writeTemplate(
        "service/package.json.hbs",
        join(targetDir, "package.json"),
        context
      );

      // Create tsconfig.json
      this.writeTemplate(
        "service/tsconfig.json.hbs",
        join(targetDir, "tsconfig.json"),
        context
      );

      // Create turbo.json
      this.writeTemplate(
        "service/turbo.json.hbs",
        join(targetDir, "turbo.json"),
        context
      );

      // Create src/index.ts
      this.writeTemplate(
        "service/index.ts.hbs",
        join(targetDir, "src/index.ts"),
        context
      );

      // Create src/keys.ts
      this.writeTemplate(
        "service/keys.ts.hbs",
        join(targetDir, "src/keys.ts"),
        context
      );

      // Create README.md
      this.writeTemplate(
        "service/README.md.hbs",
        join(targetDir, "README.md"),
        context
      );

      return Promise.resolve(this.success());
    } catch (error) {
      return Promise.resolve(
        this.failure([error instanceof Error ? error.message : String(error)])
      );
    }
  }
}
