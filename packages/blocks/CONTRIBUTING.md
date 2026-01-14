# Contributing to @frontal-ds/blocks

Thank you for your interest in contributing to `@frontal-ds/blocks`!

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

### Adding New Blocks

When adding new blocks:

1. Create components in `src/components/`
2. Export from `src/index.ts` (files are built to `dist/` during build)
3. Add styles to `src/styles/` if needed (CSS files are automatically copied to `dist/styles/` during build)
4. Add documentation to `README.md`
5. Update `CHANGELOG.md` with your changes

### Testing

Ensure all new blocks have appropriate tests and examples.

## Questions?

If you have questions about contributing to this specific package, please open an issue or reach out to the maintainers.

