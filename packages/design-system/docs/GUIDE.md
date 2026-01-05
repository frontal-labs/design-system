# Design System Usage Guide

Comprehensive guide for using the centralized `@frontal/design-system` package.

## Installation

```bash
bun install @frontal/design-system
```

## Quick Start

### Import Everything from One Package

```tsx
import {
  // UI Components
  Button,
  Card,
  Input,
  Select,
  
  // Colors
  gray,
  blue,
  semantic,
  
  // Icons
  Icons,
  ArrowUpIcon,
  
  // Typeface
  MaisonNeue,
  fonts,
  
  // Blocks
  blocks,
  
  // Utilities
  cn,
} from '@frontal/design-system';
```

### Import Styles

```tsx
import '@frontal/design-system/styles/globals.css';
```

This single import includes:
- Tailwind CSS base styles
- Color system from `@frontal/colors`
- Typography from `@frontal/typeface`
- UI component styles from `@frontal/ui`
- Chart styles from `@frontal/charts`
- Block styles from `@frontal/blocks`

## Package Structure

The `@frontal/design-system` package is a barrel package that re-exports from:

- `@frontal/blocks` - Pre-built UI blocks
- `@frontal/charts` - Chart components
- `@frontal/colors` - Color system
- `@frontal/icons` - Icon library
- `@frontal/typeface` - Typography
- `@frontal/ui` - UI component library

## Usage Patterns

### Pattern 1: Single Package Import (Recommended for Quick Start)

```tsx
import { Button, Card, Input, gray, ArrowUpIcon } from '@frontal/design-system';

function MyComponent() {
  return (
    <Card>
      <Button>
        <ArrowUpIcon />
        Click me
      </Button>
      <Input style={{ backgroundColor: gray.gray100 }} />
    </Card>
  );
}
```

### Pattern 2: Direct Package Imports (Better Tree-Shaking)

```tsx
import { Button, Card } from '@frontal/ui';
import { gray } from '@frontal/colors';
import { ArrowUpIcon } from '@frontal/icons';

function MyComponent() {
  return (
    <Card>
      <Button>
        <ArrowUpIcon />
        Click me
      </Button>
    </Card>
  );
}
```

### Pattern 3: Mixed Approach

```tsx
// Import commonly used items from design-system
import { Button, Card, Input } from '@frontal/design-system';

// Import specialized items directly
import { ChartAreaDefault } from '@frontal/charts/components/chart-area-default';
import { blocks } from '@frontal/blocks';
```

## Component Categories

### Form Components

```tsx
import {
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  DatePicker,
  Form,
  FormField,
} from '@frontal/design-system';
```

### Layout Components

```tsx
import {
  Card,
  Container,
  Grid,
  Flex,
  Stack,
  Separator,
} from '@frontal/design-system';
```

### Navigation Components

```tsx
import {
  Sidebar,
  Breadcrumb,
  Tabs,
  Menu,
  Pagination,
} from '@frontal/design-system';
```

### Feedback Components

```tsx
import {
  Alert,
  Toast,
  Dialog,
  Progress,
  Skeleton,
} from '@frontal/design-system';
```

### Data Display

```tsx
import {
  Table,
  Avatar,
  Badge,
  CodeBlock,
} from '@frontal/design-system';
```

## Colors

### Using Color Scales

```tsx
import { gray, blue, green } from '@frontal/design-system';

function MyComponent() {
  return (
    <div style={{ backgroundColor: gray.gray100 }}>
      <h1 style={{ color: blue.blue600 }}>Title</h1>
    </div>
  );
}
```

### Using Semantic Colors

```tsx
import { semantic } from '@frontal/design-system';

function ThemedComponent() {
  return (
    <div style={{
      backgroundColor: semantic.background,
      color: semantic.foreground,
    }}>
      <button style={{
        backgroundColor: semantic.primary,
        color: semantic.primaryForeground,
      }}>
        Click me
      </button>
    </div>
  );
}
```

### Using Color Utilities

```tsx
import { getColor, getScale } from '@frontal/design-system';

const primaryColor = getColor('blue', 500);
const blueScale = getScale('blue');
```

