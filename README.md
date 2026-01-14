<picture>
    <source srcset="./assets/banner-dark.png" media="(prefers-color-scheme: dark)">
    <source srcset="./assets/banner.png" media="(prefers-color-scheme: light)">
    <img src="./assets/banner.png" alt="Frontal Banner">
</picture>

# Frontal Design System

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

### Importing Styles

Import the consolidated CSS file that includes all design system styles:

```tsx
import "@frontal/design-system/styles/globals.css";
```

This single import includes:
- Tailwind CSS base styles
- Color system from `@frontal-ds/colors`
- Typography from `@frontal-ds/typeface`
- UI component styles from `@frontal-ds/ui`
- Chart styles from `@frontal-ds/charts`

### Importing Components

```tsx
import { Button } from "@frontal/design-system/ui/button";
import { Card } from "@frontal/design-system/ui/card";
```

### Importing Icons

All icons are available from `@frontal-ds/icons`:

```tsx
import { 
  ArrowUpIcon, 
  AddIcon, 
  SearchIcon, 
  CalendarIcon 
} from "@frontal/design-system";
// or directly from @frontal-ds/icons
import { ArrowUpIcon } from "@frontal-ds/icons";
```

### Importing Blocks

```tsx
import { blocks } from "@frontal/design-system";
// or
import { blocks } from "@frontal-ds/blocks";
```

### Importing Charts

```tsx
import { ChartAreaDefault } from "@frontal-ds/charts/components/chart-area-default";
```

### Importing Hooks

```tsx
import { useMediaQuery } from "@frontal/design-system/hooks/use-media-query";
```

### Importing Utilities

```tsx
import { cn } from "@frontal/design-system/lib/utils";
```

## Package Structure

The Frontal design system is organized into multiple packages:

- **@frontal/design-system**: Core design system package (re-exports all packages)
- **@frontal-ds/blocks**: Pre-built UI blocks and components
- **@frontal-ds/charts**: Chart and data visualization components
- **@frontal-ds/icons**: Icon library
- **@frontal-ds/ui**: Base UI components
- **@frontal-ds/colors**: Color system
- **@frontal-ds/typeface**: Typography and fonts

## Available Components

The design system includes a wide range of components including:
- Form components (Input, Select, Checkbox, etc.)
- Layout components (Card, Sheet, Dialog, etc.)
- Navigation components (Tabs, Sidebar, Breadcrumb, etc.)
- Data display (Table, Chart, Avatar, etc.)
- Feedback components (Alert, Toast, Progress, etc.)

See the `src/components/ui/` directory for the complete list.

## Documentation

- [Blocks Documentation](./packages/blocks/docs/README.md) - Pre-built UI blocks
- [Charts Documentation](./packages/charts/docs/README.md) - Chart components
- [Icon Mapping](./ICON_MAPPING.md) - Lucide React to @frontal-ds/icons mapping

## Development

```bash
# Build
bun run build

# Type check
bun run type-check

# Lint
bun run lint

# Format
bun run format
```

## License

See [LICENSE.md](./LICENSE.md) for details.
