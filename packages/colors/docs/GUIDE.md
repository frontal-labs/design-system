# Colors Usage Guide

Comprehensive guide for using `@frontal-ds/colors` in your applications.

## Installation

```bash
bun install @frontal-ds/colors
```

## Quick Start

### Basic Usage

```tsx
import { gray, blue, semantic } from '@frontal-ds/colors';

// Use color scales
const primaryColor = gray[500];
const accentColor = blue[600];

// Use semantic colors
const backgroundColor = semantic.background;
const textColor = semantic.foreground;
```

### Importing Styles

```tsx
// Import color scale CSS variables
import '@frontal-ds/colors/styles/styles.css';

// Import semantic color CSS variables
import '@frontal-ds/colors/styles/theme.css';

// Or import both via design-system
import '@frontal/design-system/styles/globals.css';
```

## Color Scales

### Using Color Scales Directly

```tsx
import { gray, blue, green } from '@frontal-ds/colors';

function MyComponent() {
  return (
    <div style={{ backgroundColor: gray.gray100 }}>
      <h1 style={{ color: blue.blue600 }}>Title</h1>
      <p style={{ color: green.green700 }}>Content</p>
    </div>
  );
}
```

### Using Utility Functions

```tsx
import { getColor, getScale } from '@frontal-ds/colors';

// Get specific color
const primaryColor = getColor('blue', 500);
const darkPrimaryColor = getColor('blue', 500, true); // Dark mode

// Get entire scale
const blueScale = getScale('blue');
const blueDarkScale = getScale('blue', true);
```

### Dynamic Color Selection

```tsx
import { getColor, type ColorScaleName, type ColorShade } from '@frontal-ds/colors';

function ColorSwatch({ 
  scale, 
  shade 
}: { 
  scale: ColorScaleName; 
  shade: ColorShade;
}) {
  const color = getColor(scale, shade);
  
  return (
    <div style={{ backgroundColor: color }}>
      {scale} {shade}
    </div>
  );
}
```

## Semantic Colors

### Using Semantic Colors

Semantic colors provide theme-aware tokens that automatically adapt to light/dark mode:

```tsx
import { semantic, semanticDark } from '@frontal-ds/colors';

function ThemedComponent({ isDark }: { isDark: boolean }) {
  const colors = isDark ? semanticDark : semantic;
  
  return (
    <div style={{ 
      backgroundColor: colors.background,
      color: colors.foreground 
    }}>
      <button style={{ 
        backgroundColor: colors.primary,
        color: colors.primaryForeground 
      }}>
        Primary Button
      </button>
    </div>
  );
}
```

### CSS Variables with Semantic Colors

```tsx
import '@frontal-ds/colors/styles/theme.css';

function Component() {
  return (
    <div className="bg-semantic-background text-semantic-foreground">
      <button className="bg-semantic-primary text-semantic-primary-foreground">
        Button
      </button>
    </div>
  );
}
```

## Tailwind CSS Integration

### Using Colors in Tailwind Config

```js
// tailwind.config.js
import { gray, blue, semantic } from '@frontal-ds/colors';

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          50: gray.gray50,
          100: gray.gray100,
          // ... through 900
        },
        blue: {
          50: blue.blue50,
          // ... through 900
        },
        // Semantic colors
        background: semantic.background,
        foreground: semantic.foreground,
        primary: semantic.primary,
        // ... etc
      },
    },
  },
};
```

### Using CSS Variables in Tailwind

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          // ... etc
        },
        // Semantic colors
        background: 'var(--semantic-background)',
        foreground: 'var(--semantic-foreground)',
        // ... etc
      },
    },
  },
};
```

Then use in components:

```tsx
<div className="bg-gray-100 text-gray-900">
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>
</div>
```

## React Components

### Creating Color Picker Component

```tsx
import { getAllScales, type ColorScaleName } from '@frontal-ds/colors';
import { useState } from 'react';

