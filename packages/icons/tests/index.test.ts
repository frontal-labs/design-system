import { describe, expect, test } from "bun:test";

describe("@frontal-ds/icons", () => {
  test("package can be imported", async () => {
    const mod = await import("../src/index");
    expect(mod).toBeDefined();
  });

  test("icon utilities are exported", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("getIconMetadata");
    expect(mod).toHaveProperty("groupIconsByCategory");
    expect(mod).toHaveProperty("searchIcons");
    expect(mod).toHaveProperty("getCategories");
  });

  test("icon utilities are functions", async () => {
    const mod = await import("../src/index");
    expect(typeof mod.getIconMetadata).toBe("function");
    expect(typeof mod.searchIcons).toBe("function");
    expect(typeof mod.getCategories).toBe("function");
  });
});
