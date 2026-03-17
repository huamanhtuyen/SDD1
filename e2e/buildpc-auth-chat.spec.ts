import { test, expect } from '@playwright/test';

test.describe('Build PC', () => {
  test('TC-BPC-01: Trang Build PC hiển thị 8 slot', async ({ page }) => {
    await page.goto('/build-pc');
    await expect(page.locator('text=Build PC')).toBeVisible();
    await expect(page.locator('text=Vi xử lý (CPU)')).toBeVisible();
    await expect(page.locator('text=Card đồ họa (GPU)')).toBeVisible();
    await expect(page.locator('text=Bo mạch chủ')).toBeVisible();
    await expect(page.locator('text=Bộ nhớ RAM')).toBeVisible();
    await expect(page.locator('text=Ổ cứng SSD/HDD')).toBeVisible();
    await expect(page.locator('text=Nguồn (PSU)')).toBeVisible();
    await expect(page.locator('text=Vỏ case')).toBeVisible();
    await expect(page.locator('text=Tản nhiệt').first()).toBeVisible();
  });

  test('TC-BPC-02: Chọn linh kiện CPU', async ({ page }) => {
    await page.goto('/build-pc');
    await page.click('button:has-text("Chọn") >> nth=0');
    // Dropdown should open
    await expect(page.locator('text=Intel').first()).toBeVisible({ timeout: 5000 });
  });

  test('TC-BPC-03: Tóm tắt cấu hình hiển thị đúng', async ({ page }) => {
    await page.goto('/build-pc');
    await expect(page.locator('text=Tóm tắt cấu hình')).toBeVisible();
    await expect(page.locator('text=Tổng cộng')).toBeVisible();
    await expect(page.locator('text=Linh kiện tương thích')).toBeVisible();
  });
});

test.describe('Auth', () => {
  test('TC-AUTH-01: Trang đăng nhập hiển thị đúng', async ({ page }) => {
    await page.goto('/auth');
    await expect(page.locator('text=Đăng nhập').first()).toBeVisible();
    await expect(page.locator('input[placeholder="Email"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Mật khẩu"]')).toBeVisible();
  });

  test('TC-AUTH-02: Chuyển đổi giữa đăng nhập và đăng ký', async ({ page }) => {
    await page.goto('/auth');
    await page.click('text=Đăng ký ngay');
    await expect(page.locator('h1:has-text("Đăng ký")')).toBeVisible();
    await expect(page.locator('input[placeholder="Họ và tên"]')).toBeVisible();
  });

  test('TC-AUTH-03: Social login buttons hiển thị', async ({ page }) => {
    await page.goto('/auth');
    await expect(page.locator('button:has-text("Google")')).toBeVisible();
    await expect(page.locator('button:has-text("Facebook")')).toBeVisible();
  });
});

test.describe('AI Chat Widget', () => {
  test('TC-CHAT-01: Chat widget button hiển thị', async ({ page }) => {
    await page.goto('/');
    // Chat floating button should be visible
    const chatButton = page.locator('button >> svg').last();
    await expect(chatButton).toBeVisible();
  });

  test('TC-CHAT-02: Mở chat panel', async ({ page }) => {
    await page.goto('/');
    // Click the floating chat button
    await page.click('button.fixed >> nth=0');
    await expect(page.locator('text=CyberGravity AI')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=Đang hoạt động')).toBeVisible();
  });
});
