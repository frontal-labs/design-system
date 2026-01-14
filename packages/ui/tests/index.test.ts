import { describe, expect, test } from "bun:test";
import { cn } from "../src/utils";

describe("@frontal-ds/ui", () => {
  test("package can be imported", async () => {
    const mod = await import("../src/index");
    expect(mod).toBeDefined();
  });

  test("common components are exported", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("Button");
    expect(mod).toHaveProperty("Card");
    expect(mod).toHaveProperty("Input");
    expect(mod).toHaveProperty("Label");
  });

  test("cn utility function works", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
    expect(cn("foo", false, "baz")).toBe("foo baz");
    // tailwind-merge may reorder classes, so just check both classes are present
    const result = cn("px-2 py-1", "px-3");
    expect(result).toContain("px-3");
    expect(result).toContain("py-1");
  });

  test("cn handles conditional classes", () => {
    const condition = true;
    expect(cn("base", condition && "conditional")).toBe("base conditional");
    expect(cn("base", !condition && "conditional")).toBe("base");
  });
});
