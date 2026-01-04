# Storybook

Interactive component library and design system documentation for Frontal.

## Quick Start

```bash
# From monorepo root
bun install

# Start Storybook
cd apps/storybook
bun run dev
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

## Documentation

Comprehensive documentation is available in the [`docs/`](./docs/) directory:

- **[Getting Started](./docs/GETTING-STARTED.md)** - Setup and installation
- **[Development Guide](./docs/DEVELOPMENT.md)** - Development workflow
- **[Creating Stories](./docs/STORIES.md)** - Writing component stories
- **[Configuration](./docs/CONFIGURATION.md)** - Configuration details
- **[Docker Setup](./docs/DOCKER.md)** - Containerized development

## Available Scripts

- `bun run dev` - Start development server (port 6006)
- `bun run build` - Build static Storybook
- `bun run chromatic` - Run visual regression tests
- `bun run type-check` - TypeScript type checking
- `bun run check` - Lint code
- `bun run format` - Format code

## Features

- 🎨 Component library browser
- 🌓 Light/dark theme support
- 🎛️ Interactive controls
- 📚 Auto-generated documentation
- 🧪 Visual regression testing
- ♿ Accessibility testing

For more information, see the [documentation](./docs/INDEX.md).
