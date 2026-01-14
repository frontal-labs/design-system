# CSS Fallback Usage

For non-Next.js environments, you can use the CSS fallback instead of the Next.js `localFont` API.

## Importing the CSS

```tsx
// In your main CSS file or root component
import '@frontal-ds/typeface/styles/fonts.css';
```

Or in a CSS file:

```css
@import '@frontal-ds/typeface/styles/fonts.css';
```

## Using the Fonts

After importing the CSS, use the fonts directly:

```css
.my-element {
  font-family: 'Maison Neue', ui-sans-serif, system-ui, sans-serif;
  font-weight: 400; /* or 300, 500, 600, 700 */
}

.code-element {
  font-family: 'Maison Neue Mono', ui-monospace, monospace;
}
```

## Available Weights

### Maison Neue
- `300` - Light (normal & italic)
- `400` - Book/Regular (normal & italic)
- `500` - Medium (normal & italic)
- `600` - Demi/Semi-bold (normal & italic)
- `700` - Bold (normal & italic)

### Maison Neue Mono
- `400` - Regular (normal & italic)

## Notes

- The CSS fallback uses `font-display: swap` for better performance
- Font files are referenced from the `fonts/` directory relative to the CSS file
- Only WOFF2 format is used (modern browsers)
- For Next.js projects, prefer using the `fonts` export from `@frontal-ds/typeface` which provides automatic optimization
