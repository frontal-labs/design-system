# Development Guide

This guide covers the development workflow, best practices, and common tasks when working with Storybook.

## Development Workflow

### Starting Development

```bash
# From monorepo root
bun run dev

# Or from storybook directory
cd apps/storybook
bun run dev
```

The development server supports:
- **Hot Module Replacement (HMR)** - Changes reflect immediately
- **Fast Refresh** - React components update without losing state
- **Live Reload** - Automatic browser refresh on file changes

### File Watching

Storybook watches for changes in:
- `stories/**/*.stories.tsx` - Story files
- `stories/**/*.mdx` - Documentation files
- Component source files in `packages/` (via workspace)

Changes to component source code will trigger a rebuild.

## Code Quality

### Type Checking

Run TypeScript type checking:

```bash
bun run type-check
```

This validates all TypeScript files without emitting output.

### Linting

Check code style and quality:

```bash
# Check for issues
bun run check

# Auto-fix issues
bun run check:fix
```

### Formatting

Format code according to project standards:

```bash
bun run format
```

### Spell Checking

Check spelling in documentation and code:

```bash
# Check spelling
bun run spell

# Auto-fix spelling
bun run spell:fix
```

## Adding New Stories

1. Create a new file in `stories/` directory:
   ```bash
   touch stories/my-component.stories.tsx
   ```

2. Follow the story template (see [Creating Stories](./STORIES.md))

3. The story will appear automatically in Storybook

## Testing with Chromatic

Chromatic provides visual regression testing:

```bash
bun run chromatic
```

This will:
- Build Storybook
- Capture screenshots
- Compare against baseline
- Report visual differences

### Chromatic Configuration

Chromatic is configured in `package.json` with:
- `--exit-zero-on-changes` - Don't fail CI if there are visual changes

## Building for Production

### Static Build

Build a static version:

```bash
bun run build
```

Output is in `storybook-static/` directory.

### Serving Static Build

Serve the static build locally:

```bash
# Using bunx serve
bunx serve storybook-static -p 6006

# Using Python
python -m http.server 6006 --directory storybook-static

# Using Node.js http-server
npx http-server storybook-static -p 6006
```

## Project Structure

```
apps/storybook/
├── .storybook/
│   ├── main.ts              # Storybook configuration
│   ├── preview.tsx          # Global decorators
│   └── preview-head.html    # Custom HTML head
├── stories/
│   └── *.stories.tsx        # Component stories
├── public/                  # Static assets
└── docs/                    # Documentation
```

## Workspace Dependencies

Storybook uses workspace packages:
- `@frontal/design-system` - Main design system package
- `@frontal/next-config` - Next.js configuration
- `@frontal/typescript-config` - TypeScript configuration

These are resolved automatically via Bun workspaces.

## Hot Reloading

Storybook supports hot reloading for:
- ✅ Story files (`*.stories.tsx`)
- ✅ Component source files (in `packages/`)
- ✅ Configuration files (`.storybook/`)
- ✅ CSS and style files

## Debugging

### Browser DevTools

Use browser DevTools to:
- Inspect component DOM
- Debug React components (React DevTools)
- Check network requests
- Analyze performance

### Storybook Addons

Available addons:
- **Controls** - Modify component props
- **Actions** - View event handlers
- **Docs** - Component documentation
- **Themes** - Light/dark theme switching

### Console Logging

Logs appear in:
- Browser console (client-side)
- Terminal (server-side)

## Performance Tips

1. **Lazy Loading**: Stories are loaded on-demand
2. **Code Splitting**: Each story is a separate chunk
3. **Tree Shaking**: Unused code is eliminated
4. **Caching**: Build artifacts are cached in `.cache/`

## Troubleshooting

### Build Failures

```bash
# Clean and rebuild
bun run clean
bun run build
```

### Module Resolution Issues

Ensure workspace dependencies are installed:
```bash
cd ../..
bun install
```

### Port Conflicts

Use a different port:
```bash
bun run dev -- -p 6007
```

### Cache Issues

Clear Storybook cache:
```bash
rm -rf .cache storybook-static
```

## Best Practices

1. **Keep Stories Focused** - One story per component variant
2. **Use Controls** - Make props interactive when possible
3. **Document Components** - Add JSDoc comments
4. **Test Edge Cases** - Include error states and edge cases
5. **Maintain Consistency** - Follow existing story patterns

## Resources

- [Storybook Best Practices](https://storybook.js.org/docs/best-practices)
- [Component Story Format](https://storybook.js.org/docs/api/csf)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)

