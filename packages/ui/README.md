# @frontal-labs/ui

Frontal's UI component library package.

## Overview

This package provides a comprehensive collection of UI components for building modern interfaces across the Frontal platform.

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
bun install @frontal-labs/ui
```

## Usage

```tsx
import { /* UI components */ } from '@frontal-labs/ui';
import '@frontal-labs/ui/styles.css';
```

## Styles

Import the UI component styles:

```tsx
import '@frontal-labs/ui/styles.css';
```

Or use the consolidated design system styles:

```tsx
import '@frontal/design-system/styles/globals.css';
```

## Development

```bash
# Build the package
bun run build

# Run tests
pnpm test

# Lint
pnpm lint
```

