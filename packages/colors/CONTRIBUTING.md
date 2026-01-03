# Contributing to @frontal/colors

Thank you for your interest in contributing to `@frontal/colors`!

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

### Adding New Colors

When adding new color scales or utilities:

1. Create color scales in `src/scales/`
2. Export from `src/index.ts`
3. Add documentation to `README.md`
4. Update `CHANGELOG.md` with your changes

### Testing

Ensure all new colors have appropriate tests and examples.

## Questions?

If you have questions about contributing to this specific package, please open an issue or reach out to the maintainers.

