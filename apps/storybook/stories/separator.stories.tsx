import { Button } from "@frontal-labs/design-system";
import { Separator } from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * Visually or semantically separates content.
 */
const meta = {
  title: "ui/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      description: "Separator orientation",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    // @ts-expect-error - Storybook type system doesn't recognize decorative prop
    decorative: {
      control: { type: "boolean" },
      description: "Whether the separator is decorative",
    },
  },
  args: {
    orientation: "horizontal",
    // @ts-expect-error - Storybook type system doesn't recognize decorative prop
    decorative: true,
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the separator.
 */
export const Horizontal: Story = {
  render: () => (
    <div className="flex gap-2">
      <div>Left</div>
      <Separator className="h-auto" orientation="vertical" />
      <div>Right</div>
    </div>
  ),
};

/**
 * A vertical separator.
 */
export const Vertical: Story = {
  render: () => (
    <div className="grid gap-2">
      <div>Top</div>
      <Separator orientation="horizontal" />
      <div>Bottom</div>
    </div>
  ),
};
