# Components Package Guide

Guide for using `@frontal/components` package.

## Overview

The `@frontal/components` package provides shared UI components, hooks, and utilities used across the Frontal design system. This package serves as a foundation for building consistent user interfaces.

## Installation

```bash
bun install @frontal/components
```

## Package Structure

```
src/
  components/     # React components
  hooks/          # Custom React hooks
  lib/            # Utility libraries
  styles/         # Component styles
  index.ts        # Main exports
```

## Usage

### Importing Components

```tsx
import { /* components */ } from '@frontal/components';
```

### Importing Styles

```tsx
import '@frontal/components/styles/styles.css';
```

Or use the consolidated styles from `@frontal/design-system`:

```tsx
import '@frontal/design-system/styles/globals.css';
```

## Components

This package currently serves as a foundation for shared components. Most UI components are available from `@frontal/ui`, while pre-built blocks are available from `@frontal/blocks`.

### When to Use This Package

- Building custom components that extend the design system
- Creating shared utilities and helpers
- Developing hooks used across multiple packages
- Building internal tooling components

## Hooks

Custom React hooks are available from this package:

```tsx
import { /* hooks */ } from '@frontal/components';
```

## Related Packages

### @frontal/ui

Main UI component library with 80+ components:

```tsx
import { Button, Card, Input } from '@frontal/ui';
```

### @frontal/blocks

Pre-built UI blocks and page components:

```tsx
import { blocks } from '@frontal/blocks';
```

### @frontal/icons

Icon library used by components:

```tsx
import { ArrowUpIcon } from '@frontal/icons';
```

## Development

### Building

```bash
bun run build
```

### Type Checking

```bash
bun run type-check
```

### Linting

```bash
bun run lint
bun run lint:fix
```

### Testing

```bash
bun test
```

## Contributing

When adding new components or hooks:

1. Follow the existing component structure
2. Use TypeScript for all components
3. Include proper prop types and documentation
4. Use `@frontal/icons` for icons
5. Follow the design system styling conventions
6. Add appropriate tests

## Best Practices

### Component Organization

- Keep components focused and single-purpose
- Use composition over configuration
- Follow the design system patterns
- Ensure accessibility compliance

### Styling

- Use Tailwind CSS classes
- Follow design system tokens
- Support dark mode
- Ensure responsive design

### TypeScript

- Use proper types for all props
- Export types for consumers
- Use type inference where appropriate
- Document complex types

## Integration

### With @frontal/ui

```tsx
import { Button } from '@frontal/ui';
import { /* custom component */ } from '@frontal/components';

function MyComponent() {
  return (
    <div>
      <Button>UI Component</Button>
      <CustomComponent>Custom Component</CustomComponent>
    </div>
  );
}
```

### With @frontal/blocks

```tsx
import { blocks } from '@frontal/blocks';
import { /* utilities */ } from '@frontal/components';

function MyPage() {
  const dashboardBlock = blocks.find(b => b.name === 'dashboard-01');
  // Use utilities to enhance blocks
}
```

## Future Development

This package is designed to grow with the design system. Future additions may include:

- Shared form components
- Common layout patterns
- Utility components
- Shared hooks
- Helper functions

