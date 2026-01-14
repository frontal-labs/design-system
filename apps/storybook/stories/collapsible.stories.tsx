import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "lucide-react";

/**
 * An interactive component which expands/collapses a panel.
 */
const meta = {
  title: "ui/Collapsible",
  component: Collapsible,
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
    disabled: {
      control: { type: "boolean" },
      description: "Whether the collapsible is disabled",
    },
    onOpenChange: {
      action: "openChanged",
      description: "Callback when open state changes",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    className: "w-96",
    disabled: false,
    defaultOpen: false,
  },
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger className="flex gap-2">
        <h3 className="font-semibold">Can I use this in my project?</h3>
        <Info className="size-6" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the collapsible.
 */
export const Default: Story = {};

/**
 * Use the `disabled` prop to disable the interaction.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
