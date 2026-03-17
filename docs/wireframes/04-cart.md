# Wireframe: Giỏ hàng (Cart)

> **Route:** `/cart`  
> **File:** `src/app/cart/page.tsx`  
> **Priority:** Cao — Luồng mua hàng chính

---

## Layout tổng quan

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER]                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Trang chủ > Giỏ hàng (3)                                      │
│                                                                  │
│  Giỏ hàng của bạn                                               │
│                                                                  │
│  ┌──────────────────────────────────┐  ┌──────────────────────┐ │
│  │ [CART ITEMS]                     │  │ [ORDER SUMMARY]       │ │
│  │                                  │  │                       │ │
│  │ ┌──────────────────────────────┐│  │ Tóm tắt đơn hàng     │ │
│  │ │ 📦 │ Intel Core i7-13700K   ││  │                       │ │
│  │ │    │ Intel • Vi xử lý       ││  │ Tạm tính (3 SP):     │ │
│  │ │    │ [-] [2] [+]  35.140.000││  │          45.390.000đ  │ │
│  │ │    │                     [🗑]││  │                       │ │
│  │ └──────────────────────────────┘│  │ Vận chuyển:           │ │
│  │                                  │  │          Miễn phí ✅  │ │
│  │ ┌──────────────────────────────┐│  │                       │ │
│  │ │ 📦 │ AMD Ryzen 5 5600       ││  │ Giảm giá (CYBER10):  │ │
│  │ │    │ AMD • Vi xử lý         ││  │          -4.539.000đ  │ │
│  │ │    │ [-] [1] [+]   5.630.000││  │                       │ │
│  │ │    │                     [🗑]││  │ ┌───────────────────┐ │ │
│  │ └──────────────────────────────┘│  │ │🏷 [Nhập mã...] [↩]│ │ │
│  │                                  │  │ └───────────────────┘ │ │
│  │ ┌──────────────────────────────┐│  │ ✅ Mã CYBER10 -10%    │ │
│  │ │ 📦 │ ASUS RTX 4080 SUPER   ││  │ Thử: CYBER10, CYBER20│ │
│  │ │    │ ASUS • Card đồ họa     ││  │       NEWUSER         │ │
│  │ │    │ [-] [1] [+]   8.890.000││  │                       │ │
│  │ │    │                     [🗑]││  │ ─────────────────── │ │
│  │ └──────────────────────────────┘│  │                       │ │
│  │                                  │  │ Tổng cộng:           │ │
│  │                                  │  │      40.851.000 đ    │ │
│  │                                  │  │ (Đã bao gồm VAT)    │ │
│  │                                  │  │                       │ │
│  │                                  │  │ ┌───────────────────┐ │ │
│  │                                  │  │ │🟣 Thanh toán      │ │ │
│  │                                  │  │ │  (neon glow)       │ │ │
│  │                                  │  │ └───────────────────┘ │ │
│  │                                  │  │                       │ │
│  │                                  │  │ ← Tiếp tục mua sắm   │ │
│  └──────────────────────────────────┘  └──────────────────────┘ │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Empty State

```
┌─────────────────────────────────────┐
│                                      │
│            🛍 (icon mờ)             │
│                                      │
│       Giỏ hàng trống                │
│  Bạn chưa thêm sản phẩm nào        │
│       vào giỏ hàng                   │
│                                      │
│   [🟣 Tiếp tục mua sắm →]          │
│                                      │
└─────────────────────────────────────┘
```

---

## Chi tiết Components

### 1. Cart Item (lặp lại cho mỗi sản phẩm)
- **Layout:** Hàng ngang: ảnh (96×96) | thông tin | giá | actions
- **Ảnh:** Rounded, bg-tertiary placeholder
- **Info:**
  - Tên SP: link → `/products/[slug]`, hover accent color
  - Meta: Brand • Subcategory (text-xs, text-tertiary)
- **Quantity:** [ - ] [số] [ + ] — glass card buttons
  - Min: 1 (không cho giảm dưới 1, dùng nút xóa thay thế)
  - updateQuantity(productId, newQty)
- **Price:** Giá × quantity, font-bold, accent-primary
- **Delete:** Icon Trash2, hover bg-error/10, text-error
- **Animation:** Framer Motion fade-in với stagger delay

### 2. Order Summary (sticky sidebar)
- **Position:** Sticky top-24
- **Style:** Glass card, rounded
- **Content:**

| Row | Trái | Phải |
|-----|------|------|
| Tạm tính | (N sản phẩm) | Tổng giá |
| Vận chuyển | | "Miễn phí" (text-success) |
| Giảm giá | (tên mã) | -X đ (text-success, nếu có) |
| **Tổng cộng** | **Bold** | **Gradient text, 2xl** |

### 3. Discount Code
- **Input:** Icon Tag + text input + nút "Áp dụng"
- **Success:** Text-success bên dưới "Áp dụng mã X thành công!"
- **Error:** Text-error "Mã giảm giá không hợp lệ"
- **Hint:** Text-tertiary "Thử: CYBER10, CYBER20, NEWUSER"
- **Valid codes:**

| Code | Discount |
|------|----------|
| CYBER10 | 10% |
| CYBER20 | 20% |
| NEWUSER | 15% |
| FLASHSALE | 25% |

### 4. Checkout Button
- **Style:** Full-width, gradient from-accent-primary to-accent-secondary
- **Effect:** Neon glow, hover lift (-translate-y-0.5)
- **Below:** Link "← Tiếp tục mua sắm" → `/products`

---

## Slide-Out Cart (Shared Component)

```
                                  ┌──────────────────┐
                                  │ Giỏ hàng (2)  [✕]│
                                  │                   │
                                  │ ┌───────────────┐│
                                  │ │📦 SP 1        ││
                                  │ │[-][1][+] 15trđ││
                                  │ └───────────────┘│
                                  │ ┌───────────────┐│
                                  │ │📦 SP 2        ││
                                  │ │[-][1][+]  3trđ││
                                  │ └───────────────┘│
                                  │                   │
                                  │ Tổng: 18.000.000đ│
                                  │                   │
                                  │[🟣 Xem giỏ hàng] │
                                  └──────────────────┘
Overlay (black 50%)
```

- **Trigger:** Mỗi khi addItem() được gọi
- **Position:** Fixed right, full-height, 400px width
- **Animation:** Slide in từ phải (Framer Motion)
- **Close:** Click X hoặc click overlay
- **CTA:** "Xem giỏ hàng" → `/cart`

---

## State Flow

```
CartContext (global):
  items: CartItem[]
  total: number (computed, với discount)
  itemCount: number (computed)
  discountCode: string
  discountPercent: number
  isCartOpen: boolean

Actions:
  addItem(product, qty)    → push/merge item + open slide-out
  removeItem(productId)    → filter out
  updateQuantity(id, qty)  → update quantity, remove if qty <= 0
  clearCart()              → empty
  applyDiscount(code)      → validate + set percent
  toggleCart()             → toggle isCartOpen

Persistence:
  localStorage key: 'cybergravity-cart'
  Save: on every state change
  Load: on initial mount (useEffect)
```

---

## Tham chiếu hình ảnh

![Cart Wireframe](./cart.png)