function ColorPicker() {
  const [scale, setScale] = useState<ColorScaleName>('blue');
  const scales = getAllScales();
  
  return (
    <div>
      <select value={scale} onChange={(e) => setScale(e.target.value as ColorScaleName)}>
        {Object.keys(scales).map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      
      <div className="grid grid-cols-10 gap-2">
        {Object.entries(scales[scale]).map(([shade, color]) => (
          <div
            key={shade}
            style={{ backgroundColor: color }}
            className="w-12 h-12 rounded"
            title={`${scale} ${shade}`}
          />
        ))}
      </div>
    </div>
  );
}
```

### Theme-Aware Component

```tsx
import { semantic, semanticDark } from '@frontal-ds/colors';
import { useTheme } from 'next-themes';

function ThemedCard() {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? semanticDark : semantic;
  
  return (
    <div style={{
      backgroundColor: colors.card,
      color: colors.cardForeground,
      borderColor: colors.border,
    }}>
      Card content
    </div>
  );
}
```

## CSS-in-JS Libraries

### Styled Components

```tsx
import styled from 'styled-components';
import { gray, semantic } from '@frontal-ds/colors';

const Button = styled.button`
  background-color: ${semantic.primary};
  color: ${semantic.primaryForeground};
  border: 1px solid ${gray.gray300};
  
  &:hover {
    background-color: ${semantic.accent};
  }
`;
```

### Emotion

```tsx
import { css } from '@emotion/react';
import { blue, semantic } from '@frontal-ds/colors';

const buttonStyle = css`
  background-color: ${semantic.primary};
  color: ${semantic.primaryForeground};
  
  &:hover {
    background-color: ${blue.blue600};
  }
`;
```

## Color Contrast

### Ensuring Accessibility

Always ensure sufficient color contrast:

```tsx
import { getColor } from '@frontal-ds/colors';

// Use darker shades for text on light backgrounds
const textColor = getColor('gray', 900); // High contrast

// Use lighter shades for text on dark backgrounds
const darkTextColor = getColor('gray', 100); // High contrast
```

### Contrast Utilities

```tsx
function getContrastColor(backgroundColor: string): string {
  // Determine if background is light or dark
  const isLight = backgroundColor.includes('oklch(0.9'); // Light threshold
  
  return isLight 
    ? getColor('gray', 900)  // Dark text on light
    : getColor('gray', 100); // Light text on dark
}
```

## Dark Mode Support

### Conditional Color Selection

```tsx
import { getColor, type ColorScaleName, type ColorShade } from '@frontal-ds/colors';

function useThemeColor(scale: ColorScaleName, shade: ColorShade, isDark: boolean) {
  return getColor(scale, shade, isDark);
}

function Component({ isDark }: { isDark: boolean }) {
  const bgColor = useThemeColor('gray', 100, isDark);
  const textColor = useThemeColor('gray', 900, isDark);
  
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      Content
    </div>
  );
}
```

### CSS Variables for Dark Mode

```css
:root {
  --color-primary: oklch(0.57 0.2145 258.25);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: oklch(0.7 0.2 258.25);
  }
}
```

## Best Practices

### 1. Use Semantic Colors for UI Elements

```tsx
// ✅ Good - Uses semantic colors
<div style={{ backgroundColor: semantic.card }}>
  <button style={{ backgroundColor: semantic.primary }}>
    Click me
  </button>
</div>

// ❌ Avoid - Hard-coded colors
<div style={{ backgroundColor: '#ffffff' }}>
  <button style={{ backgroundColor: '#000000' }}>
    Click me
  </button>
</div>
```

### 2. Prefer CSS Variables for Dynamic Theming

```tsx
// ✅ Good - CSS variables
<div className="bg-semantic-background text-semantic-foreground" />

// ⚠️ Less flexible - Direct values
<div style={{ backgroundColor: semantic.background }} />
```

### 3. Use Appropriate Color Scales

```tsx
// ✅ Good - Gray for neutral, Blue for primary
const neutralColor = gray.gray500;
const primaryColor = blue.blue600;

// ❌ Avoid - Using wrong scale
const neutralColor = blue.blue500; // Should be gray
```

### 4. Maintain Color Hierarchy

```tsx
// Use consistent shade levels
const lightBg = gray.gray50;   // Lightest
const mediumBg = gray.gray200;  // Medium
const darkBg = gray.gray800;    // Darkest
```

### 5. Test Color Contrast

Always verify color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).

## Common Patterns

### Gradient Generation

```tsx
import { getColor, type ColorScaleName } from '@frontal-ds/colors';

function createGradient(scale: ColorScaleName, start: number, end: number) {
  const colors = [];
  for (let i = start; i <= end; i += 100) {
    colors.push(getColor(scale, i as any));
  }
  return `linear-gradient(to right, ${colors.join(', ')})`;
}
```

### Color Palette Generator

```tsx
import { getAllScales } from '@frontal-ds/colors';

function generatePalette() {
  const scales = getAllScales();
  const palette = {};
  
  Object.keys(scales).forEach(scaleName => {
    palette[scaleName] = scales[scaleName];
  });
  
  return palette;
}
```

## Troubleshooting

### Colors Not Rendering

- Ensure CSS files are imported: `import '@frontal-ds/colors/styles/styles.css'`
- Check that CSS variables are defined in your stylesheet
- Verify Tailwind config includes color variables

### Dark Mode Not Working

- Ensure you're using dark mode variants: `getColor('blue', 500, true)`
- Check that your theme provider is configured correctly
- Verify CSS media queries for dark mode

### Type Errors

- Import types explicitly: `import type { ColorScaleName } from '@frontal-ds/colors'`
- Use type assertions when necessary: `scale as ColorScaleName`
- Check that you're using valid shade values (50-900)

