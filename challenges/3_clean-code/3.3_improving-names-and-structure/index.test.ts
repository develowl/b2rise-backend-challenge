import { describe, expect, it } from 'vitest';
import { multiplyEvensByTwo } from '.';

describe('Improving names and structure', () => {
  it('should return an array of even numbers, each multiplied by two', () => {
    const mockData: number[] = [7, 12, 26, 27, 34, 43, 59, 60];
    const result = multiplyEvensByTwo(mockData);

    expect(result).toStrictEqual([24, 52, 68, 120]);
  });
});
