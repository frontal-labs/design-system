// Type definitions for shadcn/schema
// This is a minimal type definition for the Registry type used in the blocks registry

export interface RegistryItem {
	name: string;
	type: string;
	description?: string;
	dependencies?: string[];
	registryDependencies?: string[];
	files?: Array<{
		path: string;
		type: string;
		target?: string;
	}>;
	categories?: string[];
	meta?: Record<string, unknown>;
}

export interface Registry {
	items: RegistryItem[];
}
