# @frontal/charts

Chart and data visualization components for the Frontal Design System.

## Overview

`@frontal/charts` provides chart components built on top of Recharts for data visualization in your applications.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

## Usage

### Import Charts

```tsx
import { ChartAreaDefault } from "@frontal/charts/components/chart-area-default";
import { ChartBarDefault } from "@frontal/charts/components/chart-bar-default";
```

### Import Styles

```tsx
import "@frontal/charts/styles/charts.css";
```

## Available Charts

### Area Charts

- `ChartAreaDefault` - Default area chart
- `ChartAreaInteractive` - Interactive area chart
- `ChartAreaStacked` - Stacked area chart
- `ChartAreaGradient` - Gradient area chart

### Bar Charts

- `ChartBarDefault` - Default bar chart
- `ChartBarGrouped` - Grouped bar chart
- `ChartBarStacked` - Stacked bar chart
- `ChartBarHorizontal` - Horizontal bar chart

### Line Charts

- `ChartLineDefault` - Default line chart
- `ChartLineMulti` - Multi-line chart
- `ChartLineSmooth` - Smooth line chart
- `ChartLineDashed` - Dashed line chart

### Pie Charts

- `ChartPieDefault` - Default pie chart
- `ChartPieDonut` - Donut chart
- `ChartPieLabeled` - Labeled pie chart

### Other Charts

- `ChartRadar` - Radar chart
- `ChartScatter` - Scatter plot
- `ChartCombo` - Combination chart

## Chart Examples

### Area Chart

```tsx
import { ChartAreaDefault } from "@frontal/charts/components/chart-area-default";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
];

function MyChart() {
  return <ChartAreaDefault data={data} />;
}
```

### Bar Chart

```tsx
import { ChartBarDefault } from "@frontal/charts/components/chart-bar-default";

const data = [
  { name: "Product A", sales: 400 },
  { name: "Product B", sales: 300 },
  { name: "Product C", sales: 200 },
];

function SalesChart() {
  return <ChartBarDefault data={data} />;
}
```

### Line Chart

```tsx
import { ChartLineDefault } from "@frontal/charts/components/chart-line-default";

const data = [
  { date: "2024-01-01", temperature: 20 },
  { date: "2024-01-02", temperature: 22 },
  { date: "2024-01-03", temperature: 18 },
];

function TemperatureChart() {
  return <ChartLineDefault data={data} />;
}
```

## Chart Configuration

Charts accept various props for customization:

```tsx
<ChartAreaDefault
  data={data}
  height={400}
  colors={["#3b82f6", "#10b981"]}
  showLegend
  showTooltip
  showGrid
/>
```

## Data Format

Charts expect data in a specific format:

```tsx
// Array of objects
const data = [
  { name: "Label 1", value: 100 },
  { name: "Label 2", value: 200 },
  { name: "Label 3", value: 150 },
];
```

## Styling

Charts are styled with Tailwind CSS and support:

- **Theming**: Light and dark themes
- **Colors**: Customizable color schemes
- **Responsive**: Responsive sizing
- **Animations**: Smooth transitions

## Dependencies

- `@frontal/icons` - Icon components
- `recharts` - Chart library

## Peer Dependencies

- `react` >= 19.2.0

## Best Practices

1. **Use appropriate chart types** - Choose the right chart for your data
2. **Provide clear labels** - Always label axes and data points
3. **Use consistent colors** - Follow the design system color palette
4. **Make charts accessible** - Include alt text and proper ARIA labels
5. **Optimize performance** - Use memoization for large datasets

## See Also

- [UI Components](./ui.md)
- [Design System Package](./design-system.md)
- [Recharts Documentation](https://recharts.org/)

