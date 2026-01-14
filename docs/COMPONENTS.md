# Components Overview

A comprehensive overview of all components available in the Frontal Design System.

## Component Categories

### Form Components

Form components for user input and data collection.

| Component | Description | Package |
|-----------|-------------|---------|
| `Input` | Text input field | `@frontal-ds/ui` |
| `Textarea` | Multi-line text input | `@frontal-ds/ui` |
| `Select` | Dropdown select | `@frontal-ds/ui` |
| `Checkbox` | Checkbox input | `@frontal-ds/ui` |
| `RadioGroup` | Radio button group | `@frontal-ds/ui` |
| `Switch` | Toggle switch | `@frontal-ds/ui` |
| `Slider` | Range slider | `@frontal-ds/ui` |
| `NumberField` | Number input | `@frontal-ds/ui` |
| `InputGroup` | Input with addons | `@frontal-ds/ui` |
| `InputOTP` | OTP input | `@frontal-ds/ui` |
| `MultiSelect` | Multi-select dropdown | `@frontal-ds/ui` |
| `Autocomplete` | Autocomplete input | `@frontal-ds/ui` |
| `Combobox` | Combobox input | `@frontal-ds/ui` |
| `Form` | Form wrapper | `@frontal-ds/ui` |
| `Field` | Form field | `@frontal-ds/ui` |
| `Fieldset` | Fieldset wrapper | `@frontal-ds/ui` |
| `Label` | Form label | `@frontal-ds/ui` |

### Layout Components

Components for structuring and organizing content.

| Component | Description | Package |
|-----------|-------------|---------|
| `Card` | Card container | `@frontal-ds/ui` |
| `Container` | Container wrapper | `@frontal-ds/ui` |
| `Box` | Generic box component | `@frontal-ds/ui` |
| `Flex` | Flexbox container | `@frontal-ds/ui` |
| `Grid` | Grid container | `@frontal-ds/ui` |
| `Stack` | Stack layout | `@frontal-ds/ui` |
| `Section` | Section wrapper | `@frontal-ds/ui` |
| `Frame` | Frame container | `@frontal-ds/ui` |
| `Spacer` | Spacing component | `@frontal-ds/ui` |
| `Separator` | Divider/separator | `@frontal-ds/ui` |
| `AspectRatio` | Aspect ratio container | `@frontal-ds/ui` |

### Navigation Components

Components for navigation and wayfinding.

| Component | Description | Package |
|-----------|-------------|---------|
| `Tabs` | Tab navigation | `@frontal-ds/ui` |
| `Sidebar` | Sidebar navigation | `@frontal-ds/ui` |
| `Breadcrumb` | Breadcrumb navigation | `@frontal-ds/ui` |
| `Menu` | Dropdown menu | `@frontal-ds/ui` |
| `Pagination` | Pagination controls | `@frontal-ds/ui` |
| `Command` | Command palette | `@frontal-ds/ui` |

### Data Display Components

Components for displaying data and information.

| Component | Description | Package |
|-----------|-------------|---------|
| `Table` | Data table | `@frontal-ds/ui` |
| `Avatar` | User avatar | `@frontal-ds/ui` |
| `Badge` | Badge/label | `@frontal-ds/ui` |
| `StatusDot` | Status indicator | `@frontal-ds/ui` |
| `Skeleton` | Loading skeleton | `@frontal-ds/ui` |
| `Empty` | Empty state | `@frontal-ds/ui` |
| `Chart` | Chart wrapper | `@frontal-ds/ui` |

### Feedback Components

Components for providing feedback to users.

| Component | Description | Package |
|-----------|-------------|---------|
| `Alert` | Alert message | `@frontal-ds/ui` |
| `AlertDialog` | Alert dialog | `@frontal-ds/ui` |
| `Toast` | Toast notification | `@frontal-ds/ui` |
| `Progress` | Progress bar | `@frontal-ds/ui` |
| `Meter` | Meter/progress | `@frontal-ds/ui` |
| `Spinner` | Loading spinner | `@frontal-ds/ui` |
| `Note` | Note/notice | `@frontal-ds/ui` |

### Overlay Components

Components that appear above other content.

| Component | Description | Package |
|-----------|-------------|---------|
| `Dialog` | Modal dialog | `@frontal-ds/ui` |
| `Drawer` | Drawer/sheet | `@frontal-ds/ui` |
| `Sheet` | Side sheet | `@frontal-ds/ui` |
| `Popover` | Popover | `@frontal-ds/ui` |
| `Tooltip` | Tooltip | `@frontal-ds/ui` |
| `Toolbar` | Toolbar | `@frontal-ds/ui` |

### Interactive Components

Components for user interaction.

| Component | Description | Package |
|-----------|-------------|---------|
| `Button` | Button | `@frontal-ds/ui` |
| `Toggle` | Toggle button | `@frontal-ds/ui` |
| `ToggleGroup` | Toggle group | `@frontal-ds/ui` |
| `Collapsible` | Collapsible content | `@frontal-ds/ui` |
| `Accordion` | Accordion | `@frontal-ds/ui` |
| `Resizable` | Resizable panels | `@frontal-ds/ui` |
| `Carousel` | Carousel/slider | `@frontal-ds/ui` |
| `Calendar` | Calendar picker | `@frontal-ds/ui` |
| `Choicebox` | Choice box | `@frontal-ds/ui` |
| `CheckboxGroup` | Checkbox group | `@frontal-ds/ui` |

### Typography Components

Components for text and typography.

| Component | Description | Package |
|-----------|-------------|---------|
| `Heading` | Heading component | `@frontal-ds/ui` |
| `Text` | Text component | `@frontal-ds/ui` |
| `Code` | Code block | `@frontal-ds/ui` |
| `Blockquote` | Blockquote | `@frontal-ds/ui` |
| `Kbd` | Keyboard key | `@frontal-ds/ui` |
| `Link` | Link component | `@frontal-ds/ui` |
| `List` | List component | `@frontal-ds/ui` |
| `Item` | List item | `@frontal-ds/ui` |

## Component Usage Patterns

### Basic Usage

```tsx
import { Button } from "@frontal/design-system";

<Button>Click me</Button>
```

### With Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### With Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Composition

```tsx
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>Content</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

## Component Props

Most components follow consistent prop patterns:

- **className** - Additional CSS classes
- **variant** - Visual variant
- **size** - Size variant
- **disabled** - Disabled state
- **...props** - Additional HTML attributes

## Accessibility

All components are built with accessibility in mind:

- **Keyboard navigation** - Full keyboard support
- **ARIA attributes** - Proper ARIA labels and roles
- **Focus management** - Proper focus handling
- **Screen readers** - Screen reader support

## Styling

Components can be styled using:

- **Variants** - Built-in visual variants
- **Tailwind classes** - Custom Tailwind classes
- **CSS variables** - Theme-aware CSS variables
- **Inline styles** - Standard React inline styles

## See Also

- [UI Package Documentation](./packages/UI.md)
- [Getting Started Guide](./GETTING-STARTED.md)
- [Storybook](../storybook/) for interactive examples

