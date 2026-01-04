# Getting Started

This guide will help you get started with the Frontal Design System.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Bun** >= 1.1.0 (recommended: 1.3.3)
- **Node.js** >= 18.0.0 (optional, if not using Bun)

### Installing Bun

If you don't have Bun installed:

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# Or using npm
npm install -g bun
```

Verify installation:

```bash
bun --version
```

## Installation

### For Development (Monorepo)

```bash
# Clone the repository
git clone https://github.com/frontal-labs/design-system.git
cd design-system

# Install dependencies
bun install

# Build all packages
bun run build
```

### For Usage (In Your Project)

The design system packages are workspace dependencies. To use them in your project:

1. Add the design system as a workspace dependency
2. Install dependencies
3. Import components

## Basic Usage

### 1. Import Styles

First, import the global styles in your application:

```tsx
// app/layout.tsx or _app.tsx
import "@frontal/design-system/styles/globals.css";
```

This single import includes:
- Tailwind CSS base styles
- Color system variables
- Typography styles
- Component styles
- Chart styles

### 2. Import Components

Import components from the design system:

```tsx
import { Button, Card, Input } from "@frontal/design-system";
// or
import { Button } from "@frontal/design-system/ui/button";
import { Card } from "@frontal/design-system/ui/card";
```

### 3. Use Components

```tsx
function MyComponent() {
  return (
    <Card>
      <h2>Welcome</h2>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Package-Specific Usage

### UI Components

```tsx
import {
  Button,
  Card,
  Input,
  Select,
  Checkbox,
  RadioGroup,
  // ... and 60+ more components
} from "@frontal/design-system";
```

### Icons

```tsx
import {
  ArrowUpIcon,
  AddIcon,
  SearchIcon,
  CalendarIcon,
} from "@frontal/design-system";
```

### Blocks

```tsx
import { Login01 } from "@frontal/blocks/components/login-01";
```

### Charts

```tsx
import { ChartAreaDefault } from "@frontal/charts/components/chart-area-default";
```

### Colors

```tsx
import { colors } from "@frontal/colors";
// or use CSS variables
<div className="bg-primary text-primary-foreground">...</div>
```

## Next.js Setup

### App Router

```tsx
// app/layout.tsx
import "@frontal/design-system/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Pages Router

```tsx
// pages/_app.tsx
import "@frontal/design-system/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

## Theme Setup

### Theme Provider

```tsx
import { ThemeProvider } from "@frontal/design-system/providers/theme";

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Using Themes

```tsx
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

## TypeScript Setup

The design system is fully typed. Ensure TypeScript is configured:

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2020",
    "jsx": "react-jsx",
    "strict": true
  }
}
```

## Tailwind CSS Setup

If you're using Tailwind CSS in your project, you may need to configure it:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add design system paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Common Patterns

### Form Components

```tsx
import { Input, Label, Button, Card } from "@frontal/design-system";

function LoginForm() {
  return (
    <Card>
      <form>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
}
```

### Data Display

```tsx
import { Table, Card } from "@frontal/design-system";

function DataTable() {
  return (
    <Card>
      <Table>
        {/* Table content */}
      </Table>
    </Card>
  );
}
```

### Navigation

```tsx
import { Sidebar, Tabs } from "@frontal/design-system";

function AppLayout() {
  return (
    <div>
      <Sidebar />
      <main>
        <Tabs>
          {/* Tab content */}
        </Tabs>
      </main>
    </div>
  );
}
```

## Troubleshooting

### Styles Not Loading

1. Ensure you've imported the global styles
2. Check that PostCSS is configured correctly
3. Verify Tailwind CSS is installed

### Type Errors

1. Ensure TypeScript is configured correctly
2. Check that types are installed: `pnpm install`
3. Restart your TypeScript server

### Build Errors

1. Clean build artifacts: `pnpm clean`
2. Reinstall dependencies: `pnpm install`
3. Rebuild: `pnpm build`

## Next Steps

- Explore [Component Documentation](./components.md)
- Check out [Examples](../examples/)
- Read [Architecture Guide](./architecture.md)
- View [Storybook](../storybook/)

## Support

- **Issues**: [GitHub Issues](https://github.com/frontal-labs/design-system/issues)
- **Documentation**: [Docs](./README.md)
- **Website**: [frontal.dev](https://frontal.dev)

