import { describe, expect, it } from "vitest";
import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	Link,
	Section,
	Spacer,
	Stack,
} from "../src/index";

describe("@frontal/ui", () => {
	it("should export Box component", () => {
		expect(Box).toBeDefined();
	});

	it("should export Container component", () => {
		expect(Container).toBeDefined();
	});

	it("should export Grid components", () => {
		expect(Grid).toBeDefined();
		expect(GridItem).toBeDefined();
	});

	it("should export Flex component", () => {
		expect(Flex).toBeDefined();
	});

	it("should export Stack component", () => {
		expect(Stack).toBeDefined();
	});

	it("should export Section component", () => {
		expect(Section).toBeDefined();
	});

	it("should export Spacer component", () => {
		expect(Spacer).toBeDefined();
	});

	it("should export AspectRatio component", () => {
		expect(AspectRatio).toBeDefined();
	});

	it("should export Link component", () => {
		expect(Link).toBeDefined();
	});
});
