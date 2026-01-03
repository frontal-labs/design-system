export interface ConstraintViolation {
	rule: string;
	severity: "error" | "warning";
	message: string;
	package?: string;
	file?: string;
	suggestion?: string;
}

export interface ConstraintResult {
	success: boolean;
	violations: ConstraintViolation[];
	checked: number;
	duration: number;
}

export interface DependencyRule {
	/** Disallow certain dependencies */
	banned?: string[];
	/** Required dependencies for specific package types */
	required?: Record<string, string[]>;
	/** Allowed version ranges */
	allowedVersions?: Record<string, string>;
}

export interface VersionRule {
	/** Enforce consistent major versions */
	consistentMajor?: boolean;
	/** Allowed pre-release tags */
	allowedTags?: string[];
	/** Minimum version requirements */
	minimumVersions?: Record<string, string>;
}

export interface PackageInfo {
	name: string;
	path: string;
	version: string;
	dependencies: Record<string, string>;
	devDependencies: Record<string, string>;
	peerDependencies: Record<string, string>;
}

export interface WorkspaceInfo {
	root: string;
	packages: PackageInfo[];
}
