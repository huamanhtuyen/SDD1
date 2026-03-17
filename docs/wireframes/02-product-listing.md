# Wireframe: Danh sách sản phẩm (Product Listing)

> **Route:** `/products` hoặc `/products?category={slug}`  
> **File:** `src/app/products/page.tsx`  
> **Priority:** Cao — Trang browse chính

---

## Layout tổng quan

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER — giống Homepage]                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Trang chủ > Tất cả sản phẩm  (breadcrumb)                     │
│                                                                  │
│  Tất cả sản phẩm (908 sản phẩm)        [⊞][≡]  [Bán chạy ▼]  │
│                                                                  │
│  ┌────────────┐  ┌──────────────────────────────────────────┐   │
│  │ [SIDEBAR]  │  │ [PRODUCT GRID]                           │   │
│  │            │  │                                           │   │
│  │ Danh mục   │  │ ┌─────────┐ ┌─────────┐ ┌─────────┐    │   │
│  │ ○ Tất cả   │  │ │📦 [-29%]│ │📦 [-6%] │ │📦 [-7%] │    │   │
│  │ ● Linh kiện│  │ │         │ │         │ │         │    │   │
│  │ ○ Laptop   │  │ │ HP      │ │ BenQ    │ │Seasonic │    │   │
│  │ ○ Điện thoại│ │ │MacBook  │ │TUF Gam. │ │MWE Gold │    │   │
│  │ ○ Màn hình │  │ │★★★★☆504│ │★★★★★504│ │★★★★☆502│    │   │
│  │ ○ Phụ kiện │  │ │39.12tr  │ │25.32tr  │ │1.98tr   │    │   │
│  │ ○ Điện máy │  │ │55.1tr   │ │26.9tr   │ │2.13tr   │    │   │
│  │ ○ TB mạng  │  │ │Còn 87   │ │Còn 62   │ │Còn 81   │    │   │
│  │ ○ Đồng hồ  │  │ │[Thêm]  │ │[Thêm]  │ │[Thêm]  │    │   │
│  │            │  │ └─────────┘ └─────────┘ └─────────┘    │   │
│  │ Khoảng giá │  │                                           │   │
│  │ ○ Dưới 5tr │  │ ┌─────────┐ ┌─────────┐ ┌─────────┐    │   │
│  │ ○ 5-15tr   │  │ │📦 [-24%]│ │📦       │ │📦 [-23%]│    │   │
│  │ ○ 15-30tr  │  │ │ ...     │ │ ...     │ │ ...     │    │   │
│  │ ○ Trên 30tr│  │ └─────────┘ └─────────┘ └─────────┘    │   │
│  │ Xóa bộ lọc│  │                                           │   │
│  │            │  │  ... (thêm rows)                          │   │
│  │ Thương hiệu│  │                                           │   │
│  │ ☐ ADATA   │  │ ┌─────────────────────────────────────┐   │   │
│  │ ☐ AMD     │  │ │  [1] [2] [3] [4] [5] ... [76]      │   │   │
│  │ ☐ AOC     │  │ │          PAGINATION                  │   │   │
│  │ ☐ ASUS    │  │ └─────────────────────────────────────┘   │   │
│  │ ☐ Acer    │  │                                           │   │
│  │ ☐ Apple   │  └──────────────────────────────────────────┘   │
│  │ ... (more) │                                                  │
│  │            │                                                  │
│  │ Đánh giá   │                                                  │
│  │ ○ ★★★★☆+  │                                                  │
│  │ ○ ★★★☆☆+  │                                                  │
│  │ ○ ★★☆☆☆+  │                                                  │
│  └────────────┘                                                  │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Chi tiết Components

### 1. Breadcrumb
- **Format:** Trang chủ > [Danh mục] > Tên trang
- **Click:** Mỗi segment là link điều hướng
- **Style:** Text nhỏ, text-secondary, separator `>`

### 2. Page Header
- **Tiêu đề:** Tên danh mục hoặc "Tất cả sản phẩm"
- **Count:** "(908 sản phẩm)" — cập nhật theo bộ lọc
- **Actions:**
  - View mode toggle: Grid ⊞ / List ≡ (ẩn trên mobile)
  - Sort dropdown: Bán chạy | Mới nhất | Giá thấp→cao | Giá cao→thấp | Đánh giá

### 3. Sidebar Filters (trái)
- **Width:** 256px cố định, sticky top-24
- **Style:** Glass card, scroll nội bộ
- **Sections:**

| Section | Type | Chi tiết |
|---------|------|----------|
| Danh mục | Radio buttons | 8 categories + "Tất cả", highlight active |
| Khoảng giá | Radio buttons | Dưới 5tr, 5-15tr, 15-30tr, Trên 30tr + Xóa |
| Thương hiệu | Checkboxes | Max 15 brands, scroll nếu nhiều, multi-select |
| Đánh giá | Radio buttons | ★★★★☆+, ★★★☆☆+, ★★☆☆☆+ |

- **Behavior:**
  - Chọn filter → reset pagination về page 1
  - Mobile: ẩn sidebar, hiện nút filter icon toggle
  - "Xóa bộ lọc" → reset tất cả về mặc định

### 4. Product Grid
- **Grid mode:** 3 cols (desktop), 2 cols (mobile)
- **List mode:** 1 col, card ngang (ảnh trái + info phải)
- **Per page:** 12 sản phẩm
- **ProductCard:** (component tái sử dụng từ Homepage)
  - Ảnh sản phẩm (aspect-square)
  - Badges: discount %, "MỚI" tag
  - Brand name (text-accent-primary)
  - Product name (font-medium)
  - Star rating + count
  - Current price (font-bold, gradient)
  - Original price (line-through, nếu có discount)
  - Stock status: "Còn X sản phẩm" hoặc "Hết hàng"
  - "Thêm vào giỏ" button (disabled nếu hết hàng)

### 5. Pagination
- **Layout:** Centered, dãy số trang
- **Active page:** Gradient bg + neon glow
- **Inactive:** Glass card style
- **Max visible:** 7 pages + "..." + last page
- **Click:** Scroll to top + load page mới

### 6. Empty State
- **Khi không có kết quả:**
  - Text: "Không tìm thấy sản phẩm nào"
  - Button: "Xóa bộ lọc" → reset all filters

---

## State Management

```
State:
  - categorySlug: string | null     ← from URL query param
  - sortBy: 'popular' | 'newest' | 'price-asc' | 'price-desc' | 'rating'
  - selectedBrands: string[]        ← multi-select checkboxes
  - priceRange: [min, max]          ← radio button selection
  - minRating: 0 | 2 | 3 | 4       ← rating filter
  - viewMode: 'grid' | 'list'      ← toggle button
  - currentPage: number             ← pagination
  - perPage: 12                     ← fixed

Computed:
  - filtered: Product[]             ← apply all filters + sort
  - paginated: Product[]            ← slice by currentPage
  - totalPages: number              ← ceil(filtered.length / perPage)
```

---

## Responsive

| Breakpoint | Sidebar | Grid | Sort |
|------------|---------|------|------|
| ≥1024px | Visible (256px) | 3 cols | Dropdown |
| 768-1023px | Hidden (toggle) | 2 cols | Dropdown |
| <768px | Hidden (toggle) | 2 cols | Dropdown |

---

## Tham chiếu hình ảnh

![Product Listing Wireframe](./products.png)
