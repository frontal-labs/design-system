# @frontal/generators

Code scaffolding and template generation for the Frontal Design System monorepo.

## Features

- **Standardized Scaffolding**: Create packages and apps with consistent structure.
- **Design System Packages**: Generate UI component packages, chart packages, icon packages, and more.
- **Internal Config Scaffolding**: Quick setup for shared configuration packages.
- **Interactive CLI**: easy-to-use prompts for configuration.

## Installation

```bash
bun install
```

## Usage

### CLI

```bash
# Create a new package
bun run src/cli.ts package

# Create a new app (Next.js/Storybook)
bun run src/cli.ts app

# Create an internal configuration package
bun run src/cli.ts internal
```

## Documentation

- [Custom Templates](./docs/CUSTOM-TEMPLATES.md)

## Testing

```bash
bun test
```
