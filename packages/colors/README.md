# @frontal-labs/colors

Frontal's color system and utilities package.

## Overview

This package provides the color palette, design tokens, and color utilities for consistent theming across the Frontal platform.

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
bun install @frontal-labs/colors
```

## Usage

```tsx
import { /* color utilities */ } from '@frontal-labs/colors';
import '@frontal-labs/colors/styles.css';
import '@frontal-labs/colors/theme.css';
```

## Styles

Import the color system styles:

```tsx
// Base color styles
import '@frontal-labs/colors/styles.css';

// Theme CSS variables
import '@frontal-labs/colors/theme.css';
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

