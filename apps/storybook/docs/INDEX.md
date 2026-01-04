# Storybook Documentation

This directory contains comprehensive documentation for the Storybook application, which serves as the interactive component library and design system documentation for Frontal.

## Overview

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components in isolation.

## Documentation Index

- **[Getting Started](./GETTING-STARTED.md)** - Setup instructions and first steps
- **[Development Guide](./DEVELOPMENT.md)** - Development workflow and best practices
- **[Creating Stories](./STORIES.md)** - Guide to writing and organizing stories
- **[Configuration](./CONFIGURATION.md)** - Storybook configuration details
- **[Docker Setup](./DOCKER.md)** - Containerized development and deployment

## Quick Start

```bash
# Install dependencies (from monorepo root)
bun install

# Start Storybook development server
cd apps/storybook
bun run dev
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

## Features

- **Component Library** - Browse and interact with all design system components
- **Theme Support** - Switch between light and dark themes
- **Interactive Controls** - Modify component props in real-time
- **Documentation** - Auto-generated documentation from component stories
- **Visual Testing** - Integration with Chromatic for visual regression testing
- **Accessibility** - Built-in accessibility testing and guidelines

## Tech Stack

- **Storybook** v10.1.4 - Component development environment
- **Next.js** v16.0.10 - Framework integration
- **React** v19.2.1 - UI library
- **Bun** v1.3.3 - Package manager and runtime
- **TypeScript** v5.9.3 - Type safety
- **Tailwind CSS** v4.1.14 - Styling

## Available Scripts

- `bun run dev` - Start development server on port 6006
- `bun run build` - Build static Storybook for production
- `bun run chromatic` - Run visual regression tests
- `bun run type-check` - TypeScript type checking
- `bun run check` - Lint code with Biome
- `bun run format` - Format code with Biome

## Project Structure

```text
apps/storybook/
├── .storybook/          # Storybook configuration
│   ├── main.ts          # Main configuration
│   ├── preview.tsx      # Global decorators and parameters
│   └── preview-head.html # Custom HTML head
├── stories/             # Component stories
│   ├── *.stories.tsx    # Story files for each component
│   └── ...
├── public/              # Static assets
├── docs/                # Documentation (this directory)
└── package.json         # Dependencies and scripts
```

## Contributing

When adding new components or stories:

1. Create a new story file in `stories/` directory
2. Follow the existing story patterns and conventions
3. Include comprehensive examples and variants
4. Add JSDoc comments for documentation
5. Test in both light and dark themes

See [Creating Stories](./STORIES.md) for detailed guidelines.

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook for Next.js](https://storybook.js.org/docs/get-started/nextjs)
- [Chromatic Documentation](https://www.chromatic.com/docs)
