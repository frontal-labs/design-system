# @frontal/colors

Color system and design tokens for the Frontal Design System.

## Overview

`@frontal/colors` provides a comprehensive color system with scales, semantic colors, and utilities for consistent theming.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Colors

```tsx
import { colors } from "@frontal/colors";
import { semantic } from "@frontal/colors/semantic";
```

### Import Styles

```tsx
import "@frontal/colors/styles/colors.css";
```

## Color Scales

The color system includes multiple color scales:

- **Primary** - Primary brand colors
- **Secondary** - Secondary brand colors
- **Accent** - Accent colors
- **Neutral** - Neutral grays
- **Success** - Success/green colors
- **Warning** - Warning/yellow colors
- **Error** - Error/red colors
- **Info** - Info/blue colors

Each scale typically includes 12 shades (50-950).

## Semantic Colors

Semantic colors provide meaning-based color tokens:

```tsx
import { semantic } from "@frontal/colors/semantic";

// Background colors
semantic.background.primary
semantic.background.secondary
semantic.background.tertiary

// Text colors
semantic.text.primary
semantic.text.secondary
semantic.text.tertiary

// Border colors
semantic.border.primary
semantic.border.secondary
```

## CSS Variables

Colors are available as CSS variables:

```css
/* Primary colors */
--color-primary-50
--color-primary-100
--color-primary-500
--color-primary-900

/* Semantic colors */
--color-background-primary
--color-text-primary
--color-border-primary
```

## Usage Examples

### In TypeScript

```tsx
import { colors } from "@frontal/colors";

const primaryColor = colors.primary[500];
const errorColor = colors.error[500];
```

### In CSS/Tailwind

```css
.my-component {
  background-color: var(--color-primary-500);
  color: var(--color-text-primary);
}
```

### In Tailwind Classes

```tsx
<div className="bg-primary text-primary-foreground">
  Primary content
</div>
```

## Color Utilities

### Color Functions

```tsx
import { getColor, getContrast } from "@frontal/colors/utils";

// Get color value
const color = getColor("primary", 500);

// Get contrast ratio
const contrast = getContrast("#000000", "#ffffff");
```

## Theme Support

Colors support light and dark themes:

```tsx
// Light theme
--color-background-primary: #ffffff;
--color-text-primary: #000000;

// Dark theme
--color-background-primary: #000000;
--color-text-primary: #ffffff;
```

## Color Scales Structure

```tsx
colors = {
  primary: {
    50: "#...",
    100: "#...",
    // ... up to 950
  },
  secondary: { /* ... */ },
  // ... other scales
};
```

## Best Practices

1. **Use semantic colors** - Prefer semantic tokens over raw colors
2. **Follow the scale** - Use appropriate shades (50-950)
3. **Maintain contrast** - Ensure sufficient contrast for accessibility
4. **Theme consistency** - Use theme-aware colors
5. **Color meaning** - Use colors that match their semantic meaning

## Accessibility

Colors are designed with accessibility in mind:

- **WCAG AA compliance** - Minimum contrast ratios
- **Color-blind friendly** - Don't rely solely on color
- **High contrast mode** - Support for high contrast themes

## Customization

To customize colors:

1. Modify color scales in `packages/colors/src/scales/`
2. Update semantic mappings in `packages/colors/src/semantic.ts`
3. Rebuild the package: `pnpm build`

## Dependencies

None (standalone package)

## See Also

- [Design System Package](./DESIGN-SYSTEM.md)
- [Typography Package](./TYPEFACE.md)
- [Theme Documentation](../THEMING.md)

