# Configuration Guide

This document explains the Storybook configuration files and how to customize them.

## Configuration Files

Storybook uses configuration files in the `.storybook/` directory:

- `main.ts` - Main configuration (addons, framework, stories)
- `preview.tsx` - Global decorators and parameters
- `preview-head.html` - Custom HTML head content

## Main Configuration (`main.ts`)

The main configuration file defines:

### Stories

```typescript
stories: [
  "../stories/**/*.mdx",
  "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
],
```

This tells Storybook where to find story files:
- `*.mdx` - MDX documentation files
- `*.stories.*` - Story files in various formats

### Addons

```typescript
addons: [
  getAbsolutePath("@chromatic-com/storybook"),
  getAbsolutePath("@storybook/addon-onboarding"),
  getAbsolutePath("@storybook/addon-themes"),
],
```

Available addons:
- **@chromatic-com/storybook** - Visual testing integration
- **@storybook/addon-onboarding** - Interactive tutorial
- **@storybook/addon-themes** - Theme switching

### Framework

```typescript
framework: {
  name: getAbsolutePath("@storybook/nextjs"),
  options: {},
},
```

Uses Next.js framework integration for:
- Webpack configuration
- Next.js features (Image, Font, etc.)
- Server-side rendering support

### Static Directories

```typescript
staticDirs: ["../public"],
```

Serves static files from the `public/` directory.

## Preview Configuration (`preview.tsx`)

The preview file configures global settings:

### Parameters

```typescript
parameters: {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  chromatic: {
    modes: {
      light: { theme: "light", className: "light" },
      dark: { theme: "dark", className: "dark" },
    },
  },
},
```

- **Controls** - Auto-detects control types from prop names
- **Chromatic** - Visual testing configuration with theme modes

### Decorators

```typescript
decorators: [
  withThemeByClassName({
    themes: { light: "light", dark: "dark" },
    defaultTheme: "light",
  }),
  (Story) => (
    <div className="bg-background">
      <ThemeProvider>
        <TooltipProvider>
          <Story />
        </TooltipProvider>
        <Toaster />
      </ThemeProvider>
    </div>
  ),
],
```

Decorators wrap all stories:
1. **Theme Decorator** - Enables theme switching
2. **Provider Decorator** - Wraps with design system providers

## Customization

### Adding an Addon

1. Install the addon:
   ```bash
   bun add -D @storybook/addon-[name]
   ```

2. Add to `main.ts`:
   ```typescript
   addons: [
     // ... existing addons
     getAbsolutePath("@storybook/addon-[name]"),
   ],
   ```

### Custom Parameters

Add global parameters in `preview.tsx`:

```typescript
parameters: {
  // ... existing parameters
  myCustomParameter: {
    // Your configuration
  },
},
```

### Custom Decorators

Add decorators in `preview.tsx`:

```typescript
decorators: [
  // ... existing decorators
  (Story) => (
    <div className="my-wrapper">
      <Story />
    </div>
  ),
],
```

### Custom Head Content

Add to `preview-head.html`:

```html
<script>
  // Custom scripts
</script>
<style>
  /* Custom styles */
</style>
```

## Environment Variables

Storybook supports environment variables:

```bash
# .env.local
STORYBOOK_API_URL=https://api.example.com
```

Access in configuration:

```typescript
const apiUrl = process.env.STORYBOOK_API_URL;
```

## Webpack Configuration

Customize webpack via `main.ts`:

```typescript
webpackFinal: async (config) => {
  // Modify config
  return config;
},
```

## TypeScript Configuration

TypeScript is configured via `tsconfig.json`:

```json
{
  "extends": "@frontal/typescript-config/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Build Configuration

### Output Directory

Change build output:

```typescript
// main.ts
export default {
  // ...
  outputDir: "../dist/storybook",
};
```

### Base Path

For deployment to subdirectory:

```typescript
// main.ts
export default {
  // ...
  basePath: "/storybook",
};
```

## Performance Optimization

### Lazy Loading

Stories are automatically code-split and lazy-loaded.

### Build Optimization

```typescript
// main.ts
export default {
  // ...
  features: {
    buildStoriesJson: true, // Generate stories.json
  },
};
```

## Troubleshooting

### Module Resolution

If workspace packages aren't resolved:

```typescript
// main.ts
webpackFinal: async (config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@frontal/design-system": path.resolve(__dirname, "../../packages/design-system"),
  };
  return config;
},
```

### CSS Not Loading

Ensure CSS is imported in `preview.tsx`:

```typescript
import "@frontal/design-system/styles/globals.css";
```

### Type Errors

Ensure TypeScript config extends the correct base:

```json
{
  "extends": "@frontal/typescript-config/react.json"
}
```

## Configuration Reference

- [Storybook Configuration](https://storybook.js.org/docs/configure)
- [Main Configuration](https://storybook.js.org/docs/api/main-config)
- [Preview Configuration](https://storybook.js.org/docs/api/preview-config)
- [Next.js Framework](https://storybook.js.org/docs/get-started/nextjs)

