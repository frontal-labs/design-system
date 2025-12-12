import { describe, expect, it } from "vitest";
import * as shared from "../src/index";

describe("@frontal/shared", () => {
	it("should export shared utilities and hooks", () => {
		expect(shared).toBeDefined();
	});
});
