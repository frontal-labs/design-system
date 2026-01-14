import { describe, expect, mock, test } from "bun:test";

// Mock next/font/local
mock.module("next/font/local", () => ({
  default: () => ({
    className: "mock-font-class",
    variable: "--mock-font-variable",
    style: { fontFamily: "Mock Font" },
  }),
}));

describe("@frontal/design-system", () => {
  test("package exports exist", async () => {
    const mod = await import("../src/index");
    expect(mod).toBeDefined();
  });

  test("re-exports blocks", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("blocks");
  });

  test("re-exports colors", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("gray");
    expect(mod).toHaveProperty("blue");
    expect(mod).toHaveProperty("getColor");
  });

  test("re-exports UI components", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("Button");
    expect(mod).toHaveProperty("Card");
    expect(mod).toHaveProperty("Input");
  });

  test("re-exports icons namespace", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("Icons");
  });

  test("re-exports typeface", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("fonts");
    expect(mod).toHaveProperty("MaisonNeue");
  });
});
