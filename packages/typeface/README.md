# @frontal/typeface

Frontal's custom typeface package providing Maison Neue and Maison Neue Mono fonts for use across the Frontal platform.

## Overview

This package provides:
- **Maison Neue**: A comprehensive sans-serif font family with multiple weights (300-700) and italic variants
- **Maison Neue Mono**: A monospace font family for code and technical content
- Pre-configured Next.js font loading with CSS variables
- Utility classes for typography using Tailwind CSS

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
bun install @frontal/typeface
```

## Quick Start

### Basic Usage

```tsx
import { fonts } from '@frontal/typeface';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
```

### Individual Font Exports

```tsx
import { MaisonNeue, MaisonNeueMono } from '@frontal/typeface';

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${MaisonNeue.variable} ${MaisonNeueMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

## Font Weights

### Maison Neue

- **300** - Light (with italic variant)
- **400** - Book/Regular (with italic variant)
- **500** - Medium (with italic variant)
- **600** - Demi/Semi-bold (with italic variant)
- **700** - Bold (with italic variant)

### Maison Neue Mono

- **400** - Regular (with italic variant)

## CSS Variables

The package exposes CSS custom properties:

- `--font-maison-neue`: The Maison Neue font family
- `--font-maison-neue-mono`: The Maison Neue Mono font family

These variables are automatically injected when you apply the fonts using the exported utilities.

## Styling

The package includes comprehensive utility classes defined in `globals.css`:

- **Heading styles**: `text-heading-72` through `text-heading-14`
- **Button styles**: `text-button-16`, `text-button-14`, `text-button-12`
- **Label styles**: `text-label-20` through `text-label-12` (including mono variants)
- **Copy/Body styles**: `text-copy-24` through `text-copy-13` (including mono variants)

See [USAGE.md](./USAGE.md) for detailed usage examples.

## Files

- `src/index.ts` - Main exports
- `src/lib/fonts.ts` - Font configuration
- `src/styles/fonts.css` - Font-face declarations (built to `dist/styles/fonts.css`)
- `src/styles/styles.css` - Typography utility classes (built to `dist/styles/styles.css`)
- `fonts/` - WOFF2 font files

## Related Documentation

## CSS Fallback

For non-Next.js environments, you can use the CSS fallback:

```tsx
import '@frontal/typeface/styles/fonts.css';
```

See [FALLBACK.md](./FALLBACK.md) for detailed CSS fallback usage.

- [API Reference](./API.md) - Complete API documentation
- [Usage Guide](./USAGE.md) - Detailed usage examples and patterns
