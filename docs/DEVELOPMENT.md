# Development Guide

This guide covers development workflows, best practices, and tooling for the Frontal Design System.

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8.0.0
- Git

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/frontal-labs/design-system.git
cd design-system

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/my-feature
```

### 2. Make Changes

Edit files in the appropriate package:

```
packages/
├── ui/src/components/        # UI components
├── blocks/src/components/     # UI blocks
├── charts/src/components/     # Chart components
└── ...
```

### 3. Run Development Mode

```bash
# Watch mode for all packages
pnpm dev

# Or for a specific package
cd packages/ui
pnpm dev
```

### 4. Test Your Changes

```bash
# Run all tests
pnpm test

# Run tests for a specific package
cd packages/ui
pnpm test

# Watch mode
pnpm test:watch
```

### 5. Type Check

```bash
# Type check all packages
pnpm type-check

# Type check specific package
cd packages/ui
pnpm type-check
```

### 6. Lint and Format

```bash
# Check for issues
pnpm check

# Auto-fix issues
pnpm fix

# Format code
pnpm format
```

### 7. Build

```bash
# Build all packages
pnpm build

# Build specific package
cd packages/ui
pnpm build
```

### 8. Commit Changes

```bash
git add .
git commit -m "feat: add new component"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Maintenance

### 9. Push and Create PR

```bash
git push origin feature/my-feature
```

Create a pull request on GitHub.

## Package Development

### Creating a New Component

1. **Create component file**:
   ```bash
   # packages/ui/src/components/my-component.tsx
   ```

2. **Write component**:
   ```tsx
   import { cn } from "@frontal/shared";
   
   export function MyComponent({ className, ...props }) {
     return (
       <div className={cn("my-component", className)} {...props} />
     );
   }
   ```

3. **Export from index**:
   ```tsx
   // packages/ui/src/index.ts
   export * from "./components/my-component";
   ```

4. **Add tests**:
   ```tsx
   // packages/ui/tests/my-component.test.tsx
   import { render } from "@testing-library/react";
   import { MyComponent } from "../src";
   
   test("renders", () => {
     render(<MyComponent />);
   });
   ```

5. **Build and test**:
   ```bash
   pnpm build
   pnpm test
   ```

### Adding a New Package

1. **Create package directory**:
   ```bash
   mkdir packages/my-package
   cd packages/my-package
   ```

2. **Initialize package**:
   ```bash
   pnpm init
   ```

3. **Set up structure**:
   ```
   my-package/
   ├── src/
   │   └── index.ts
   ├── tests/
   │   └── index.test.ts
   ├── package.json
   ├── tsconfig.json
   └── rollup.config.js
   ```

4. **Configure package.json**:
   ```json
   {
     "name": "@frontal/my-package",
     "version": "0.0.1",
     "main": "./dist/index.cjs",
     "module": "./dist/index.js",
     "types": "./dist/index.d.ts"
   }
   ```

5. **Add to workspace**:
   Already included via `packages/*` pattern

## Testing

### Writing Tests

```tsx
import { render, screen } from "@testing-library/react";
import { Button } from "../src";

describe("Button", () => {
  it("renders", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
```

### Test Coverage

```bash
# Generate coverage report
pnpm test:coverage

# View coverage
open coverage/index.html
```

## Code Quality

### Linting

We use **Biome** for linting:

```bash
# Check for issues
pnpm check

# Auto-fix
pnpm fix
```

### Type Checking

```bash
# Type check
pnpm type-check
```

### Formatting

```bash
# Format code
pnpm format
```

## Storybook

### Running Storybook

```bash
cd storybook
pnpm dev
```

### Writing Stories

```tsx
// storybook/stories/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@frontal/ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
};
```

## Build System

### Rollup Configuration

Each package has a `rollup.config.js`:

```js
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.js", format: "es" },
    { file: "dist/index.cjs", format: "cjs" },
  ],
  plugins: [typescript()],
};
```

### Build Output

```
dist/
├── index.js        # ESM bundle
├── index.cjs       # CJS bundle
├── index.d.ts      # TypeScript definitions
└── ...
```

## Debugging

### VS Code

1. Install extensions:
   - ESLint / Biome
   - TypeScript
   - Prettier

2. Configure `.vscode/settings.json`:
   ```json
   {
     "editor.defaultFormatter": "biomejs.biome",
     "editor.formatOnSave": true
   }
   ```

### Debugging Tests

```bash
# Run tests in debug mode
node --inspect-brk node_modules/.bin/vitest
```

## Common Tasks

### Adding Dependencies

```bash
# Add to specific package
cd packages/ui
pnpm add package-name

# Add dev dependency
pnpm add -D package-name
```

### Updating Dependencies

```bash
# Update all dependencies
pnpm bump-deps
```

### Cleaning Build Artifacts

```bash
# Clean all
pnpm clean

# Clean specific package
cd packages/ui
pnpm clean
```

## Best Practices

1. **Follow conventions** - Use existing patterns
2. **Write tests** - Test new components and features
3. **Document** - Add JSDoc comments
4. **Type everything** - Use TypeScript types
5. **Keep it simple** - Prefer simple solutions
6. **Be consistent** - Follow existing code style
7. **Accessibility** - Ensure components are accessible
8. **Performance** - Optimize for performance

## Troubleshooting

### Build Errors

```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

### Type Errors

```bash
# Regenerate types
pnpm type-check

# Clear TypeScript cache
rm -rf **/tsconfig.tsbuildinfo
```

### Test Failures

```bash
# Clear test cache
rm -rf node_modules/.cache
pnpm test
```

## Resources

- [Turborepo Docs](https://turbo.build/repo/docs)
- [pnpm Docs](https://pnpm.io/)
- [Vitest Docs](https://vitest.dev/)
- [Biome Docs](https://biomejs.dev/)
- [Rollup Docs](https://rollupjs.org/)

