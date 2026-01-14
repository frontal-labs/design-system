# Icons Usage Guide

Comprehensive guide for using `@frontal-ds/icons` in your applications.

## Installation

```bash
bun install @frontal-ds/icons
```

## Quick Start

### Basic Usage

```tsx
import { ArrowUpIcon, SearchIcon } from '@frontal-ds/icons';

function MyComponent() {
  return (
    <div>
      <ArrowUpIcon />
      <SearchIcon size={20} />
    </div>
  );
}
```

### Via Namespace (from @frontal/design-system)

```tsx
import { Icons } from '@frontal/design-system';

function MyComponent() {
  return (
    <div>
      <Icons.ArrowUpIcon />
      <Icons.SearchIcon size={20} />
    </div>
  );
}
```

## Icon Sizes

### Standard Sizes

```tsx
import { ArrowUpIcon } from '@frontal-ds/icons';

// Small (16px) - Inline with text
<ArrowUpIcon size={16} />

// Medium (20px) - Buttons
<ArrowUpIcon size={20} />

// Default (24px) - Standard UI elements
<ArrowUpIcon />

// Large (32px) - Feature highlights
<ArrowUpIcon size={32} />

// Extra Large (48px+) - Hero sections
<ArrowUpIcon size={48} />
```

### Responsive Sizes

```tsx
import { ArrowUpIcon } from '@frontal-ds/icons';

// Using Tailwind classes
<ArrowUpIcon className="w-4 h-4 sm:w-6 sm:h-6" />

// Using size prop with responsive values
<ArrowUpIcon size="1rem" className="sm:size-6" />
```

## Icon Colors

### Using Current Color (Default)

Icons inherit color from their parent element:

```tsx
<div className="text-blue-500">
  <ArrowUpIcon /> {/* Inherits blue-500 */}
</div>

<button className="text-white">
  <SearchIcon /> {/* Inherits white */}
</button>
```

### Custom Colors

```tsx
import { ArrowUpIcon } from '@frontal-ds/icons';

// Using color prop
<ArrowUpIcon color="#ff0000" />
<ArrowUpIcon color="rgb(255, 0, 0)" />
<ArrowUpIcon color="var(--primary-color)" />

// Using className with Tailwind
<ArrowUpIcon className="text-blue-500" />
<ArrowUpIcon className="text-red-500 hover:text-red-700" />
```

### Theme-Aware Colors

```tsx
import { ArrowUpIcon } from '@frontal-ds/icons';

<ArrowUpIcon className="text-foreground" />
<ArrowUpIcon className="text-primary" />
<ArrowUpIcon className="text-muted-foreground" />
```

## Common Patterns

### Icons in Buttons

```tsx
import { Button } from '@frontal-ds/ui';
import { ArrowUpIcon, SearchIcon } from '@frontal-ds/icons';

function ButtonExamples() {
  return (
    <div className="flex gap-2">
      <Button>
        <ArrowUpIcon className="mr-2" />
        Upload
      </Button>
      
      <Button variant="outline">
        <SearchIcon size={16} />
        Search
      </Button>
      
      <Button size="icon">
        <SearchIcon />
      </Button>
    </div>
  );
}
```

### Icons in Navigation

```tsx
import { SidebarMenuButton } from '@frontal-ds/ui';
import { HomeIcon, SettingsIcon, UserIcon } from '@frontal-ds/icons';

function NavigationExample() {
  return (
    <nav>
      <SidebarMenuButton>
        <HomeIcon className="mr-2" />
        Home
      </SidebarMenuButton>
      <SidebarMenuButton>
        <SettingsIcon className="mr-2" />
        Settings
      </SidebarMenuButton>
      <SidebarMenuButton>
        <UserIcon className="mr-2" />
        Profile
      </SidebarMenuButton>
    </nav>
  );
}
```

### Icons in Forms

```tsx
import { Input } from '@frontal-ds/ui';
import { SearchIcon, MailIcon } from '@frontal-ds/icons';

function FormExamples() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-10" placeholder="Search..." />
      </div>
      
      <div className="relative">
        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-10" type="email" placeholder="Email" />
      </div>
    </div>
  );
}
```

### Icons in Cards

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@frontal-ds/ui';
import { CheckIcon, AlertIcon } from '@frontal-ds/icons';

function CardExamples() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckIcon className="text-green-500" />
            Success
          </CardTitle>
        </CardHeader>
        <CardContent>Operation completed</CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertIcon className="text-yellow-500" />
            Warning
          </CardTitle>
        </CardHeader>
        <CardContent>Please review</CardContent>
      </Card>
    </div>
  );
}
```

## Icon Utilities

### Searching Icons

```tsx
import { searchIcons, getIconMetadata } from '@frontal-ds/icons';

// Get metadata for all icons
const allIcons = [
  getIconMetadata('ArrowUpIcon', 'Arrows/arrow-up'),
  getIconMetadata('SearchIcon', 'System/search'),
  // ... more icons
];

// Search icons
const arrowIcons = searchIcons(allIcons, 'arrow');
const searchResults = searchIcons(allIcons, 'search');
```

### Grouping by Category

```tsx
import { groupIconsByCategory, getIconMetadata } from '@frontal-ds/icons';

