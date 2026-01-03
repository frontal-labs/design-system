# @frontal/builder

Build, bundle, and analyze utilities for the Frontal Design System monorepo.

## Features

- **High-performance Bundling**: Powered by `esbuild`.
- **Bundle Analysis**: Detailed reports on bundle size and dependencies.
- **Clean Utilities**: Efficiently remove build artifacts.
- **Turbo Integration**: Seamlessly works with Turborepo for workspace-aware builds.

## Installation

```bash
bun install
```

## Usage

### CLI

```bash
# Build a specific package
bun run src/cli.ts build -t @frontal/queue

# Build all apps
bun run src/cli.ts build --apps

# Create optimized production bundles
bun run src/cli.ts bundle --minify

# Analyze bundle sizes
bun run src/cli.ts analyze
```

## Documentation

- [Build Guide](./docs/BUILD-GUIDE.md)
- [Analysis Guide](./docs/ANALYSIS-GUIDE.md)

## Testing

```bash
bun test
```
