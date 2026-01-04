# Frontal Design System Examples

This directory contains example applications demonstrating the Frontal Design System components and patterns.

## Structure

- **app/**: Next.js App Router pages
  - **page.tsx**: Main landing page with navigation to all examples
  - **components/**: Reusable components (Navigation, Hero, ThemeToggle)
  - **dashboard/**: Full-featured dashboard with charts and data visualization
  - **forms/**: Form examples with validation using React Hook Form and Zod
  - **layouts/**: Layout patterns including dashboard and landing page examples
  - **components/**: Component showcase with interactive demos
  - **providers.tsx**: Theme and toast providers

## Features

### Enhanced UI/UX
- **Theme Switching**: Dark/light mode with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Transitions**: Hover effects, animations, and micro-interactions
- **Modern Layout**: Sticky navigation, hero sections, and card-based design

### Interactive Dashboard
- **Real-time Charts**: Line charts, bar charts with Recharts
- **Data Tables**: Sortable and filterable tables with status badges
- **Performance Metrics**: Progress bars and analytics displays
- **Activity Feeds**: Recent activity tracking with timestamps

### Advanced Components
- **Form Validation**: React Hook Form + Zod integration
- **Navigation System**: Responsive sidebar with user profile
- **Toast Notifications**: Sonner integration for user feedback
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run the development server:
   ```bash
   bun run dev
   ```

3. Open [http://localhost:3001](http://localhost:3001) to view the examples.

## Examples Overview

### Main Landing Page
- **Hero Section**: Gradient backgrounds, call-to-action buttons, statistics
- **Navigation Bar**: Sticky header with theme toggle and responsive menu
- **Feature Cards**: Hover effects, descriptions, and navigation links

### Interactive Dashboard (`/dashboard`)
- **Sidebar Navigation**: Collapsible sidebar with user profile
- **Overview Tab**: Revenue charts, customer growth, KPI cards
- **Analytics Tab**: Performance metrics, traffic sources, engagement stats
- **Activity Tab**: Recent activity table with status badges

### Component Showcase (`/components`)
- **Buttons**: Various styles, sizes, and states with hover effects
- **Forms**: Input fields, selects, checkboxes, switches with validation
- **Feedback**: Alerts, badges, loading states, progress indicators
- **Navigation**: Dialogs, accordions, tabs with smooth transitions
- **Display**: Avatars, cards, containers with responsive layouts

### Form Examples (`/forms`)
- **Contact Form**: Multi-field form with real-time validation
- **User Registration**: Password strength, confirmation, terms acceptance
- **Advanced Features**: Field arrays, conditional rendering, async validation

### Layout Examples (`/layouts`)
- **Dashboard Layout**: Professional sidebar with main content area
- **Landing Page**: Marketing-focused hero and feature sections
- **Component Layouts**: Tabs, progress bars, alerts in various arrangements

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library with latest features
- **TypeScript**: Strict type safety and better DX
- **Tailwind CSS**: Utility-first styling with custom configuration
- **next-themes**: Theme switching with system preference
- **React Hook Form**: Performant form management
- **Zod**: Schema-first validation
- **Recharts**: Composable chart library
- **Sonner**: Toast notifications
- **Lucide React**: Beautiful icon library

## Development Features

- **Hot Reload**: Fast development with Next.js dev server
- **Type Safety**: Full TypeScript coverage
- **Bundle Analysis**: Built-in bundle analyzer with `bun run analyze`
- **Code Quality**: ESLint, Prettier, and Biome integration
- **Workspace Integration**: Monorepo setup with shared packages

## Design Principles

- **Accessibility First**: WCAG 2.1 AA compliance
- **Mobile Responsive**: Progressive enhancement approach
- **Performance Optimized**: Lazy loading and code splitting
- **Developer Experience**: Clear documentation and examples
- **Consistent Design**: Unified design language and patterns

## Notes

- All examples use the `@frontal/ui` package
- TypeScript is configured with strict mode
- The app runs on port 3001 to avoid conflicts with Storybook
- Components are fully responsive and accessible
- Theme persistence is handled automatically
- Forms include comprehensive validation and error handling
