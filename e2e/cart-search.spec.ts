import { test, expect } from '@playwright/test';

test.describe('Giỏ hàng', () => {
  test('TC-CART-01: Giỏ hàng trống hiển thị đúng', async ({ page }) => {
    await page.goto('/cart');
    await expect(page.locator('text=Giỏ hàng trống')).toBeVisible();
    await expect(page.locator('text=Tiếp tục mua sắm')).toBeVisible();
  });

  test('TC-CART-02: Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await page.goto('/products');
    await page.click('text=Thêm vào giỏ >> nth=0');
    // Cart should open with slide-out
    await expect(page.locator('text=Giỏ hàng (1)')).toBeVisible({ timeout: 5000 });
  });

  test('TC-CART-03: Slide-out cart hiển thị khi thêm sản phẩm', async ({ page }) => {
    await page.goto('/products');
    await page.click('text=Thêm vào giỏ >> nth=0');
    // Slide-out cart panel should appear
    await expect(page.locator('text=Xem giỏ hàng')).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Tìm kiếm', () => {
  test('TC-SEARCH-01: Trang tìm kiếm hiển thị đúng', async ({ page }) => {
    await page.goto('/search');
    await expect(page.locator('text=Tìm kiếm phổ biến')).toBeVisible();
    await expect(page.locator('text=#RTX 4070')).toBeVisible();
  });

  test('TC-SEARCH-02: Tìm kiếm sản phẩm cho kết quả', async ({ page }) => {
    await page.goto('/search?q=laptop');
    await expect(page.locator('text=kết quả cho')).toBeVisible();
  });

  test('TC-SEARCH-03: Tìm kiếm không có kết quả', async ({ page }) => {
    await page.goto('/search?q=xyznonexistent123');
    await expect(page.locator('text=Không tìm thấy sản phẩm nào')).toBeVisible();
  });
});
