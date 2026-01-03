# @frontal/constraints

Workspace dependency validation and constraint checking for the Frontal Design System monorepo.

## Features

- **Dependency Consistency**: Ensures all packages use the same versions of external dependencies.
- **Version Compliance**: Validates semver compliance and workspace reference patterns.
- **Circular Dependency Detection**: Prevents complex dependency graphs from becoming unmanageable.
- **Banned Dependencies**: Enforces organizational rules on what packages can be used.

## Installation

```bash
bun install
```

## Usage

### CLI

```bash
# Run all constraint checks
bun run src/cli.ts check

# Check for circular dependencies
bun run src/cli.ts circular

# Validate version consistency
bun run src/cli.ts versions

# Check dependency rules
bun run src/cli.ts deps
```

## Documentation

- [Constraint Rules](./docs/RULES.md)

## Testing

```bash
bun test
```
