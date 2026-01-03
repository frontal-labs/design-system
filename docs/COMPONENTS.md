# Components Overview

A comprehensive overview of all components available in the Frontal Design System.

## Component Categories

### Form Components

Form components for user input and data collection.

| Component | Description | Package |
|-----------|-------------|---------|
| `Input` | Text input field | `@frontal/ui` |
| `Textarea` | Multi-line text input | `@frontal/ui` |
| `Select` | Dropdown select | `@frontal/ui` |
| `Checkbox` | Checkbox input | `@frontal/ui` |
| `RadioGroup` | Radio button group | `@frontal/ui` |
| `Switch` | Toggle switch | `@frontal/ui` |
| `Slider` | Range slider | `@frontal/ui` |
| `NumberField` | Number input | `@frontal/ui` |
| `InputGroup` | Input with addons | `@frontal/ui` |
| `InputOTP` | OTP input | `@frontal/ui` |
| `MultiSelect` | Multi-select dropdown | `@frontal/ui` |
| `Autocomplete` | Autocomplete input | `@frontal/ui` |
| `Combobox` | Combobox input | `@frontal/ui` |
| `Form` | Form wrapper | `@frontal/ui` |
| `Field` | Form field | `@frontal/ui` |
| `Fieldset` | Fieldset wrapper | `@frontal/ui` |
| `Label` | Form label | `@frontal/ui` |

### Layout Components

Components for structuring and organizing content.

| Component | Description | Package |
|-----------|-------------|---------|
| `Card` | Card container | `@frontal/ui` |
| `Container` | Container wrapper | `@frontal/ui` |
| `Box` | Generic box component | `@frontal/ui` |
| `Flex` | Flexbox container | `@frontal/ui` |
| `Grid` | Grid container | `@frontal/ui` |
| `Stack` | Stack layout | `@frontal/ui` |
| `Section` | Section wrapper | `@frontal/ui` |
| `Frame` | Frame container | `@frontal/ui` |
| `Spacer` | Spacing component | `@frontal/ui` |
| `Separator` | Divider/separator | `@frontal/ui` |
| `AspectRatio` | Aspect ratio container | `@frontal/ui` |

### Navigation Components

Components for navigation and wayfinding.

| Component | Description | Package |
|-----------|-------------|---------|
| `Tabs` | Tab navigation | `@frontal/ui` |
| `Sidebar` | Sidebar navigation | `@frontal/ui` |
| `Breadcrumb` | Breadcrumb navigation | `@frontal/ui` |
| `Menu` | Dropdown menu | `@frontal/ui` |
| `Pagination` | Pagination controls | `@frontal/ui` |
| `Command` | Command palette | `@frontal/ui` |

### Data Display Components

Components for displaying data and information.

| Component | Description | Package |
|-----------|-------------|---------|
| `Table` | Data table | `@frontal/ui` |
| `Avatar` | User avatar | `@frontal/ui` |
| `Badge` | Badge/label | `@frontal/ui` |
| `StatusDot` | Status indicator | `@frontal/ui` |
| `Skeleton` | Loading skeleton | `@frontal/ui` |
| `Empty` | Empty state | `@frontal/ui` |
| `Chart` | Chart wrapper | `@frontal/ui` |

### Feedback Components

Components for providing feedback to users.

| Component | Description | Package |
|-----------|-------------|---------|
| `Alert` | Alert message | `@frontal/ui` |
| `AlertDialog` | Alert dialog | `@frontal/ui` |
| `Toast` | Toast notification | `@frontal/ui` |
| `Progress` | Progress bar | `@frontal/ui` |
| `Meter` | Meter/progress | `@frontal/ui` |
| `Spinner` | Loading spinner | `@frontal/ui` |
| `Note` | Note/notice | `@frontal/ui` |

### Overlay Components

Components that appear above other content.

| Component | Description | Package |
|-----------|-------------|---------|
| `Dialog` | Modal dialog | `@frontal/ui` |
| `Drawer` | Drawer/sheet | `@frontal/ui` |
| `Sheet` | Side sheet | `@frontal/ui` |
| `Popover` | Popover | `@frontal/ui` |
| `Tooltip` | Tooltip | `@frontal/ui` |
| `Toolbar` | Toolbar | `@frontal/ui` |

### Interactive Components

Components for user interaction.

| Component | Description | Package |
|-----------|-------------|---------|
| `Button` | Button | `@frontal/ui` |
| `Toggle` | Toggle button | `@frontal/ui` |
| `ToggleGroup` | Toggle group | `@frontal/ui` |
| `Collapsible` | Collapsible content | `@frontal/ui` |
| `Accordion` | Accordion | `@frontal/ui` |
| `Resizable` | Resizable panels | `@frontal/ui` |
| `Carousel` | Carousel/slider | `@frontal/ui` |
| `Calendar` | Calendar picker | `@frontal/ui` |
| `Choicebox` | Choice box | `@frontal/ui` |
| `CheckboxGroup` | Checkbox group | `@frontal/ui` |

### Typography Components

Components for text and typography.

| Component | Description | Package |
|-----------|-------------|---------|
| `Heading` | Heading component | `@frontal/ui` |
| `Text` | Text component | `@frontal/ui` |
| `Code` | Code block | `@frontal/ui` |
| `Blockquote` | Blockquote | `@frontal/ui` |
| `Kbd` | Keyboard key | `@frontal/ui` |
| `Link` | Link component | `@frontal/ui` |
| `List` | List component | `@frontal/ui` |
| `Item` | List item | `@frontal/ui` |

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

