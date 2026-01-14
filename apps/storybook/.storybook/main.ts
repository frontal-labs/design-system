import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync, readdirSync } from "node:fs";
import type { StorybookConfig } from "@storybook/nextjs";

const require = createRequire(import.meta.url);
const currentDir = dirname(fileURLToPath(import.meta.url));

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string) =>
  dirname(require.resolve(join(value, "package.json")));

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      nextConfigPath: resolve(currentDir, "../next.config.ts"),
      // Ensure PostCSS config is found
      postcssLoaderOptions: {
        implementation: require("postcss"),
      },
    },
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    const packagesDir = resolve(currentDir, "../../../packages");
    // Access webpack through require since it's provided by Storybook's builder
    const webpack = require("webpack");

    config.resolve = config.resolve || {};

    // Ensure TypeScript files can be resolved
    config.resolve.extensions = [
      ...((config.resolve.extensions as string[]) || []),
      ".ts",
      ".tsx",
      ".css", // Ensure CSS files can be resolved
    ];

    // Ensure webpack can resolve index.ts files
    config.resolve.mainFiles = [
      ...(config.resolve.mainFiles || []),
      "index.ts",
      "index.tsx",
    ];

    // Find Next.js installation path for internal module resolution
    const alias: Record<string, string> = {};
    let nextDir: string | null = null;

    try {
      const nextPath = require.resolve("next/package.json");
      nextDir = dirname(nextPath);

      // Try to find scheduler in all possible Next.js installations
      // Search in node_modules/.bun for all Next.js versions
      const nodeModulesRoot = resolve(currentDir, "../../../node_modules/.bun");
      const schedulerPaths = [
        resolve(
          nextDir,
          "dist/compiled/scheduler/cjs/scheduler.development.js"
        ),
        resolve(nextDir, "dist/compiled/scheduler/cjs/scheduler.production.js"),
      ];

      // Also search in Bun's node_modules structure
      if (existsSync(nodeModulesRoot)) {
        try {
          const nextDirs = readdirSync(nodeModulesRoot)
            .filter((dir: string) => dir.startsWith("next@"))
            .map((dir: string) =>
              resolve(nodeModulesRoot, dir, "node_modules/next")
            );

          for (const dir of nextDirs) {
            if (existsSync(dir)) {
              schedulerPaths.push(
                resolve(
                  dir,
                  "dist/compiled/scheduler/cjs/scheduler.development.js"
                ),
                resolve(
                  dir,
                  "dist/compiled/scheduler/cjs/scheduler.production.js"
                )
              );
            }
          }
        } catch (e) {
          // Ignore readdir errors
        }
      }

      // Find the first existing scheduler path
      for (const schedulerPath of schedulerPaths) {
        if (existsSync(schedulerPath)) {
          alias["next/dist/compiled/scheduler"] = schedulerPath;
          break;
        }
      }
    } catch (e) {
      // Next.js not found, skip alias
    }

    // Configure webpack to handle Next.js internal modules
    // Ensure webpack can resolve modules from node_modules
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      "node_modules",
      resolve(currentDir, "../../../node_modules"),
    ];

    // Add aliases for packages that webpack has trouble resolving
    try {
      // styled-jsx needs to point to dist/index/index.js
      const styledJsxPackagePath = require.resolve("styled-jsx/package.json");
      const styledJsxDir = dirname(styledJsxPackagePath);
      const styledJsxDistPath = resolve(styledJsxDir, "dist/index/index.js");
      if (existsSync(styledJsxDistPath)) {
        alias["styled-jsx"] = styledJsxDistPath;
        alias["styled-jsx/dist/index"] = styledJsxDistPath;
      } else {
        // Fallback to package directory
        alias["styled-jsx"] = styledJsxDir;
      }
    } catch (e) {
      // styled-jsx not found, skip
    }

    try {
      // Try to resolve object-assign entry point
      const objectAssignPath = require.resolve("object-assign");
      alias["object-assign"] = objectAssignPath;
    } catch (e) {
      try {
        // Fallback to package directory
        const objectAssignPackagePath = require.resolve(
          "object-assign/package.json"
        );
        alias["object-assign"] = dirname(objectAssignPackagePath);
      } catch (e2) {
        // object-assign not found, skip
      }
    }

    // Add webpack plugins to handle Next.js relative imports
    config.plugins = config.plugins || [];

    // Handle scheduler resolution - ensure it's available in resolve.alias
    // The alias should already be set above, but we also add a plugin as backup
    if (alias["next/dist/compiled/scheduler"] && nextDir) {
      const schedulerDevPath = resolve(
        nextDir,
        "dist/compiled/scheduler/cjs/scheduler.development.js"
      );
      if (existsSync(schedulerDevPath)) {
        config.plugins.push(
          new webpack.NormalModuleReplacementPlugin(
            /^next\/dist\/compiled\/scheduler$/,
            schedulerDevPath
          )
        );
      }
    }

    if (nextDir) {
      // Handle relative imports from Next.js client files
      const utilsDir = resolve(nextDir, "dist/shared/lib/router/utils");
      const utilsIndexPath = resolve(utilsDir, "index.js");

      // Handle directory imports (e.g., '../shared/lib/router/utils')
      // Match from any Next.js installation path - use a function to handle the replacement
      if (existsSync(utilsIndexPath)) {
        config.plugins.push(
          new webpack.NormalModuleReplacementPlugin(
            /\.\.\/shared\/lib\/router\/utils$/,
            utilsIndexPath
          )
        );
        config.plugins.push(
          new webpack.NormalModuleReplacementPlugin(
            /\.\.\/router\/utils$/,
            utilsIndexPath
          )
        );
      }

      // List of utility files that Next.js imports relatively
      const utilsFiles = [
        "add-path-prefix",
        "add-locale",
        "path-has-prefix",
        "remove-trailing-slash",
        "parse-path",
        "querystring",
        "format-url",
        "omit",
        "is-local-url",
        "interpolate-as",
        "route-regex",
        "route-matcher",
        "get-asset-path-from-route",
      ];

      // Create NormalModuleReplacementPlugin for each utility file
      for (const utilFile of utilsFiles) {
        const utilPath = resolve(utilsDir, `${utilFile}.js`);
        if (existsSync(utilPath)) {
          config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
              new RegExp(
                `^\\.\\./shared/lib/router/utils/${utilFile.replace(/-/g, "\\-")}$`
              ),
              utilPath
            )
          );
          config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
              new RegExp(
                `^\\.\\./router/utils/${utilFile.replace(/-/g, "\\-")}$`
              ),
              utilPath
            )
          );
        }
      }
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
      // Main package entries - point directly to index.ts files for proper module resolution
      "@frontal/design-system": resolve(
        packagesDir,
        "design-system/src/index.ts"
      ),
      "@frontal-ds/ui": resolve(packagesDir, "ui/src/index.ts"),
      "@frontal-ds/icons": resolve(packagesDir, "icons/src/index.ts"),
      "@frontal-ds/blocks": resolve(packagesDir, "blocks/src/index.ts"),
      "@frontal-ds/charts": resolve(packagesDir, "charts/src/index.ts"),
      "@frontal-ds/colors": resolve(packagesDir, "colors/src/index.ts"),
      "@frontal/components": resolve(packagesDir, "components/src/index.ts"),
      "@frontal-ds/typeface": resolve(packagesDir, "typeface/src/index.ts"),
      // CSS subpath exports
      "@frontal-ds/colors/styles.css": resolve(
        packagesDir,
        "colors/src/styles/styles.css"
      ),
      "@frontal-ds/colors/theme.css": resolve(
        packagesDir,
        "colors/src/styles/theme.css"
      ),
      "@frontal-ds/typeface/styles.css": resolve(
        packagesDir,
        "typeface/src/styles/styles.css"
      ),
      "@frontal-ds/ui/styles.css": resolve(
        packagesDir,
        "ui/src/styles/styles.css"
      ),
      "@frontal-ds/charts/styles.css": resolve(
        packagesDir,
        "charts/src/styles/styles.css"
      ),
      "@frontal-ds/blocks/styles.css": resolve(
        packagesDir,
        "blocks/src/styles/styles.css"
      ),
      "@frontal/design-system/styles/globals.css": resolve(
        packagesDir,
        "design-system/src/styles/globals.css"
      ),
    };

    // Ensure TypeScript files from workspace packages are transpiled
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Find the TypeScript rule and ensure it includes our packages
    const tsRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.toString().includes("tsx?")
    );

    if (tsRule) {
      // Ensure we're not excluding our workspace packages
      if (tsRule.exclude) {
        const excludeArray = Array.isArray(tsRule.exclude)
          ? tsRule.exclude
          : [tsRule.exclude];
        tsRule.exclude = excludeArray.filter((excl: any) => {
          const exclStr = excl.toString();
          return (
            !exclStr.includes("packages") &&
            !exclStr.includes("node_modules/@frontal")
          );
        });
      }

      // Ensure our packages are included
      if (!tsRule.include) {
        tsRule.include = [];
      }
      const includeArray = Array.isArray(tsRule.include)
        ? tsRule.include
        : [tsRule.include];
      if (
        !includeArray.some((inc: any) => inc.toString().includes("packages"))
      ) {
        tsRule.include = [
          ...includeArray.filter((inc: any) => inc !== undefined),
          resolve(packagesDir),
        ];
      }
    }

    // Ensure CSS files from packages are processed correctly
    // Find CSS rule and ensure it includes our packages
    const cssRule = config.module.rules.find(
      (rule: any) =>
        rule.test &&
        (rule.test.toString().includes("css") ||
          rule.test.toString().includes("\\.css"))
    );

    if (cssRule) {
      // Ensure CSS files from packages are not excluded
      if (cssRule.exclude) {
        const excludeArray = Array.isArray(cssRule.exclude)
          ? cssRule.exclude
          : [cssRule.exclude];
        cssRule.exclude = excludeArray.filter((excl: any) => {
          const exclStr = excl.toString();
          return (
            !exclStr.includes("packages") &&
            !exclStr.includes("node_modules/@frontal")
          );
        });
      }

      // Ensure CSS files from packages are included
      if (!cssRule.include) {
        cssRule.include = [];
      }
      const includeArray = Array.isArray(cssRule.include)
        ? cssRule.include
        : [cssRule.include];
      if (
        !includeArray.some(
          (inc: any) => inc && inc.toString().includes("packages")
        )
      ) {
        cssRule.include = [
          ...includeArray.filter((inc: any) => inc !== undefined),
          resolve(packagesDir),
        ];
      }
    }

    // Ensure PostCSS processes CSS files correctly
    // Find all CSS rules and ensure PostCSS is configured
    const cssRules = config.module.rules.filter(
      (rule: any) =>
        rule.test &&
        (rule.test.toString().includes("css") ||
          rule.test.toString().includes("\\.css"))
    );

    for (const cssRule of cssRules) {
      if (cssRule.use) {
        const useArray = Array.isArray(cssRule.use)
          ? cssRule.use
          : [cssRule.use];
        const postcssLoaderIndex = useArray.findIndex(
          (loader: any) =>
            (loader &&
              typeof loader === "object" &&
              loader.loader &&
              loader.loader.includes("postcss")) ||
            (typeof loader === "string" && loader.includes("postcss"))
        );

        if (postcssLoaderIndex >= 0) {
          const postcssLoader = useArray[postcssLoaderIndex];
          if (postcssLoader && typeof postcssLoader === "object") {
            // Ensure PostCSS processes Tailwind CSS v4 correctly
            // Use inline plugins to ensure @tailwindcss/postcss is used
            const tailwindPostcss = require("@tailwindcss/postcss");
            postcssLoader.options = {
              ...postcssLoader.options,
              postcssOptions: {
                ...postcssLoader.options?.postcssOptions,
                plugins: [tailwindPostcss],
              },
            };
          }
        }
      }
    }

    return config;
  },
};

export default config;
