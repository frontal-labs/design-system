import { join } from "node:path";
import { BaseGenerator } from "../base/generator";
import type { AppOptions, GeneratorResult, TemplateContext } from "../types";

const APP_NAME_REGEX = /^[a-z][a-z0-9-]*$/;

/**
 * Generator for creating new apps in apps/
 */
export class AppGenerator extends BaseGenerator<AppOptions> {
  getTargetDir(): string {
    return join(this.rootDir, "apps", this.options.name);
  }

  protected validate(): void {
    if (!this.options.name) {
      throw new Error("App name is required");
    }
    if (!APP_NAME_REGEX.test(this.options.name)) {
      throw new Error(
        "App name must be lowercase, start with a letter, and contain only letters, numbers, and hyphens"
      );
    }
  }

  protected getContext(): TemplateContext {
    return {
      ...super.getContext(),
      type: this.options.type || "web",
      port: this.options.port || 3000,
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

      if (this.options.type === "storybook") {
        this.createDir(join(targetDir, ".storybook"));
        this.createDir(join(targetDir, "stories"));
      } else {
        // Next.js web app
        this.createDir(join(targetDir, "app"));
        this.createDir(join(targetDir, "public"));
      }

      // Create package.json
      this.writeTemplate(
        "app/package.json.hbs",
        join(targetDir, "package.json"),
        context
      );

      // Create tsconfig.json
      this.writeTemplate(
        "app/tsconfig.json.hbs",
        join(targetDir, "tsconfig.json"),
        context
      );

      // Create app-specific files
      if (this.options.type === "storybook") {
        this.writeTemplate(
          "app/storybook.config.ts.hbs",
          join(targetDir, ".storybook/main.ts"),
          context
        );
        this.writeTemplate(
          "app/storybook.preview.ts.hbs",
          join(targetDir, ".storybook/preview.ts"),
          context
        );
      } else {
        // Next.js web app
        this.writeTemplate(
          "app/next.config.ts.hbs",
          join(targetDir, "next.config.ts"),
          context
        );
        this.writeTemplate(
          "app/layout.tsx.hbs",
          join(targetDir, "app/layout.tsx"),
          context
        );
        this.writeTemplate(
          "app/page.tsx.hbs",
          join(targetDir, "app/page.tsx"),
          context
        );
      }

      // Create README.md
      this.writeTemplate(
        "app/README.md.hbs",
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
