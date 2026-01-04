# Packages Documentation

This document provides detailed information about each package in the Frontal Design System monorepo.

## Package Overview

The design system is organized into multiple focused packages, each serving a specific purpose:

```
@frontal/design-system (core)
  ├── @frontal/ui
  │   └── @frontal/icons
  ├── @frontal/blocks
  │   └── @frontal/icons
  ├── @frontal/charts
  │   └── @frontal/icons
  ├── @frontal/colors
  ├── @frontal/typeface
  └── @frontal/components
```

## Core Packages

### @frontal/design-system

**Purpose**: Main entry point for the design system

**Description**: This is the core package that re-exports all other packages, providing a single import point for consumers.

**Exports**:
- All components from `@frontal/ui`
- All icons from `@frontal/icons`
- All blocks from `@frontal/blocks`
- All charts from `@frontal/charts`
- Styles and utilities

**Usage**:

```tsx
// Import everything from one place
import { Button, Card, Input } from "@frontal/design-system";
import { ArrowUpIcon } from "@frontal/design-system";
import "@frontal/design-system/styles/globals.css";
```

**Dependencies**: All other `@frontal/*` packages

**Location**: `packages/design-system/`

---

### @frontal/ui

**Purpose**: Base UI components library

**Description**: Contains 70+ accessible, customizable React components built on Radix UI primitives and styled with Tailwind CSS.

**Components Include**:
- Form components (Input, Select, Checkbox, RadioGroup, Switch, etc.)
- Layout components (Card, Container, Separator, AspectRatio, etc.)
- Navigation components (Tabs, Sidebar, Breadcrumb, Menu, etc.)
- Data display (Table, Avatar, Badge, Skeleton, etc.)
- Feedback components (Alert, Toast, Progress, Spinner, etc.)
- Overlay components (Dialog, Drawer, Sheet, Popover, Tooltip, etc.)
- Interactive components (Button, Toggle, Accordion, Carousel, etc.)

**Usage**:

```tsx
import { Button, Card, Input } from "@frontal/ui";
// or
import { Button } from "@frontal/design-system/ui/button";
```

**Dependencies**:
- `@frontal/icons` - Icon components

**Location**: `packages/ui/`

**Documentation**: See [Components Guide](./COMPONENTS.md)

---

### @frontal/blocks

**Purpose**: Pre-built UI blocks and patterns

**Description**: Contains complete, ready-to-use UI patterns and blocks that combine multiple components into common layouts.

**Blocks Include**:
- Login forms
- Sidebars and navigation layouts
- Dashboard layouts
- Calendar components
- Form patterns
- And more...

**Usage**:

```tsx
import { Login01 } from "@frontal/blocks/components/login-01";
import { Sidebar01 } from "@frontal/blocks/components/sidebar-01";
```

**Dependencies**:
- `@frontal/icons` - Icon components

**Location**: `packages/blocks/`

**Documentation**: See `packages/blocks/docs/README.md`

---

### @frontal/charts

**Purpose**: Data visualization components

**Description**: Chart and data visualization components built on Recharts.

**Charts Include**:
- Area charts
- Bar charts
- Line charts
- Pie charts
- And more...

**Usage**:

```tsx
import { ChartAreaDefault } from "@frontal/charts/components/chart-area-default";
import { ChartBarDefault } from "@frontal/charts/components/chart-bar-default";
```

**Dependencies**:
- `@frontal/icons` - Icon components
- `recharts` - Charting library

**Location**: `packages/charts/`

**Documentation**: See `packages/charts/docs/README.md`

---

### @frontal/icons

**Purpose**: Icon library

**Description**: Comprehensive icon library with 1800+ SVG icons, organized by category.

**Icon Categories**:
- Arrows
- Buildings
- Business
- Communication
- Design
- Development
- Device
- Document
- Editor
- Finance
- Food
- Health & Medical
- Logos
- Map
- Media
- Others
- System
- User Faces
- Weather

**Usage**:

```tsx
import { ArrowUpIcon, AddIcon, SearchIcon } from "@frontal/icons";
// or
import { ArrowUpIcon } from "@frontal/design-system";
```

**Dependencies**: None

**Location**: `packages/icons/`

**Documentation**: See `packages/icons/docs/README.md`

---

## Foundation Packages

### @frontal/colors

**Purpose**: Color system and design tokens

**Description**: Provides the color system, semantic colors, and design tokens used throughout the design system.

