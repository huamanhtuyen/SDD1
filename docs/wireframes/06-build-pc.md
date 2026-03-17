# Wireframe: Build PC (Cấu hình máy tính)

> **Route:** `/build-pc`  
> **File:** `src/app/build-pc/page.tsx`  
> **Priority:** Trung bình — Tính năng đặc biệt

---

## Layout tổng quan

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER]                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Build PC                                                        │
│  Chọn linh kiện và ráp cấu hình máy tính theo ý bạn            │
│                                                                  │
│  ┌────────────────────────────────────┐  ┌────────────────────┐ │
│  │ [COMPONENT SLOTS]                  │  │ [BUILD SUMMARY]    │ │
│  │                                    │  │                     │ │
│  │ ┌────────────────────────────────┐│  │ 🖥 Tóm tắt cấu hình│ │
│  │ │ 🖥 Vi xử lý (CPU)             ││  │                     │ │
│  │ │    ✅ Intel Core i7-13700K     ││  │ Vi xử lý: 15.070trđ│ │
│  │ │              15.070.000đ [Đổi] ││  │ Card đồ họa: ---    │ │
│  │ └────────────────────────────────┘│  │ Bo mạch chủ: ---    │ │
│  │                                    │  │ Bộ nhớ RAM: ---     │ │
│  │ ┌────────────────────────────────┐│  │ Ổ cứng: ---         │ │
│  │ │ 🖥 Card đồ họa (GPU)          ││  │ Nguồn: ---          │ │
│  │ │    Chưa chọn            [Chọn] ││  │ Vỏ case: ---        │ │
│  │ │  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐││  │ Tản nhiệt: ---     │ │
│  │ │  │ DROPDOWN PICKER            │││  │                     │ │
│  │ │  │ ┌────────────────────────┐ │││  │ ─────────────────  │ │
│  │ │  │ │NVIDIA RTX 4070     12tr│ │││  │                     │ │
│  │ │  │ │NVIDIA RTX 4070Ti  15tr│ │││  │ Tổng cộng:          │ │
│  │ │  │ │AMD RX 7900 GRE   10tr│ │││  │      15.070.000 đ   │ │
│  │ │  │ │NVIDIA RTX 4080   22tr│ │││  │    (gradient text)   │ │
│  │ │  │ │NVIDIA RTX 4060    8tr│ │││  │                     │ │
│  │ │  │ └────────────────────────┘ │││  │ ✅ Linh kiện tương  │ │
│  │ │  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘││  │    thích            │ │
│  │ └────────────────────────────────┘│  │                     │ │
│  │                                    │  │ ┌─────────────────┐│ │
│  │ ┌────────────────────────────────┐│  │ │🟣 Thêm vào giỏ  ││ │
│  │ │ 🔲 Bo mạch chủ (Mainboard)    ││  │ │   hàng (1)       ││ │
│  │ │    Chưa chọn            [Chọn] ││  │ └─────────────────┘│ │
│  │ └────────────────────────────────┘│  │                     │ │
│  │                                    │  └────────────────────┘ │
│  │ ┌────────────────────────────────┐│                          │
│  │ │ 💾 Bộ nhớ RAM                  ││                          │
│  │ │    Chưa chọn            [Chọn] ││                          │
│  │ └────────────────────────────────┘│                          │
│  │                                    │                          │
│  │ ┌────────────────────────────────┐│                          │
│  │ │ 💿 Ổ cứng SSD/HDD             ││                          │
│  │ │    Chưa chọn            [Chọn] ││                          │
│  │ └────────────────────────────────┘│                          │
│  │                                    │                          │
│  │ ┌────────────────────────────────┐│                          │
│  │ │ 🔌 Nguồn máy tính (PSU)       ││                          │
│  │ │    Chưa chọn            [Chọn] ││                          │
│  │ └────────────────────────────────┘│                          │
│  │                                    │                          │
│  │ ┌────────────────────────────────┐│                          │
│  │ │ 📦 Vỏ máy tính (Case)         ││                          │
│  │ │    Chưa chọn            [Chọn] ││                          │
│  │ └────────────────────────────────┘│                          │
│  │                                    │                          │
│  │ ┌────────────────────────────────┐│                          │
│  │ │ 🌀 Tản nhiệt                   ││                          │
│  │ │    Chưa chọn            [Chọn] ││                          │
│  │ └────────────────────────────────┘│                          │
│  │                                    │                          │
│  └────────────────────────────────────┘                          │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Chi tiết Components

### 1. Component Slot (× 8)

| # | Type | Label | Icon | Data Source |
|---|------|-------|------|-------------|
| 1 | `cpu` | Vi xử lý (CPU) | Cpu | Subcategory "Vi xử lý" |
| 2 | `gpu` | Card đồ họa (GPU) | MonitorSpeaker | Subcategory "Card đồ họa" |
| 3 | `mainboard` | Bo mạch chủ | CircuitBoard | Subcategory "Bo mạch chủ" |
| 4 | `ram` | Bộ nhớ RAM | MemoryStick | Subcategory "RAM" |
| 5 | `ssd` | Ổ cứng SSD/HDD | HardDrive | Subcategory "Ổ cứng" |
| 6 | `psu` | Nguồn (PSU) | Plug | Subcategory "Nguồn" |
| 7 | `case` | Vỏ case | Box | Subcategory "Vỏ case" |
| 8 | `cooling` | Tản nhiệt | Fan | Subcategory "Tản nhiệt" |

**Trạng thái slot:**

```
Chưa chọn:
┌──────────────────────────────────────────┐
│ [🟣 icon] Vi xử lý (CPU)                │
│           Chưa chọn           [🟣 Chọn]  │
└──────────────────────────────────────────┘

Đã chọn:
┌──────────────────────────────────────────┐  ← border-success/30
│ [✅ icon] Vi xử lý (CPU)                │
│           Intel Core i7-13700K           │
│                     15.070.000đ  [Đổi]   │
└──────────────────────────────────────────┘
```

### 2. Dropdown Picker
- **Trigger:** Click "Chọn" hoặc "Đổi"
- **Animation:** Framer Motion expand height
- **Content:** Scrollable list (max-h-256px), 20 sản phẩm
- **Each option:**
  - Tên sản phẩm (truncate), Brand, Giá (accent-primary)
  - Hover: bg-white/5 + border glow
  - Click: Select + close dropdown
- **Data:** `getBuildPCProducts(slotType)` → filter by subcategory

### 3. Build Summary (sticky sidebar)
- **Position:** Sticky top-24
- **Header:** Icon Cpu + "Tóm tắt cấu hình"
- **Per-slot row:** Label | Giá hoặc "---"
- **Total:** Gradient text, font-bold, 2xl
- **Compatibility:** Always show ✅ (simplified)
- **Add to Cart:** Gradient button, neon glow
  - Disabled khi selectedCount === 0
  - Click: addItem cho mỗi component đã chọn

---

## State Management

```
State:
  selected: Record<string, Product | null>
    // { cpu: Product, gpu: null, mainboard: null, ... }
  openSlot: string | null
    // Slot type hiện đang mở dropdown

Computed:
  totalPrice: sum of selected products' prices
  selectedCount: count of non-null values
```

---

## Tham chiếu hình ảnh

![Build PC Wireframe](./build-pc.png)
