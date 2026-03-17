# Wireframe: Chi tiết sản phẩm (Product Detail)

> **Route:** `/products/[slug]`  
> **File:** `src/app/products/[slug]/page.tsx`  
> **Priority:** Cao — Trang quyết định mua hàng

---

## Layout tổng quan

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER]                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Trang chủ > Sản phẩm > Linh kiện PC > Intel Core i7-13700K    │
│                                                                  │
│  ┌──────────────────────────┐  ┌──────────────────────────────┐ │
│  │ [PRODUCT GALLERY]        │  │ [PRODUCT INFO]                │ │
│  │                          │  │                                │ │
│  │  ┌──────────────────┐   │  │  Intel (brand — accent color)  │ │
│  │  │                  │   │  │                                │ │
│  │  │    📦            │   │  │  Intel Core i7-13700K          │ │
│  │  │  (ảnh chính      │   │  │  (product name — heading)      │ │
│  │  │   aspect-square) │   │  │                                │ │
│  │  │                  │   │  │  ★★★★☆ 4.2/5 (465 đánh giá)   │ │
│  │  └──────────────────┘   │  │                                │ │
│  │                          │  │  ┌────────────────────────┐   │ │
│  │  [thumb1] [thumb2]       │  │  │ 15.070.000 đ   (grad)  │   │ │
│  │  [thumb3] [thumb4]       │  │  │ 18.510.000 đ   (cross) │   │ │
│  │                          │  │  │ -16%            (badge) │   │ │
│  └──────────────────────────┘  │  └────────────────────────┘   │ │
│                                 │                                │ │
│                                 │  ✅ Còn hàng (84 sản phẩm)    │ │
│                                 │                                │ │
│                                 │  Số lượng: [-] [1] [+]         │ │
│                                 │                                │ │
│                                 │  ┌────────────────────────┐   │ │
│                                 │  │🟣 Thêm vào giỏ hàng    │   │ │
│                                 │  │  (neon glow, full-width) │   │ │
│                                 │  └────────────────────────┘   │ │
│                                 │  [♡ Wishlist]  [↗ Share]       │ │
│                                 │                                │ │
│                                 │  ┌────────┐┌────────┐┌──────┐│ │
│                                 │  │🛡 Bảo  ││🚚 Giao ││🔄 Đổi││ │
│                                 │  │hành    ││hàng   ││trả  ││ │
│                                 │  │24 thg  ││nhanh  ││30 ng││ │
│                                 │  └────────┘└────────┘└──────┘│ │
│                                 └──────────────────────────────┘ │
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [TABS]                                                          │
│  ┌──────────┬──────────────────┬──────────────────┐             │
│  │ Mô tả   │ Thông số kỹ thuật │ Đánh giá (15)    │             │
│  └──────────┴──────────────────┴──────────────────┘             │
│                                                                  │
│  [TAB CONTENT — Mô tả]                                          │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Intel Core i7-13700K là sản phẩm thuộc danh mục ...   │    │
│  │  Cam kết chính hãng 100%, bảo hành 24 tháng.           │    │
│  │  Giao hàng nhanh 2 giờ nội thành...                     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [TAB CONTENT — Thông số kỹ thuật]                               │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Socket       │ LGA 1700                                │    │
│  │  Cores/Threads│ 16C/24T                                 │    │
│  │  Base Clock   │ 3.4 GHz                                 │    │
│  │  Boost Clock  │ 5.4 GHz                                 │    │
│  │  TDP          │ 125W                                    │    │
│  │  Thương hiệu  │ Intel                                   │    │
│  │  Bảo hành     │ 24 tháng chính hãng                     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [TAB CONTENT — Đánh giá]                                        │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  [N] Nguyễn Văn A        3 ngày trước                   │    │
│  │      ★★★★★                                              │    │
│  │      Sản phẩm rất tốt, đóng gói cẩn thận...            │    │
│  │                                                          │    │
│  │  [T] Trần Thị B          1 tuần trước                   │    │
│  │      ★★★★☆                                              │    │
│  │      Giá hợp lý, giao hàng nhanh...                     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [SECTION: Sản phẩm liên quan]                                   │
│                                                                  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │ProductCd│ │ProductCd│ │ProductCd│ │ProductCd│              │
│  │ (reuse) │ │ (reuse) │ │ (reuse) │ │ (reuse) │              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Chi tiết Components

### 1. Product Gallery (trái)
- **Main image:** Ảnh lớn aspect-square, rounded corners, glass card
- **Thumbnails:** 4 ảnh nhỏ bên dưới (80×80px), click → đổi ảnh chính
- **Active thumb:** Border accent-primary
- **Future:** Zoom on hover, lightbox modal

### 2. Product Info (phải)
- **Brand:** Text nhỏ accent-primary, font-medium
- **Name:** h1, heading font, 2-3xl
- **Rating:** 5 star icons (filled/empty) + score + count
- **Price card:** Glass card chứa:
  - Giá hiện tại: text-3xl, gradient-text
  - Giá gốc: line-through, text-tertiary (nếu có discount)
  - Badge giảm giá: bg-error, text trắng
- **Stock:** Icon + text, xanh nếu còn / đỏ nếu hết
- **Quantity:** [ - ] [số] [ + ], glass card buttons
- **Add to Cart:** Full-width gradient button, neon glow, icon ShoppingCart
  - Disabled nếu stock = 0
  - onClick: addItem(product, quantity) → mở SlideOutCart
- **Secondary actions:** Wishlist (Heart icon) + Share (Share2 icon)
- **Benefits grid:** 3 cols, mỗi ô: icon + text nhỏ
  - 🛡 Bảo hành 24 tháng
  - 🚚 Giao hàng nhanh 2h
  - 🔄 Đổi trả 30 ngày

### 3. Tabs
- **Style:** Bottom border tabs, active = accent-primary border
- **Tabs:**

| Tab | Nội dung |
|-----|----------|
| Mô tả | Paragraph mô tả sản phẩm, info bảo hành/giao hàng |
| Thông số kỹ thuật | Table 2 cols (key/value), alternating row bg |
| Đánh giá (N) | List reviews: avatar + name + time + stars + comment |

### 4. Related Products
- **Heading:** "Sản phẩm liên quan" (gradient text)
- **Layout:** 4 cols desktop, 2 cols mobile
- **Logic:** Same category + subcategory, exclude current product
- **Component:** Reuse `<ProductCard />`

---

## State Management

```
State:
  - slug: string                    ← from URL params
  - product: Product | null         ← lookup by slug
  - quantity: number (default: 1)   ← quantity selector
  - activeTab: 'description' | 'specs' | 'reviews'

Data:
  - reviews: Review[]              ← getReviewsByProductId()
  - related: Product[]             ← getRelatedProducts(product, 4)
```

---

## Error State

```
Khi product === null:
┌─────────────────────────┐
│                          │
│  Không tìm thấy SP      │
│                          │
│  [🟣 Quay lại danh sách] │
│                          │
└─────────────────────────┘
```

---

## Tham chiếu hình ảnh

![Product Detail Wireframe](./product-detail.png)
