# @frontal/design-system

Centralized barrel package that exports all Frontal design system packages.

## Installation

This package is part of the Frontal design system monorepo and is automatically available when using the design system.

## Usage

Import everything from a single package:

```tsx
import { Button, Card, colors, icons } from "@frontal/design-system";
```

Or import directly from individual packages if you prefer:

```tsx
import { Button } from "@frontal/ui";
import { colors } from "@frontal/colors";
import { Icon } from "@frontal/icons";
```

## Exports

This package re-exports all exports from:

- `@frontal/blocks` - UI blocks and components
- `@frontal/charts` - Chart and visualization components
- `@frontal/colors` - Color system and utilities
- `@frontal/components` - UI components
- `@frontal/icons` - Icon library
- `@frontal/typeface` - Typeface and fonts
- `@frontal/ui` - UI component library

