import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
	createEnv({
		server: {
			BUNDLE_ANALYZER: z
				.string()
				.transform((val: string) => val === "true")
				.default("false")
				.describe("Enable bundle analysis"),
			OPEN_BUNDLE_ANALYZER: z
				.string()
				.transform((val: string) => val === "true")
				.default("false")
				.describe("Enable bundle analysis"),
			TRAILING_SLASH: z
				.string()
				.default("true")
				.transform((val: string) => val === "true")
				.describe("Skip trailing slash redirects"),
			NEXT_RUNTIME: z
				.enum(["nodejs", "edge"])
				.optional()
				.describe("Next runtime"),
		},
		runtimeEnv: {
			BUNDLE_ANALYZER: process.env.BUNDLE_ANALYZER,
			OPEN_BUNDLE_ANALYZER: process.env.OPEN_BUNDLE_ANALYZER,
			TRAILING_SLASH: process.env.TRAILING_SLASH,
			NEXT_RUNTIME: process.env.NEXT_RUNTIME,
		},
		skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	});
