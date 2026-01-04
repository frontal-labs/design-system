# @frontal/components

Frontal's UI blocks and components package.

## Overview

This package provides reusable UI blocks and components for building consistent interfaces across the Frontal platform.

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
bun install @frontal/blocks
```

## Usage

```tsx
import { /* components */ } from '@frontal/components';
import '@frontal/components/styles.css';
```

## Styles

Import the component styles:

```tsx
import '@frontal/components/styles.css';
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

