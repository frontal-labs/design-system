# @frontal/blocks

Pre-built UI blocks and patterns for the Frontal Design System.

## Overview

`@frontal/blocks` provides ready-to-use UI blocks and patterns that combine multiple components into complete, functional interfaces.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Blocks

```tsx
import { Login01 } from "@frontal/blocks/components/login-01";
import { Dashboard01 } from "@frontal/blocks/components/dashboard-01";
```

## Available Blocks

### Authentication Blocks

#### Login Forms

- `login-01` - Basic login form
- `login-02` - Login with social buttons
- `login-03` - Split-screen login
- `login-04` - Centered login
- `login-05` - Minimal login

#### Signup Forms

- `signup-01` - Basic signup form
- `signup-02` - Signup with validation
- `signup-03` - Multi-step signup
- `signup-04` - Social signup
- `signup-05` - Minimal signup

#### OTP Forms

- `otp-01` - Basic OTP input
- `otp-02` - OTP with timer
- `otp-03` - OTP with resend
- `otp-04` - OTP with validation
- `otp-05` - Minimal OTP

### Dashboard Blocks

- `dashboard-01` - Complete dashboard with sidebar, header, and data table

### Sidebar Blocks

- `sidebar-01` - Basic sidebar
- `sidebar-02` - Sidebar with search
- `sidebar-03` - Minimal sidebar
- `sidebar-04` - Compact sidebar
- `sidebar-05` - Sidebar with navigation
- `sidebar-06` - Sidebar with opt-in
- `sidebar-07` - Sidebar with team switcher
- `sidebar-08` - Sidebar with secondary nav
- `sidebar-09` - Simple sidebar
- `sidebar-10` - Sidebar with workspaces
- `sidebar-11` - Minimal sidebar variant
- `sidebar-12` - Sidebar with calendar
- `sidebar-13` - Sidebar with settings
- `sidebar-14` - Sidebar variant
- `sidebar-15` - Dual sidebar layout
- `sidebar-16` - Advanced sidebar

### Calendar Blocks

- `calendar-01` through `calendar-32` - Various calendar layouts and patterns

### Product Blocks

- `products-01` - Products table with filters

## Block Examples

### Login Form

```tsx
import { Login01 } from "@frontal/blocks/components/login-01";

function LoginPage() {
  return <Login01 />;
}
```

### Dashboard

```tsx
import { Dashboard01 } from "@frontal/blocks/components/dashboard-01";

function DashboardPage() {
  return <Dashboard01 />;
}
```

### Sidebar

```tsx
import { Sidebar01 } from "@frontal/blocks/components/sidebar-01";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar01 />
      <main className="flex-1">
        {/* Main content */}
      </main>
    </div>
  );
}
```

## Customization

Blocks are built using components from `@frontal/ui` and can be customized:

1. **Copy the block code** into your project
2. **Modify the components** as needed
3. **Adjust styling** with Tailwind classes
4. **Add functionality** as required

## Block Structure

Each block typically includes:

```
block-name/
├── components/
│   └── [component].tsx    # Block components
├── page.tsx                # Main block component
└── data.json              # Sample data (if applicable)
```

## Dependencies

- `@frontal/icons` - Icon components

## Peer Dependencies

- `react` >= 19.2.0

## Best Practices

1. **Use blocks as starting points** - Customize them for your needs
2. **Extract reusable parts** - Create your own components from block parts
3. **Follow patterns** - Use similar patterns across your app
4. **Maintain consistency** - Keep styling consistent with the design system

## See Also

- [UI Components](./ui.md)
- [Design System Package](./design-system.md)
- [Storybook](../storybook/)

