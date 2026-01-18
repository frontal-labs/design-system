# Troubleshooting Guide

Common issues and solutions when working with the Frontal Design System.

## Installation Issues

### Bun Not Found

**Error**: `bun: command not found`

**Solution**:

```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash

# Or using npm
npm install -g bun

# Verify installation
bun --version
```

### Dependency Installation Fails

**Error**: `Failed to install dependencies`

**Solutions**:

```bash
# Clear Bun cache
rm -rf node_modules/.bun
bun install

# Clear all caches and reinstall
rm -rf node_modules
rm -rf .bun
bun install

# Check Bun version (should be >= 1.1.0)
bun --version
```

### Workspace Resolution Issues

**Error**: `Cannot find module '@frontal-labs/ui'`

**Solutions**:

```bash
# Ensure you're in the monorepo root
cd /path/to/design-system

# Reinstall dependencies
bun install

# Verify workspace packages exist
ls packages/ui
```

## Build Issues

### Build Fails

**Error**: `Build failed`

**Solutions**:

```bash
# Clean build artifacts
bun run clean

# Reinstall dependencies
bun install

# Rebuild
bun run build

# Check for TypeScript errors
bun run type-check
```

### TypeScript Errors

**Error**: `Type errors found`

**Solutions**:

```bash
# Type check all packages
bun run type-check

# Clear TypeScript cache
find . -name "tsconfig.tsbuildinfo" -delete

# Rebuild
bun run build
```

### Module Resolution Errors

**Error**: `Cannot resolve module`

**Solutions**:

1. Check `tsconfig.json` paths configuration
2. Verify package exports in `package.json`
3. Ensure workspace dependencies are installed
4. Clear caches and rebuild

```bash
bun run clean
bun install
bun run build
```

## Development Issues

### Hot Reload Not Working

**Issue**: Changes not reflecting in development

**Solutions**:

```bash
# Restart development server
# Stop current process (Ctrl+C)
bun run dev

# Clear cache
rm -rf .turbo
rm -rf node_modules/.cache
bun run dev
```

### Storybook Not Starting

**Error**: `Storybook failed to start`

**Solutions**:

```bash
cd apps/storybook

# Clear Storybook cache
rm -rf .cache
rm -rf storybook-static

# Reinstall dependencies
bun install

# Restart Storybook
bun run dev
```

### Port Already in Use

**Error**: `Port 6006 is already in use`

**Solutions**:

```bash
# Find process using port
lsof -ti:6006

# Kill process
lsof -ti:6006 | xargs kill -9

# Or use different port
bun run dev -- -p 6007
```

## Type Issues

### Type Errors in IDE

**Issue**: TypeScript errors in IDE but build succeeds

**Solutions**:

1. Restart TypeScript server in IDE
2. Reload window (VS Code: Cmd+Shift+P → "Reload Window")
3. Check IDE TypeScript version matches project
4. Clear IDE cache

### Missing Type Definitions

**Error**: `Cannot find type definition file`

**Solutions**:

```bash
# Rebuild to generate types
bun run build

# Check dist/ directory has .d.ts files
ls packages/ui/dist/*.d.ts
```

## Styling Issues

### Styles Not Loading

**Issue**: Components render without styles

**Solutions**:

1. Ensure global styles are imported:
   ```tsx
   import "@frontal/design-system/styles/globals.css";
   ```

2. Check PostCSS configuration
3. Verify Tailwind CSS is configured
4. Check CSS import order

### Tailwind Classes Not Working

**Issue**: Tailwind utility classes not applying

**Solutions**:

1. Verify Tailwind config includes design system paths
2. Check PostCSS configuration
3. Ensure Tailwind CSS is installed
4. Clear build cache and rebuild

```bash
bun run clean
bun run build
```

### Theme Not Switching

**Issue**: Theme toggle not working

**Solutions**:

1. Ensure ThemeProvider is set up correctly
2. Check theme attribute in HTML
3. Verify CSS variables are loaded
4. Check browser console for errors

## Testing Issues

### Tests Failing

**Error**: `Tests failed`

**Solutions**:

```bash
# Run tests with verbose output
bun test --verbose

# Clear test cache
rm -rf node_modules/.cache
bun test

# Run specific test file
bun test packages/ui/tests/button.test.tsx
```

### Coverage Issues

**Issue**: Coverage not generating

**Solutions**:

```bash
# Run with coverage
bun test --coverage

# Check coverage directory
ls coverage/
```

## Performance Issues

### Slow Builds

**Issue**: Builds taking too long

**Solutions**:

1. Enable Turborepo caching
2. Check for unnecessary dependencies
3. Use incremental builds
4. Clear cache if corrupted

```bash
# Clear Turborepo cache
rm -rf .turbo

# Rebuild
bun run build
```

### Large Bundle Size

**Issue**: Bundle size too large

**Solutions**:

1. Use tree-shaking (import specific components)
2. Check for duplicate dependencies
3. Analyze bundle:

```bash
bun run analyze
```

## Git Issues

### Merge Conflicts

**Issue**: Conflicts in package files

**Solutions**:

1. Resolve conflicts manually
2. Reinstall dependencies after merge
3. Rebuild packages

```bash
git pull origin main
# Resolve conflicts
bun install
bun run build
```

### Husky Hooks Not Running

**Issue**: Pre-commit hooks not executing

**Solutions**:

```bash
# Reinstall Husky
bun run prepare

# Verify hooks exist
ls .husky/
```

## Common Error Messages

### "Cannot find module"

**Cause**: Module not installed or path incorrect

**Solution**: Check import path and run `bun install`

### "Module not found"

**Cause**: Package not in dependencies

**Solution**: Add package to `package.json` and run `bun install`

### "Type instantiation is excessively deep"

**Cause**: Complex type inference

**Solution**: Simplify types or add explicit type annotations

### "Property does not exist on type"

**Cause**: Type mismatch or missing property

**Solution**: Check component props and type definitions

## Getting Help

If you're still experiencing issues:

1. **Check Documentation**: Review relevant docs
2. **Search Issues**: Check GitHub issues for similar problems
3. **Create Issue**: Open a new issue with:
   - Error message
   - Steps to reproduce
   - Environment details (Bun version, OS, etc.)
   - Relevant code snippets

## Debugging Tips

### Enable Verbose Logging

```bash
# Turborepo verbose
bunx turbo build --verbose

# Bun verbose
bun install --verbose
```

### Check Package Versions

```bash
# Check Bun version
bun --version

# Check package versions
bun list

# Check workspace packages
ls packages/
```

### Inspect Build Output

```bash
# Check dist files
ls packages/ui/dist/

# Check for source maps
ls packages/ui/dist/*.map
```

## Prevention

To avoid common issues:

1. **Keep dependencies updated**: `bun update`
2. **Run checks before committing**: `bun run lint && bun run type-check`
3. **Clean regularly**: `bun run clean`
4. **Use consistent Bun version**: Specify in `.bun-version` or `package.json`
5. **Read error messages carefully**: They often contain helpful information

## See Also

- [Development Guide](./DEVELOPMENT.md)
- [Getting Started](./GETTING-STARTED.md)
- [Architecture](./ARCHITECTURE.md)

