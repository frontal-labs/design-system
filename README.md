<picture>
    <source srcset="./assets/banner-dark.png" media="(prefers-color-scheme: dark)">
    <source srcset="./assets/banner.png" media="(prefers-color-scheme: light)">
    <img src="./assets/banner.png" alt="Frontal Banner">
</picture>

# `@frontal/design-system`

Frontal's comprehensive design system package providing UI components, hooks, and utilities for building consistent user interfaces.

## Overview

This package contains a collection of reusable React components built on top of Radix UI primitives, styled with Tailwind CSS, and designed to work seamlessly with Next.js applications.

## Features

- **UI Components**: A complete set of accessible, customizable React components
- **Hooks**: Custom React hooks for common UI patterns
- **Utilities**: Helper functions and utilities for styling and theming
- **TypeScript**: Fully typed with TypeScript for better developer experience
- **Accessible**: Built on Radix UI primitives for accessibility compliance
- **Themeable**: Support for light and dark themes

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Importing Components

```tsx
import { Button } from "@frontal/design-system/ui/button";
import { Card } from "@frontal/design-system/ui/card";
```

### Importing Hooks

```tsx
import { useMediaQuery } from "@frontal/design-system/hooks/use-media-query";
```

### Importing Utilities

```tsx
import { cn } from "@frontal/design-system/lib/utils";
```

## Available Components

The design system includes a wide range of components including:
- Form components (Input, Select, Checkbox, etc.)
- Layout components (Card, Sheet, Dialog, etc.)
- Navigation components (Tabs, Sidebar, Breadcrumb, etc.)
- Data display (Table, Chart, Avatar, etc.)
- Feedback components (Alert, Toast, Progress, etc.)

See the `src/components/ui/` directory for the complete list.

## Development

```bash
# Build
pnpm build

# Type check
pnpm type-check

# Lint
pnpm lint

# Format
pnpm format
```

## License

See [LICENSE.md](./LICENSE.md) for details.
