import { describe, expect, it } from 'vitest';
import { Operator, calculate } from '.';

describe('Validation and typing with Union Types', () => {
  it('should throw an error when invalid operator is provided', () => {
    expect(() => calculate('operator' as Operator, 1, 1)).toThrowError(
      new Error('Invalid operator')
    );
  });

  it('should throw an error when one of the operands is not a number', () => {
    expect(() => calculate('add', undefined, 2)).toThrow();
  });

  it('should throw an error when divided by zero', () => {
    expect(() => calculate('divide', 10, 0)).toThrowError(
      new Error('Divison by zero')
    );
  });

  it('should return sum of the provided operands', () => {
    const result = calculate('add', 1, 1);
    expect(result).toBe(2);
  });

  it('should return result of subtracting the provided operands', () => {
    const result = calculate('subtract', 5, 10);
    expect(result).toBe(-5);
  });

  it('should return result of multiplying the provided operands', () => {
    const result = calculate('multiply', 10, 10);
    expect(result).toBe(100);
  });

  it('should return result of dividing the provided operands', () => {
    const result = calculate('divide', 10, 2);
    expect(result).toBe(5);
  });
});
