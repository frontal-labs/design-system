# Design System API Reference

Complete API documentation for `@frontal/design-system` barrel package.

## Package Overview

The `@frontal/design-system` package is a centralized barrel package that re-exports all exports from the Frontal design system packages:

- `@frontal/blocks`
- `@frontal/charts`
- `@frontal/colors`
- `@frontal/components`
- `@frontal/icons`
- `@frontal/typeface`
- `@frontal/ui`

## Re-Exported Packages

### @frontal/blocks

```typescript
export { blocks } from '@frontal/blocks';
```

**Type:** `Block[]`

**Example:**
```tsx
import { blocks } from '@frontal/design-system';

const dashboardBlock = blocks.find(b => b.name === 'dashboard-01');
```

### @frontal/charts

Chart components are available via direct import from `@frontal/charts`:

```tsx
import { ChartAreaDefault } from '@frontal/charts/components/chart-area-default';
```

### @frontal/colors

All color scales, semantic colors, types, and utilities:

```typescript
// Color scales
export {
  gray, grayDark,
  blue, blueDark,
  cyan, cyanDark,
  yellow, yellowDark,
  brown, brownDark,
  green, greenDark,
  teal, tealDark,
  pink, pinkDark,
  purple, purpleDark,
  orange, orangeDark,
  red, redDark,
} from '@frontal/colors';

// Semantic colors
export { semantic, semanticDark } from '@frontal/colors';

// Types
export type {
  ColorScale,
  ColorScaleName,
  ColorShade,
  ExtendedColorShade,
  ColorValue,
  OKLCHColor,
  CSSColor,
  SemanticColors,
  SemanticDarkColors,
} from '@frontal/colors';

// Utilities
export { getColor, getScale, getAllScales, toCSSVar } from '@frontal/colors';
```

### @frontal/components

Components and hooks (currently minimal exports):

```typescript
// Components and hooks available when exported
```

### @frontal/icons

Icon library with 1600+ icons:

```typescript
// Namespace export
export const Icons = IconsModule;
export type Icons = typeof IconsModule;

// Individual icons (all 1600+ icons)
export {
  ArrowUpIcon,
  ArrowDownIcon,
  SearchIcon,
  // ... all icons
} from '@frontal/icons';

// Icon helpers
export {
  getIconMetadata,
  groupIconsByCategory,
  searchIcons,
  getCategories,
} from '@frontal/icons';

// Icon types
export type {
  IconProps,
  IconMetadata,
  IconComponent,
} from '@frontal/icons';

// Icon utils
export {
  normalizeSize,
  normalizeColor,
  getIconProps,
  extractIconName,
  extractCategory,
} from '@frontal/icons';
```

### @frontal/typeface

Typography and fonts:

```typescript
export {
  fonts,
  MaisonNeue,
  MaisonNeueMono,
} from '@frontal/typeface';
```

### @frontal/ui

All UI components (80+ components):

```typescript
// Form Components
export {
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  DatePicker,
  Form,
  // ... all form components
} from '@frontal/ui';

// Layout Components
export {
  Card,
  Container,
  Grid,
  Flex,
  // ... all layout components
} from '@frontal/ui';

// Navigation Components
export {
  Sidebar,
  Breadcrumb,
  Tabs,
  Menu,
  // ... all navigation components
} from '@frontal/ui';

// Feedback Components
export {
  Alert,
  Toast,
  Dialog,
  Progress,
  // ... all feedback components
} from '@frontal/ui';

// Data Display Components
export {
  Table,
  Avatar,
  Badge,
  // ... all data display components
} from '@frontal/ui';

// Hooks
export {
  useSidebar,
  useFormContext,
  useIsMobile,
} from '@frontal/ui';

// Utilities
export { cn } from '@frontal/ui';

// Variants
export {
  buttonVariants,
  badgeVariants,
  // ... all variant functions
} from '@frontal/ui';

// Types
export type {
  ButtonProps,
  CardProps,
  InputProps,
  // ... all component prop types
} from '@frontal/ui';
```

## Style Exports

### `styles/globals.css`

Consolidated CSS file including:

- Tailwind CSS base styles
- Color system CSS variables
- Typography styles
- UI component styles
- Chart styles
- Block styles

**Usage:**
```tsx
import '@frontal/design-system/styles/globals.css';
```

## Module Structure

### Main Export

```typescript
// src/index.ts
export * from '@frontal/blocks';
export * from '@frontal/colors';
export * from '@frontal/icons';
export * from '@frontal/typeface';
export * from '@frontal/ui';
```

### Style Export

The `styles/globals.css` file is built to `dist/styles/globals.css` and consolidates styles from all design system packages:

```css
/* dist/styles/globals.css */
@import '@frontal/colors/styles.css';
@import '@frontal/colors/theme.css';
@import '@frontal/typeface/styles.css';
@import '@frontal/typeface/fonts.css';
@import '@frontal/ui/styles.css';
@import '@frontal/charts/styles.css';
@import '@frontal/blocks/styles.css';
```

**Note:** CSS files are automatically copied to `dist/styles/` during the build process.

## Type Exports

All types from underlying packages are re-exported:

```typescript
export type {
  // From @frontal/colors
  ColorScale,
  ColorScaleName,
  ColorShade,
  // ...
  
  // From @frontal/icons
  IconProps,
  IconMetadata,
  IconComponent,
  
  // From @frontal/ui
  ButtonProps,
  CardProps,
  InputProps,
  // ... all component prop types
};
```

## Usage Patterns

### Pattern 1: Single Import

```typescript
import { Button, Card, gray, ArrowUpIcon } from '@frontal/design-system';
```

### Pattern 2: Namespace Import

```typescript
import { Icons } from '@frontal/design-system';
<Icons.ArrowUpIcon />
```

### Pattern 3: Type-Only Import

```typescript
import type { ButtonProps, CardProps } from '@frontal/design-system';
```

## Tree-Shaking Considerations

The barrel package includes all exports, which may impact tree-shaking. For optimal bundle size:

1. Import directly from individual packages when possible
2. Use type-only imports for types
3. Import only what you need

**Example:**
```typescript
// Better tree-shaking
import { Button } from '@frontal/ui';
import { gray } from '@frontal/colors';

// May include more than needed
import { Button, gray } from '@frontal/design-system';
```

## Package Dependencies

```json
{
  "dependencies": {
    "@frontal/blocks": "workspace:*",
    "@frontal/charts": "workspace:*",
    "@frontal/colors": "workspace:*",
    "@frontal/components": "workspace:*",
    "@frontal/icons": "workspace:*",
    "@frontal/typeface": "workspace:*",
    "@frontal/ui": "workspace:*"
  }
}
```

## Version Compatibility

All packages in the design system are versioned together and maintained for compatibility. When using `@frontal/design-system`, all underlying packages are guaranteed to be compatible versions.

## Exports Summary

### Components
- 80+ UI components from `@frontal/ui`
- Pre-built blocks from `@frontal/blocks`
- Chart components from `@frontal/charts`

### Colors
- 11 color scales (light and dark variants)
- Semantic color tokens
- Color utility functions

### Icons
- 1600+ icon components
- Icon utility functions
- Icon metadata helpers

### Typography
- Font variables
- Typography utilities

### Utilities
- Class name utility (`cn`)
- Custom hooks
- Variant functions

