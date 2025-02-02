import { describe, expect, it, vi } from 'vitest';
import { Item, processItems } from '.';

describe('Code refactoring', () => {
  const mockItems: Item[] = [
    { name: 'Item 1', price: 120 },
    { name: 'Item 2', price: 36 },
    { name: 'Item 3', price: 74 },
    { name: 'Item 4', price: 178 },
    { name: 'Item 5', price: 126 }
  ];

  it('should log items with price greater than 100', () => {
    const consoleLogSpy = vi.spyOn(console, 'log');

    processItems(mockItems);

    expect(consoleLogSpy).toHaveBeenCalledWith('Item 1 is expensive');
    expect(consoleLogSpy).toHaveBeenCalledWith('Item 4 is expensive');
    expect(consoleLogSpy).not.toHaveBeenCalledWith('Item 2 is expensive');

    consoleLogSpy.mockRestore();
  });
});
