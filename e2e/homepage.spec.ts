import { test, expect } from '@playwright/test';

test.describe('Trang chủ CyberGravity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-HP-01: Hiển thị header với logo và navigation', async ({ page }) => {
    // Logo
    await expect(page.locator('text=CyberGravity').first()).toBeVisible();
    // Search bar
    await expect(page.locator('input[placeholder*="Tìm kiếm"]').first()).toBeVisible();
    // Cart icon
    await expect(page.locator('[data-testid="cart-icon"], button:has(svg)').first()).toBeVisible();
  });

  test('TC-HP-02: Hiển thị Hero Banner với CTA', async ({ page }) => {
    await expect(page.locator('text=Công nghệ').first()).toBeVisible();
    await expect(page.locator('text=đỉnh cao').first()).toBeVisible();
    await expect(page.locator('text=Khám phá ngay').first()).toBeVisible();
    await expect(page.locator('text=Build PC').first()).toBeVisible();
  });

  test('TC-HP-03: Hiển thị danh mục sản phẩm', async ({ page }) => {
    await expect(page.locator('text=Danh mục').first()).toBeVisible();
    await expect(page.locator('text=Linh kiện PC').first()).toBeVisible();
    await expect(page.locator('text=Laptop').first()).toBeVisible();
    await expect(page.locator('text=Điện thoại').first()).toBeVisible();
  });

  test('TC-HP-04: Hiển thị Flash Sale với countdown', async ({ page }) => {
    await expect(page.locator('text=Flash').first()).toBeVisible();
    await expect(page.locator('text=Sale').first()).toBeVisible();
  });

  test('TC-HP-05: Hiển thị sản phẩm nổi bật', async ({ page }) => {
    await expect(page.locator('text=Sản phẩm').first()).toBeVisible();
    await expect(page.locator('text=nổi bật').first()).toBeVisible();
    // Product cards should be present
    await expect(page.locator('text=Thêm vào giỏ').first()).toBeVisible();
  });

  test('TC-HP-06: Điều hướng category từ nav bar', async ({ page }) => {
    await page.click('nav >> text=Laptop');
    await expect(page).toHaveURL(/products.*category=laptop/);
  });

  test('TC-HP-07: Footer hiển thị đầy đủ thông tin', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator('footer >> text=CyberGravity').first()).toBeVisible();
    await expect(page.locator('text=support@cybergravity.vn')).toBeVisible();
  });
});
