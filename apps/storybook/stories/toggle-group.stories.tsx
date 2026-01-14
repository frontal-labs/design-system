import { ToggleGroup, ToggleGroupItem } from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";

/**
 * A set of two-state buttons that can be toggled on or off.
 */
const meta = {
  title: "ui/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  argTypes: {
    // @ts-expect-error - Storybook type system doesn't recognize type prop
    type: {
      options: ["single", "multiple"],
      control: { type: "radio" },
      description: "Toggle group type",
    },
    value: {
      control: { type: "text" },
      description: "Controlled value (single) or array (multiple)",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default value",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback when value changes",
    },
    variant: {
      options: ["default", "outline"],
      control: { type: "select" },
      description: "Visual style variant",
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
      description: "Toggle group size",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the toggle group is disabled",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    // @ts-expect-error - Storybook type system doesn't recognize type prop
    type: "single",
    variant: "default",
    size: "default",
    disabled: false,
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the toggle group.
 */
export const Default: Story = {};

/**
 * Use the `outline` variant to emphasizing the individuality of each button
 * while keeping them visually cohesive.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

/**
 * Use the `sm` size for a compact version of the button group, featuring
 * smaller buttons for spaces with limited real estate.
 */
export const Small: Story = {
  args: {
    size: "sm",
  },
};

/**
 * Use the `lg` size for a more prominent version of the button group, featuring
 * larger buttons for emphasis.
 */
export const Large: Story = {
  args: {
    size: "lg",
  },
};

/**
 * Add the `disabled` prop to a button to prevent interactions.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
