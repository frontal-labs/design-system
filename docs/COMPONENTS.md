# Components Overview

A comprehensive overview of all components available in the Frontal Design System.

## Component Categories

### Form Components

Form components for user input and data collection.

| Component | Description | Package |
|-----------|-------------|---------|
| `Input` | Text input field | `@frontal-labs/ui` |
| `Textarea` | Multi-line text input | `@frontal-labs/ui` |
| `Select` | Dropdown select | `@frontal-labs/ui` |
| `Checkbox` | Checkbox input | `@frontal-labs/ui` |
| `RadioGroup` | Radio button group | `@frontal-labs/ui` |
| `Switch` | Toggle switch | `@frontal-labs/ui` |
| `Slider` | Range slider | `@frontal-labs/ui` |
| `NumberField` | Number input | `@frontal-labs/ui` |
| `InputGroup` | Input with addons | `@frontal-labs/ui` |
| `InputOTP` | OTP input | `@frontal-labs/ui` |
| `MultiSelect` | Multi-select dropdown | `@frontal-labs/ui` |
| `Autocomplete` | Autocomplete input | `@frontal-labs/ui` |
| `Combobox` | Combobox input | `@frontal-labs/ui` |
| `Form` | Form wrapper | `@frontal-labs/ui` |
| `Field` | Form field | `@frontal-labs/ui` |
| `Fieldset` | Fieldset wrapper | `@frontal-labs/ui` |
| `Label` | Form label | `@frontal-labs/ui` |

### Layout Components

Components for structuring and organizing content.

| Component | Description | Package |
|-----------|-------------|---------|
| `Card` | Card container | `@frontal-labs/ui` |
| `Container` | Container wrapper | `@frontal-labs/ui` |
| `Box` | Generic box component | `@frontal-labs/ui` |
| `Flex` | Flexbox container | `@frontal-labs/ui` |
| `Grid` | Grid container | `@frontal-labs/ui` |
| `Stack` | Stack layout | `@frontal-labs/ui` |
| `Section` | Section wrapper | `@frontal-labs/ui` |
| `Frame` | Frame container | `@frontal-labs/ui` |
| `Spacer` | Spacing component | `@frontal-labs/ui` |
| `Separator` | Divider/separator | `@frontal-labs/ui` |
| `AspectRatio` | Aspect ratio container | `@frontal-labs/ui` |

### Navigation Components

Components for navigation and wayfinding.

| Component | Description | Package |
|-----------|-------------|---------|
| `Tabs` | Tab navigation | `@frontal-labs/ui` |
| `Sidebar` | Sidebar navigation | `@frontal-labs/ui` |
| `Breadcrumb` | Breadcrumb navigation | `@frontal-labs/ui` |
| `Menu` | Dropdown menu | `@frontal-labs/ui` |
| `Pagination` | Pagination controls | `@frontal-labs/ui` |
| `Command` | Command palette | `@frontal-labs/ui` |

### Data Display Components

Components for displaying data and information.

| Component | Description | Package |
|-----------|-------------|---------|
| `Table` | Data table | `@frontal-labs/ui` |
| `Avatar` | User avatar | `@frontal-labs/ui` |
| `Badge` | Badge/label | `@frontal-labs/ui` |
| `StatusDot` | Status indicator | `@frontal-labs/ui` |
| `Skeleton` | Loading skeleton | `@frontal-labs/ui` |
| `Empty` | Empty state | `@frontal-labs/ui` |
| `Chart` | Chart wrapper | `@frontal-labs/ui` |

### Feedback Components

Components for providing feedback to users.

| Component | Description | Package |
|-----------|-------------|---------|
| `Alert` | Alert message | `@frontal-labs/ui` |
| `AlertDialog` | Alert dialog | `@frontal-labs/ui` |
| `Toast` | Toast notification | `@frontal-labs/ui` |
| `Progress` | Progress bar | `@frontal-labs/ui` |
| `Meter` | Meter/progress | `@frontal-labs/ui` |
| `Spinner` | Loading spinner | `@frontal-labs/ui` |
| `Note` | Note/notice | `@frontal-labs/ui` |

### Overlay Components

Components that appear above other content.

| Component | Description | Package |
|-----------|-------------|---------|
| `Dialog` | Modal dialog | `@frontal-labs/ui` |
| `Drawer` | Drawer/sheet | `@frontal-labs/ui` |
| `Sheet` | Side sheet | `@frontal-labs/ui` |
| `Popover` | Popover | `@frontal-labs/ui` |
| `Tooltip` | Tooltip | `@frontal-labs/ui` |
| `Toolbar` | Toolbar | `@frontal-labs/ui` |

### Interactive Components

Components for user interaction.

| Component | Description | Package |
|-----------|-------------|---------|
| `Button` | Button | `@frontal-labs/ui` |
| `Toggle` | Toggle button | `@frontal-labs/ui` |
| `ToggleGroup` | Toggle group | `@frontal-labs/ui` |
| `Collapsible` | Collapsible content | `@frontal-labs/ui` |
| `Accordion` | Accordion | `@frontal-labs/ui` |
| `Resizable` | Resizable panels | `@frontal-labs/ui` |
| `Carousel` | Carousel/slider | `@frontal-labs/ui` |
| `Calendar` | Calendar picker | `@frontal-labs/ui` |
| `Choicebox` | Choice box | `@frontal-labs/ui` |
| `CheckboxGroup` | Checkbox group | `@frontal-labs/ui` |

### Typography Components

Components for text and typography.

| Component | Description | Package |
|-----------|-------------|---------|
| `Heading` | Heading component | `@frontal-labs/ui` |
| `Text` | Text component | `@frontal-labs/ui` |
| `Code` | Code block | `@frontal-labs/ui` |
| `Blockquote` | Blockquote | `@frontal-labs/ui` |
| `Kbd` | Keyboard key | `@frontal-labs/ui` |
| `Link` | Link component | `@frontal-labs/ui` |
| `List` | List component | `@frontal-labs/ui` |
| `Item` | List item | `@frontal-labs/ui` |

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

