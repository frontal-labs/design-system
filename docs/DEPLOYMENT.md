# Deployment Guide

This guide covers deployment and release processes for the Frontal Design System.

## Overview

The design system uses [Changesets](https://github.com/changesets/changesets) for version management and release automation.

## Release Process

### 1. Making Changes

When making changes that should be released:

1. Make your code changes
2. Add a changeset describing the change:

```bash
bun run changeset
```

This will prompt you to:
- Select which packages changed
- Choose the type of change (major, minor, patch)
- Write a description

### 2. Changeset Files

Changesets are stored in `.changeset/` directory:

```markdown
---
"@frontal-ds/ui": patch
---

Fixed button variant styling issue
```

### 3. Version Bumping

When ready to release:

```bash
bun run version
```

This will:
- Read all changesets
- Bump package versions accordingly
- Update CHANGELOG.md files
- Remove changeset files

### 4. Publishing

After version bumping:

```bash
bun run release
```

This will:
- Build all packages
- Publish to npm (if configured)
- Create git tags
- Push changes

## Version Strategy

### Semantic Versioning

The design system follows [Semantic Versioning](https://semver.org/):

- **Major** (x.0.0): Breaking changes
- **Minor** (0.x.0): New features, backward compatible
- **Patch** (0.0.x): Bug fixes, backward compatible

### Coordinated Versions

All packages share the same version number for simplicity.

## Pre-release Checklist

Before releasing:

- [ ] All tests pass (`bun run test`)
- [ ] Type checking passes (`bun run type-check`)
- [ ] Linting passes (`bun run lint`)
- [ ] Build succeeds (`bun run build`)
- [ ] Changesets are added for all changes
- [ ] Documentation is updated
- [ ] CHANGELOG is reviewed

## Build for Production

### Build All Packages

```bash
bun run build
```

### Build Specific Package

```bash
cd packages/ui
bun run build
```

### Build Output

Build outputs are in `dist/` directories:

```
dist/
├── index.js        # ESM bundle
├── index.cjs       # CJS bundle
├── index.d.ts      # TypeScript definitions
└── index.js.map    # Source maps
```

## Publishing to npm

### Prerequisites

1. npm account with access to `@frontal` scope
2. Authentication configured (`npm login`)
3. Access to publish packages

### Publishing Process

```bash
# Build all packages
bun run build

# Version bump (if not done)
bun run version

# Publish
bun run release
```

### Manual Publishing

If needed, publish manually:

```bash
cd packages/ui
npm publish --access public
```

## CI/CD Integration

### GitHub Actions

Example workflow for automated releases:

```yaml
name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      
      - name: Install dependencies
        run: bun install
      
      - name: Build
        run: bun run build
      
      - name: Create Release Pull Request or Publish
        uses: changesets/action@v1
        with:
          publish: bun run release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Storybook Deployment

### Building Storybook

```bash
cd apps/storybook
bun run build
```

Output is in `storybook-static/` directory.

### Deploying Storybook

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/storybook
vercel
```

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd apps/storybook
netlify deploy --prod --dir=storybook-static
```

#### GitHub Pages

```bash
# Build Storybook
cd apps/storybook
bun run build

# Deploy to gh-pages branch
npx gh-pages -d storybook-static
```

### Docker Deployment

See [Storybook Docker Documentation](../apps/storybook/docs/DOCKER.md) for containerized deployment.

## Environment Variables

### Required for Publishing

- `NPM_TOKEN` - npm authentication token
- `GITHUB_TOKEN` - GitHub token for releases

### Optional

- `CHROMATIC_PROJECT_TOKEN` - For visual regression testing
- `VERCEL_TOKEN` - For Vercel deployments

## Release Notes

Release notes are automatically generated from changesets and included in:

- CHANGELOG.md files
- GitHub releases
- npm package pages

### Writing Good Changesets

```markdown
---
"@frontal-ds/ui": minor
---

Added new Button variant: "outline-secondary"

- New variant for secondary actions
- Improved contrast in dark mode
- Breaking: Removed deprecated "secondary" variant
```

## Rollback Process

If a release has issues:

1. **Immediate**: Unpublish from npm (if within 72 hours)
   ```bash
   npm unpublish @frontal-ds/ui@1.2.3
   ```

2. **Git**: Revert the version commit
   ```bash
   git revert <version-commit>
   ```

3. **New Release**: Create a patch release with fixes

## Monitoring Releases

After releasing:

- [ ] Verify packages are published on npm
- [ ] Check GitHub releases page
- [ ] Test installation in a fresh project
- [ ] Monitor for issues or errors
- [ ] Update documentation if needed

## Troubleshooting

### Build Failures

```bash
# Clean and rebuild
bun run clean
bun install
bun run build
```

### Publishing Failures

- Check npm authentication
- Verify package names and scopes
- Check for duplicate versions
- Review npm registry settings

### Version Conflicts

If version conflicts occur:

```bash
# Reset changesets
rm -rf .changeset/*.md

# Recreate changesets
bun run changeset
```

## Best Practices

1. **Always add changesets** for user-facing changes
2. **Test before releasing** - run full test suite
3. **Review CHANGELOG** before publishing
4. **Communicate breaking changes** clearly
5. **Tag releases** in git
6. **Monitor after release** for issues

## See Also

- [Changesets Documentation](https://github.com/changesets/changesets)
- [Development Guide](./DEVELOPMENT.md)
- [Contributing Guide](../CONTRIBUTING.md)

