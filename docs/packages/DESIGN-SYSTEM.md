# @frontal/design-system

The core design system package that serves as the main entry point for all Frontal Design System packages.

## Overview

`@frontal/design-system` is the primary package that re-exports all other packages in the monorepo. It provides a single import point for consuming the entire design system.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Everything

```tsx
import {
  Button,
  Card,
  Input,
  ArrowUpIcon,
  // ... all exports from all packages
} from "@frontal/design-system";
```

### Import Styles

```tsx
import "@frontal/design-system/styles/globals.css";
```

### Import Specific Packages

```tsx
// UI components
import { Button } from "@frontal/design-system/ui/button";

// Icons
import { ArrowUpIcon } from "@frontal/design-system";

// Blocks
import { Login01 } from "@frontal/design-system";

// Charts
import { ChartAreaDefault } from "@frontal/design-system";
```

## Exports

This package re-exports from:

- `@frontal/ui` - UI components
- `@frontal/blocks` - UI blocks
- `@frontal/charts` - Chart components
- `@frontal/icons` - Icons
- `@frontal/colors` - Color system
- `@frontal/typeface` - Typography
- `@frontal/primitives` - Primitives
- `@frontal/shared` - Shared utilities

## Theme Provider

```tsx
import { ThemeProvider } from "@frontal/design-system/providers/theme";

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## Package Structure

```
@frontal/design-system/
├── src/
│   ├── index.ts              # Main exports
│   ├── lib/                  # Re-export modules
│   └── providers/            # React providers
└── styles/
    └── globals.css           # Global styles
```

## Dependencies

- All other `@frontal/*` packages
- `next-themes` for theme management

## Peer Dependencies

- `react` >= 19.2.0
- `next` >= 16.0.1

## See Also

- [UI Components](./ui.md)
- [Blocks](./blocks.md)
- [Icons](./icons.md)
- [Charts](./charts.md)

