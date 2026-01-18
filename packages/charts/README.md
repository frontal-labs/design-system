# @frontal-labs/charts

Frontal's chart and visualization components package.

## Overview

This package provides chart and data visualization components for building analytics dashboards and data-driven interfaces across the Frontal platform.

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
bun install @frontal-labs/charts
```

## Usage

```tsx
import { /* chart components */ } from '@frontal-labs/charts';
import '@frontal-labs/charts/styles.css';
```

## Styles

Import the chart styles:

```tsx
import '@frontal-labs/charts/styles.css';
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

