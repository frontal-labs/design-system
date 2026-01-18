import { Button } from "@frontal-labs/design-system";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * A set of layered sections of content—known as tab panels—that are displayed
 * one at a time.
 */
const meta = {
  title: "ui/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Controlled active tab value",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default active tab value",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback when active tab changes",
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      description: "Tab orientation",
    },
    // @ts-expect-error - Storybook type system doesn't recognize activationMode prop
    activationMode: {
      options: ["automatic", "manual"],
      control: { type: "radio" },
      description: "Tab activation mode",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    defaultValue: "account",
    className: "w-96",
    orientation: "horizontal",
    // @ts-expect-error - Storybook type system doesn't recognize activationMode prop
    activationMode: "automatic",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the tabs.
 */
export const Default: Story = {};
