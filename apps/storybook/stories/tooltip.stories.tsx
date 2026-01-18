import { Button } from "@frontal-labs/design-system";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

/**
 * A popup that displays information related to an element when the element
 * receives keyboard focus or the mouse hovers over it.
 */
const meta: Meta<typeof TooltipContent> = {
  title: "ui/Tooltip",
  component: TooltipContent,
  tags: ["autodocs"],
  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "radio",
      },
      description: "Side where tooltip appears",
    },
    align: {
      options: ["start", "center", "end"],
      control: { type: "select" },
      description: "Alignment of tooltip",
    },
    sideOffset: {
      control: { type: "number", min: 0, max: 20, step: 1 },
      description: "Offset from trigger element",
    },
    // @ts-expect-error - Storybook type system doesn't recognize open prop
    open: {
      control: { type: "boolean" },
      description: "Controlled open state",
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "Default open state",
    },
    onOpenChange: {
      action: "openChanged",
      description: "Callback when open state changes",
    },
    delayDuration: {
      control: { type: "number", min: 0, max: 1000, step: 100 },
      description: "Delay before showing tooltip (ms)",
    },
    children: {
      control: "text",
      description: "Tooltip content",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    side: "top",
    align: "center",
    sideOffset: 4,
    children: "Add to library",
    // @ts-expect-error - Storybook type system doesn't recognize delayDuration prop
    delayDuration: 700,
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add</span>
        </TooltipTrigger>
        <TooltipContent {...args} />
      </Tooltip>
    </TooltipProvider>
  ),
} satisfies Meta<typeof TooltipContent>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the tooltip.
 */
export const Default: Story = {};

/**
 * Use the `bottom` side to display the tooltip below the element.
 */
export const Bottom: Story = {
  args: {
    side: "bottom",
  },
};

/**
 * Use the `left` side to display the tooltip to the left of the element.
 */
export const Left: Story = {
  args: {
    side: "left",
  },
};

/**
 * Use the `right` side to display the tooltip to the right of the element.
 */
export const Right: Story = {
  args: {
    side: "right",
  },
};
