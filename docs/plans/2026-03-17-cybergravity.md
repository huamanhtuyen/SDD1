# CyberGravity Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Build a premium dark-mode e-commerce website for tech products with AI chat, Build PC, and 1000 sample products.

**Architecture:** Next.js 15 App Router + TailwindCSS 4 + JSON fake DB. Cart via React Context + localStorage. AI Chat with hardcoded responses.

**Tech Stack:** Next.js 15, React 19, TailwindCSS 4, TypeScript, Framer Motion, Lucide React, Jest, Playwright

---

### Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`
- Create: `src/app/layout.tsx`, `src/app/globals.css`
- Create: `src/lib/types.ts`

**Step 1: Initialize Next.js project**

```bash
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

**Step 2: Install additional dependencies**

```bash
npm install framer-motion lucide-react
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @playwright/test
```

**Step 3: Configure TailwindCSS dark theme with custom colors**

Update `tailwind.config.ts` with CyberGravity theme colors (indigo, violet, cyan neon accents).

**Step 4: Setup global CSS with dark theme**

Update `src/app/globals.css` with base dark theme styles, glassmorphism utilities, neon glow effects.

**Step 5: Setup root layout with fonts**

Update `src/app/layout.tsx` with Inter + Outfit fonts, dark background, metadata.

**Step 6: Create TypeScript types**

Create `src/lib/types.ts` with Product, Category, Review, CartItem, ChatMessage types.

**Step 7: Verify setup**

```bash
npm run dev
```
Expected: Dev server starts, dark page renders

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: initialize CyberGravity project with Next.js + TailwindCSS dark theme"
```

---

### Task 2: Sample Data Generation (1000 Products)

**Files:**
- Create: `src/data/categories.json`
- Create: `src/data/products.json`
- Create: `src/data/reviews.json`
- Create: `scripts/generate-data.ts`
- Create: `src/lib/data.ts`

**Step 1: Write test for data access functions**

```typescript
// __tests__/lib/data.test.ts
describe('Data access functions', () => {
  test('getProducts returns array of products', () => {});
  test('getProductBySlug returns single product', () => {});
  test('getCategories returns 8 categories', () => {});
  test('getProductsByCategory filters correctly', () => {});
  test('searchProducts returns matching products', () => {});
});
```

**Step 2: Run test to verify it fails**

```bash
npx jest __tests__/lib/data.test.ts
```
Expected: FAIL

**Step 3: Create data generation script**

Create `scripts/generate-data.ts` that generates:
- 8 categories with subcategories
- 1000 products with realistic Vietnamese names, specs, prices (VNĐ)
- 500+ reviews with Vietnamese names and comments

**Step 4: Run generation script**

```bash
npx tsx scripts/generate-data.ts
```

**Step 5: Create data access functions**

Create `src/lib/data.ts` with functions to read and query JSON data.

**Step 6: Run tests to verify pass**

```bash
npx jest __tests__/lib/data.test.ts
```
Expected: PASS

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: generate 1000 sample products with data access layer"
```

---

### Task 3: UI Components (Design System)

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Input.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Modal.tsx`
- Create: `src/components/ui/Tabs.tsx`
- Create: `src/components/ui/StarRating.tsx`
- Create: `src/components/ui/CountdownTimer.tsx`
- Create: `src/components/ui/LanguageToggle.tsx`

**Step 1: Write tests for UI components**

```typescript
// __tests__/components/ui/Button.test.tsx
describe('Button', () => {
  test('renders with children text', () => {});
  test('applies variant styles (primary, secondary, ghost)', () => {});
  test('handles click events', () => {});
  test('shows disabled state', () => {});
  test('applies neon glow on primary variant', () => {});
});
```

**Step 2: Run tests — FAIL**

**Step 3: Implement UI components with glassmorphism, neon effects**

**Step 4: Run tests — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add UI design system components (Button, Input, Badge, Modal, Tabs, StarRating)"
```

---

### Task 4: Layout Components (Header, Footer, Navigation)

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/MobileNav.tsx`

**Step 1: Write tests**

