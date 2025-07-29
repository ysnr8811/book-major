import { test, expect } from "@playwright/test";

test.describe('Book-Majorアプリケーション', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://book-major.vercel.app/');
    });

    test('ナビゲーションメニューの基本機能確認', async ({ page }) => {
        // ページタイトルの確認
        await expect(page).toHaveTitle("Book-Major");

        // ハンバーガーメニューの操作と検証
        await test.step('メニューを開く', async () => {
            await page.getByRole("button", { name: "open drawer" }).click();
        });

        // メニュー項目の検証をより効率的に
        const expectedMenuItems = ['Home', 'list', 'Recommend', 'BookStore', 'Library', 'profile'];
        for (const item of expectedMenuItems) {
            await expect(page.getByRole("list")).toContainText(item);
        }
    });

    test('BookStoreページへの遷移確認', async ({ page }) => {
        await page.getByRole("button", { name: "open drawer" }).click();
        await page.getByRole("button", { name: "BookStore" }).click();
        await expect(page.locator("h1")).toContainText("書店一覧");
        
        // スクリーンショットはテスト失敗時の診断用に
        await page.screenshot({ 
            path: `./tests/screenshots/bookstore-page-${Date.now()}.png`,
            fullPage: true 
        });
    });
});