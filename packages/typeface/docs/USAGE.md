# Usage Guide

Detailed usage examples and patterns for `@frontal-labs/typeface`.

## Next.js App Router Setup

### Root Layout

Apply fonts to your root layout:

```tsx
// app/layout.tsx
import { fonts } from '@frontal-labs/typeface';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
```

### Individual Font Application

Use individual fonts when you need more control:

```tsx
// app/layout.tsx
import { MaisonNeue, MaisonNeueMono } from '@frontal-labs/typeface';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${MaisonNeue.variable} ${MaisonNeueMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

## Using Font Weights

### Tailwind CSS Classes

Once fonts are loaded, use standard Tailwind font-weight utilities:

```tsx
<div className="font-light">Light text (300)</div>
<div className="font-normal">Normal text (400)</div>
<div className="font-medium">Medium text (500)</div>
<div className="font-semibold">Semi-bold text (600)</div>
<div className="font-bold">Bold text (700)</div>
```

### Italic Variants

```tsx
<div className="italic font-light">Light italic</div>
<div className="italic font-bold">Bold italic</div>
```

## Typography Utility Classes

The package provides utility classes for consistent typography:

### Headings

```tsx
<h1 className="text-heading-72">Large Heading</h1>
<h2 className="text-heading-64">Extra Large Heading</h2>
<h3 className="text-heading-56">Large Heading</h3>
<h4 className="text-heading-48">Medium-Large Heading</h4>
<h5 className="text-heading-40">Medium Heading</h5>
<h6 className="text-heading-32">Small Heading</h6>
<p className="text-heading-24">Smaller Heading</p>
<p className="text-heading-20">Even Smaller Heading</p>
<p className="text-heading-16">Tiny Heading</p>
<p className="text-heading-14">Smallest Heading</p>
```

### Buttons

```tsx
<button className="text-button-16">Large Button</button>
<button className="text-button-14">Medium Button</button>
<button className="text-button-12">Small Button</button>
```

### Labels

```tsx
<label className="text-label-20">Large Label</label>
<label className="text-label-18">Medium-Large Label</label>
<label className="text-label-16">Medium Label</label>
<label className="text-label-14">Small Label</label>
<label className="text-label-14-mono">Monospace Label</label>
<label className="text-label-13">Extra Small Label</label>
<label className="text-label-13-mono">Monospace Small Label</label>
<label className="text-label-12">Tiny Label</label>
<label className="text-label-12-mono">Monospace Tiny Label</label>
```

### Body Text / Copy

```tsx
<p className="text-copy-24">Large Body Text</p>
<p className="text-copy-20">Medium-Large Body Text</p>
<p className="text-copy-18">Medium Body Text</p>
<p className="text-copy-16">Regular Body Text</p>
<p className="text-copy-14">Small Body Text</p>
<p className="text-copy-13">Extra Small Body Text</p>
<p className="text-copy-13-mono">Monospace Body Text</p>
```

## Using CSS Variables Directly

### In CSS/SCSS Files

```css
.custom-element {
  font-family: var(--font-maison-neue);
  font-weight: 600;
}

.code-snippet {
  font-family: var(--font-maison-neue-mono);
  font-size: 14px;
}
```

### In Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-maison-neue)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-maison-neue-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
};
```

## Combining with Other Classes

### With Tailwind Utilities

```tsx
<div className={`${fonts} text-center text-gray-900`}>
  Centered content with fonts
</div>
```

### Custom Styling

```tsx
import { MaisonNeue } from '@frontal-labs/typeface';

<div 
  className={MaisonNeue.variable}
  style={{
    fontFamily: 'var(--font-maison-neue)',
    fontWeight: 700,
    fontSize: '2rem',
  }}
>
  Custom styled content
</div>
```

## Server Components

Fonts work seamlessly with Next.js Server Components:

```tsx
// app/page.tsx (Server Component)
import { fonts } from '@frontal-labs/typeface';

export default function HomePage() {
  return (
    <div className={fonts}>
      <h1 className="text-heading-48">Welcome</h1>
      <p className="text-copy-16">Server-rendered with fonts</p>
    </div>
  );
}
```

## Client Components

Fonts also work in Client Components:

```tsx
'use client';

import { MaisonNeue } from '@frontal-labs/typeface';
import { useState } from 'react';

export function InteractiveComponent() {
  const [weight, setWeight] = useState(400);
  
  return (
    <div className={MaisonNeue.variable}>
      <p style={{ fontWeight: weight }}>
        Dynamic font weight: {weight}
      </p>
      <button onClick={() => setWeight(w => w === 700 ? 300 : w + 100)}>
        Toggle Weight
      </button>
    </div>
  );
}
```

## Monospace Font Usage

Use monospace font for code, technical content, or aligned data:

```tsx
<code className="text-copy-13-mono">
  const example = 'code snippet';
</code>

<pre className="text-copy-14-mono">
  {JSON.stringify(data, null, 2)}
</pre>

<table>
  <tbody>
    <tr>
      <td className="text-label-12-mono">ID</td>
      <td className="text-label-12-mono">Value</td>
    </tr>
  </tbody>
</table>
```

## Best Practices

1. **Apply fonts at the root level** - Apply font variables to the `<html>` element in your root layout
2. **Use utility classes consistently** - Prefer the provided utility classes for consistent typography
3. **Combine with Tailwind** - The fonts integrate seamlessly with Tailwind CSS utilities
4. **Server Components by default** - Fonts work best with Server Components; only use Client Components when necessary
5. **Use appropriate weights** - Choose font weights that match your design system hierarchy

## Troubleshooting

### Fonts Not Loading

- Ensure fonts are applied to the root `<html>` element
- Check that font files exist in the `fonts/` directory
- Verify Next.js font optimization is enabled

### CSS Variables Not Available

- Make sure you've applied the font variable classes to a parent element
- CSS variables are scoped to the element and its children

### Wrong Font Rendering

- Clear your browser cache
- Check that you're using the correct CSS variable names
- Verify Tailwind config if using custom font-family utilities
