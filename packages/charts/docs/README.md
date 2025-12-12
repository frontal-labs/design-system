# @frontal/charts Documentation

## Overview

The `@frontal/charts` package provides a comprehensive collection of chart and data visualization components built on top of Recharts. These components are example implementations demonstrating various chart types, configurations, and customization options.

## Installation

This package is part of the Frontal monorepo and is available as a workspace dependency.

```bash
pnpm install @frontal/charts
```

## Available Chart Types

### Area Charts
- **chart-area-default**: Basic area chart
- **chart-area-gradient**: Area chart with gradient fill
- **chart-area-linear**: Linear area chart
- **chart-area-stacked**: Stacked area chart
- **chart-area-stacked-expand**: Expandable stacked area chart
- **chart-area-step**: Step area chart
- **chart-area-axes**: Area chart with custom axes
- **chart-area-legend**: Area chart with legend
- **chart-area-icons**: Area chart with icon indicators
- **chart-area-interactive**: Interactive area chart with controls

### Bar Charts
- **chart-bar-default**: Basic bar chart
- **chart-bar-horizontal**: Horizontal bar chart
- **chart-bar-stacked**: Stacked bar chart
- **chart-bar-multiple**: Multiple series bar chart
- **chart-bar-negative**: Bar chart with negative values
- **chart-bar-mixed**: Mixed chart types
- **chart-bar-label**: Bar chart with labels
- **chart-bar-label-custom**: Custom label formatting
- **chart-bar-active**: Interactive bar chart
- **chart-bar-interactive**: Bar chart with interactive controls

### Line Charts
- **chart-line-default**: Basic line chart
- **chart-line-linear**: Linear line chart
- **chart-line-step**: Step line chart
- **chart-line-multiple**: Multiple series line chart
- **chart-line-dots**: Line chart with dots
- **chart-line-dots-colors**: Colored dots
- **chart-line-dots-custom**: Custom dot rendering
- **chart-line-label**: Line chart with labels
- **chart-line-label-custom**: Custom label formatting
- **chart-line-interactive**: Interactive line chart

### Pie Charts
- **chart-pie-simple**: Simple pie chart
- **chart-pie-stacked**: Stacked pie chart
- **chart-pie-donut**: Donut chart
- **chart-pie-donut-active**: Interactive donut chart
- **chart-pie-donut-text**: Donut chart with text
- **chart-pie-label**: Pie chart with labels
- **chart-pie-label-list**: Label list format
- **chart-pie-label-custom**: Custom label formatting
- **chart-pie-legend**: Pie chart with legend
- **chart-pie-separator-none**: No separator lines
- **chart-pie-interactive**: Interactive pie chart

### Radar Charts
- **chart-radar-default**: Basic radar chart
- **chart-radar-dots**: Radar chart with dots
- **chart-radar-lines-only**: Lines only (no fill)
- **chart-radar-multiple**: Multiple series
- **chart-radar-icons**: Radar chart with icons
- **chart-radar-legend**: Radar chart with legend
- **chart-radar-label-custom**: Custom label formatting
- **chart-radar-radius**: Custom radius configuration
- **chart-radar-grid-circle**: Circular grid
- **chart-radar-grid-circle-fill**: Filled circular grid
- **chart-radar-grid-circle-no-lines**: Grid without lines
- **chart-radar-grid-custom**: Custom grid configuration
- **chart-radar-grid-fill**: Filled grid
- **chart-radar-grid-none**: No grid

### Radial Charts
- **chart-radial-simple**: Simple radial chart
- **chart-radial-stacked**: Stacked radial chart
- **chart-radial-shape**: Custom shape radial chart
- **chart-radial-text**: Radial chart with text
- **chart-radial-label**: Radial chart with labels
- **chart-radial-grid**: Radial chart with grid

### Tooltip Variations
- **chart-tooltip-default**: Default tooltip
- **chart-tooltip-advanced**: Advanced tooltip configuration
- **chart-tooltip-formatter**: Custom formatter
- **chart-tooltip-icons**: Tooltip with icons
- **chart-tooltip-indicator-line**: Line indicator
- **chart-tooltip-indicator-none**: No indicator
- **chart-tooltip-label-custom**: Custom label
- **chart-tooltip-label-formatter**: Label formatter
- **chart-tooltip-label-none**: No label

## Usage

### Importing Chart Components

Chart components are example implementations that can be imported directly:

```tsx
import { ChartAreaDefault } from '@frontal/charts/components/chart-area-default';
import { ChartBarDefault } from '@frontal/charts/components/chart-bar-default';
import { ChartLineDefault } from '@frontal/charts/components/chart-line-default';
```

### Basic Example

```tsx
import { ChartAreaDefault } from '@frontal/charts/components/chart-area-default';

function MyDashboard() {
  return (
    <div>
      <ChartAreaDefault />
    </div>
  );
}
```

### Customizing Charts

All chart components accept standard Recharts props and can be customized:

```tsx
import { ChartAreaDefault } from '@frontal/charts/components/chart-area-default';

// Modify the component to customize data, colors, etc.
function CustomChart() {
  const customData = [
    { month: "January", desktop: 200 },
    { month: "February", desktop: 350 },
    // ... more data
  ];

  return <ChartAreaDefault data={customData} />;
}
```

## Dependencies

Charts are built on:
- **recharts**: Primary charting library
- **@frontal/icons**: Icon library (replaces lucide-react)
- **@frontal/ui**: UI components (Card, etc.)

## Styling

Charts use Tailwind CSS and the Frontal design system. Import the consolidated CSS:

```tsx
import '@frontal/design-system/styles/globals.css';
```

Chart-specific styles are included in `@frontal/charts/styles/charts.css` and are automatically imported through the design system.

## Chart Configuration

Charts use a `ChartConfig` type for consistent theming:

```tsx
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
    icon: ArrowUpIcon, // From @frontal/icons
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
    icon: ArrowDownIcon,
  },
} satisfies ChartConfig;
```

## Icons

All charts use icons from `@frontal/icons`:
- `ArrowUpIcon`: For trending up indicators
- `ArrowDownIcon`: For trending down indicators
- `PulseIcon`: For activity indicators
- `FootprintIcon`: For footprint/step indicators
- `WaterFlashIcon`: For wave/water indicators
- `GitCommitIcon`: For commit indicators

## Development

### Building

```bash
pnpm build
```

### Testing

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
```

### Type Checking

```bash
pnpm type-check
```

### Linting

```bash
pnpm lint
pnpm lint:fix
```

## Chart Data Format

Charts expect data in a consistent format:

```tsx
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  // ...
];
```

## Color System

Charts use CSS variables for colors:
- `var(--chart-1)` through `var(--chart-5)`: Primary chart colors
- `var(--color-desktop)`, `var(--color-mobile)`: Series-specific colors

These are defined in the design system's color palette.

## Contributing

When adding new chart components:
1. Create the component in `src/components/`
2. Use `@frontal/icons` for all icons
3. Follow the existing chart structure
4. Include proper TypeScript types
5. Add appropriate tests
6. Document any special configurations

## License

See [LICENSE.md](../LICENSE.md) for details.

