# Frontal Design System Documentation

Welcome to the Frontal Design System documentation. This monorepo contains a comprehensive collection of React components, utilities, and design tokens for building consistent user interfaces.

## Table of Contents

- [Overview](#overview)
- [Getting Started](./GETTING-STARTED.md) - Installation and setup guide
- [Architecture](./ARCHITECTURE.md) - System architecture and design decisions
- [Packages](./PACKAGES.md) - Detailed package documentation
- [Components](./COMPONENTS.md) - Component reference guide
- [Theming](./THEMING.md) - Theme system and customization
- [Development](./DEVELOPMENT.md) - Development workflow and best practices
- [Deployment](./DEPLOYMENT.md) - Deployment and release guide
- [Troubleshooting](./TROUBLESHOOTING.md) - Common issues and solutions

## Overview

The Frontal Design System is a monorepo built with:

- **Turborepo** for monorepo management and task orchestration
- **Bun** for package management and runtime
- **TypeScript** for type safety
- **React 19** for component development
- **Tailwind CSS v4** for styling
- **Vitest** for testing
- **Biome** for linting and formatting
- **Storybook** for component documentation

### Key Features

- 🎨 **Comprehensive Component Library**: 70+ UI components
- 📦 **Modular Architecture**: Organized into focused packages
- 🎯 **Type-Safe**: Full TypeScript support with strict mode
- ♿ **Accessible**: Built with accessibility in mind (WCAG compliant)
- 🎭 **Themeable**: Support for light and dark themes
- 📊 **Charts**: Data visualization components with Recharts
- 🎨 **Icons**: Extensive icon library (1800+ icons)
- 🧩 **Blocks**: Pre-built UI blocks and patterns
- 🚀 **Performance**: Optimized builds with tree-shaking
- 📱 **Responsive**: Mobile-first design approach

## Quick Start

```bash
# Clone the repository
git clone https://github.com/frontal-labs/design-system.git
cd design-system

# Install dependencies (requires Bun >= 1.1.0)
bun install

# Build all packages
bun run build

# Start Storybook
cd apps/storybook
bun run dev
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

### Basic Usage

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

## Project Structure

```
design-system/
├── apps/
│   └── storybook/          # Storybook documentation app
├── packages/
│   ├── design-system/      # Core package (re-exports all)
│   ├── ui/                 # Base UI components (70+ components)
│   ├── blocks/             # Pre-built UI blocks and patterns
│   ├── charts/             # Chart and data visualization components
│   ├── icons/              # Icon library (1800+ icons)
│   ├── colors/             # Color system and design tokens
│   └── typeface/           # Typography and font system
├── internal/               # Internal tooling packages
│   ├── next-config/        # Next.js configuration utilities
│   └── typescript-config/  # TypeScript configuration presets
├── tools/                  # Development tools
│   ├── constraints/        # Monorepo constraints
│   └── generators/         # Code generators
├── example/                # Example Next.js application
└── docs/                    # Documentation (this directory)
```

## Packages

### Core Packages

- **[@frontal/design-system](./PACKAGES.md#frontaldesign-system)** - Main entry point, re-exports all packages
- **[@frontal-labs/ui](./PACKAGES.md#frontalui)** - Base UI components (Button, Card, Input, etc.)
- **[@frontal-labs/blocks](./PACKAGES.md#frontalblocks)** - Pre-built UI blocks and patterns
- **[@frontal-labs/charts](./PACKAGES.md#frontalcharts)** - Chart and data visualization components
- **[@frontal-labs/icons](./PACKAGES.md#frontalicons)** - Icon library with 1800+ icons

### Foundation Packages

- **[@frontal-labs/colors](./PACKAGES.md#frontalcolors)** - Color system and design tokens
- **[@frontal-labs/typeface](./PACKAGES.md#frontaltypeface)** - Typography and font system

See [Packages Documentation](./PACKAGES.md) for detailed information about each package.

## Development

### Prerequisites

- **Bun** >= 1.1.0 (recommended: 1.3.3)
- **Node.js** >= 18 (if not using Bun)
- **Git**

### Available Scripts

```bash
# Build all packages
bun run build

# Development mode (watch)
bun run dev

# Run tests
bun run test

# Type checking
bun run type-check

# Linting
bun run lint
bun run lint:fix

# Format code
bun run format

# Spell checking
bun run spell
bun run spell:fix

# Clean build artifacts
bun run clean

# Bundle analysis
bun run analyze
```

### Development Workflow

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Build the packages
5. Submit a pull request

See [Development Guide](./DEVELOPMENT.md) for detailed workflow instructions.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

### Types of Contributions

- 🐛 **Bug reports** - Help us identify and fix issues
- 💡 **Feature requests** - Suggest new features or improvements
- 📝 **Documentation** - Improve documentation and examples
- 🔧 **Code contributions** - Submit pull requests with improvements

## Resources

- **Storybook**: [http://localhost:6006](http://localhost:6006) (when running locally)
- **GitHub Repository**: [https://github.com/frontal-labs/design-system](https://github.com/frontal-labs/design-system)
- **Website**: [https://frontal.dev](https://frontal.dev)
- **Documentation**: This directory

## License

See [LICENSE.md](../LICENSE.md) for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/frontal-labs/design-system/issues)
- **Documentation**: This directory
- **Questions**: Open a discussion on GitHub