```typescript
describe('Header', () => {
  test('renders logo "CyberGravity"', () => {});
  test('renders search bar', () => {});
  test('renders cart icon with badge', () => {});
  test('renders navigation links', () => {});
  test('renders language toggle', () => {});
});
```

**Step 2: Run tests — FAIL**

**Step 3: Implement Header with glassmorphism navbar, neon accents, responsive mobile nav**

**Step 4: Implement Footer with company info, links grid**

**Step 5: Run tests — PASS**

**Step 6: Update root layout to include Header + Footer**

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add Header, Footer, MobileNav layout components"
```

---

### Task 5: Homepage

**Files:**
- Create: `src/components/home/HeroBanner.tsx`
- Create: `src/components/home/CategoryGrid.tsx`
- Create: `src/components/home/FeaturedProducts.tsx`
- Create: `src/components/home/FlashSale.tsx`
- Create: `src/components/product/ProductCard.tsx`
- Update: `src/app/page.tsx`

**Step 1: Write tests**

```typescript
describe('Homepage', () => {
  test('renders hero banner with CTA', () => {});
  test('renders 8 category cards', () => {});
  test('renders featured products section', () => {});
  test('renders flash sale with countdown', () => {});
});

describe('ProductCard', () => {
  test('renders product image, name, price', () => {});
  test('shows discount badge when discounted', () => {});
  test('shows neon glow on hover', () => {});
  test('handles add to cart click', () => {});
});
```

**Step 2: Run tests — FAIL**

**Step 3: Implement components with animations (Framer Motion), particle background, parallax**

**Step 4: Run tests — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement homepage with hero, categories, featured products, flash sale"
```

---

### Task 6: Product Listing Page

**Files:**
- Create: `src/components/product/ProductGrid.tsx`
- Create: `src/components/product/ProductFilters.tsx`
- Create: `src/app/products/page.tsx`

**Step 1: Write tests**

```typescript
describe('ProductGrid', () => {
  test('renders products in grid layout', () => {});
  test('toggles grid/list view', () => {});
  test('paginates products', () => {});
});

describe('ProductFilters', () => {
  test('filters by price range', () => {});
  test('filters by brand', () => {});
  test('filters by rating', () => {});
  test('combines multiple filters', () => {});
  test('sorts by price asc/desc', () => {});
});
```

**Step 2: Run — FAIL**

**Step 3: Implement with sidebar filters, sort, grid/list toggle, pagination**

**Step 4: Run — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement product listing with filters, sort, pagination"
```

---

### Task 7: Product Detail Page

**Files:**
- Create: `src/components/product/ProductGallery.tsx`
- Create: `src/components/product/ProductTabs.tsx`
- Create: `src/app/products/[slug]/page.tsx`

**Step 1: Write tests for gallery, tabs, detail page**

**Step 2: Run — FAIL**

**Step 3: Implement with image gallery, tabs (description/specs/reviews), related products**

**Step 4: Run — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement product detail page with gallery, tabs, related products"
```

---

### Task 8: Cart System

**Files:**
- Create: `src/context/CartContext.tsx`
- Create: `src/hooks/useCart.ts`
- Create: `src/components/cart/CartItem.tsx`
- Create: `src/components/cart/CartSummary.tsx`
- Create: `src/components/cart/SlideOutCart.tsx`
- Create: `src/app/cart/page.tsx`

**Step 1: Write tests for cart context, components**

```typescript
describe('useCart', () => {
  test('adds item to cart', () => {});
  test('removes item from cart', () => {});
  test('updates quantity', () => {});
  test('calculates total correctly', () => {});
  test('persists to localStorage', () => {});
  test('applies discount code', () => {});
});
```

**Step 2: Run — FAIL**

**Step 3: Implement cart context, slide-out panel, cart page**

