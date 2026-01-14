import { Textarea } from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * Displays a form textarea or a component that looks like a textarea.
 */
const meta = {
  title: "ui/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    value: {
      control: { type: "text" },
      description: "Textarea value",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default value",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the textarea is disabled",
    },
    readOnly: {
      control: { type: "boolean" },
      description: "Whether the textarea is read-only",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the textarea is required",
    },
    autoFocus: {
      control: { type: "boolean" },
      description: "Auto-focus on mount",
    },
    rows: {
      control: { type: "number", min: 1, max: 20, step: 1 },
      description: "Number of rows",
    },
    cols: {
      control: { type: "number", min: 1, max: 100, step: 1 },
      description: "Number of columns",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    onChange: {
      action: "changed",
      description: "Change handler",
    },
    onFocus: {
      action: "focused",
      description: "Focus handler",
    },
    onBlur: {
      action: "blurred",
      description: "Blur handler",
    },
  },
  args: {
    placeholder: "Type your message here.",
    disabled: false,
    readOnly: false,
    required: false,
    autoFocus: false,
    rows: 4,
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the textarea.
 */
export const Default: Story = {};

/**
 * Use the `disabled` prop to disable the textarea.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Use the `Label` component to includes a clear, descriptive label above or
 * alongside the text area to guide users.
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message">Your message</label>
      <Textarea {...args} id="message" />
    </div>
  ),
};

/**
 * Use a text element below the text area to provide additional instructions
 * or information to users.
 */
export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message-2">Your Message</label>
      <Textarea {...args} id="message-2" />
      <p className="text-slate-500 text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

/**
 * Use the `Button` component to indicate that the text area can be submitted
 * or used to trigger an action.
 */
export const WithButton: Story = {
  render: (args) => (
    <div className="grid w-full gap-2">
      <Textarea {...args} />
      <button
        className="rounded bg-primary px-4 py-2 text-primary-foreground"
        type="submit"
      >
        Send Message
      </button>
    </div>
  ),
};
