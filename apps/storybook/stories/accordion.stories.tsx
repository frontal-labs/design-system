import { Button } from "@frontal-labs/design-system";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@frontal-labs/design-system";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * A vertically stacked set of interactive headings that each reveal a section
 * of content.
 */
const meta = {
  title: "ui/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: { type: "radio" },
      description: "Type of accordion behavior",
    },
    collapsible: {
      control: { type: "boolean" },
      description: "Whether the accordion items can be collapsed",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default value for controlled accordion",
    },
    value: {
      control: { type: "text" },
      description: "Controlled value",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback when value changes",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the accordion is disabled",
    },
  },
  args: {
    type: "single",
    collapsible: true,
    disabled: false,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default behavior of the accordion allows only one item to be open.
 */
export const Default: Story = {};
