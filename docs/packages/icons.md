# @frontal/icons

Icon library for the Frontal Design System.

## Overview

`@frontal/icons` provides a comprehensive collection of 1800+ SVG icons as React components.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Icons

```tsx
import {
  ArrowUpIcon,
  AddIcon,
  SearchIcon,
  CalendarIcon,
} from "@frontal/icons";
// or
import { ArrowUpIcon } from "@frontal/design-system";
```

## Icon Naming

Icons follow a consistent naming convention:

- PascalCase component names
- `Icon` suffix (e.g., `ArrowUpIcon`, `SearchIcon`)
- Descriptive names based on function

## Available Icons

The library includes 1800+ icons covering:

- **Arrows**: Up, down, left, right, and variations
- **Actions**: Add, delete, edit, save, etc.
- **Navigation**: Menu, home, settings, etc.
- **Communication**: Mail, message, phone, etc.
- **Social**: Facebook, Twitter, LinkedIn, etc.
- **Files**: Document, folder, image, etc.
- **Media**: Play, pause, volume, etc.
- **Shapes**: Circle, square, triangle, etc.
- **And many more...**

## Icon Examples

### Basic Usage

```tsx
import { ArrowUpIcon } from "@frontal/icons";

function MyComponent() {
  return <ArrowUpIcon />;
}
```

### With Size

```tsx
import { SearchIcon } from "@frontal/icons";

<SearchIcon className="w-4 h-4" />  // Small
<SearchIcon className="w-6 h-6" />  // Medium
<SearchIcon className="w-8 h-8" />  // Large
```

### With Color

```tsx
import { AddIcon } from "@frontal/icons";

<AddIcon className="text-blue-500" />
<AddIcon className="text-red-500" />
```

### In Buttons

```tsx
import { Button } from "@frontal/ui";
import { PlusIcon } from "@frontal/icons";

<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  Add Item
</Button>
```

## Icon Props

Icons accept standard React props:

```tsx
<Icon
  className="w-6 h-6 text-blue-500"
  aria-label="Search"
  role="img"
/>
```

## Styling

Icons can be styled with:

- **Tailwind CSS classes**: `className="w-6 h-6 text-blue-500"`
- **CSS variables**: Use theme colors
- **Inline styles**: Standard React inline styles

## Accessibility

Always provide accessibility attributes:

```tsx
<SearchIcon
  className="w-5 h-5"
  aria-label="Search"
  role="img"
/>
```

For decorative icons, use `aria-hidden`:

```tsx
<ArrowUpIcon className="w-4 h-4" aria-hidden="true" />
```

## Icon Generation

Icons are generated from SVG files using a build script:

```bash
cd packages/icons
pnpm generate
```

## Finding Icons

To find available icons:

1. Check the `packages/icons/src/components/` directory
2. Use your IDE's autocomplete
3. Search in Storybook
4. Browse the icon registry

## Best Practices

1. **Use semantic names** - Choose icons that match their purpose
2. **Consistent sizing** - Use consistent sizes across your app
3. **Accessibility** - Always include ARIA labels
4. **Performance** - Icons are tree-shakeable, only import what you need
5. **Theming** - Icons inherit text color, use theme colors

## Custom Icons

To add custom icons:

1. Add SVG files to `packages/icons/icons/`
2. Run `pnpm generate` to generate components
3. Icons will be available as React components

## Dependencies

None (standalone package)

## Peer Dependencies

- `react` >= 19.2.0

## See Also

- [UI Components](./UI.md)
- [Design System Package](./DESIGN-SYSTEM.md)
- [Icon Mapping Guide](../ICON-MAPPING.md)

