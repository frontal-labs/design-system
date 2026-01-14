# Scripts

This directory contains utility shell scripts for managing the Frontal Design System monorepo.

## Usage

Make sure the scripts are executable:

```bash
chmod +x tools/scripts/*.sh
```

Then run them from the project root:

```bash
./tools/scripts/setup.sh
```

## Available Scripts

### [setup.sh](./setup.sh)

Initializes the development environment:

- Installs dependencies via Bun.
- Sets up Git hooks (Husky).

### [clean.sh](./clean.sh)

Performs a deep clean of the workspace:

- Removes all `node_modules`.
- Deletes `dist` and `.cache` build artifacts.
- Removes Turborepo cache.

### [check.sh](./check.sh)

Runs a full health check on the codebase:

- Executes the linter (Biome).
- Runs TypeScript type checking across all workspaces.

## Creation Guidelines

- Use `#!/bin/bash` for the shebang.
- Use `set -e` to ensure the script fails on the first error.
- Scripts should be idempotent where possible.
- Provide clear console output using icons and colors where appropriate.
