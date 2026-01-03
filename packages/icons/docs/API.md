# Icons API Reference

Complete API documentation for `@frontal/icons`.

## Icon Component API

### Icon Props

All icon components accept the following props:

```typescript
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;      // Default: 24
  color?: string;              // Default: "currentColor"
  className?: string;
  // ... other SVG props
}
```

### Icon Component Structure

Icons are React functional components that render SVG elements:

```typescript
function IconName(props: IconProps): JSX.Element {
  return (
    <svg {...props}>
      {/* SVG paths */}
    </svg>
  );
}
```

## Available Icons

### Icon Categories

Icons are organized into 19 categories:

1. **Arrows** (166 icons) - Directional and navigation arrows
2. **Buildings** (57 icons) - Building and architecture icons
3. **Business** (174 icons) - Business and finance icons
4. **Communication** (76 icons) - Communication and messaging icons
5. **Design** (207 icons) - Design and creative tools icons
6. **Development** (50 icons) - Development and coding icons
7. **Device** (156 icons) - Device and hardware icons
8. **Document** (208 icons) - Document and file icons
9. **Editor** (249 icons) - Text editor and editing icons
10. **Finance** (145 icons) - Financial and money icons
11. **Food** (28 icons) - Food and dining icons
12. **Health & Medical** (70 icons) - Health and medical icons
13. **Logos** (236 icons) - Brand and logo icons
14. **Map** (148 icons) - Map and location icons
15. **Media** (252 icons) - Media and entertainment icons
16. **Others** (134 icons) - Miscellaneous icons
17. **System** (307 icons) - System and UI icons
18. **User Faces** (107 icons) - User and avatar icons
19. **Weather** (68 icons) - Weather icons

### Icon Naming Convention

Icons follow PascalCase naming with "Icon" suffix:

- `ArrowUpIcon`
- `SearchIcon`
- `CalendarIcon`
- `ExpandDiagonalSIcon`

### Example Icon Imports

```typescript
// Individual imports
import { ArrowUpIcon, SearchIcon, CalendarIcon } from '@frontal/icons';

// Via namespace (from @frontal/design-system)
import { Icons } from '@frontal/design-system';
```

## Utility Functions

### `getIconMetadata(componentName, path)`

Get icon metadata from component name and path.

**Parameters:**
- `componentName` (`string`): Component name (e.g., "ArrowUpIcon")
- `path` (`string`): File path (e.g., "Arrows/arrow-up")

**Returns:** `IconMetadata`

```typescript
interface IconMetadata {
  name: string;      // Component name
  category: string;  // Category name
  filename: string;  // Original filename
}
```

**Example:**
```typescript
import { getIconMetadata } from '@frontal/icons';

const metadata = getIconMetadata('ArrowUpIcon', 'Arrows/arrow-up');
// Returns: { name: 'ArrowUpIcon', category: 'Arrows', filename: 'arrow-up' }
```

### `groupIconsByCategory(icons)`

Group icons by category.

**Parameters:**
- `icons` (`IconMetadata[]`): Array of icon metadata

**Returns:** `Record<string, IconMetadata[]>`

**Example:**
```typescript
import { groupIconsByCategory } from '@frontal/icons';

const grouped = groupIconsByCategory(iconMetadataArray);
// Returns: { 'Arrows': [...], 'Business': [...], ... }
```

### `searchIcons(icons, query)`

Search icons by name, category, or filename.

**Parameters:**
- `icons` (`IconMetadata[]`): Array of icon metadata
- `query` (`string`): Search query

**Returns:** `IconMetadata[]` - Filtered array of matching icons

**Example:**
```typescript
import { searchIcons } from '@frontal/icons';

const results = searchIcons(iconMetadataArray, 'arrow');
// Returns icons matching 'arrow' in name, category, or filename
```

### `getCategories(icons)`

Get all unique categories from icons.

**Parameters:**
- `icons` (`IconMetadata[]`): Array of icon metadata

**Returns:** `string[]` - Sorted array of category names

**Example:**
```typescript
import { getCategories } from '@frontal/icons';

const categories = getCategories(iconMetadataArray);
// Returns: ['Arrows', 'Business', 'Communication', ...]
```

### `extractIconName(componentName)`

Extract icon name from component name.

**Parameters:**
- `componentName` (`string`): Component name (e.g., "ExpandDiagonalSIcon")

**Returns:** `string` - Kebab-case icon name (e.g., "expand-diagonal-s")

