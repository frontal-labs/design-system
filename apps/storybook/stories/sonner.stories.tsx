import { Button } from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Toaster, toast } from "sonner";

/**
 * An opinionated toast component for React.
 */
const meta: Meta<typeof Toaster> = {
  title: "ui/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    position: {
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      control: { type: "select" },
      description: "Toast position",
    },
    expand: {
      control: { type: "boolean" },
      description: "Expand toasts by default",
    },
    richColors: {
      control: { type: "boolean" },
      description: "Use rich colors",
    },
    closeButton: {
      control: { type: "boolean" },
      description: "Show close button",
    },
    toastOptions: {
      control: false,
      description: "Default toast options",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    position: "bottom-right",
    expand: false,
    richColors: false,
    closeButton: false,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the toaster.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex min-h-96 items-center justify-center space-x-2">
      <button
        onClick={() =>
          toast("Event has been created", {
            description: new Date().toLocaleString(),
            action: {
              label: "Undo",
              onClick: fn(),
            },
          })
        }
        type="button"
      >
        Show Toast
      </button>
      <Toaster {...args} />
    </div>
  ),
};
