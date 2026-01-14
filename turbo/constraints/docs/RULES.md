# Constraint Rules

This document outlines the validation rules enforced by `@frontal/constraints`.

## Dependency Validation (`deps`)

### Rule 1: Version Consistency
All packages must use the exact same version of an external dependency. This prevents bundling different versions of shared libraries (e.g., `lodash`, `zod`).

### Rule 2: Banned Dependencies
Prevents the introduction of legacy or unapproved packages.
- Current banned: `moment` (use `date-fns`), `axios` (use `fetch` or `ky`).

## Versioning (`versions`)

### Rule 1: Workspace References
Internal dependencies must use the `workspace:*` pattern to ensure they always point to the local version within the monorepo.

### Rule 2: Valid Semver
All `package.json` version fields must be valid Semantic Versioning strings.

## Circular Dependencies (`circular`)

Ensures that the dependency graph is a Directed Acyclic Graph (DAG). Circular dependencies (e.g., A -> B -> A) are forbidden as they cause issues with type resolution, initialization order, and bundling.
