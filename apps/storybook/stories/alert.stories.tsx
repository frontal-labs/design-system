import { Alert, AlertDescription, AlertTitle } from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle } from "lucide-react";

/**
 * Displays a callout for user attention.
 */
const meta = {
  title: "ui/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "error", "info", "success", "warning"],
      control: { type: "select" },
      description: "Visual style variant",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;
/**
 * The default form of the alert.
 */
export const Default: Story = {};

/**
 * Use the `destructive` alert to indicate a destructive action.
 */
export const Destructive: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "error",
  },
};