**Exports**:
- Color scales (primary, secondary, accent, neutral, etc.)
- Semantic colors (background, text, border, etc.)
- Color utilities
- CSS variables

**Usage**:

```tsx
import { colors } from "@frontal/colors";
// or use CSS variables
<div className="bg-primary text-primary-foreground">...</div>
```

**Dependencies**: None

**Location**: `packages/colors/`

**Documentation**: See `packages/colors/docs/README.md` and [Theming Guide](./THEMING.md)

---

### @frontal/typeface

**Purpose**: Typography and font system

**Description**: Provides typography system, font definitions, and CSS variables for consistent typography.

**Exports**:
- Font definitions (Maison Neue family)
- Typography utilities
- CSS variables for fonts
- Font loading utilities

**Usage**:

```tsx
import "@frontal/typeface/styles/fonts.css";
// or
import "@frontal/design-system/styles/globals.css"; // includes typeface
```

**Dependencies**: None

**Location**: `packages/typeface/`

**Documentation**: See `packages/typeface/docs/README.md`

---

### @frontal/components

**Purpose**: Additional component utilities

**Description**: Provides additional component utilities and helpers.

**Usage**:

```tsx
import { ... } from "@frontal/components";
```

**Dependencies**: Various

**Location**: `packages/components/`

**Documentation**: See `packages/components/docs/README.md`


## Internal Packages

### @frontal/next-config

**Purpose**: Next.js configuration utilities

**Description**: Shared Next.js configuration and utilities for Next.js applications.

**Usage**:

```tsx
import { config } from "@frontal/next-config";
```

**Location**: `internal/next-config/`

---

### @frontal/typescript-config

**Purpose**: TypeScript configuration presets

**Description**: Shared TypeScript configuration presets for consistent TypeScript setup across packages.

**Presets Include**:
- `base.json` - Base configuration
- `react.json` - React-specific configuration
- `nextjs.json` - Next.js-specific configuration
- `bun.json` - Bun-specific configuration

**Usage**:

```json
{
  "extends": "@frontal/typescript-config/react.json"
}
```

**Location**: `internal/typescript-config/`

---

## Package Dependencies

### Dependency Graph

```
@frontal/design-system
  ├── @frontal/ui
  │   └── @frontal/icons
  ├── @frontal/blocks
  │   └── @frontal/icons
  ├── @frontal/charts
  │   └── @frontal/icons
  ├── @frontal/colors
  ├── @frontal/typeface
  └── @frontal/components
```

### Workspace Dependencies

All packages use workspace protocol (`workspace:*`) for internal dependencies:

```json
{
  "dependencies": {
    "@frontal/icons": "workspace:*"
  }
}
```

This ensures:
- Consistent versions across packages
- Fast local development
- Proper dependency resolution

## Package Structure

Each package follows a consistent structure:

```
package-name/
├── src/
│   ├── components/     # Component source files
│   ├── index.ts        # Main entry point
│   └── styles/         # Style files
├── dist/               # Build output
├── tests/              # Test files
├── docs/               # Package documentation
├── package.json        # Package manifest
├── tsconfig.json       # TypeScript configuration
└── turbo.json          # Turborepo configuration
```

## Versioning

Packages are versioned together using [Changesets](https://github.com/changesets/changesets):

- Version bumps are managed centrally
- All packages share the same version number
- Releases are coordinated across packages

## Building Packages

### Build All Packages

```bash
bun run build
```

### Build Specific Package

```bash
cd packages/ui
bun run build
```

### Build with Turborepo

Turborepo handles:
- Parallel builds
- Dependency ordering
- Caching
- Incremental builds

## Import Patterns

### Main Package Import

```tsx
import { Button, Card } from "@frontal/design-system";
```

### Direct Package Import

```tsx
import { Button } from "@frontal/ui";
```

### Sub-path Imports

```tsx
import { Button } from "@frontal/design-system/ui/button";
```

### Style Imports

```tsx
import "@frontal/design-system/styles/globals.css";
```

## Package Exports

Each package defines exports in `package.json`:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/dist/index.cjs"
    },
    "./styles/globals.css": "./dist/styles/globals.css"
  }
}
```

## See Also

- [Components Guide](./COMPONENTS.md) - Component reference
- [Getting Started](./GETTING-STARTED.md) - Installation guide
- [Architecture](./ARCHITECTURE.md) - System architecture
- [Development](./DEVELOPMENT.md) - Development guide

