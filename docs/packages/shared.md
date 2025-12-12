# @frontal/shared

Shared utilities and hooks for the Frontal Design System.

## Overview

`@frontal/shared` provides common utilities, hooks, and helper functions used across the design system packages.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Utilities

```tsx
import { cn } from "@frontal/shared";
import { useMediaQuery } from "@frontal/shared";
```

## Available Utilities

### Class Name Utility

```tsx
import { cn } from "@frontal/shared";

// Merge class names
const className = cn("base-class", condition && "conditional-class");
```

### Hooks

```tsx
import { useMediaQuery } from "@frontal/shared";

function MyComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return <div>{isMobile ? "Mobile" : "Desktop"}</div>;
}
```

## Common Utilities

- **cn** - Class name merger (tailwind-merge + clsx)
- **format** - Formatting utilities
- **validate** - Validation helpers
- **debounce** - Debounce function
- **throttle** - Throttle function

## Common Hooks

- **useMediaQuery** - Media query hook
- **useClickOutside** - Click outside detection
- **useLocalStorage** - Local storage hook
- **useDebounce** - Debounced value hook

## Usage Examples

### Class Name Utility

```tsx
import { cn } from "@frontal/shared";

function Button({ className, variant }) {
  return (
    <button
      className={cn(
        "base-button",
        variant === "primary" && "button-primary",
        className
      )}
    />
  );
}
```

### Media Query Hook

```tsx
import { useMediaQuery } from "@frontal/shared";

function ResponsiveComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return (
    <div>
      {isMobile ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}
    </div>
  );
}
```

## Dependencies

- `clsx` - Class name utility
- `tailwind-merge` - Tailwind class merger

## Peer Dependencies

- `react` >= 19.2.0

## See Also

- [UI Components](./UI.md)
- [Design System Package](./DESIGN-SYSTEM.md)
- [Development Guide](../DEVELOPMENT.md)

