import { Button } from "@frontal-labs/design-system";
import { ScrollArea } from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 */
const meta = {
  title: "ui/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Scrollable content",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    // @ts-expect-error - Storybook type system doesn't recognize type prop
    type: {
      options: ["always", "auto", "hover", "scroll"],
      control: { type: "select" },
      description: "Scrollbar visibility type",
    },
    orientation: {
      options: ["horizontal", "vertical", "both"],
      control: { type: "select" },
      description: "Scrollbar orientation",
    },
  },
  args: {
    className: "h-32 w-80 rounded-md border p-4",
    children:
      "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop. The king was so angry that he banished Jokester from the kingdom, but the people still laughed, and they laughed, and they laughed. And they all lived happily ever after.",
    // @ts-expect-error - Storybook type system doesn't recognize type prop
    type: "hover",
    orientation: "vertical",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the scroll area.
 */
export const Default: Story = {};