**Example:**
```typescript
import { extractIconName } from '@frontal/icons';

const name = extractIconName('ExpandDiagonalSIcon');
// Returns: 'expand-diagonal-s'
```

### `extractCategory(path)`

Extract category from file path.

**Parameters:**
- `path` (`string`): File path (e.g., "Arrows/expand-diagonal-s")

**Returns:** `string` - Category name (e.g., "Arrows")

**Example:**
```typescript
import { extractCategory } from '@frontal/icons';

const category = extractCategory('Arrows/expand-diagonal-s');
// Returns: 'Arrows'
```

### `normalizeSize(size?)`

Normalize size value to a number or string.

**Parameters:**
- `size` (`number | string | undefined`): Size value

**Returns:** `number | string` - Normalized size (default: 24)

**Example:**
```typescript
import { normalizeSize } from '@frontal/icons';

normalizeSize(undefined)  // Returns: 24
normalizeSize(16)         // Returns: 16
normalizeSize('20px')     // Returns: '20px'
```

### `normalizeColor(color?)`

Normalize color value.

**Parameters:**
- `color` (`string | undefined`): Color value

**Returns:** `string` - Normalized color (default: "currentColor")

**Example:**
```typescript
import { normalizeColor } from '@frontal/icons';

normalizeColor(undefined)  // Returns: 'currentColor'
normalizeColor('#ff0000')  // Returns: '#ff0000'
normalizeColor('blue')     // Returns: 'blue'
```

### `getIconProps(props?)`

Get icon props with defaults applied.

**Parameters:**
- `props` (`Partial<IconProps>`): Partial icon props

**Returns:** `Required<Pick<IconProps, "size" | "color">> & Omit<IconProps, "size" | "color">`

**Example:**
```typescript
import { getIconProps } from '@frontal/icons';

const props = getIconProps({ size: 16, color: 'blue' });
// Returns: { size: 16, color: 'blue', ... }
```

## Type Definitions

### `IconProps`

```typescript
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}
```

### `IconMetadata`

```typescript
interface IconMetadata {
  name: string;      // Component name (e.g., "ArrowUpIcon")
  category: string;  // Category name (e.g., "Arrows")
  filename: string;  // Original filename (e.g., "arrow-up")
}
```

### `IconComponent`

```typescript
type IconComponent = React.ComponentType<IconProps>;
```

## Module Exports

### Named Exports

All icons are available as named exports:

```typescript
export {
  ArrowUpIcon,
  ArrowDownIcon,
  SearchIcon,
  CalendarIcon,
  // ... 1600+ icons
};
```

### Namespace Export (via @frontal/design-system)

```typescript
import { Icons } from '@frontal/design-system';

// Access via namespace
<Icons.ArrowUpIcon />
<Icons.SearchIcon size={20} />
```

### Utility Exports

```typescript
export {
  getIconMetadata,
  groupIconsByCategory,
  searchIcons,
  getCategories,
  extractIconName,
  extractCategory,
  normalizeSize,
  normalizeColor,
  getIconProps,
};
```

### Type Exports

```typescript
export type {
  IconProps,
  IconMetadata,
  IconComponent,
};
```

## Icon Generation

Icons are generated from SVG files using a build script:

```bash
bun run generate
```

The generation process:
1. Reads SVG files from `icons/` directory
2. Converts them to React components using `@svgr/core`
3. Organizes them by category
4. Generates TypeScript types
5. Creates the main index file with all exports

## File Structure

```
icons/
  arrows/
    arrow-up.svg
    arrow-up.json        # Metadata
    arrow-down.svg
    ...
  business/
    ...
  ...

src/
  components/
    arrow-up-icon.tsx
    arrow-down-icon.tsx
    ...
  helpers.ts            # Helper functions
  utils.ts              # Utility functions
  types.ts              # Type definitions
  index.ts              # Main exports
```

## CSS Variables

Icons inherit color from their parent element by default using `currentColor`. You can override this:

```tsx
<ArrowUpIcon color="#ff0000" />
<SearchIcon className="text-blue-500" />
```

## Accessibility

Icons should be used with appropriate accessibility attributes:

```tsx
<button aria-label="Search">
  <SearchIcon aria-hidden="true" />
</button>
```

## Performance

- Icons are tree-shakeable (only import what you use)
- SVG format ensures scalability
- Minimal bundle size per icon
- Optimized for React rendering

