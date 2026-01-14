/**
 * @frontal/constraints
 * Workspace constraints validation for the Frontal Design System monorepo
 */

// biome-ignore lint/performance/noBarrelFile: This is a constraints library that needs barrel exports
export {
  checkAll,
  checkCircular,
  checkDependencies,
  checkVersions,
} from "./rules";
export type {
  ConstraintResult,
  ConstraintViolation,
  DependencyRule,
  VersionRule,
} from "./types";
