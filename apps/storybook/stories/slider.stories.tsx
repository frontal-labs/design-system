import { Slider } from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * An input where the user selects a value from within a given range.
 */
const meta = {
  title: "ui/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "object" },
      description: "Controlled value",
    },
    defaultValue: {
      control: { type: "object" },
      description: "Default value",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback when value changes",
    },
    min: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "Minimum value",
    },
    max: {
      control: { type: "number", min: 1, max: 1000, step: 1 },
      description: "Maximum value",
    },
    step: {
      control: { type: "number", min: 0.1, max: 10, step: 0.1 },
      description: "Step value",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the slider is disabled",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    defaultValue: [33],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the slider.
 */
export const Default: Story = {};

/**
 * Use the `disabled` prop to disable the slider.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
