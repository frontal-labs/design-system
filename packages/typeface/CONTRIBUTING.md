# Contributing to @frontal/typeface

Thank you for your interest in contributing to `@frontal/typeface`!

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

### Adding New Fonts

When adding new fonts or typography utilities:

1. Add font files to `fonts/` directory
2. Update font loading in `src/lib/`
3. Export from `src/index.ts`
4. Add documentation to `README.md` and `docs/`
5. Update `CHANGELOG.md` with your changes

### Testing

Ensure all new fonts have appropriate tests and fallback configurations.

## Questions?

If you have questions about contributing to this specific package, please open an issue or reach out to the maintainers.

