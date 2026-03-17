import {
  formatPrice,
  formatNumber,
  calculateDiscount,
  generateSlug,
  cn,
  truncateText,
  getTimeAgo,
} from '@/lib/utils';

describe('formatPrice', () => {
  test('formats VND currency correctly', () => {
    const result = formatPrice(15070000);
    // Intl formatting may use different separators depending on locale
    expect(result).toContain('15');
    expect(result).toContain('070');
    expect(result).toContain('000');
  });

  test('formats zero', () => {
    const result = formatPrice(0);
    expect(result).toContain('0');
  });

  test('formats small value', () => {
    const result = formatPrice(1000);
    expect(result).toContain('1');
  });
});

describe('formatNumber', () => {
  test('formats number with locale separators', () => {
    const result = formatNumber(1234567);
    // Should contain digit separators
    expect(result).toBeTruthy();
    expect(result.replace(/\D/g, '')).toBe('1234567');
  });
});

describe('calculateDiscount', () => {
  test('returns correct discount percentage', () => {
    expect(calculateDiscount(100000, 80000)).toBe(20);
    expect(calculateDiscount(200000, 150000)).toBe(25);
  });

  test('returns 0 when original is 0', () => {
    expect(calculateDiscount(0, 80000)).toBe(0);
  });

  test('returns 0 when original is negative', () => {
    expect(calculateDiscount(-100, 50)).toBe(0);
  });

  test('returns 100 when current is 0', () => {
    expect(calculateDiscount(100000, 0)).toBe(100);
  });

  test('rounds to nearest integer', () => {
    // 33.33% → 33
    expect(calculateDiscount(30000, 20000)).toBe(33);
  });
});

describe('generateSlug', () => {
  test('converts to lowercase', () => {
    expect(generateSlug('HELLO')).toBe('hello');
  });

  test('replaces spaces with hyphens', () => {
    expect(generateSlug('hello world')).toBe('hello-world');
  });

  test('handles Vietnamese characters', () => {
    const slug = generateSlug('Bộ vi xử lý Intel');
    expect(slug).toBe('bo-vi-xu-ly-intel');
  });

  test('handles đ character', () => {
    const slug = generateSlug('Đồng hồ thông minh');
    expect(slug).toBe('dong-ho-thong-minh');
  });

  test('removes special characters', () => {
    const slug = generateSlug('AMD Ryzen 5 5600 (3.5GHz)');
    expect(slug).toBe('amd-ryzen-5-5600-35ghz');
  });

  test('collapses multiple hyphens', () => {
    expect(generateSlug('hello   world')).toBe('hello-world');
  });
});

describe('cn', () => {
  test('merges multiple classes', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  test('filters out falsy values', () => {
    expect(cn('a', undefined, 'b', null, false, 'c')).toBe('a b c');
  });

  test('returns empty string for all falsy', () => {
    expect(cn(undefined, null, false)).toBe('');
  });
});

describe('truncateText', () => {
  test('returns full text when shorter than max', () => {
    expect(truncateText('hello', 10)).toBe('hello');
  });

  test('truncates and adds ellipsis', () => {
    expect(truncateText('hello world this is long', 11)).toBe('hello world...');
  });

  test('returns full text when equal to max', () => {
    expect(truncateText('12345', 5)).toBe('12345');
  });
});

describe('getTimeAgo', () => {
  test('returns "Vừa xong" for recent dates', () => {
    const now = new Date().toISOString();
    expect(getTimeAgo(now)).toBe('Vừa xong');
  });

  test('returns minutes for dates within an hour', () => {
    const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    expect(getTimeAgo(fiveMinAgo)).toBe('5 phút trước');
  });

  test('returns hours for dates within a day', () => {
    const twoHoursAgo = new Date(Date.now() - 2 * 3600 * 1000).toISOString();
    expect(getTimeAgo(twoHoursAgo)).toBe('2 giờ trước');
  });

  test('returns days for dates within a month', () => {
    const threeDaysAgo = new Date(Date.now() - 3 * 86400 * 1000).toISOString();
    expect(getTimeAgo(threeDaysAgo)).toBe('3 ngày trước');
  });

  test('returns months for dates within a year', () => {
    const twoMonthsAgo = new Date(Date.now() - 2 * 30 * 86400 * 1000).toISOString();
    expect(getTimeAgo(twoMonthsAgo)).toBe('2 tháng trước');
  });
});
