import BundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import { keys } from "./keys.js";

// Type for the bundle analyzer config
type AnalyzerConfig = Parameters<ReturnType<typeof BundleAnalyzer>>[0];

// Environment variables
const { BUNDLE_ANALYZER, OPEN_BUNDLE_ANALYZER } = keys();

/**
 * Wraps the next config with the bundle analyzer for build analysis.
 *
 * The bundle analyzer provides detailed information about the JavaScript
 * bundle size and composition, helping identify optimization opportunities.
 * It's only enabled when the BUNDLE_ANALYZER environment variable is set to true.
 *
 * @see https://www.npmjs.com/package/@next/bundle-analyzer
 */
export const withBundleAnalyzer = (config: NextConfig): NextConfig => {
	const analyzer = BundleAnalyzer({
		/**
		 * Enable bundle analyzer
		 */
		enabled: BUNDLE_ANALYZER,
		/**
		 * Open bundle analyzer
		 */
		openAnalyzer: OPEN_BUNDLE_ANALYZER,
	});
	return analyzer(config as AnalyzerConfig) as NextConfig;
};
