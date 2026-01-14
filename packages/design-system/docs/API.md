# Design System API Reference

Complete API documentation for `@frontal/design-system` barrel package.

## Package Overview

The `@frontal/design-system` package is a centralized barrel package that re-exports all exports from the Frontal design system packages:

- `@frontal-ds/blocks`
- `@frontal-ds/charts`
- `@frontal-ds/colors`
- `@frontal-ds/icons`
- `@frontal-ds/typeface`
- `@frontal-ds/ui`

## Re-Exported Packages

### @frontal-ds/blocks

```typescript
export { blocks } from '@frontal-ds/blocks';
```

**Type:** `Block[]`

**Example:**
```tsx
import { blocks } from '@frontal/design-system';

const dashboardBlock = blocks.find(b => b.name === 'dashboard-01');
```

### @frontal-ds/charts

Chart components are available via direct import from `@frontal-ds/charts`:

```tsx
import { ChartAreaDefault } from '@frontal-ds/charts/components/chart-area-default';
```

### @frontal-ds/colors

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
} from '@frontal-ds/colors';

// Semantic colors
export { semantic, semanticDark } from '@frontal-ds/colors';

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
} from '@frontal-ds/colors';

// Utilities
export { getColor, getScale, getAllScales, toCSSVar } from '@frontal-ds/colors';
```

### @frontal-ds/icons

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
} from '@frontal-ds/icons';

// Icon helpers
export {
  getIconMetadata,
  groupIconsByCategory,
  searchIcons,
  getCategories,
} from '@frontal-ds/icons';

// Icon types
export type {
  IconProps,
  IconMetadata,
  IconComponent,
} from '@frontal-ds/icons';

// Icon utils
export {
  normalizeSize,
  normalizeColor,
  getIconProps,
  extractIconName,
  extractCategory,
} from '@frontal-ds/icons';
```

### @frontal-ds/typeface

Typography and fonts:

```typescript
export {
  fonts,
  MaisonNeue,
  MaisonNeueMono,
} from '@frontal-ds/typeface';
```

### @frontal-ds/ui

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
} from '@frontal-ds/ui';

// Layout Components
export {
  Card,
  Container,
  Grid,
  Flex,
  // ... all layout components
} from '@frontal-ds/ui';

// Navigation Components
export {
  Sidebar,
  Breadcrumb,
  Tabs,
  Menu,
  // ... all navigation components
} from '@frontal-ds/ui';

// Feedback Components
export {
  Alert,
  Toast,
  Dialog,
  Progress,
  // ... all feedback components
} from '@frontal-ds/ui';

// Data Display Components
export {
  Table,
  Avatar,
  Badge,
  // ... all data display components
} from '@frontal-ds/ui';

// Hooks
export {
  useSidebar,
  useFormContext,
  useIsMobile,
} from '@frontal-ds/ui';

// Utilities
export { cn } from '@frontal-ds/ui';

// Variants
export {
  buttonVariants,
  badgeVariants,
  // ... all variant functions
} from '@frontal-ds/ui';

// Types
export type {
  ButtonProps,
  CardProps,
  InputProps,
  // ... all component prop types
} from '@frontal-ds/ui';
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
export * from '@frontal-ds/blocks';
export * from '@frontal-ds/colors';
export * from '@frontal-ds/icons';
export * from '@frontal-ds/typeface';
export * from '@frontal-ds/ui';
```

### Style Export

The `styles/globals.css` file is built to `dist/styles/globals.css` and consolidates styles from all design system packages:

```css
/* dist/styles/globals.css */
@import '@frontal-ds/colors/styles.css';
@import '@frontal-ds/colors/theme.css';
@import '@frontal-ds/typeface/styles.css';
@import '@frontal-ds/typeface/fonts.css';
@import '@frontal-ds/ui/styles.css';
@import '@frontal-ds/charts/styles.css';
@import '@frontal-ds/blocks/styles.css';
```

**Note:** CSS files are automatically copied to `dist/styles/` during the build process.

## Type Exports

All types from underlying packages are re-exported:

```typescript
export type {
  // From @frontal-ds/colors
  ColorScale,
  ColorScaleName,
  ColorShade,
  // ...
  
  // From @frontal-ds/icons
  IconProps,
  IconMetadata,
  IconComponent,
  
  // From @frontal-ds/ui
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
import { Button } from '@frontal-ds/ui';
import { gray } from '@frontal-ds/colors';

// May include more than needed
import { Button, gray } from '@frontal/design-system';
```

## Package Dependencies

```json
{
  "dependencies": {
    "@frontal-ds/blocks": "workspace:*",
    "@frontal-ds/charts": "workspace:*",
    "@frontal-ds/colors": "workspace:*",
    "@frontal-ds/icons": "workspace:*",
    "@frontal-ds/typeface": "workspace:*",
    "@frontal-ds/ui": "workspace:*"
  }
}
```

## Version Compatibility

All packages in the design system are versioned together and maintained for compatibility. When using `@frontal/design-system`, all underlying packages are guaranteed to be compatible versions.

## Exports Summary

### Components
- 80+ UI components from `@frontal-ds/ui`
- Pre-built blocks from `@frontal-ds/blocks`
- Chart components from `@frontal-ds/charts`

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

