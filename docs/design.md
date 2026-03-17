# CyberGravity — Design Document

> **Phiên bản:** 1.0  
> **Ngày tạo:** 2026-03-17  
> **Trạng thái:** Approved

---

## 1. Kiến trúc hệ thống

### 1.1 Tech Stack

| Layer | Công nghệ | Phiên bản |
|-------|-----------|-----------|
| Framework | Next.js (App Router) | 15.x |
| UI Library | React | 19.x |
| Styling | TailwindCSS | 4.x |
| Animation | Framer Motion | 11.x |
| Icons | Lucide React | latest |
| Font | Google Fonts (Inter, Outfit) | - |
| Data | JSON files (fake DB) | - |
| Unit Test | Jest + React Testing Library | latest |
| E2E Test | Playwright | latest |
| Language | TypeScript | 5.x |

### 1.2 Cấu trúc thư mục

```
cybergravity/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (dark theme)
│   │   ├── page.tsx                  # Trang chủ
│   │   ├── products/
│   │   │   ├── page.tsx              # Danh mục sản phẩm
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Chi tiết sản phẩm
│   │   ├── cart/
│   │   │   └── page.tsx              # Giỏ hàng
│   │   ├── search/
│   │   │   └── page.tsx              # Tìm kiếm
│   │   ├── build-pc/
│   │   │   └── page.tsx              # Build PC
│   │   ├── auth/
│   │   │   └── page.tsx              # Đăng nhập/Đăng ký
│   │   └── api/                      # API Routes
│   │       ├── products/
│   │       │   └── route.ts
│   │       ├── categories/
│   │       │   └── route.ts
│   │       └── search/
│   │           └── route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   └── FlashSale.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductTabs.tsx
│   │   │   └── ProductFilters.tsx
│   │   ├── cart/
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── SlideOutCart.tsx
│   │   ├── chat/
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   └── ChatInput.tsx
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SearchSuggestions.tsx
│   │   │   └── SearchResults.tsx
│   │   ├── build-pc/
│   │   │   ├── ComponentSlot.tsx
│   │   │   ├── ComponentPicker.tsx
│   │   │   └── BuildSummary.tsx
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Badge.tsx
│   │       ├── Modal.tsx
│   │       ├── Tabs.tsx
│   │       ├── StarRating.tsx
│   │       ├── CountdownTimer.tsx
│   │       └── LanguageToggle.tsx
│   ├── data/
│   │   ├── products.json             # 1000 sản phẩm
│   │   ├── categories.json           # 8 danh mục + sub
│   │   └── reviews.json              # Đánh giá mẫu
│   ├── lib/
│   │   ├── data.ts                   # Data access functions
│   │   ├── utils.ts                  # Utilities
│   │   └── types.ts                  # TypeScript types
│   ├── hooks/
│   │   ├── useCart.ts                # Cart state management
│   │   ├── useSearch.ts              # Search logic
│   │   └── useChat.ts               # Chat state
│   └── context/
│       └── CartContext.tsx            # Cart context provider
├── __tests__/                        # Unit tests
│   ├── components/
│   └── lib/
├── e2e/                              # E2E tests (Playwright)
├── docs/                             # Documentation
├── public/                           # Static files
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 2. Design System — Dark Neon Theme

### 2.1 Color Palette

```css
/* Background hierarchy */
--bg-primary:    #0a0a0f;     /* Darkest - page background */
--bg-secondary:  #12121a;     /* Cards, containers */
--bg-tertiary:   #1a1a2e;     /* Elevated elements */
--bg-glass:      rgba(255, 255, 255, 0.05);  /* Glassmorphism */

/* Accent colors */
--accent-primary:   #6366f1;  /* Indigo */
--accent-secondary: #8b5cf6;  /* Violet */
--accent-tertiary:  #a855f7;  /* Purple */
--accent-neon-cyan: #22d3ee;  /* Cyan neon */
--accent-neon-pink: #ec4899;  /* Pink neon */

/* Gradient */
--gradient-primary: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
--gradient-neon:    linear-gradient(135deg, #22d3ee, #6366f1);

/* Text */
--text-primary:   #f1f5f9;    /* White-ish */
--text-secondary: #94a3b8;    /* Muted */
--text-tertiary:  #64748b;    /* Very muted */

/* Status */
--success: #10b981;           /* Green */
--warning: #f59e0b;           /* Amber */
--error:   #ef4444;           /* Red */
--info:    #3b82f6;           /* Blue */

/* Border */
--border-default: rgba(255, 255, 255, 0.1);
--border-hover:   rgba(255, 255, 255, 0.2);
--border-neon:    rgba(99, 102, 241, 0.5);
```

### 2.2 Typography

```css
/* Fonts */
--font-heading: 'Outfit', sans-serif;
--font-body:    'Inter', sans-serif;

/* Sizes */
--text-xs:  0.75rem;   /* 12px */
--text-sm:  0.875rem;  /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg:  1.125rem;  /* 18px */
--text-xl:  1.25rem;   /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### 2.3 Component Styles

**Cards (Glassmorphism):**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

**Product Card Hover:**
```css
.product-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
```

**Neon Glow Button:**
```css
.btn-neon {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
}
.btn-neon:hover {
  box-shadow: 0 0 25px rgba(99, 102, 241, 0.6);
}
```

**Gradient Text:**
```css
.gradient-text {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 2.4 Animation System

| Animation | Mô tả | Duration |
|-----------|-------|----------|
| `fadeInUp` | Fade in + slide up | 0.5s |
| `slideInRight` | Slide from right (cart panel) | 0.3s |
| `pulse-neon` | Neon glow pulse | 2s infinite |
| `float` | Subtle floating effect | 3s infinite |
| `typing-dots` | Chat typing indicator | 1.4s infinite |
| `countdown-flip` | Flash sale countdown | 0.6s |

### 2.5 Responsive Breakpoints

| Breakpoint | Size | Layout |
|------------|------|--------|
| Mobile | < 640px | Single column, bottom nav |
| Tablet | 640-1024px | 2-column grid |
| Desktop | 1024-1280px | 3-column grid, sidebar |
| Wide | > 1280px | 4-column grid, full layout |

---

## 3. Data Flow

### 3.1 Cart State Management

```
React Context (CartContext)
├── state: { items: CartItem[], total: number }
├── addItem(product, quantity)
├── removeItem(productId)
├── updateQuantity(productId, quantity)
├── clearCart()
└── localStorage sync (persistence)
```

### 3.2 Search Flow

```
User types → debounce(300ms) → filter products.json → show suggestions
User submits → navigate to /search?q=keyword → full results page
```

### 3.3 AI Chat Flow

```
User sends message → add to chat history → show typing indicator
→ delay(1-2s) → match hardcoded response → display bot message
```

---

## 4. Quy ước (Conventions)

### 4.1 Naming

| Type | Convention | Example |
|------|-----------|---------|
| Component | PascalCase | `ProductCard.tsx` |
| Hook | camelCase, prefix `use` | `useCart.ts` |
| Utility | camelCase | `formatPrice.ts` |
| Type | PascalCase, suffix `Type` | `ProductType` |
| CSS class | kebab-case | `product-card` |
| Route | kebab-case | `/build-pc` |

### 4.2 Code Quality

- TypeScript strict mode
- ESLint + Prettier
- Component max 200 lines
- Custom hooks for shared logic
- Props interface for every component

---

*— Hết tài liệu Design —*
