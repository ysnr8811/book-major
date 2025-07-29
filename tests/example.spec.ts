import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
    await page.goto('https://book-major.vercel.app/');

    // ページタイトルの確認
    await expect(page).toHaveTitle("Book-Major");

    // ハンバーガーメニューをクリック
    await page.getByRole("button", { name: "open drawer" }).click();

    // メニュー項目の確認
    await expect(page.getByRole("list")).toContainText("Home");
    await expect(page.getByRole("list")).toContainText("list");
    await expect(page.getByRole("list")).toContainText("Recommend");
    await expect(page.getByRole("list")).toContainText("BookStore");
    await expect(page.getByRole("list")).toContainText("Library");
    await expect(page.getByRole("list")).toContainText("profile");

    // bookStoreをクリックしてページの確認
    await page.getByRole("button", { name: "BookStore" }).click();
    await expect(page.locator("h1")).toContainText("書店一覧");

    // ページ全体を撮影
    await page.screenshot({ path: "./tests/screenshots/full-page.png", fullPage: true });
});
