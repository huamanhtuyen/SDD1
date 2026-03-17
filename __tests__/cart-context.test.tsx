import { render, act } from '@testing-library/react';
import { CartProvider, useCart } from '@/context/CartContext';
import { Product } from '@/lib/types';

// Mock localStorage
const mockStorage: Record<string, string> = {};
beforeEach(() => {
  Object.keys(mockStorage).forEach(key => delete mockStorage[key]);
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => mockStorage[key] || null);
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => { mockStorage[key] = value; });
  jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(key => { delete mockStorage[key]; });
});
afterEach(() => jest.restoreAllMocks());

// Sample product for testing
const sampleProduct: Product = {
  id: 'test-1',
  name: 'Test CPU',
  slug: 'test-cpu',
  price: 5000000,
  originalPrice: 6000000,
  discount: 17,
  category: 'Linh kiện PC',
  subcategory: 'CPU - Bộ vi xử lý',
  brand: 'Intel',
  images: ['/test.jpg'],
  thumbnail: '/test.jpg',
  description: 'Test product',
  specs: { cores: '8' },
  rating: 4.5,
  reviewCount: 100,
  stock: 50,
  tags: ['cpu', 'intel'],
  isFeatured: false,
  isNew: false,
  createdAt: '2026-01-01',
};

const sampleProduct2: Product = {
  ...sampleProduct,
  id: 'test-2',
  name: 'Test GPU',
  slug: 'test-gpu',
  price: 12000000,
  brand: 'NVIDIA',
};

// Helper to access cart context in tests
function CartTestConsumer({ onRender }: { onRender: (cart: ReturnType<typeof useCart>) => void }) {
  const cart = useCart();
  onRender(cart);
  return null;
}

function renderCart(onRender: (cart: ReturnType<typeof useCart>) => void) {
  return render(
    <CartProvider>
      <CartTestConsumer onRender={onRender} />
    </CartProvider>
  );
}

describe('CartContext', () => {
  test('initializes with empty cart', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    expect(cart.items).toHaveLength(0);
    expect(cart.total).toBe(0);
    expect(cart.itemCount).toBe(0);
    expect(cart.isCartOpen).toBe(false);
    expect(cart.discountCode).toBe('');
    expect(cart.discountPercent).toBe(0);
  });

  test('adds item to cart', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].product.id).toBe('test-1');
    expect(cart.items[0].quantity).toBe(1);
    expect(cart.itemCount).toBe(1);
    expect(cart.total).toBe(5000000);
  });

  test('adds item with specified quantity', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct, 3); });

    expect(cart.items[0].quantity).toBe(3);
    expect(cart.itemCount).toBe(3);
    expect(cart.total).toBe(15000000);
  });

  test('increments quantity for duplicate items', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct, 2); });
    act(() => { cart.addItem(sampleProduct, 1); });

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].quantity).toBe(3);
    expect(cart.total).toBe(15000000);
  });

  test('adds multiple different items', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });
    act(() => { cart.addItem(sampleProduct2); });

    expect(cart.items).toHaveLength(2);
    expect(cart.itemCount).toBe(2);
    expect(cart.total).toBe(17000000); // 5M + 12M
  });

  test('opens cart on addItem', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });

    expect(cart.isCartOpen).toBe(true);
  });

  test('removes item from cart', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });
    act(() => { cart.addItem(sampleProduct2); });
    act(() => { cart.removeItem('test-1'); });

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].product.id).toBe('test-2');
    expect(cart.total).toBe(12000000);
  });

  test('updates quantity', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });
    act(() => { cart.updateQuantity('test-1', 5); });

    expect(cart.items[0].quantity).toBe(5);
    expect(cart.total).toBe(25000000);
  });

  test('removes item when quantity set to 0', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });
    act(() => { cart.updateQuantity('test-1', 0); });

    expect(cart.items).toHaveLength(0);
  });

  test('clears cart', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });
    act(() => { cart.addItem(sampleProduct2); });
    act(() => { cart.clearCart(); });

    expect(cart.items).toHaveLength(0);
    expect(cart.total).toBe(0);
    expect(cart.itemCount).toBe(0);
    expect(cart.discountCode).toBe('');
    expect(cart.discountPercent).toBe(0);
  });

  test('applies valid discount code CYBER10', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); }); // 5M
    let result: boolean;
    act(() => { result = cart.applyDiscount('CYBER10'); });

    expect(result!).toBe(true);
    expect(cart.discountCode).toBe('CYBER10');
    expect(cart.discountPercent).toBe(10);
    expect(cart.total).toBe(4500000); // 5M * 0.9
  });

  test('applies valid discount code CYBER20', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });
    act(() => { cart.applyDiscount('CYBER20'); });

    expect(cart.discountPercent).toBe(20);
    expect(cart.total).toBe(4000000); // 5M * 0.8
  });

  test('applies valid discount code NEWUSER', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });
    act(() => { cart.applyDiscount('NEWUSER'); });

    expect(cart.discountPercent).toBe(15);
  });

  test('applies discount code case-insensitively', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    let result: boolean;
    act(() => { result = cart.applyDiscount('cyber10'); });
    expect(result!).toBe(true);
    expect(cart.discountCode).toBe('CYBER10');
  });

  test('rejects invalid discount code', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    let result: boolean;
    act(() => { result = cart.applyDiscount('INVALID'); });
    expect(result!).toBe(false);
    expect(cart.discountCode).toBe('');
    expect(cart.discountPercent).toBe(0);
  });

  test('persists cart to localStorage', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.addItem(sampleProduct); });

    expect(mockStorage['cybergravity-cart']).toBeDefined();
    const stored = JSON.parse(mockStorage['cybergravity-cart']);
    expect(stored).toHaveLength(1);
    expect(stored[0].product.id).toBe('test-1');
  });

  test('toggles cart open/close', () => {
    let cart!: ReturnType<typeof useCart>;
    renderCart(c => { cart = c; });

    act(() => { cart.setIsCartOpen(true); });
    expect(cart.isCartOpen).toBe(true);

    act(() => { cart.setIsCartOpen(false); });
    expect(cart.isCartOpen).toBe(false);
  });

  test('throws error when useCart used outside provider', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => {
      render(<CartTestConsumer onRender={() => {}} />);
    }).toThrow('useCart must be used within CartProvider');
    consoleSpy.mockRestore();
  });
});
