# @frontal/typeface

Typography system and fonts for the Frontal Design System.

## Overview

`@frontal/typeface` provides the typography system, font definitions, and CSS variables for consistent text styling.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Styles

```tsx
import "@frontal/typeface/styles/fonts.css";
```

### Use Typography Components

```tsx
import { Heading, Text } from "@frontal/ui";

<Heading level={1}>Main Heading</Heading>
<Text>Body text</Text>
```

## Font Families

The typeface system includes:

- **Primary Font** - Main font family
- **Monospace Font** - Code and monospace text
- **Display Font** - Headings and display text

## CSS Variables

Typography variables are available:

```css
/* Font families */
--font-primary
--font-mono
--font-display

/* Font sizes */
--font-size-xs
--font-size-sm
--font-size-base
--font-size-lg
--font-size-xl
--font-size-2xl
--font-size-3xl

/* Line heights */
--line-height-tight
--line-height-normal
--line-height-relaxed

/* Font weights */
--font-weight-normal
--font-weight-medium
--font-weight-semibold
--font-weight-bold
```

## Typography Scale

The system uses a consistent typography scale:

```tsx
// Font sizes
xs: "0.75rem"    // 12px
sm: "0.875rem"   // 14px
base: "1rem"     // 16px
lg: "1.125rem"   // 18px
xl: "1.25rem"    // 20px
2xl: "1.5rem"    // 24px
3xl: "1.875rem"  // 30px
4xl: "2.25rem"   // 36px
```

## Usage Examples

### In CSS

```css
.my-heading {
  font-family: var(--font-primary);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}
```

### In Tailwind

```tsx
<h1 className="font-primary text-2xl font-bold leading-tight">
  Heading
</h1>
```

### With Components

```tsx
import { Heading, Text } from "@frontal/ui";

<Heading level={1} size="2xl">
  Main Title
</Heading>
<Text size="base">
  Body text content
</Text>
```

## Font Loading

Fonts are loaded via CSS:

```css
@font-face {
  font-family: "Primary Font";
  src: url("./fonts/font.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## Responsive Typography

Typography scales responsively:

```tsx
// Mobile
text-base

// Tablet
md:text-lg

// Desktop
lg:text-xl
```

## Best Practices

1. **Use semantic HTML** - Use proper heading levels
2. **Maintain hierarchy** - Follow the typography scale
3. **Readability** - Ensure sufficient line height
4. **Consistency** - Use consistent font sizes
5. **Performance** - Use `font-display: swap`

## Dependencies

None (standalone package)

## See Also

- [UI Components](./UI.md)
- [Design System Package](./DESIGN-SYSTEM.md)
- [Typography Guide](../TYPEFACE.md)

