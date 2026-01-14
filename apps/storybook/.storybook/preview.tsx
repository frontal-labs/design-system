import { TooltipProvider } from "@frontal/design-system";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

// Import CSS files directly to ensure Tailwind CSS v4 processing
// These files use Tailwind CSS v4 @import syntax which PostCSS will process
// Import in the correct order: colors first, then typeface, then UI
// Using direct paths to ensure webpack resolves them correctly
import "../../../packages/colors/src/styles/styles.css";
import "../../../packages/colors/src/styles/theme.css";
import "../../../packages/typeface/src/styles/styles.css";
import "../../../packages/ui/src/styles/styles.css";
// Import additional styles
import "../../../packages/charts/src/styles/styles.css";
import "../../../packages/blocks/src/styles/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: {
        light: {
          theme: "light",
          className: "light",
        },
        dark: {
          theme: "dark",
          className: "dark",
        },
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TooltipProvider>
            <Story />
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </div>
    ),
  ],
};

export default preview;
