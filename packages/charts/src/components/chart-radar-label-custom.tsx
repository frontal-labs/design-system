"use client";

import { ArrowUpIcon } from "@frontal-labs/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@frontal-labs/ui";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

export const description = "A radar chart with a custom label";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartRadarLabelCustom() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Radar Chart - Custom Label</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis
              dataKey="month"
              tick={(props: {
                x?: number;
                y?: number;
                textAnchor?: "start" | "middle" | "end" | "inherit";
                index?: number;
              }) => {
                const { x, y, textAnchor, index } = props;
                if (index === undefined || !chartData[index]) {
                  return <text />;
                }
                const data = chartData[index];
                const textX = x ?? 0;
                const textY =
                  index === 0 && y !== undefined ? y - 10 : (y ?? 0);

                return (
                  <text
                    x={textX}
                    y={textY}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                  >
                    <tspan>{data.desktop}</tspan>
                    <tspan className="fill-muted-foreground">/</tspan>
                    <tspan>{data.mobile}</tspan>
                    <tspan
                      x={textX}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-muted-foreground"
                    >
                      {data.month}
                    </tspan>
                  </text>
                );
              }}
            />

            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <ArrowUpIcon className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground leading-none">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
