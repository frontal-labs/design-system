"use client";

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@frontal/design-system";
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
} from "recharts";

const data = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

const config = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export function ChartShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Area Chart</h3>
				<ChartContainer config={config}>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{ left: 12, right: 12 }}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							axisLine={false}
							dataKey="month"
							tickFormatter={(value) => value.slice(0, 3)}
							tickLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={<ChartTooltipContent indicator="dot" />}
							cursor={false}
						/>
						<Area
							dataKey="mobile"
							fill="var(--color-mobile)"
							fillOpacity={0.4}
							stackId="a"
							stroke="var(--color-mobile)"
							type="natural"
						/>
						<Area
							dataKey="desktop"
							fill="var(--color-desktop)"
							fillOpacity={0.4}
							stackId="a"
							stroke="var(--color-desktop)"
							type="natural"
						/>
					</AreaChart>
				</ChartContainer>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Bar Chart</h3>
				<ChartContainer config={config}>
					<BarChart accessibilityLayer data={data}>
						<CartesianGrid vertical={false} />
						<XAxis
							axisLine={false}
							dataKey="month"
							tickFormatter={(value) => value.slice(0, 3)}
							tickLine={false}
							tickMargin={10}
						/>
						<ChartTooltip
							content={<ChartTooltipContent indicator="dashed" />}
							cursor={false}
						/>
						<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
						<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
					</BarChart>
				</ChartContainer>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Line Chart</h3>
				<ChartContainer config={config}>
					<LineChart
						accessibilityLayer
						data={data}
						margin={{ left: 12, right: 12 }}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							axisLine={false}
							dataKey="month"
							tickFormatter={(value) => value.slice(0, 3)}
							tickLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={<ChartTooltipContent hideLabel />}
							cursor={false}
						/>
						<Line
							dataKey="desktop"
							dot={false}
							stroke="var(--color-desktop)"
							strokeWidth={2}
							type="natural"
						/>
						<Line
							dataKey="mobile"
							dot={false}
							stroke="var(--color-mobile)"
							strokeWidth={2}
							type="natural"
						/>
					</LineChart>
				</ChartContainer>
			</section>
		</div>
	);
}
