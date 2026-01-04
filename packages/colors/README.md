# @frontal/colors

Frontal's color system and utilities package.

## Overview

This package provides the color palette, design tokens, and color utilities for consistent theming across the Frontal platform.

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
bun install @frontal/colors
```

## Usage

```tsx
import { /* color utilities */ } from '@frontal/colors';
import '@frontal/colors/styles.css';
import '@frontal/colors/theme.css';
```

## Styles

Import the color system styles:

```tsx
// Base color styles
import '@frontal/colors/styles.css';

// Theme CSS variables
import '@frontal/colors/theme.css';
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

