import { mock } from "bun:test";

// Mock next/font/local before any tests import it
mock.module("next/font/local", () => {
	return {
		default: (config: { variable?: string }) => {
			const variable = config.variable || "--font-default";
			return {
				variable,
				className: `font-${variable.replace("--font-", "").replace(/-/g, "_")}`,
				style: {
					fontFamily: variable,
				},
			};
		},
	};
});
