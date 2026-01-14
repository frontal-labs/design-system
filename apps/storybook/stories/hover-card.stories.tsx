import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * For sighted users to preview content available behind a link.
 */
const meta = {
  title: "ui/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {
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
    // @ts-expect-error - Storybook type system doesn't recognize openDelay prop
    openDelay: {
      control: { type: "number", min: 0, max: 1000, step: 100 },
      description: "Delay before opening (ms)",
    },
    closeDelay: {
      control: { type: "number", min: 0, max: 1000, step: 100 },
      description: "Delay before closing (ms)",
    },
  },
  args: {
    // @ts-expect-error - Storybook type system doesn't recognize openDelay prop
    openDelay: 700,
    closeDelay: 300,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        The React Framework - created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the hover card.
 */
export const Default: Story = {};

/**
 * Use the `openDelay` and `closeDelay` props to control the delay before the
 * hover card opens and closes.
 */
export const Instant: Story = {
  args: {},
};
