"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@frontal/ui";
import { Bar, BarChart, XAxis } from "recharts";

export const description = "A stacked bar chart with a legend";

const chartData = [
	{ date: "2024-07-15", running: 450, swimming: 300 },
	{ date: "2024-07-16", running: 380, swimming: 420 },
	{ date: "2024-07-17", running: 520, swimming: 120 },
	{ date: "2024-07-18", running: 140, swimming: 550 },
	{ date: "2024-07-19", running: 600, swimming: 350 },
	{ date: "2024-07-20", running: 480, swimming: 400 },
];

const chartConfig = {
	running: {
		label: "Running",
		color: "var(--chart-1)",
	},
	swimming: {
		label: "Swimming",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ChartTooltipAdvanced() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Tooltip - Advanced</CardTitle>
				<CardDescription>
					Tooltip with custom formatter and total.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<XAxis
							dataKey="date"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value: string | number) => {
								return new Date(value).toLocaleDateString("en-US", {
									weekday: "short",
								});
							}}
						/>
						<Bar
							dataKey="running"
							stackId="a"
							fill="var(--color-running)"
							radius={[0, 0, 4, 4]}
						/>
						<Bar
							dataKey="swimming"
							stackId="a"
							fill="var(--color-swimming)"
							radius={[4, 4, 0, 0]}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									hideLabel
									className="w-[180px]"
									formatter={(
										value: unknown,
										name?: string | number,
										item?: unknown,
										index?: number,
									) => {
										const typedItem = item as
											| { payload?: { running?: number; swimming?: number } }
											| undefined;
										return (
											<>
												<div
													className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
													style={
														{
															"--color-bg": `var(--color-${name})`,
														} as React.CSSProperties
													}
												/>
												{chartConfig[String(name) as keyof typeof chartConfig]
													?.label || String(name)}
												<div className="ml-auto flex items-baseline gap-0.5 font-medium font-mono text-foreground tabular-nums">
													{String(value)}
													<span className="font-normal text-muted-foreground">
														kcal
													</span>
												</div>
												{/* Add this after the last item */}
												{index === 1 && typedItem?.payload && (
													<div className="mt-1.5 flex basis-full items-center border-t pt-1.5 font-medium text-foreground text-xs">
														Total
														<div className="ml-auto flex items-baseline gap-0.5 font-medium font-mono text-foreground tabular-nums">
															{(typedItem.payload.running ?? 0) +
																(typedItem.payload.swimming ?? 0)}
															<span className="font-normal text-muted-foreground">
																kcal
															</span>
														</div>
													</div>
												)}
											</>
										);
									}}
								/>
							}
							cursor={false}
							defaultIndex={1}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
