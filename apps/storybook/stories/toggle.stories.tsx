import { Button } from "@frontal-labs/design-system";
import { Toggle } from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic } from "lucide-react";

/**
 * A two-state button that can be either on or off.
 */
const meta: Meta<typeof Toggle> = {
  title: "ui/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { disable: true },
      description: "Toggle content",
    },
    variant: {
      options: ["default", "outline"],
      control: { type: "select" },
      description: "Visual style variant",
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
      description: "Toggle size",
    },
    pressed: {
      control: { type: "boolean" },
      description: "Controlled pressed state",
    },
    defaultPressed: {
      control: { type: "boolean" },
      description: "Default pressed state",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the toggle is disabled",
    },
    onPressedChange: {
      action: "pressedChanged",
      description: "Callback when pressed state changes",
    },
    "aria-label": {
      control: { type: "text" },
      description: "Accessibility label",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    children: <Bold className="h-4 w-4" />,
    "aria-label": "Toggle bold",
    variant: "default",
    size: "default",
    disabled: false,
    defaultPressed: false,
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

/**
 * The default form of the toggle.
 */
export const Default: Story = {};

/**
 * Use the `outline` variant for a distinct outline, emphasizing the boundary
 * of the selection circle for clearer visibility
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Italic className="h-4 w-4" />,
    "aria-label": "Toggle italic",
  },
};

/**
 * Use the text element to add a label to the toggle.
 */
export const WithText: Story = {
  render: (args) => (
    <Toggle {...args}>
      <Italic className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  ),
  args: { ...Outline.args },
};

/**
 * Use the `sm` size for a smaller toggle, suitable for interfaces needing
 * compact elements without sacrificing usability.
 */
export const Small: Story = {
  args: {
    size: "sm",
  },
};

/**
 * Use the `lg` size for a larger toggle, offering better visibility and
 * easier interaction for users.
 */
export const Large: Story = {
  args: {
    size: "lg",
  },
};

/**
 * Add the `disabled` prop to prevent interactions with the toggle.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