## Icons

### Individual Icon Imports

```tsx
import { ArrowUpIcon, SearchIcon, CalendarIcon } from '@frontal/design-system';

function MyComponent() {
  return (
    <div>
      <ArrowUpIcon />
      <SearchIcon size={20} />
      <CalendarIcon />
    </div>
  );
}
```

### Namespace Import

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

### Icon Utilities

```tsx
import {
  getIconMetadata,
  groupIconsByCategory,
  searchIcons,
} from '@frontal/design-system';
```

## Typography

### Using Fonts

```tsx
import { fonts, MaisonNeue, MaisonNeueMono } from '@frontal/design-system';

function Layout({ children }) {
  return (
    <html className={fonts}>
      <body>{children}</body>
    </html>
  );
}
```

## Blocks

### Using Pre-built Blocks

```tsx
import { blocks } from '@frontal/design-system';

function MyPage() {
  const dashboardBlock = blocks.find(b => b.name === 'dashboard-01');
  
  return (
    <div>
      {/* Render block */}
    </div>
  );
}
```

### Direct Block Import

```tsx
import Dashboard01 from '@frontal/blocks/components/dashboard-01/page';

function MyPage() {
  return <Dashboard01 />;
}
```

## Utilities

### Class Name Utility

```tsx
import { cn } from '@frontal/design-system';

function MyComponent({ className }) {
  return (
    <div className={cn('base-class', className)}>
      Content
    </div>
  );
}
```

### Hooks

```tsx
import { useSidebar, useIsMobile } from '@frontal/design-system';

function MyComponent() {
  const { isOpen, toggle } = useSidebar();
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
      <button onClick={toggle}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
    </div>
  );
}
```

## Complete Example

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  gray,
  semantic,
  ArrowUpIcon,
  cn,
} from '@frontal/design-system';

function Dashboard() {
  return (
    <div className={cn('p-6', 'bg-semantic-background')}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowUpIcon className="text-blue-500" />
            Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Search..." />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Button style={{ backgroundColor: semantic.primary }}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## Best Practices

### 1. Choose the Right Import Pattern

```tsx
// ✅ Good for quick development
import { Button, Card } from '@frontal/design-system';

// ✅ Better for production (tree-shaking)
import { Button } from '@frontal/ui';
import { Card } from '@frontal/ui';
```

### 2. Import Styles Once

```tsx
// ✅ Good - Import once at root
// app/layout.tsx
import '@frontal/design-system/styles/globals.css';

// ❌ Avoid - Multiple imports
// Multiple files importing styles
```

### 3. Use Semantic Colors

```tsx
// ✅ Good - Semantic colors
<div className="bg-semantic-background text-semantic-foreground" />

// ❌ Avoid - Hard-coded colors
<div style={{ backgroundColor: '#ffffff' }} />
```

### 4. Compose Components

```tsx
// ✅ Good - Composed components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Avoid - Monolithic components
<CardWithTitleAndContent title="Title" content="Content" />
```

### 5. Use TypeScript

```tsx
// ✅ Good - Typed imports
import type { ButtonProps, CardProps } from '@frontal/design-system';

function MyComponent(props: ButtonProps) {
  return <Button {...props} />;
}
```

## Tree-Shaking

For better bundle size, import directly from individual packages:

```tsx
// Smaller bundle
import { Button } from '@frontal/ui';
import { gray } from '@frontal/colors';

// Larger bundle (includes everything)
import { Button, gray } from '@frontal/design-system';
```

## TypeScript Support

All exports are fully typed:

```tsx
import type {
  ButtonProps,
  CardProps,
  ColorScale,
  IconProps,
} from '@frontal/design-system';
```

## Related Documentation

- [UI Components Guide](../ui/docs/GUIDE.md)
- [Colors Guide](../colors/docs/GUIDE.md)
- [Icons Guide](../icons/docs/GUIDE.md)
- [Blocks Documentation](../blocks/docs/README.md)
- [Charts Documentation](../charts/docs/README.md)
- [Typeface Documentation](../typeface/docs/USAGE.md)

