import { describe, expect, mock, test } from "bun:test";

// Mock next/font/local
mock.module("next/font/local", () => ({
  default: () => ({
    className: "mock-font-class",
    variable: "--mock-font-variable",
    style: { fontFamily: "Mock Font" },
  }),
}));

describe("@frontal-ds/typeface", () => {
  test("package can be imported", async () => {
    const mod = await import("../src/index");
    expect(mod).toBeDefined();
  });

  test("fonts are exported", async () => {
    const mod = await import("../src/index");
    expect(mod).toHaveProperty("fonts");
    expect(mod).toHaveProperty("MaisonNeue");
    expect(mod).toHaveProperty("MaisonNeueMono");
  });

  test("fonts are defined", async () => {
    const mod = await import("../src/index");
    expect(mod.fonts).toBeDefined();
    expect(mod.MaisonNeue).toBeDefined();
    expect(mod.MaisonNeueMono).toBeDefined();
  });
});
