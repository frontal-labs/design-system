# @frontal/ui

Base UI component library for the Frontal Design System.

## Overview

`@frontal/ui` provides a comprehensive set of accessible, customizable React components built on top of modern web standards and best practices.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Components

```tsx
import {
  Button,
  Card,
  Input,
  Select,
  // ... and 70+ more components
} from "@frontal/ui";
// or
import { Button } from "@frontal/design-system/ui/button";
```

### Import Styles

```tsx
import "@frontal/ui/styles/components.css";
```

## Available Components

### Form Components

- `Input` - Text input field
- `Textarea` - Multi-line text input
- `Select` - Dropdown select
- `Checkbox` - Checkbox input
- `RadioGroup` - Radio button group
- `Switch` - Toggle switch
- `Slider` - Range slider
- `NumberField` - Number input
- `InputGroup` - Input with addons
- `InputOTP` - OTP input
- `MultiSelect` - Multi-select dropdown
- `Autocomplete` - Autocomplete input
- `Combobox` - Combobox input
- `Form` - Form wrapper
- `Field` - Form field
- `Fieldset` - Fieldset wrapper
- `Label` - Form label

### Layout Components

- `Card` - Card container
- `Container` - Container wrapper
- `Box` - Generic box component
- `Flex` - Flexbox container
- `Grid` - Grid container
- `Stack` - Stack layout
- `Section` - Section wrapper
- `Frame` - Frame container
- `Spacer` - Spacing component
- `Separator` - Divider/separator
- `AspectRatio` - Aspect ratio container

### Navigation Components

- `Tabs` - Tab navigation
- `Sidebar` - Sidebar navigation
- `Breadcrumb` - Breadcrumb navigation
- `Menu` - Dropdown menu
- `Pagination` - Pagination controls
- `Command` - Command palette

### Data Display

- `Table` - Data table
- `Avatar` - User avatar
- `Badge` - Badge/label
- `StatusDot` - Status indicator
- `Skeleton` - Loading skeleton
- `Empty` - Empty state
- `Chart` - Chart wrapper

### Feedback Components

- `Alert` - Alert message
- `AlertDialog` - Alert dialog
- `Toast` - Toast notification
- `Progress` - Progress bar
- `Meter` - Meter/progress
- `Spinner` - Loading spinner
- `Note` - Note/notice

### Overlay Components

- `Dialog` - Modal dialog
- `Drawer` - Drawer/sheet
- `Sheet` - Side sheet
- `Popover` - Popover
- `Tooltip` - Tooltip
- `Toolbar` - Toolbar

### Interactive Components

- `Button` - Button
- `Toggle` - Toggle button
- `ToggleGroup` - Toggle group
- `Collapsible` - Collapsible content
- `Accordion` - Accordion
- `Resizable` - Resizable panels
- `Carousel` - Carousel/slider
- `Calendar` - Calendar picker
- `Choicebox` - Choice box
- `CheckboxGroup` - Checkbox group

### Typography

- `Heading` - Heading component
- `Text` - Text component
- `Code` - Code block
- `Blockquote` - Blockquote
- `Kbd` - Keyboard key
- `Link` - Link component
- `List` - List component
- `Item` - List item

### Other Components

- `Group` - Group wrapper
- `PreviewCard` - Preview card
- `ScrollArea` - Scrollable area

## Component Examples

### Button

```tsx
import { Button } from "@frontal/ui";

<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Card

```tsx
import { Card } from "@frontal/ui";

<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Content>Content</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

### Input

```tsx
import { Input, Label } from "@frontal/ui";

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email" />
</div>
```

### Form

```tsx
import { Form, Field, Input, Button } from "@frontal/ui";

<Form>
  <Field>
    <Field.Label>Name</Field.Label>
    <Input />
    <Field.Description>Enter your name</Field.Description>
    <Field.Error>Error message</Field.Error>
  </Field>
  <Button type="submit">Submit</Button>
</Form>
```

## Styling

Components are styled with Tailwind CSS and support:

- **Variants**: Different visual styles
- **Sizes**: Small, medium, large
- **States**: Disabled, loading, error
- **Theming**: Light and dark themes

## Accessibility

All components are built with accessibility in mind:

- Keyboard navigation
- ARIA attributes
- Focus management
- Screen reader support

## Dependencies

- `@frontal/primitives` - Low-level primitives
- `@frontal/icons` - Icon components
- `@frontal/shared` - Shared utilities
- `class-variance-authority` - Variant management
- `tailwind-merge` - Class merging
- `clsx` - Class utilities

## Peer Dependencies

- `react` >= 19.2.0
- `next` >= 13.0.0 (optional)

## See Also

- [Design System Package](./DESIGN-SYSTEM.md)
- [Component Documentation](../COMPONENTS.md)
- [Storybook](../storybook/)

