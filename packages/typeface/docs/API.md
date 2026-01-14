# API Reference

Complete API documentation for `@frontal-ds/typeface`.

## Exports

### `fonts`

A merged CSS class string that includes both font variables and default typography styles.

**Type**: `string`

**Includes**:
- `MaisonNeue.variable` - CSS variable for Maison Neue
- `MaisonNeueMono.variable` - CSS variable for Maison Neue Mono
- `touch-manipulation` - Optimizes touch interactions
- `font-sans` - Default sans-serif font stack
- `leading-normal` - Normal line height
- `antialiased` - Font smoothing

**Example**:
```tsx
import { fonts } from '@frontal-ds/typeface';

<div className={fonts}>Content with fonts applied</div>
```

---

### `MaisonNeue`

A Next.js `LocalFont` instance for the Maison Neue font family.

**Type**: `NextFontWithVariable`

**Properties**:
- `variable`: `string` - CSS variable name: `'--font-maison-neue'`
- `style`: `CSSProperties` - Inline styles with the font variable
- `className`: `string` - CSS class with the font variable

**Configuration**:
- **Weights**: 300, 400, 500, 600, 700
- **Styles**: normal, italic
- **Fallback**: System font stack (ui-sans-serif, system-ui, etc.)

**Example**:
```tsx
import { MaisonNeue } from '@frontal-ds/typeface';

// Apply to HTML element
<html className={MaisonNeue.variable}>

// Use CSS variable in CSS/SCSS
.my-element {
  font-family: var(--font-maison-neue);
}
```

---

### `MaisonNeueMono`

A Next.js `LocalFont` instance for the Maison Neue Mono font family.

**Type**: `NextFontWithVariable`

**Properties**:
- `variable`: `string` - CSS variable name: `'--font-maison-neue-mono'`
- `style`: `CSSProperties` - Inline styles with the font variable
- `className`: `string` - CSS class with the font variable

**Configuration**:
- **Weights**: 400
- **Styles**: normal, italic
- **Fallback**: System monospace font stack (ui-monospace, SFMono-Regular, etc.)

**Example**:
```tsx
import { MaisonNeueMono } from '@frontal-ds/typeface';

// Apply to HTML element
<html className={MaisonNeueMono.variable}>

// Use CSS variable in CSS/SCSS
.code-block {
  font-family: var(--font-maison-neue-mono);
}
```

## Font Source Files

All font files are located in the `fonts/` directory:

### Maison Neue
- `maison-neue-light.woff2` (weight: 300, style: normal)
- `maison-neue-light-italic.woff2` (weight: 300, style: italic)
- `maison-neue-book.woff2` (weight: 400, style: normal)
- `maison-neue-book-italic.woff2` (weight: 400, style: italic)
- `maison-neue-medium.woff2` (weight: 500, style: normal)
- `maison-neue-medium-italic.woff2` (weight: 500, style: italic)
- `maison-neue-demi.woff2` (weight: 600, style: normal)
- `maison-neue-demi-italic.woff2` (weight: 600, style: italic)
- `maison-neue-bold.woff2` (weight: 700, style: normal)
- `maison-neue-bold-italic.woff2` (weight: 700, style: italic)

### Maison Neue Mono
- `maison-neue-mono.woff2` (weight: 400, style: normal)
- `maison-neue-mono-italic.woff2` (weight: 400, style: italic)

## CSS Custom Properties

When fonts are loaded, the following CSS variables are available:

```css
:root {
  --font-maison-neue: 'Maison Neue', ui-sans-serif, system-ui, ...;
  --font-maison-neue-mono: 'Maison Neue Mono', ui-monospace, SFMono-Regular, ...;
}
```

## Type Definitions

### `NextFontWithVariable`

Type provided by Next.js `next/font/local`. Includes:

```typescript
interface NextFontWithVariable {
  variable: string;
  className: string;
  style: CSSProperties;
}
```

## Implementation Details

- Fonts are loaded using Next.js's `localFont` API
- `adjustFontFallback` is set to `false` for performance
- Fonts are optimized with WOFF2 format
- Font variables use the `--font-` prefix convention
