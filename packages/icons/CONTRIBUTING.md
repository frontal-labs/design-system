# Contributing to @frontal-labs/icons

Thank you for your interest in contributing to `@frontal-labs/icons`!

This package is part of the Frontal Design System monorepo. For general contribution guidelines, please refer to the [root CONTRIBUTING.md](../../CONTRIBUTING.md).

## Package-Specific Guidelines

### Development

```bash
# Install dependencies
bun install

# Generate icons
bun generate

# Run tests
bun test

# Type check
bun type-check

# Lint
bun lint
```

### Adding New Icons

When adding new icons:

1. Add SVG files to the appropriate directory in `icons/`
2. Run `bun generate` to regenerate icon components
3. Export from `src/index.ts` if needed
4. Add documentation to `README.md`
5. Update `CHANGELOG.md` with your changes

### Icon Generation

Icons are automatically generated from SVG files using the `generate-icons.js` script. Ensure SVG files follow the project's icon guidelines.

## Questions?

If you have questions about contributing to this specific package, please open an issue or reach out to the maintainers.

