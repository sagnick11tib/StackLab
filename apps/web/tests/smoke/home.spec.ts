import { expect, test } from "@playwright/test";

test("the landing shell renders with production-grade baseline checks", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/StackLab/);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.getByTestId("landing-root")).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: /StackLab/ }),
  ).toBeVisible();
  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
