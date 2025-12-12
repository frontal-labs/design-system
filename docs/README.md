# Frontal Design System Documentation

Welcome to the Frontal Design System documentation. This monorepo contains a comprehensive collection of React components, utilities, and design tokens for building consistent user interfaces.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Packages](#packages)
- [Development](#development)
- [Contributing](#contributing)

## Overview

The Frontal Design System is a monorepo built with:
- **Turborepo** for monorepo management
- **pnpm** for package management
- **TypeScript** for type safety
- **React 19** for component development
- **Tailwind CSS** for styling
- **Vitest** for testing
- **Biome** for linting and formatting

### Key Features

- 🎨 **Comprehensive Component Library**: 70+ UI components
- 📦 **Modular Architecture**: Organized into focused packages
- 🎯 **Type-Safe**: Full TypeScript support
- ♿ **Accessible**: Built with accessibility in mind
- 🎭 **Themeable**: Support for light and dark themes
- 📊 **Charts**: Data visualization components
- 🎨 **Icons**: Extensive icon library (1800+ icons)
- 🧩 **Blocks**: Pre-built UI blocks and patterns

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/frontal-labs/design-system.git
cd design-system

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Quick Start

```tsx
// Import styles
import "@frontal/design-system/styles/globals.css";

// Import components
import { Button, Card } from "@frontal/design-system";

// Use in your app
function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Architecture

The design system is organized as a monorepo with the following structure:

```
frontal-design-system/
├── packages/
│   ├── design-system/    # Core package (re-exports all)
│   ├── ui/               # Base UI components
│   ├── blocks/           # Pre-built UI blocks
│   ├── charts/           # Chart components
│   ├── icons/            # Icon library
│   ├── colors/           # Color system
│   ├── typeface/         # Typography
│   ├── primitives/       # Low-level primitives
│   └── shared/           # Shared utilities
├── storybook/            # Storybook documentation
└── docs/                 # Documentation
```

## Packages

### Core Packages

- **[@frontal/design-system](./packages/DESIGN-SYSTEM.md)** - Main entry point, re-exports all packages
- **[@frontal/ui](./packages/UI.md)** - Base UI components (Button, Card, Input, etc.)
- **[@frontal/blocks](./packages/BLOCKS.md)** - Pre-built UI blocks and patterns
- **[@frontal/charts](./packages/CHARTS.md)** - Chart and data visualization components
- **[@frontal/icons](./packages/ICONS.md)** - Icon library with 1800+ icons

### Foundation Packages

- **[@frontal/colors](./packages/COLORS.md)** - Color system and design tokens
- **[@frontal/typeface](./packages/TYPEFACE.md)** - Typography and font system
- **[@frontal/primitives](./packages/PRIMITIVES.md)** - Low-level primitive components
- **[@frontal/shared](./packages/SHARED.md)** - Shared utilities and hooks

## Development

### Available Scripts

```bash
# Build all packages
pnpm build

# Run development mode
pnpm dev

# Run tests
pnpm test

# Type checking
pnpm type-check

# Linting
pnpm lint

# Format code
pnpm format

# Run Storybook
cd storybook && pnpm dev
```

### Development Workflow

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Build the packages
5. Submit a pull request

See [Development Guide](./DEVELOPMENT.md) for more details.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

### Types of Contributions

- 🐛 Bug reports
- 💡 Feature requests
- 📝 Documentation improvements
- 🔧 Code contributions (via pull requests)

## License

See [LICENSE.md](../LICENSE.md) for details.

## Resources

- [Storybook Documentation](http://localhost:6006) (when running locally)
- [GitHub Repository](https://github.com/frontal-labs/design-system)
- [Frontal Website](https://frontal.dev)

