# Wireframe: Tìm kiếm (Search)

> **Route:** `/search` hoặc `/search?q={query}`  
> **File:** `src/app/search/page.tsx`  
> **Priority:** Trung bình

---

## Layout tổng quan

### Trạng thái 1: Chưa tìm (query rỗng)

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER]                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Tìm kiếm sản phẩm                                             │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │ 🔍 [Tìm kiếm sản phẩm, thương hiệu...________] [✕]│         │
│  └────────────────────────────────────────────────────┘         │
│                          (autofocus, large input)                │
│                                                                  │
│  📈 Tìm kiếm phổ biến                                          │
│                                                                  │
│  [#RTX 4070] [#Laptop gaming] [#iPhone 16] [#Bàn phím cơ]      │
│  [#Chuột gaming] [#RAM DDR5] [#SSD NVMe] [#Tai nghe]           │
│                                                                  │
│        (click tag → instantly search)                            │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Trạng thái 2: Có kết quả

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER]                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Tìm kiếm sản phẩm                                             │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │ 🔍 [laptop gaming_______________________________] [✕]│         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
│  Tìm thấy 24 kết quả cho "laptop gaming"                       │
│                                                                  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │ProductCd│ │ProductCd│ │ProductCd│ │ProductCd│              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │ProductCd│ │ProductCd│ │ProductCd│ │ProductCd│              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
│  ... (max 24 kết quả)                                           │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Trạng thái 3: Không có kết quả

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER]                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │ 🔍 [xyzabc123_________________________________] [✕]│         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
│  Tìm thấy 0 kết quả cho "xyzabc123"                            │
│                                                                  │
│                 🔍 (icon lớn, mờ)                               │
│                                                                  │
│          Không tìm thấy sản phẩm nào                            │
│          Thử tìm với từ khóa khác                               │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Chi tiết Components

### 1. Search Input
- **Size:** Max-width 672px, py-4, text-lg
- **Style:** Rounded-2xl, glass bg, focus ring accent-primary
- **Icon trái:** Search (🔍)
- **Icon phải:** X (clear) — chỉ hiện khi có text
- **Behavior:** Autofocus, real-time search (onChange)
- **URL sync:** `window.history.replaceState` cập nhật `?q=`

### 2. Popular Tags
- **Style:** Pill buttons (rounded-full), glass card
- **Prefix:** "#" trước mỗi tag
- **Hover:** Text accent-primary + border glow
- **Click:** Gọi handleSearch(tag) → instant results
- **Tags:** RTX 4070, Laptop gaming, iPhone 16, Bàn phím cơ, Chuột gaming, RAM DDR5, SSD NVMe, Tai nghe

### 3. Search Results
- **Header:** "Tìm thấy N kết quả cho "query""
- **Grid:** 4 cols desktop, 3 cols tablet, 2 cols mobile
- **Max display:** 24 results (no pagination)
- **Component:** Reuse `<ProductCard />`

### 4. Empty State
- **Icon:** Search lớn (64px), opacity 20%
- **Text chính:** "Không tìm thấy sản phẩm nào"
- **Text phụ:** "Thử tìm với từ khóa khác"

---

## Search Logic

```
searchProducts(query: string) → Product[]

Algorithm:
  1. Lowercase query
  2. Filter products where:
     - product.name.toLowerCase().includes(query) OR
     - product.brand.toLowerCase().includes(query) OR
     - product.category.toLowerCase().includes(query) OR
     - product.subcategory.toLowerCase().includes(query) OR
     - product.tags[].toLowerCase().includes(query)
  3. Return matched products
```

---

## Tham chiếu hình ảnh

*(Trang search không có wireframe hình ảnh riêng — sử dụng layout đơn giản)*
