import { Button } from "@frontal-labs/design-system";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * A drawer component for React.
 */
const meta: Meta<typeof Drawer> = {
  title: "ui/Drawer",
  component: Drawer,
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
    direction: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
      description: "Drawer direction",
    },
    modal: {
      control: { type: "boolean" },
      description: "Whether the drawer is modal",
    },
  },
  args: {
    direction: "bottom",
    modal: true,
  },
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <button
            className="rounded bg-primary px-4 py-2 text-primary-foreground"
            type="button"
          >
            Submit
          </button>
          <DrawerClose>
            <button className="hover:underline" type="button">
              Cancel
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the drawer.
 */

export const Default: Story = {
  // @ts-expect-error - Issue with Storybook arg types inference
  args: {},
};
