# @repo/typescript-config

Shared TypeScript configuration files for the monorepo.

## Configurations

- `base.json` - Base TypeScript configuration
- `nextjs.json` - Next.js specific TypeScript configuration

## Usage

Extend these configs in your `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/nextjs.json"
}
```

