export interface RegistryItemFile {
	path: string;
	type: "registry:file" | "registry:page" | "registry:component";
	target?: string;
}

export interface RegistryItem {
	name: string;
	type: "registry:block" | "registry:component" | "registry:page";
	description?: string;
	dependencies?: string[];
	registryDependencies?: string[];
	files?: RegistryItemFile[];
	categories?: string[];
	// biome-ignore lint/suspicious/noExplicitAny: Meta can contain anything
	meta?: Record<string, any>;
}

export interface Registry {
	items: RegistryItem[];
}
