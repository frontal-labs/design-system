# @frontal/next-config

Shared Next.js configuration for Frontal monorepo projects. Use this package to ensure consistent Next.js setup and best practices across all apps and codebases.

## Usage

In your `next.config.js`:

```js
const { defaultConfig } = require("@frontal/next-config");

module.exports = {
  ...defaultConfig,
};
```
