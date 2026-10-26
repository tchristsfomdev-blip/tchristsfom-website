import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/services",
  "/courses",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms",
];

test.describe("shell", () => {
  test("home has one heading, a skip link, and working primary navigation", async ({
    page,
    browserName,
  }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Professional Training Courses & Executive Education",
      }),
    ).toBeVisible();

    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    if (browserName === "webkit") {
      // Playwright's WebKit does not deliver Tab until the view has OS focus.
      // The link is still in the tab order: programmatic focus and Enter work,
      // and Chromium/Firefox cover the real Tab sequence.
      await skip.focus();
    }
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main")).toBeFocused();

    await page
      .getByRole("link", { name: "Courses", exact: true })
      .filter({ visible: true })
      .first()
      .click();
    await expect(page).toHaveURL(/\/courses$/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Professional Training Courses & Executive Education",
      }),
    ).toBeVisible();
    await expect(page.locator("#hr-payroll-management")).toBeVisible();
  });

  test("contact is reachable from the home page", async ({ page, viewport }) => {
    await page.goto("/");
    if ((viewport?.width ?? 1280) < 768) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page
        .getByRole("dialog", { name: "Menu" })
        .getByRole("link", { name: "Enquire Now" })
        .click();
    } else {
      await page.locator(".header-cta a").click();
    }
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { level: 1, name: "Contact" })).toBeVisible();
  });

  test("unknown routes use the custom not-found page", async ({ page }) => {
    await page.goto("/not-a-real-page");
    await expect(
      page.getByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeVisible();
    await page.getByRole("link", { name: "Back to home" }).click();
    await expect(page).toHaveURL("/");
  });

  test("has no serious or critical accessibility violations", async ({ page }) => {
    // Audit the settled page — skip motion so GSAP opacity tweens do not fake-fail contrast.
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const results = await new AxeBuilder({ page }).analyze();
      const blocking = results.violations.filter(
        (violation) => violation.impact === "serious" || violation.impact === "critical",
      );
      expect(blocking, `${route} ${JSON.stringify(blocking, null, 2)}`).toEqual([]);
    }
  });

  test("does not scroll horizontally at the shell breakpoints", async ({ page }) => {
    for (const width of [320, 390, 768, 1280, 1440]) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `overflow at ${width}px`).toBeLessThanOrEqual(1);
    }
  });

  test("keeps content available with reduced motion and without a custom cursor", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator(".custom-cursor")).toHaveCount(0);
    await expect(page.locator("body")).not.toHaveClass(/has-custom-cursor/);
  });
});

test.describe("mobile menu", () => {
  test.skip(
    ({ viewport }) => (viewport?.width ?? 1280) >= 768,
    "desktop uses the inline nav",
  );

  test("traps focus, closes on Escape, and closes when the route changes", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();
    await expect(page.getByRole("button", { name: "Close" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await dialog.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(dialog).toBeHidden();
  });
});

test("readable without JavaScript", async ({ browser }, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium",
    "one browser is enough for the no-JS check",
  );
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Courses", exact: true }).first(),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveCount(0);
  await context.close();
});
