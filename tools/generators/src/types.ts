export interface GeneratorOptions {
	name: string;
	description?: string;
	dryRun?: boolean;
	verbose?: boolean;
}

export interface GeneratorResult {
	success: boolean;
	name: string;
	path: string;
	filesCreated: string[];
	errors: string[];
}

export interface PackageOptions extends GeneratorOptions {
	type?:
		| "ui"
		| "blocks"
		| "charts"
		| "icons"
		| "colors"
		| "typeface"
		| "components"
		| "utility"
		| "config";
	dependencies?: string[];
	addTests?: boolean;
}

export interface AppOptions extends GeneratorOptions {
	type?: "storybook" | "web";
	port?: number;
}

export interface InternalOptions extends GeneratorOptions {
	type?: "typescript-config" | "eslint-config" | "tailwind-config";
	envVars?: EnvVar[];
}

export interface EnvVar {
	name: string;
	type: "string" | "number" | "boolean";
	required?: boolean;
	default?: string;
}

export interface TemplateContext {
	name: string;
	packageName: string;
	description: string;
	type: string;
	timestamp: string;
	[key: string]: unknown;
}
