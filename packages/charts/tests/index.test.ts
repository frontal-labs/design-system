import { describe, expect, it } from "vitest";
import * as charts from "../src/index";

describe("@frontal/charts", () => {
	it("should export chart package", () => {
		expect(charts).toBeDefined();
	});

	it("should be an object", () => {
		expect(typeof charts).toBe("object");
		expect(charts).not.toBeNull();
	});

	it("should have no default exports (charts are example implementations)", () => {
		// Charts package exports example components, not a default export
		expect(charts.default).toBeUndefined();
	});
});
