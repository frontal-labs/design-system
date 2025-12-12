# Architecture

This document describes the architecture and design decisions of the Frontal Design System.

## Monorepo Structure

The design system is organized as a monorepo using **Turborepo** and **pnpm workspaces**. This allows us to:

- Share code between packages efficiently
- Maintain consistent versions across packages
- Build packages in parallel
- Manage dependencies centrally

### Workspace Configuration

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*"
  - "storybook"
```

## Package Architecture

### Package Dependencies

```
@frontal/design-system (core)
  ├── @frontal/ui
  │   ├── @frontal/primitives
  │   ├── @frontal/icons
  │   └── @frontal/shared
  ├── @frontal/blocks
  │   └── @frontal/icons
  ├── @frontal/charts
  │   └── @frontal/icons
  ├── @frontal/colors
  ├── @frontal/typeface
  ├── @frontal/primitives
  └── @frontal/shared
```

### Package Responsibilities

#### @frontal/design-system
- **Purpose**: Main entry point for the design system
- **Exports**: Re-exports all other packages
- **Dependencies**: All other packages
- **Usage**: Primary import for consumers

#### @frontal/ui
- **Purpose**: Base UI components
- **Components**: 70+ components (Button, Card, Input, etc.)
- **Dependencies**: Primitives, Icons, Shared
- **Usage**: Individual component imports

#### @frontal/blocks
- **Purpose**: Pre-built UI blocks and patterns
- **Components**: Login forms, sidebars, dashboards, calendars
- **Dependencies**: Icons
- **Usage**: Complete UI patterns

#### @frontal/charts
- **Purpose**: Data visualization components
- **Components**: Area charts, bar charts, line charts
- **Dependencies**: Icons
- **Usage**: Chart components

#### @frontal/icons
- **Purpose**: Icon library
- **Icons**: 1800+ SVG icons
- **Dependencies**: None
- **Usage**: Icon components

#### @frontal/colors
- **Purpose**: Color system and design tokens
- **Exports**: Color scales, semantic colors, utilities
- **Dependencies**: None
- **Usage**: Color tokens and utilities

#### @frontal/typeface
- **Purpose**: Typography system
- **Exports**: Font definitions, CSS variables
- **Dependencies**: None
- **Usage**: Typography styles

#### @frontal/primitives
- **Purpose**: Low-level primitive components
- **Dependencies**: None
- **Usage**: Building blocks for UI components

#### @frontal/shared
- **Purpose**: Shared utilities and hooks
- **Exports**: Utilities, hooks, helpers
- **Dependencies**: None
- **Usage**: Shared functionality

## Build System

### Rollup Configuration

Each package uses **Rollup** for bundling:

- **Input**: TypeScript source files
- **Output**: ESM and CJS formats
- **Plugins**:
  - TypeScript compilation
  - SWC for fast compilation
  - CommonJS support
  - Node resolution

### Build Pipeline

```
Source (TypeScript)
  ↓
TypeScript Compilation
  ↓
Rollup Bundling
  ↓
Output (ESM + CJS)
```

## Styling Architecture

### Tailwind CSS

The design system uses **Tailwind CSS v4** for styling:

- Utility-first approach
- Custom design tokens
- PostCSS processing
- CSS variables for theming

### Style Organization

```
styles/
├── globals.css          # Main stylesheet (design-system)
├── components.css       # Component styles (ui)
├── charts.css          # Chart styles (charts)
└── colors.css          # Color variables (colors)
```

### Theme System

- **CSS Variables**: For theme values
- **next-themes**: For theme switching
- **Dark Mode**: Built-in support

## Type System

### TypeScript Configuration

- **Base Config**: `packages/typescript-config/base.json`
- **Next.js Config**: `packages/typescript-config/nextjs.json`
- **Strict Mode**: Enabled
- **Module Resolution**: Node16

### Type Exports

All packages export TypeScript definitions:
- `.d.ts` files generated during build
- Full type coverage
- IntelliSense support

## Testing Strategy

### Vitest

- **Framework**: Vitest
- **Coverage**: V8 coverage provider
- **Environment**: jsdom for React components
- **Location**: `tests/` directory in each package

### Test Structure

```
tests/
├── index.test.ts       # Main test file
└── [component].test.ts # Component-specific tests
```

## Code Quality

### Biome

- **Linting**: Biome for fast linting
- **Formatting**: Biome formatter
- **Configuration**: `biome.jsonc` at root

### Quality Checks

```bash
pnpm check      # Lint and type check
pnpm fix        # Auto-fix issues
pnpm format     # Format code
```

## Development Tools

### Turborepo

- **Task Orchestration**: Parallel builds
- **Caching**: Smart caching for faster builds
- **Configuration**: `turbo.json`

### Storybook

- **Location**: `storybook/` directory
- **Purpose**: Component documentation and testing
- **Framework**: Next.js

## Module Resolution

### Export Maps

Each package defines export maps in `package.json`:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  }
}
```

### Import Paths

- **Main**: `@frontal/design-system`
- **UI**: `@frontal/design-system/ui/button`
- **Styles**: `@frontal/design-system/styles/globals.css`

## Performance Considerations

### Bundle Size

- **Tree Shaking**: ESM exports for optimal tree shaking
- **Code Splitting**: Per-component imports
- **Optimization**: Rollup optimizations

### Build Performance

- **Parallel Builds**: Turborepo parallel execution
- **Caching**: Smart caching of build artifacts
- **Incremental Builds**: TypeScript incremental compilation

## Future Considerations

- **ESM-only**: Consider ESM-only builds
- **CSS-in-JS**: Evaluate CSS-in-JS solutions
- **Micro-frontends**: Support for micro-frontend architecture
- **Server Components**: Next.js App Router support

