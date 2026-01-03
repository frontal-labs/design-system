# Missing Files in Codebase

This document lists all files that are referenced in the codebase but are currently missing.

## TypeScript Configuration Files

### 1. `internal/typescript-config/next.json`
- **Status**: Missing
- **Referenced in**:
  - `internal/next-config/tsconfig.json` (line 2): `"extends": "@frontal/typescript-config/next.json"`
  - `internal/typescript-config/package.json` (line 13): Exported as `"./next.json": "./next.json"`
  - `internal/typescript-config/package.json` (line 25): Listed in `files` array
- **Note**: Only `nextjs.json` exists, but `next.json` is referenced and exported

### 2. `internal/typescript-config/node.json`
- **Status**: Missing
- **Referenced in**:
  - `internal/typescript-config/package.json` (line 15): Exported as `"./node.json": "./node.json"`
  - `internal/typescript-config/package.json` (line 27): Listed in `files` array
- **Note**: This file is exported but doesn't exist in the directory

## Script Files

### 3. `scripts/index.ts`
- **Status**: Missing
- **Referenced in**:
  - `tsup.config.ts` (line 4): Listed as entry point `entry: ["scripts/index.ts"]`
- **Note**: The `scripts/` directory doesn't exist at the root level

### 4. `packages/icons/scripts/remove-fill-icons.js`
- **Status**: Missing
- **Referenced in**:
  - `packages/icons/package.json` (line 39): Script `"remove-fill-icons": "node scripts/remove-fill-icons.js"`
- **Note**: Only `generate-icons.js` exists in this directory

### 5. `packages/icons/scripts/remove-line-suffix.js`
- **Status**: Missing
- **Referenced in**:
  - `packages/icons/package.json` (line 40): Script `"remove-line-suffix": "node scripts/remove-line-suffix.js"`
- **Note**: Only `generate-icons.js` exists in this directory

## Summary

Total missing files: **5**

### By Category:
- TypeScript config files: 2
- Script files: 3

### By Impact:
- **High Priority**: Files that will cause build/runtime errors:
  - `internal/typescript-config/next.json` (breaks TypeScript compilation in `internal/next-config`)
  - `scripts/index.ts` (breaks tsup build configuration)
  
- **Medium Priority**: Files that break npm scripts:
  - `packages/icons/scripts/remove-fill-icons.js`
  - `packages/icons/scripts/remove-line-suffix.js`
  
- **Low Priority**: Files that are exported but may not be actively used:
  - `internal/typescript-config/node.json`

