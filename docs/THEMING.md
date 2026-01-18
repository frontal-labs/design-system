# Theming Guide

This guide covers theming and customization in the Frontal Design System.

## Overview

The Frontal Design System supports theming through:

- **CSS Variables** - Theme values as CSS variables
- **Theme Provider** - React context for theme management
- **Dark Mode** - Built-in dark mode support
- **Custom Themes** - Customizable color schemes

## Theme Provider

### Setup

```tsx
import { ThemeProvider } from "@frontal/design-system/providers/theme";

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Props

- **attribute** - HTML attribute to apply theme class (`"class"` or `"data-theme"`)
- **defaultTheme** - Default theme (`"light"`, `"dark"`, or `"system"`)
- **enableSystem** - Enable system theme detection
- **storageKey** - LocalStorage key for theme persistence

## Using Themes

### Theme Hook

```tsx
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

### Theme Values

```tsx
const { theme, setTheme, resolvedTheme } = useTheme();

// theme - Current theme setting
// setTheme - Function to change theme
// resolvedTheme - Actual theme (accounts for system preference)
```

## CSS Variables

### Color Variables

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

### Using Variables

```css
.my-component {
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  border-color: var(--color-border-primary);
}
```

### In Tailwind

```tsx
<div className="bg-background text-foreground border-border">
  Content
</div>
```

## Dark Mode

### Automatic Dark Mode

```tsx
<ThemeProvider defaultTheme="system" enableSystem>
  {/* Automatically switches based on system preference */}
</ThemeProvider>
```

### Manual Dark Mode

```tsx
<ThemeProvider defaultTheme="dark">
  {/* Always dark mode */}
</ThemeProvider>
```

### Toggle Dark Mode

```tsx
function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
```

## Custom Themes

### Custom Colors

Override CSS variables:

```css
:root {
  --color-primary-500: #your-color;
  --color-background-primary: #your-background;
}
```

### Custom Theme Class

```css
[data-theme="custom"] {
  --color-primary-500: #custom-color;
  --color-background-primary: #custom-background;
}
```

### Apply Custom Theme

```tsx
<ThemeProvider defaultTheme="custom">
  {/* Custom theme */}
</ThemeProvider>
```

## Theme Structure

### Color Tokens

```
colors/
├── primary/        # Primary brand colors
├── secondary/      # Secondary brand colors
├── accent/         # Accent colors
├── neutral/        # Neutral grays
├── success/        # Success/green
├── warning/        # Warning/yellow
├── error/          # Error/red
└── info/           # Info/blue
```

### Semantic Tokens

```
semantic/
├── background/    # Background colors
├── text/          # Text colors
├── border/        # Border colors
└── ...
```

## Best Practices

1. **Use semantic tokens** - Prefer semantic colors over raw colors
2. **Support dark mode** - Always test in both light and dark themes
3. **System preference** - Respect user's system theme preference
4. **Consistent theming** - Use theme variables consistently
5. **Accessibility** - Ensure sufficient contrast in all themes

## Examples

### Theme-Aware Component

```tsx
function ThemedComponent() {
  return (
    <div className="bg-background text-foreground">
      <h1 className="text-primary">Title</h1>
      <p className="text-muted-foreground">Description</p>
    </div>
  );
}
```

### Theme Toggle Button

```tsx
import { Button } from "@frontal-labs/ui";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@frontal-labs/icons";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;
  
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
```

## See Also

- [Colors Package](./packages/COLORS.md)
- [Design System Package](./packages/DESIGN-SYSTEM.md)
- [Getting Started Guide](./GETTING-STARTED.md)

