import { describe, expect, it } from 'vitest';
import { makeAllPositive } from '.';

describe('Array immutability and manipulation', () => {
  const mockData = [-1, 2, -3, 4];
  it('should throw an error when one of the values is not a number', () => {
    const modifiedData = [...mockData, undefined];

    expect(() => makeAllPositive(modifiedData)).toThrowError(
      new Error('Provided data must be an array of numbers')
    );
  });

  it('should return positive values', () => {
    const result = makeAllPositive(mockData);

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
