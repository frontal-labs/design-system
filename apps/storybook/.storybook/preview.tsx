import { ThemeProvider, TooltipProvider } from "@frontal/design-system";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { Toaster } from "sonner";

// Import CSS directly from source to avoid CSS @import resolution issues
import "../../../packages/colors/src/styles/styles.css";
import "../../../packages/colors/src/styles/theme.css";
import "../../../packages/typeface/src/styles/styles.css";

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
				<ThemeProvider>
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