const icons = [
  getIconMetadata('ArrowUpIcon', 'Arrows/arrow-up'),
  getIconMetadata('SearchIcon', 'System/search'),
  getIconMetadata('HomeIcon', 'Buildings/home'),
];

const grouped = groupIconsByCategory(icons);
// Returns: { 'Arrows': [...], 'System': [...], 'Buildings': [...] }
```

### Icon Picker Component

```tsx
import { useState } from 'react';
import { searchIcons, getCategories, getIconMetadata } from '@frontal-ds/icons';
import * as Icons from '@frontal-ds/icons';

function IconPicker() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get all icons (in real app, load from metadata)
  const allIcons = Object.keys(Icons)
    .filter(key => key.endsWith('Icon'))
    .map(name => getIconMetadata(name, ''));
  
  const filteredIcons = search
    ? searchIcons(allIcons, search)
    : allIcons;
  
  const categories = getCategories(allIcons);
  
  return (
    <div>
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search icons..."
      />
      <select value={selectedCategory || ''} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="grid grid-cols-8 gap-2">
        {filteredIcons.map(icon => {
          const IconComponent = Icons[icon.name as keyof typeof Icons];
          return (
            <button key={icon.name}>
              <IconComponent size={24} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
```

## Animation

### Hover Effects

```tsx
import { ArrowUpIcon } from '@frontal-ds/icons';

<ArrowUpIcon className="transition-transform hover:scale-110" />
<ArrowUpIcon className="transition-colors hover:text-blue-500" />
```

### Rotation

```tsx
import { ArrowUpIcon } from '@frontal-ds/icons';

// Rotate on hover
<ArrowUpIcon className="transition-transform hover:rotate-180" />

// Continuous rotation
<ArrowUpIcon className="animate-spin" />
```

### Pulse

```tsx
import { NotificationIcon } from '@frontal-ds/icons';

<NotificationIcon className="animate-pulse text-red-500" />
```

## Accessibility

### With Labels

```tsx
import { SearchIcon } from '@frontal-ds/icons';

<button aria-label="Search">
  <SearchIcon aria-hidden="true" />
</button>
```

### Decorative Icons

```tsx
import { ArrowUpIcon } from '@frontal-ds/icons';

<div>
  <ArrowUpIcon aria-hidden="true" />
  <span>Upload file</span>
</div>
```

### Interactive Icons

```tsx
import { EditIcon } from '@frontal-ds/icons';

<button 
  onClick={handleEdit}
  aria-label="Edit item"
  className="p-2 hover:bg-gray-100"
>
  <EditIcon aria-hidden="true" />
</button>
```

## Best Practices

### 1. Use Appropriate Sizes

```tsx
// ✅ Good - Consistent sizing
<Button size="small">
  <Icon size={16} />
  Small Button
</Button>

<Button>
  <Icon size={20} />
  Medium Button
</Button>

// ❌ Avoid - Inconsistent sizing
<Button size="small">
  <Icon size={32} /> {/* Too large */}
</Button>
```

### 2. Provide Accessibility

```tsx
// ✅ Good - Accessible
<button aria-label="Delete">
  <DeleteIcon aria-hidden="true" />
</button>

// ❌ Avoid - Missing labels
<button>
  <DeleteIcon />
</button>
```

### 3. Use Semantic Colors

```tsx
// ✅ Good - Semantic colors
<CheckIcon className="text-green-500" />
<AlertIcon className="text-yellow-500" />
<ErrorIcon className="text-red-500" />

// ❌ Avoid - Hard-coded colors
<CheckIcon color="#00ff00" />
```

### 4. Consistent Spacing

```tsx
// ✅ Good - Consistent spacing
<div className="flex items-center gap-2">
  <Icon />
  <span>Text</span>
</div>

// ❌ Avoid - Inconsistent spacing
<div>
  <Icon />
  <span>Text</span>
</div>
```

### 5. Tree-Shaking

```tsx
// ✅ Good - Tree-shakeable
import { ArrowUpIcon } from '@frontal-ds/icons';

// ❌ Avoid - Importing everything
import * as Icons from '@frontal-ds/icons';
```

## Migration from lucide-react

If migrating from `lucide-react`:

1. Find equivalent icon in `@frontal-ds/icons`
2. Update import statement
3. Icon names follow same PascalCase convention
4. Props are compatible (size, color, className)

Example migration:

```tsx
// Before (lucide-react)
import { ArrowUp } from 'lucide-react';
<ArrowUp size={20} />

// After (@frontal-ds/icons)
import { ArrowUpIcon } from '@frontal-ds/icons';
<ArrowUpIcon size={20} />
```

## Troubleshooting

### Icons Not Rendering

- Check import path: `import { IconName } from '@frontal-ds/icons'`
- Verify icon name ends with "Icon" suffix
- Ensure icon exists in the package

### Wrong Size

- Check size prop value
- Verify className isn't overriding size
- Use explicit size values for consistency

### Wrong Color

- Check parent element color
- Verify className color classes
- Ensure color prop is set correctly

### TypeScript Errors

- Import types: `import type { IconProps } from '@frontal-ds/icons'`
- Use correct icon name format
- Check that icon is exported