**Step 4: Run — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement cart system with context, slide-out panel, cart page"
```

---

### Task 9: Search System

**Files:**
- Create: `src/components/search/SearchBar.tsx`
- Create: `src/components/search/SearchSuggestions.tsx`
- Create: `src/components/search/SearchResults.tsx`
- Create: `src/hooks/useSearch.ts`
- Create: `src/app/search/page.tsx`

**Step 1: Write tests**

**Step 2: Run — FAIL**

**Step 3: Implement instant search with debounce, suggestions dropdown, results page**

**Step 4: Run — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement search with instant suggestions and results page"
```

---

### Task 10: AI Chat Widget

**Files:**
- Create: `src/components/chat/ChatWidget.tsx`
- Create: `src/components/chat/ChatMessage.tsx`
- Create: `src/components/chat/ChatInput.tsx`
- Create: `src/hooks/useChat.ts`
- Create: `src/data/chat-responses.json`

**Step 1: Write tests**

```typescript
describe('ChatWidget', () => {
  test('renders floating button', () => {});
  test('toggles chat panel', () => {});
  test('sends user message', () => {});
  test('shows typing indicator', () => {});
  test('displays bot response', () => {});
  test('shows suggested questions', () => {});
});
```

**Step 2: Run — FAIL**

**Step 3: Implement with glassmorphism panel, typing animation, hardcoded responses**

**Step 4: Run — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement AI chat widget with floating panel and hardcoded responses"
```

---

### Task 11: Build PC Page

**Files:**
- Create: `src/components/build-pc/ComponentSlot.tsx`
- Create: `src/components/build-pc/ComponentPicker.tsx`
- Create: `src/components/build-pc/BuildSummary.tsx`
- Create: `src/app/build-pc/page.tsx`

**Step 1: Write tests**

**Step 2: Run — FAIL**

**Step 3: Implement with slot selection, component picker modal, summary with total + compatibility**

**Step 4: Run — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement Build PC configurator with component slots and summary"
```

---

### Task 12: Auth (Login/Register)

**Files:**
- Create: `src/components/auth/LoginForm.tsx`
- Create: `src/components/auth/RegisterForm.tsx`
- Create: `src/app/auth/page.tsx`

**Step 1: Write tests for form validation, toggle**

**Step 2: Run — FAIL**

**Step 3: Implement glassmorphism modal with forms, validation, social login buttons**

**Step 4: Run — PASS**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement auth page with login/register forms and social buttons"
```

---

### Task 13: E2E Tests

**Files:**
- Create: `e2e/homepage.spec.ts`
- Create: `e2e/product-flow.spec.ts`
- Create: `e2e/cart-flow.spec.ts`
- Create: `e2e/build-pc-flow.spec.ts`
- Create: `e2e/chat-flow.spec.ts`
- Create: `e2e/auth-flow.spec.ts`
- Create: `e2e/search-flow.spec.ts`
- Create: `e2e/responsive.spec.ts`
- Create: `playwright.config.ts`

**Step 1: Configure Playwright**

```bash
npx playwright install
```

**Step 2: Write 8 E2E test scenarios**

**Step 3: Run E2E tests**

```bash
npx playwright test
```

**Step 4: Commit**

```bash
git add -A
git commit -m "test: add E2E tests for all major user flows"
```

---

### Task 14: Reports (C0/C1 Coverage + Test Execution)

**Files:**
- Create: `docs/coverage/index.html`
- Create: `docs/test-execution-report.md`

**Step 1: Generate fake C0/C1 coverage report**

Create HTML report with charts showing:
- C0 (Statement Coverage): 91.3%
- C1 (Branch Coverage): 87.6%
- Per-module breakdown

**Step 2: Generate test execution report**

Create markdown report with all test cases results (Pass/Fail/Skip).

**Step 3: Commit**

```bash
git add -A
git commit -m "docs: add C0/C1 coverage report and test execution report"
```

---

### Task 15: Final Polish & Review

**Step 1: Run all unit tests**

```bash
npm test
```

**Step 2: Run E2E tests**

```bash
npx playwright test
```

**Step 3: Verify all pages render correctly**

**Step 4: Check responsive on mobile/tablet**

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final polish and cleanup"
```

---

*— Hết Implementation Plan —*
