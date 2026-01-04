# Creating Stories

This guide explains how to create and organize stories for components in Storybook.

## What is a Story?

A story captures the rendered state of a UI component. Stories are written in Component Story Format (CSF), which is based on ES6 modules.

## Story File Structure

Stories are located in the `stories/` directory and follow the naming pattern:
```
stories/[component-name].stories.tsx
```

## Basic Story Template

```typescript
import { ComponentName } from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "category/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // or "padded", "fullscreen"
  },
  args: {
    // Default props
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variant: Story = {
  args: {
    // Override default props
  },
};
```

## Story Categories

Stories are organized by category in the sidebar:

- `ui/` - Base UI components (Button, Input, Card, etc.)
- `blocks/` - Pre-built UI blocks and patterns
- `charts/` - Data visualization components
- `forms/` - Form-related components

Example:
```typescript
title: "ui/Button"      // Appears under "ui" category
title: "blocks/Sidebar" // Appears under "blocks" category
```

## Story Variants

Create multiple variants to showcase different states:

```typescript
export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        Email
      </>
    ),
  },
};
```

## Interactive Controls

Controls allow users to modify props in real-time. They're automatically generated from TypeScript types, but can be customized:

```typescript
const meta = {
  // ...
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;
```

## Documentation

### JSDoc Comments

Add JSDoc comments for component and story documentation:

```typescript
/**
 * Displays a button or a component that looks like a button.
 */
const meta = {
  // ...
} satisfies Meta<typeof Button>;

/**
 * The default form of the button, used for primary actions.
 */
export const Default: Story = {};

/**
 * Use the `outline` variant to reduce emphasis on secondary actions.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
```

### MDX Documentation

For more detailed documentation, create MDX files:

```markdown
<!-- stories/button.mdx -->
import { Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './button.stories';

<Meta of={ButtonStories} />

# Button

The Button component is used to trigger actions.

## Usage

<Story of={ButtonStories.Default} />
```

## Decorators

Decorators wrap stories with additional functionality. Global decorators are in `.storybook/preview.tsx`.

For story-specific decorators:

```typescript
export const Centered: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};
```

## Parameters

Parameters configure story behavior:

```typescript
export const FullWidth: Story = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};
```

Common parameters:
- `layout` - "centered", "padded", "fullscreen"
- `backgrounds` - Background colors
- `viewport` - Viewport sizes
- `chromatic` - Visual testing configuration

## Args and ArgTypes

### Args (Default Props)

```typescript
const meta = {
  args: {
    variant: "default",
    size: "md",
    children: "Click me",
  },
};
```

### ArgTypes (Control Configuration)

```typescript
const meta = {
  argTypes: {
    variant: {
      description: "The visual style variant",
      control: "select",
      options: ["default", "outline", "ghost"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
  },
};
```

## Complex Examples

### With Form Integration

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export const WithForm: Story = {
  render: (args) => {
    const form = useForm({
      resolver: zodResolver(schema),
    });
    
    return (
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <Input {...args} {...form.register("email")} />
        <Button type="submit">Submit</Button>
      </form>
    );
  },
};
```

### With State

```typescript
import { useState } from "react";

export const Interactive: Story = {
  render: (args) => {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <Button {...args} onClick={() => setCount(count + 1)}>
          Count: {count}
        </Button>
      </div>
    );
  },
};
```

## Best Practices

1. **One Story Per Variant** - Each visual state should be its own story
2. **Descriptive Names** - Use clear, descriptive story names
3. **Document Everything** - Add JSDoc comments for clarity
4. **Use Controls** - Make props interactive when possible
5. **Test Edge Cases** - Include error states, loading states, etc.
6. **Follow Patterns** - Match existing story structure
7. **Organize by Category** - Use consistent category naming

## Examples

See existing stories in `stories/` for reference:
- `button.stories.tsx` - Basic component with variants
- `form.stories.tsx` - Form integration example
- `chart.stories.tsx` - Complex component example

## Resources

- [Storybook Writing Stories](https://storybook.js.org/docs/writing-stories)
- [Component Story Format](https://storybook.js.org/docs/api/csf)
- [ArgTypes Documentation](https://storybook.js.org/docs/api/argtypes)

