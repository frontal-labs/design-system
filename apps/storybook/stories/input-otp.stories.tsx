import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

/**
 * Accessible one-time password component with copy paste functionality.
 */
const meta = {
  title: "ui/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  argTypes: {
    maxLength: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Maximum number of characters",
    },
    pattern: {
      control: false,
      description: "Pattern for allowed characters",
    },
    value: {
      control: { type: "text" },
      description: "Controlled value",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default value",
    },
    // @ts-expect-error - Storybook type system doesn't recognize onValueChange prop
    onValueChange: {
      action: "valueChanged",
      description: "Callback when value changes",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    children: {
      control: false,
      description: "Input slots",
    },
  },
  args: {
    maxLength: 6,
    pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
    children: null,
    disabled: false,
  },

  render: (args) => (
    <InputOTP {...args} render={undefined}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the InputOTP field.
 */
export const Default: Story = {};

/**
 * Use multiple groups to separate the input slots.
 */
export const SeparatedGroup: Story = {
  render: (args) => (
    <InputOTP {...args} render={undefined}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};
