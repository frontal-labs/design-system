# Contributing to @frontal/design-system

Thank you for your interest in contributing to `@frontal/design-system`!

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

### Package Structure

This is the main entry point package that re-exports all other packages. When making changes:

1. Ensure exports are properly configured in `src/index.ts`
2. Update documentation in `README.md`
3. Update `CHANGELOG.md` with your changes

### Testing

Ensure all changes maintain backward compatibility and are properly exported.

## Questions?

If you have questions about contributing to this specific package, please open an issue or reach out to the maintainers.

