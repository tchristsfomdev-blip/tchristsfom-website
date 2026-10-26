import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { colorTokens } from "@/config/tokens";
import { contrastRatio } from "@/lib/contrast";

const css = readFileSync("src/styles/tokens.css", "utf8");

describe("colour tokens", () => {
  it("keeps the CSS token file in sync with the TypeScript values", () => {
    for (const hex of Object.values(colorTokens)) {
      expect(css.toLowerCase()).toContain(hex.toLowerCase());
    }
  });

  it("meets WCAG AA for text pairs used on the white site", () => {
    expect(contrastRatio(colorTokens.ink900, colorTokens.white)).toBeGreaterThanOrEqual(
      4.5,
    );
    expect(contrastRatio(colorTokens.ink700, colorTokens.white)).toBeGreaterThanOrEqual(
      4.5,
    );
    expect(contrastRatio(colorTokens.ink500, colorTokens.white)).toBeGreaterThanOrEqual(
      4.5,
    );
    expect(contrastRatio(colorTokens.gold800, colorTokens.white)).toBeGreaterThanOrEqual(
      4.5,
    );
    expect(
      contrastRatio(colorTokens.gold800, colorTokens.surface),
    ).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(colorTokens.ink900, colorTokens.gold400)).toBeGreaterThanOrEqual(
      4.5,
    );
    expect(contrastRatio(colorTokens.white, colorTokens.navy950)).toBeGreaterThanOrEqual(
      4.5,
    );
  });

  it("treats bright gold as accent, not body text on white", () => {
    expect(contrastRatio(colorTokens.gold400, colorTokens.white)).toBeLessThan(4.5);
  });
});
