# Colors API Reference

Complete API documentation for `@frontal-ds/colors`.

## Color Scales

### Available Color Scales

The package provides 11 color scales, each with light and dark variants:

- `gray` / `grayDark`
- `blue` / `blueDark`
- `cyan` / `cyanDark`
- `yellow` / `yellowDark`
- `brown` / `brownDark`
- `green` / `greenDark`
- `teal` / `tealDark`
- `pink` / `pinkDark`
- `purple` / `purpleDark`
- `orange` / `orangeDark`
- `red` / `redDark`

### Color Scale Structure

Each color scale is an object with shade keys from 50 to 900:

```typescript
type ColorScale = {
  gray50: ColorValue;
  gray100: ColorValue;
  gray200: ColorValue;
  gray300: ColorValue;
  gray400: ColorValue;
  gray500: ColorValue;
  gray600: ColorValue;
  gray700: ColorValue;
  gray800: ColorValue;
  gray900: ColorValue;
};
```

### Example: Gray Scale

```typescript
import { gray, grayDark } from '@frontal-ds/colors';

// Light mode
gray.gray50   // "oklch(0.95 0 0)"
gray.gray100  // "oklch(0.96 0 0)"
gray.gray500  // "oklch(0.66 0 0)"
gray.gray900  // "oklch(0.09 0 0)"

// Dark mode
grayDark.gray50   // "oklch(0.195 0 0)"
grayDark.gray100  // "oklch(0.195 0 0)"
grayDark.gray500  // "oklch(0.37 0 0)"
grayDark.gray900  // "oklch(0.985 0 0)"
```

## Semantic Colors

### Light Mode Semantic Colors

```typescript
import { semantic } from '@frontal-ds/colors';

semantic.background              // "oklch(1 0 0)"
semantic.foreground              // "oklch(0.145 0 0)"
semantic.card                    // "oklch(0.99 0 0)"
semantic.cardForeground          // "oklch(0.145 0 0)"
semantic.popover                 // "oklch(1 0 0)"
semantic.popoverForeground       // "oklch(0.145 0 0)"
semantic.primary                 // "oklch(0.205 0 0)"
semantic.primaryForeground       // "oklch(0.985 0 0)"
semantic.secondary               // "oklch(0.96 0 0)"
semantic.secondaryForeground    // "oklch(0.205 0 0)"
semantic.muted                  // "oklch(0.97 0 0)"
semantic.mutedForeground        // "oklch(0.556 0 0)"
semantic.accent                 // "oklch(0.97 0 0)"
semantic.accentForeground       // "oklch(0.205 0 0)"
semantic.destructive            // "oklch(0.577 0.245 27.325)"
semantic.border                // "oklch(90% 0 0)"
semantic.input                 // "oklch(98.5% 0 0)"
semantic.ring                  // "oklch(57.61% 0.2508 258.23)"
semantic.chart1                // "oklch(0.57 0.2145 258.25)"
semantic.chart2                // "oklch(0.205 0 0)"
semantic.chart3                // "oklch(0.8052 0.1699 74.19)"
semantic.chart4                // "oklch(0.7858 0.1937 155.14)"
semantic.chart5                // "oklch(0.6559 0.2328 34.52)"
semantic.sidebar               // "oklch(0.985 0 0)"
semantic.sidebarForeground     // "oklch(0.145 0 0)"
semantic.sidebarPrimary        // "oklch(0.205 0 0)"
semantic.sidebarPrimaryForeground // "oklch(0.985 0 0)"
semantic.sidebarAccent         // "oklch(0% 0 0 / 0.078)"
semantic.sidebarAccentForeground // "oklch(0.205 0 0)"
semantic.sidebarMuted          // "oklch(0% 0 0 / 0.078)"
semantic.sidebarMutedForeground // "oklch(0.705 0.015 286.067)"
semantic.sidebarBorder         // "oklch(0.922 0 0)"
semantic.sidebarRing           // "oklch(0.708 0 0)"
semantic.surface               // "oklch(98.5% 0 0)"
semantic.surfaceForeground     // "oklch(0.145 0 0)"
semantic.code                  // "oklch(98.5% 0 0)"
semantic.codeForeground        // "oklch(0.145 0 0)"
semantic.codeHighlight         // "oklch(0.96 0 0)"
semantic.codeNumber            // "oklch(0.56 0 0)"
semantic.selection             // "oklch(0.145 0 0)"
semantic.selectionForeground   // "oklch(1 0 0)"
```

### Dark Mode Semantic Colors

```typescript
import { semanticDark } from '@frontal-ds/colors';

// Same structure as semantic, optimized for dark backgrounds
semanticDark.background         // "oklch(0 0 0)"
semanticDark.foreground         // "oklch(0.985 0 0)"
// ... (all other tokens follow same pattern)
```

