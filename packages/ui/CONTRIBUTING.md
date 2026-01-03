# Contributing to @frontal/ui

Thank you for your interest in contributing to `@frontal/ui`!

This package is part of the Frontal Design System monorepo. For general contribution guidelines, please refer to the [root CONTRIBUTING.md](../../CONTRIBUTING.md).

## Package-Specific Guidelines

### Development

```bash
# Install dependencies
bun install

# Run development mode
bun dev

# Run tests
bun test

# Type check
bun type-check

# Lint
bun lint
```

### Adding New Components

When adding new UI components:

1. Create components in `src/components/`
2. Export from `src/index.ts`
3. Add styles to `src/styles/` if needed
4. Add documentation to `README.md`
5. Update `CHANGELOG.md` with your changes

### Testing

Ensure all new components have appropriate tests and are accessible.

## Questions?

If you have questions about contributing to this specific package, please open an issue or reach out to the maintainers.

