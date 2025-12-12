import { describe, expect, it } from "vitest";
import * as designSystem from "../src/index";

describe("@frontal/design-system", () => {
	it("should export design system package", () => {
		expect(designSystem).toBeDefined();
	});
});
