import { Button } from "@frontal-labs/design-system";
import { Label } from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * Renders an accessible label associated with controls.
 */
const meta = {
  title: "ui/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Label content",
    },
    htmlFor: {
      control: { type: "text" },
      description: "ID of the associated form control",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Your email address",
    htmlFor: "email",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

/**
 * The default form of the label.
 */
export const Default: Story = {};
