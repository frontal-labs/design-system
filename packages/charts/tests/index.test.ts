import { describe, expect, it } from "vitest";
import * as charts from "../src/index";

describe("@frontal/charts", () => {
	it("should export chart package", () => {
		expect(charts).toBeDefined();
	});
});
