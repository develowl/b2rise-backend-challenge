import { describe, expect, it } from 'vitest';
import { calculateDiscount } from '.';

describe('Complex logic refactoring (complex)', () => {
  it('should return correct value when is premium and the price is greatest than hundred', () => {
    const result = calculateDiscount(120, true);

    expect(result).toBe(120 * 0.8);
  });

  it('should return correct value when is premium and the price is less or equal hundred', () => {
    const result = calculateDiscount(100, true);

    expect(result).toBe(100 * 0.9);
  });

  it('should return correct value when is not premium and the price is greatest than hundred', () => {
    const result = calculateDiscount(126, false);

    expect(result).toBe(126 * 0.9);
  });

  it('should return correct value when is not premium and the price is less or equal hundred', () => {
    const result = calculateDiscount(100, false);

    expect(result).toBe(100);
  });
});
