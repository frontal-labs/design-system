# @frontal/blocks Documentation

## Overview

The `@frontal/blocks` package provides a comprehensive collection of pre-built UI blocks and components for the Frontal design system. These blocks are ready-to-use implementations of common UI patterns including dashboards, sidebars, calendars, authentication forms, and more.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

```bash
pnpm install @frontal/blocks
```

## Available Blocks

### Dashboard Blocks
- **dashboard-01**: A complete dashboard with sidebar, interactive charts, and data tables

### Sidebar Blocks
The package includes 16 different sidebar variations:
- **sidebar-01** through **sidebar-16**: Various sidebar layouts with different navigation patterns, user menus, workspaces, and features

### Calendar Blocks
- **calendar-01** through **calendar-32**: Multiple calendar implementations with different date picker styles and interactions

### Authentication Blocks
- **login-01** through **login-05**: Login form variations
- **signup-01** through **signup-05**: Signup form variations
- **otp-01** through **otp-05**: OTP (One-Time Password) verification forms

### Product Blocks
- **products-01**: Product listing with data table

## Usage

### Importing Blocks

Blocks are available through the blocks registry:

```tsx
import { blocks } from '@frontal/blocks';

// Access a specific block
const dashboardBlock = blocks.find(block => block.name === 'dashboard-01');
```

### Using Block Components

Blocks are example implementations that can be imported directly:

```tsx
// Import a specific block component
import Dashboard01 from '@frontal/blocks/components/dashboard-01/page';
import Sidebar01 from '@frontal/blocks/components/sidebar-01/page';
```

### Block Registry Structure

Each block in the registry contains:
- `name`: Unique identifier for the block
- `type`: Always `"registry:block"`
- `description`: Human-readable description
- `dependencies`: External npm dependencies required
- `registryDependencies`: Other registry components needed
- `files`: Array of component files included in the block
- `categories`: Array of category tags
- `meta`: Additional metadata (e.g., iframe height for previews)

## Dependencies

Blocks may require additional dependencies:
- `@dnd-kit/*`: For drag-and-drop functionality
- `@tanstack/react-table`: For data tables
- `zod`: For form validation
- `recharts`: For chart components

## Icons

All blocks use icons from `@frontal/icons` package. The package has been migrated from `lucide-react` to use the Frontal icon library.

## Styling

Blocks use Tailwind CSS and are styled according to the Frontal design system. Import the consolidated CSS from `@frontal/design-system`:

```tsx
import '@frontal/design-system/styles/globals.css';
```

## Development

### Building

```bash
pnpm build
```

### Testing

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
```

### Type Checking

```bash
pnpm type-check
```

### Linting

```bash
pnpm lint
pnpm lint:fix
```

## Block Categories

Blocks are organized into the following categories:
- `dashboard`: Dashboard layouts
- `sidebar`: Sidebar navigation components
- `calendar`: Calendar and date picker components
- `authentication`: Login, signup, and OTP forms
- `products`: Product listing and management

## Contributing

When adding new blocks:
1. Create the block components in `src/components/`
2. Add the block definition to `src/components/_registry.ts`
3. Include all necessary dependencies
4. Use `@frontal/icons` for all icons
5. Follow the existing block structure and naming conventions
6. Add appropriate tests

## License

See [LICENSE.md](../LICENSE.md) for details.

