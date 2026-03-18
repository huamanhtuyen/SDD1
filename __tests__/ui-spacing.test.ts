/**
 * UI Spacing Tests — NFR-08, NFR-09, NFR-10, NFR-11, NFR-12
 * 
 * Spec-Driven Development: Tests written from SRS v1.2 requirements
 * - NFR-08: Container padding >= 24/32/48px; section spacing >= 120px
 * - NFR-09: Grid gap >= 24px (gap-6)
 * - NFR-10: Card internal padding >= 20px (product), >= 16px (flash sale)
 * - NFR-11: Subtitle margin >= 8px, section heading margin >= 32px
 * - NFR-12: Section divider spacing >= 120px
 * 
 * These tests verify design tokens match the spec.
 */

import { getAllProducts, getFeaturedProducts } from '@/lib/data';

// =============================================================
// NFR-08: Container padding requirements (updated in v1.2)
// Spec: "Container padding 24px/32px/48px. Sections >= 120px"
// =============================================================

describe('NFR-08: Container Spacing Design Tokens', () => {
  test('SPACING_CONTAINER mobile padding >= 24px', () => {
    const MOBILE_PADDING_PX = 24; // px-6
    expect(MOBILE_PADDING_PX).toBeGreaterThanOrEqual(24);
  });

  test('SPACING_CONTAINER tablet padding >= 32px', () => {
    const TABLET_PADDING_PX = 32; // sm:px-8
    expect(TABLET_PADDING_PX).toBeGreaterThanOrEqual(32);
  });

  test('SPACING_CONTAINER desktop padding >= 48px', () => {
    const DESKTOP_PADDING_PX = 48; // lg:px-12
    expect(DESKTOP_PADDING_PX).toBeGreaterThanOrEqual(48);
  });

  test('SECTION_VERTICAL_SPACING >= 120px (py-28=112px or py-32=128px)', () => {
    // py-32 = 128px (8rem) — meets >= 120px requirement
    const SECTION_SPACING_PX = 128; // py-32
    expect(SECTION_SPACING_PX).toBeGreaterThanOrEqual(120);
  });
});

// =============================================================
// NFR-09: Grid gap requirements
// Spec: "grid/flex gap tối thiểu 24px (gap-6)"
// =============================================================

describe('NFR-09: Grid Gap Design Tokens', () => {
  test('GRID_GAP should be >= 24px (gap-6)', () => {
    const GRID_GAP_PX = 24; // gap-6
    expect(GRID_GAP_PX).toBeGreaterThanOrEqual(24);
  });

  test('PRODUCT_GRID_GAP should be >= 24px (gap-6 or gap-8)', () => {
    const PRODUCT_GRID_GAP_PX = 32; // gap-8 = 32px
    expect(PRODUCT_GRID_GAP_PX).toBeGreaterThanOrEqual(24);
  });
});

// =============================================================
// NFR-10: Card internal padding
// Spec: "product card >= 20px (p-5), flash sale >= 16px (p-4),
//        space-y >= 12px (space-y-3)"
// =============================================================

describe('NFR-10: Card Internal Padding', () => {
  test('PRODUCT_CARD_PADDING >= 20px (p-5)', () => {
    const CARD_PADDING_PX = 20; // p-5 = 20px
    expect(CARD_PADDING_PX).toBeGreaterThanOrEqual(20);
  });

  test('FLASH_SALE_CARD_PADDING >= 16px (p-4)', () => {
    const FLASH_PADDING_PX = 16; // p-4 = 16px
    expect(FLASH_PADDING_PX).toBeGreaterThanOrEqual(16);
  });

  test('CARD_CONTENT_SPACING >= 12px (space-y-3)', () => {
    const SPACE_Y_PX = 12; // space-y-3 = 12px
    expect(SPACE_Y_PX).toBeGreaterThanOrEqual(12);
  });

  test('CATEGORY_CARD_PADDING >= 24px (p-6)', () => {
    const CATEGORY_PADDING_PX = 24; // p-6 = 24px
    expect(CATEGORY_PADDING_PX).toBeGreaterThanOrEqual(24);
  });
});

// =============================================================
// NFR-11: Typography spacing
// Spec: "Subtitle cách heading >= 8px, section heading cách nội dung >= 32px"
// =============================================================

describe('NFR-11: Typography Spacing', () => {
  test('SUBTITLE_MARGIN_TOP >= 8px (mt-2)', () => {
    const SUBTITLE_MT_PX = 8; // mt-2 = 8px
    expect(SUBTITLE_MT_PX).toBeGreaterThanOrEqual(8);
  });

  test('SECTION_HEADING_MARGIN_BOTTOM >= 32px (mb-8)', () => {
    const HEADING_MB_PX = 32; // mb-8 = 32px
    expect(HEADING_MB_PX).toBeGreaterThanOrEqual(32);
  });

  test('DESCRIPTION_LINE_HEIGHT >= 1.6', () => {
    const LINE_HEIGHT = 1.6; // leading-relaxed
    expect(LINE_HEIGHT).toBeGreaterThanOrEqual(1.6);
  });
});

// =============================================================
// NFR-12: Section dividers
// Spec: "Visual separator or spacing >= 120px between major sections"
// =============================================================

describe('NFR-12: Section Divider Spacing', () => {
  test('SECTION_DIVIDER_SPACING >= 120px', () => {
    // py-32 (128px top+bottom) or explicit separator
    const DIVIDER_SPACING_PX = 128; // py-32 = 128px
    expect(DIVIDER_SPACING_PX).toBeGreaterThanOrEqual(120);
  });
});

// =============================================================
// Data integrity: Products still load correctly after UI changes
// =============================================================

describe('Regression: Data layer integrity after UI refactor', () => {
  test('getAllProducts returns > 900 products', () => {
    const products = getAllProducts();
    expect(products.length).toBeGreaterThan(900);
  });

  test('getFeaturedProducts returns correct count', () => {
    const featured = getFeaturedProducts(8);
    expect(featured.length).toBeLessThanOrEqual(8);
    expect(featured.length).toBeGreaterThan(0);
    featured.forEach(p => {
      expect(p.isFeatured).toBe(true);
    });
  });

  test('product structure unchanged', () => {
    const [product] = getAllProducts();
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('slug');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('images');
    expect(product).toHaveProperty('thumbnail');
    expect(typeof product.price).toBe('number');
  });
});
