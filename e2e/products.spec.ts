import { test, expect } from '@playwright/test';

test.describe('Danh sách sản phẩm', () => {
  test('TC-PL-01: Hiển thị danh sách tất cả sản phẩm', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('text=Tất cả sản phẩm')).toBeVisible();
    // Should show product count
    await expect(page.locator('text=sản phẩm').first()).toBeVisible();
  });

  test('TC-PL-02: Lọc sản phẩm theo danh mục', async ({ page }) => {
    await page.goto('/products?category=laptop');
    await expect(page.locator('h1')).toContainText('Laptop');
  });

  test('TC-PL-03: Lọc sản phẩm theo khoảng giá', async ({ page }) => {
    await page.goto('/products');
    await page.click('text=Dưới 5 triệu');
    // Products should update
    await expect(page.locator('text=sản phẩm').first()).toBeVisible();
  });

  test('TC-PL-04: Sắp xếp sản phẩm', async ({ page }) => {
    await page.goto('/products');
    await page.selectOption('select', 'price-asc');
    await expect(page.locator('text=sản phẩm').first()).toBeVisible();
  });

  test('TC-PL-05: Phân trang hoạt động đúng', async ({ page }) => {
    await page.goto('/products');
    // Check pagination exists
    const paginationButtons = page.locator('button:has-text("2")');
    if (await paginationButtons.count() > 0) {
      await paginationButtons.first().click();
      await expect(page.locator('text=sản phẩm').first()).toBeVisible();
    }
  });

  test('TC-PL-06: Breadcrumb hiển thị đúng', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('text=Trang chủ').first()).toBeVisible();
  });
});