## Utility Functions

### `getColor(scaleName, shade, dark?)`

Get a specific color from a color scale.

**Parameters:**
- `scaleName` (`ColorScaleName`): Name of the color scale
- `shade` (`ColorShade`): Shade level (50-900)
- `dark` (`boolean`, optional): Whether to use dark mode variant (default: `false`)

**Returns:** `string` - Color value in OKLCH format

**Throws:** `Error` if scale or shade not found

**Example:**
```typescript
import { getColor } from '@frontal-ds/colors';

getColor('blue', 500)        // "oklch(...)"
getColor('blue', 500, true)  // Dark mode variant
getColor('red', 600)         // "oklch(...)"
```

### `getScale(scaleName, dark?)`

Get an entire color scale object.

**Parameters:**
- `scaleName` (`ColorScaleName`): Name of the color scale
- `dark` (`boolean`, optional): Whether to use dark mode variant (default: `false`)

**Returns:** `ColorScale` - Color scale object

**Throws:** `Error` if scale not found

**Example:**
```typescript
import { getScale } from '@frontal-ds/colors';

const blueScale = getScale('blue');
const blueDarkScale = getScale('blue', true);
```

### `getAllScales(dark?)`

Get all color scales as an object.

**Parameters:**
- `dark` (`boolean`, optional): Whether to use dark mode variants (default: `false`)

**Returns:** `Record<string, ColorScale>` - Object containing all color scales

**Example:**
```typescript
import { getAllScales } from '@frontal-ds/colors';

const allScales = getAllScales();
// Returns: { gray: {...}, blue: {...}, ... }

const allDarkScales = getAllScales(true);
// Returns: { gray: {...}, blue: {...}, ... } (dark variants)
```

### `toCSSVar(colorValue, customPropertyName)`

Convert a color value to a CSS custom property reference.

**Parameters:**
- `colorValue` (`string`): OKLCH color value
- `customPropertyName` (`string`): Name for the CSS custom property

**Returns:** `string` - CSS `var()` reference

**Example:**
```typescript
import { toCSSVar } from '@frontal-ds/colors';

toCSSVar('oklch(0.57 0.2145 258.25)', 'primary-color')
// Returns: 'var(--primary-color)'
```

## Type Definitions

### `ColorScaleName`

Union type of all available color scale names.

```typescript
type ColorScaleName =
  | "gray"
  | "blue"
  | "cyan"
  | "yellow"
  | "brown"
  | "green"
  | "teal"
  | "pink"
  | "purple"
  | "orange"
  | "red";
```

### `ColorShade`

Shade levels from 50 to 900.

```typescript
type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
```

### `ExtendedColorShade`

Extended shade levels including 1000 for dark mode.

```typescript
type ExtendedColorShade = ColorShade | 1000;
```

### `ColorValue`

Color value type (OKLCH or CSS variable).

```typescript
type ColorValue = OKLCHColor | CSSColor | string;
```

### `OKLCHColor`

OKLCH color format string.

```typescript
type OKLCHColor = `oklch(${string})`;
```

### `CSSColor`

CSS custom property color value.

```typescript
type CSSColor = `var(--${string})`;
```

### `ColorScale`

Color scale object with shade keys.

```typescript
type ColorScale = Record<string, ColorValue>;
```

### `SemanticColors`

Type for light mode semantic colors.

```typescript
type SemanticColors = typeof semantic;
```

### `SemanticDarkColors`

Type for dark mode semantic colors.

```typescript
type SemanticDarkColors = typeof semanticDark;
```

## CSS Exports

CSS files are built to `dist/styles/` during the build process and exported via package.json.

### `styles.css`

CSS file containing color scale custom properties, built to `dist/styles/styles.css`.

**Usage:**
```tsx
import '@frontal-ds/colors/styles.css';
```

**Exports CSS variables:**
- `--gray-50` through `--gray-900`
- `--blue-50` through `--blue-900`
- ... (all color scales)

### `theme.css`

CSS file containing semantic color tokens, built to `dist/styles/theme.css`.

**Usage:**
```tsx
import '@frontal-ds/colors/theme.css';
```

**Exports CSS variables:**
- `--semantic-background`
- `--semantic-foreground`
- `--semantic-primary`
- ... (all semantic tokens)

## Module Exports

### Named Exports

All color scales, semantic colors, types, and utilities are available as named exports:

```typescript
// Color scales
export { gray, grayDark, blue, blueDark, ... };

// Semantic colors
export { semantic, semanticDark };

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
};

// Utilities
export { getColor, getScale, getAllScales, toCSSVar };
```

