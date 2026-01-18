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
import { Button } from "@frontal-labs/ui";
import { colors } from "@frontal-labs/colors";
import { Icon } from "@frontal-labs/icons";
```

## Exports

This package re-exports all exports from:

- `@frontal-labs/blocks` - UI blocks and components
- `@frontal-labs/charts` - Chart and visualization components
- `@frontal-labs/colors` - Color system and utilities
- `@frontal-labs/icons` - Icon library
- `@frontal-labs/typeface` - Typeface and fonts
- `@frontal-labs/ui` - UI component library

## Styles

Import the consolidated global styles:

```tsx
import '@frontal/design-system/styles/globals.css';
```

This includes all styles from the design system packages:

- Color system CSS variables
- Typography styles
- UI component styles
- Chart styles
- Block styles
