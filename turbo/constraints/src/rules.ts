import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type {
  ConstraintResult,
  ConstraintViolation,
  PackageInfo,
  WorkspaceInfo,
} from "./types";

// @ts-expect-error - Bun-specific property
const ROOT_DIR = resolve(import.meta.dir, "../../../..");

// Top-level regex for semver validation
const SEMVER_REGEX = /^\d+\.\d+\.\d+(-[\w.]+)?(\+[\w.]+)?$/;

/**
 * Run all constraint checks
 */
export async function checkAll(): Promise<ConstraintResult> {
  const startTime = performance.now();
  const workspace = loadWorkspace();
  const violations: ConstraintViolation[] = [];

  // Run all checks
  const depResult = await checkDependencies();
  const versionResult = await checkVersions();
  const circularResult = await checkCircular();

  violations.push(
    ...depResult.violations,
    ...versionResult.violations,
    ...circularResult.violations
  );

  return {
    success: violations.filter((v) => v.severity === "error").length === 0,
    violations,
    checked: workspace.packages.length,
    duration: performance.now() - startTime,
  };
}

/**
 * Collect dependency versions across all packages
 */
function collectDependencyVersions(
  packages: PackageInfo[]
): Map<string, Map<string, string[]>> {
  const depVersions = new Map<string, Map<string, string[]>>();

  for (const pkg of packages) {
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };

    for (const [depName, version] of Object.entries(allDeps)) {
      if (!depVersions.has(depName)) {
        depVersions.set(depName, new Map());
      }
      const versions = depVersions.get(depName);
      if (versions && !versions.has(version)) {
        versions.set(version, []);
      }
      versions?.get(version)?.push(pkg.name);
    }
  }

  return depVersions;
}

/**
 * Check for duplicate dependency versions
 */
function checkDuplicateVersions(
  depVersions: Map<string, Map<string, string[]>>
): ConstraintViolation[] {
  const violations: ConstraintViolation[] = [];

  for (const [depName, versions] of depVersions) {
    if (versions.size > 1) {
      const versionList = [...versions.entries()]
        .map(([v, pkgs]) => `${v} (${pkgs.join(", ")})`)
        .join(", ");

      violations.push({
        rule: "consistent-versions",
        severity: "warning",
        message: `"${depName}" has multiple versions: ${versionList}`,
        suggestion: "Consider using the same version across all packages",
      });
    }
  }

  return violations;
}

/**
 * Check for banned dependencies
 */
function checkBannedDependencies(
  packages: PackageInfo[]
): ConstraintViolation[] {
  const violations: ConstraintViolation[] = [];
  const bannedDeps = ["lodash", "moment"]; // Example banned deps

  for (const pkg of packages) {
    const allDeps = Object.keys({
      ...pkg.dependencies,
      ...pkg.devDependencies,
    });

    for (const dep of allDeps) {
      if (bannedDeps.includes(dep)) {
        violations.push({
          rule: "banned-dependency",
          severity: "error",
          message: `"${dep}" is banned`,
          package: pkg.name,
          suggestion: `Remove "${dep}" and use a modern alternative`,
        });
      }
    }
  }

  return violations;
}

/**
 * Check dependency constraints
 */
export function checkDependencies(): ConstraintResult {
  const startTime = performance.now();
  const workspace = loadWorkspace();
  const violations: ConstraintViolation[] = [];

  const depVersions = collectDependencyVersions(workspace.packages);
  violations.push(...checkDuplicateVersions(depVersions));
  violations.push(...checkBannedDependencies(workspace.packages));

  return {
    success: violations.filter((v) => v.severity === "error").length === 0,
    violations,
    checked: workspace.packages.length,
    duration: performance.now() - startTime,
  };
}

/**
 * Check version consistency
 */
