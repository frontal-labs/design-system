# Analysis Guide

`@frontal/builder` includes tools to analyze bundle sizes and detect potential issues like duplicate dependencies.

## Basic Analysis

Run analysis on all apps:

```bash
bun run src/cli.ts analyze
```

This will report:
- Raw file size
- Gzip compressed size
- Heaviest files
- Duplicate internal dependencies

## Interpreting the Report

### Raw vs Gzip
- **Raw**: The total size of the generated JavaScript.
- **Gzip**: The estimated size after wire transfer compression.

### Largest Packages
Identify which internal packages are contributing most to the bundle size.

### Duplicate Dependencies
Alerts you if the same package is being included multiple times due to version mismatches or incorrect workspace configuration.
