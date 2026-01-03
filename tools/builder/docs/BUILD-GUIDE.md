# Build Guide

This guide explains how to use `@frontal/builder` to compile and bundle packages in the monorepo.

## Core Concepts

The builder uses `esbuild` to handle TypeScript compilation and bundling. It supports two main modes:

1. **Build**: Compiles source files to `dist/` with source maps.
2. **Bundle**: Creates minified, production-ready bundles.

## Target Selection

You can specify targets using the `--target` or `-t` flag:

- Package names: `@frontal/queue`, `@frontal/database`
- Directory names: `queue`, `database`

### Building Groups

- `--packages`: Build all packages in `packages/`
- `--apps`: Build all applications in `apps/`
- `--all`: Build everything in the workspace

## Configuration Options

- `--minify`: Minify output for production.
- `--sourcemap`: Generate source maps for debugging.
- `--format <format>`: Output format (`esm`, `cjs`, `iife`).
