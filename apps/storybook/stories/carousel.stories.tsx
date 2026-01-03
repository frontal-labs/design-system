import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@frontal/design-system";
import type { Meta, StoryObj } from "@storybook/react";

const carouselItems = Array.from({ length: 5 }, (_, i) => ({
	id: `item-${i + 1}`,
	number: i + 1,
}));

/**
 * A carousel with motion and swipe built using Embla.
 */
const meta: Meta<typeof Carousel> = {
	title: "ui/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	argTypes: {},
	args: {
		className: "w-full max-w-xs",
	},
	render: (args) => (
		<Carousel {...args}>
			<CarouselContent>
				{carouselItems.map((item) => (
					<CarouselItem key={item.id}>
						<div className="flex aspect-square items-center justify-center rounded border bg-card p-6">
							<span className="font-semibold text-4xl">{item.number}</span>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the carousel.
 */
export const Default: Story = {};

/**
 * Use the `basis` utility class to change the size of the carousel.
 */
const carouselSizeItems = Array.from({ length: 5 }, (_, i) => ({
	id: `size-item-${i + 1}`,
	number: i + 1,
}));

export const Size: Story = {
	render: (args) => (
		<Carousel {...args} className="mx-12 w-full max-w-xs">
			<CarouselContent>
				{carouselSizeItems.map((item) => (
					<CarouselItem className="basis-1/3" key={item.id}>
						<div className="flex aspect-square items-center justify-center rounded border bg-card p-6">
							<span className="font-semibold text-4xl">{item.number}</span>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
	args: {
		className: "mx-12 w-full max-w-xs",
	},
};
