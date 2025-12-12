# @frontal/primitives

Frontal's primitive UI components package built on [Base UI](https://base-ui.com).

## Overview

This package provides low-level, foundational UI components that serve as building blocks for more complex components across the Frontal platform. All components are built on Base UI, which provides accessible, unstyled primitives that you can style however you like.

## Features

- **Unstyled Components**: All components are unstyled by default, giving you complete control over styling
- **Accessible**: Built on Base UI's accessible primitives
- **TypeScript**: Fully typed with TypeScript
- **Composable**: Components are designed to be composed together
- **Tree-shakable**: Only import what you need

## Installation

This package is part of the Frontal monorepo and is installed automatically as a workspace dependency.

```bash
pnpm install @frontal/primitives
```

## Setup

### Portals

Base UI uses portals for components that render popups (Dialog, Popover, etc.). To ensure portaled components always appear on top, add the following to your application layout:

```css
.root {
  isolation: isolate;
}
```

### iOS 26+ Safari

For iOS 26+ Safari compatibility, add this to your global styles:

```css
body {
  position: relative;
}
```

## Usage

### Button

```tsx
import { Button } from "@frontal/primitives";

<Button className="px-4 py-2 bg-blue-500 text-white rounded">
  Click me
</Button>
```

### Dialog

```tsx
import { Dialog } from "@frontal/primitives";

<Dialog.Root>
  <Dialog.Trigger className="px-4 py-2">Open Dialog</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop className="fixed inset-0 bg-black/50" />
    <Dialog.Popup className="bg-white p-6 rounded-lg shadow-xl max-w-md">
      <Dialog.Title className="text-xl font-bold mb-2">
        Dialog Title
      </Dialog.Title>
      <Dialog.Description className="text-gray-600 mb-4">
        Dialog description text goes here.
      </Dialog.Description>
      <Dialog.CloseButton className="px-4 py-2 bg-gray-200 rounded">
        Close
      </Dialog.CloseButton>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>
```

### Popover

```tsx
import { Popover } from "@frontal/primitives";

<Popover.Root>
  <Popover.Trigger className="px-4 py-2">Open Popover</Popover.Trigger>
  <Popover.Portal>
    <Popover.Positioner sideOffset={8}>
      <Popover.Popup className="bg-white p-4 rounded shadow-lg">
        <Popover.Title className="font-semibold mb-2">Title</Popover.Title>
        <Popover.Description>Description text</Popover.Description>
      </Popover.Popup>
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>
```

### Select

```tsx
import { Select } from "@frontal/primitives";

<Select.Root>
  <Select.Trigger className="px-4 py-2 border rounded">
    <Select.Value placeholder="Select an option" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Popup>
      <Select.Listbox className="bg-white border rounded shadow-lg">
        <Select.Option value="1" className="px-4 py-2 hover:bg-gray-100">
          Option 1
        </Select.Option>
        <Select.Option value="2" className="px-4 py-2 hover:bg-gray-100">
          Option 2
        </Select.Option>
      </Select.Listbox>
    </Select.Popup>
  </Select.Portal>
</Select.Root>
```

### Tooltip

```tsx
import { Tooltip } from "@frontal/primitives";

<Tooltip.Root>
  <Tooltip.Trigger className="px-4 py-2">Hover me</Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Positioner>
      <Tooltip.Popup className="bg-gray-900 text-white px-2 py-1 rounded text-sm">
        Tooltip content
      </Tooltip.Popup>
    </Tooltip.Positioner>
  </Tooltip.Portal>
</Tooltip.Root>
```

### Input

```tsx
import { Input } from "@frontal/primitives";

<Input
  type="text"
  placeholder="Enter text"
  className="px-4 py-2 border rounded"
/>
```

## Available Components

- **Button** - Basic button component
- **Dialog** - Modal dialog component
- **Input** - Text input component
- **Popover** - Popover component
- **Select** - Select/dropdown component
- **Tooltip** - Tooltip component

## Styling

All components are unstyled by default. You can style them using:

- **Tailwind CSS** (recommended)
- **CSS Modules**
- **CSS-in-JS** (styled-components, emotion, etc.)
- **Plain CSS**

The `className` prop is available on all components and their sub-components.

## Development

```bash
# Build the package
pnpm build

# Run tests
pnpm test

# Lint
pnpm lint

# Type check
pnpm type-check
```

## Documentation

For more information about Base UI components and their APIs, visit the [Base UI documentation](https://base-ui.com/react/overview/quick-start).
