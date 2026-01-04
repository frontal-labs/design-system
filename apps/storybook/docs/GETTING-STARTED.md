# Getting Started with Storybook

This guide will help you set up and run Storybook for the first time.

## Prerequisites

- **Bun** >= 1.1.0 (recommended: 1.3.3)
- **Node.js** >= 18 (if not using Bun)
- Access to the monorepo workspace

## Installation

Since this is part of a monorepo, dependencies are managed at the root level:

```bash
# From the monorepo root
bun install
```

This will install all dependencies for the entire workspace, including Storybook and its dependencies.

## Running Storybook

### Development Mode

Start the Storybook development server:

```bash
# From the monorepo root
bun run dev

# Or from the storybook directory
cd apps/storybook
bun run dev
```

The Storybook interface will be available at [http://localhost:6006](http://localhost:6006).

### Production Build

Build a static version of Storybook:

```bash
cd apps/storybook
bun run build
```

The static files will be generated in the `storybook-static` directory. You can serve these files with any static file server.

## First Steps

1. **Explore Components**: Browse the component library in the sidebar
2. **Try Controls**: Use the Controls panel to modify component props
3. **Switch Themes**: Use the theme switcher to see components in light/dark mode
4. **Read Docs**: Check the Docs tab for component documentation

## Using Docker

If you prefer containerized development, see the [Docker Setup](./DOCKER.md) guide.

```bash
cd apps/storybook
docker-compose up
```

## Common Issues

### Port Already in Use

If port 6006 is already in use:

```bash
# Kill the process using the port (macOS/Linux)
lsof -ti:6006 | xargs kill -9

# Or specify a different port
bun run dev -- -p 6007
```

### Dependencies Not Found

If you see module resolution errors:

```bash
# Reinstall dependencies from monorepo root
cd ../..
bun install
```

### Build Errors

If the build fails:

```bash
# Clean build artifacts
bun run clean

# Rebuild
bun run build
```

## Next Steps

- Read the [Development Guide](./DEVELOPMENT.md) for workflow details
- Learn how to [Create Stories](./STORIES.md)
- Understand [Configuration](./CONFIGURATION.md) options

