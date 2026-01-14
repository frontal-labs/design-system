# @frontal-ds/colors

Frontal's color system and utilities package.

## Overview

This package provides the color palette, design tokens, and color utilities for consistent theming across the Frontal platform.

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
bun install @frontal-ds/colors
```

## Usage

```tsx
import { /* color utilities */ } from '@frontal-ds/colors';
import '@frontal-ds/colors/styles.css';
import '@frontal-ds/colors/theme.css';
```

## Styles

Import the color system styles:

```tsx
// Base color styles
import '@frontal-ds/colors/styles.css';

// Theme CSS variables
import '@frontal-ds/colors/theme.css';
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

