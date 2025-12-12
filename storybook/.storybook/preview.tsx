import { ThemeProvider, TooltipProvider } from "@frontal/design-system";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { Toaster } from "sonner";

import "@frontal/design-system/styles/globals.css";

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