export function checkVersions(): ConstraintResult {
  const startTime = performance.now();
  const workspace = loadWorkspace();
  const violations: ConstraintViolation[] = [];

  // Check all workspace packages have valid semver
  for (const pkg of workspace.packages) {
    if (!SEMVER_REGEX.test(pkg.version)) {
      violations.push({
        rule: "valid-semver",
        severity: "error",
        message: `Invalid version "${pkg.version}"`,
        package: pkg.name,
        suggestion: "Use a valid semver version (e.g., 1.0.0)",
      });
    }
  }

  // Check for workspace:* references
  for (const pkg of workspace.packages) {
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };

    for (const [depName, version] of Object.entries(allDeps)) {
      if (
        depName.startsWith("@frontal/") &&
        !version.startsWith("workspace:")
      ) {
        violations.push({
          rule: "workspace-reference",
          severity: "warning",
          message: `"${depName}" should use workspace:* reference`,
          package: pkg.name,
          suggestion: `Change "${depName}": "${version}" to "${depName}": "workspace:*"`,
        });
      }
    }
  }

  return {
    success: violations.filter((v) => v.severity === "error").length === 0,
    violations,
    checked: workspace.packages.length,
    duration: performance.now() - startTime,
  };
}

/**
 * Check for circular dependencies
 */
export function checkCircular(): ConstraintResult {
  const startTime = performance.now();
  const workspace = loadWorkspace();
  const violations: ConstraintViolation[] = [];

  // Build dependency graph
  const graph = new Map<string, Set<string>>();

  for (const pkg of workspace.packages) {
    const deps = new Set<string>();
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };

    for (const depName of Object.keys(allDeps)) {
      if (depName.startsWith("@frontal/")) {
        deps.add(depName);
      }
    }

    graph.set(pkg.name, deps);
  }

  // Find cycles using DFS
  const visited = new Set<string>();
  const recursionStack = new Set<string>();

  function hasCycle(node: string, path: string[] = []): string[] | null {
    if (recursionStack.has(node)) {
      return [...path, node];
    }
    if (visited.has(node)) {
      return null;
    }

    visited.add(node);
    recursionStack.add(node);
    path.push(node);

    const deps = graph.get(node) || new Set();
    for (const dep of deps) {
      const cycle = hasCycle(dep, path);
      if (cycle) {
        return cycle;
      }
    }

    recursionStack.delete(node);
    path.pop();
    return null;
  }

  for (const pkgName of graph.keys()) {
    const cycle = hasCycle(pkgName);
    if (cycle) {
      violations.push({
        rule: "no-circular-deps",
        severity: "error",
        message: `Circular dependency detected: ${cycle.join(" → ")}`,
        suggestion: "Refactor to break the circular dependency chain",
      });
      break; // Only report one cycle
    }
  }

  return {
    success: violations.filter((v) => v.severity === "error").length === 0,
    violations,
    checked: workspace.packages.length,
    duration: performance.now() - startTime,
  };
}

/**
 * Load package info from a directory
 */
function loadPackagesFromDir(dirPath: string): PackageInfo[] {
  const packages: PackageInfo[] = [];

  if (!existsSync(dirPath)) {
    return packages;
  }

  const entries = readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const pkgJsonPath = join(dirPath, entry.name, "package.json");
    if (!existsSync(pkgJsonPath)) {
      continue;
    }

    const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
    packages.push({
      name: pkgJson.name || entry.name,
      path: join(dirPath, entry.name),
      version: pkgJson.version || "0.0.0",
      dependencies: pkgJson.dependencies || {},
      devDependencies: pkgJson.devDependencies || {},
      peerDependencies: pkgJson.peerDependencies || {},
    });
  }

  return packages;
}

function loadWorkspace(): WorkspaceInfo {
  const packages: PackageInfo[] = [];
  const workspaceDirs = ["packages", "apps", "internal", "tools"];

  for (const dir of workspaceDirs) {
    const dirPath = join(ROOT_DIR, dir);
    packages.push(...loadPackagesFromDir(dirPath));
  }

  return { root: ROOT_DIR, packages };
}
