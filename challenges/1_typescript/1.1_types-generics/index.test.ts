import { describe, expect, it } from 'vitest';
import { extractValues } from '.';

describe('Types and Generics manipulation', () => {
  const mockData = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  it('should throw an error when data is not an array of objects', () => {
    const modifiedData = [...mockData, 1];

    expect(() =>
      extractValues(modifiedData, 'id' as keyof object)
    ).toThrowError(new Error('Provided data must be an array of objects'));
  });

  it('should throw an error when field is not a key of object from data', () => {
    const modifiedData = [...mockData, { id: 3, age: 28 }];

    expect(() =>
      extractValues(modifiedData, 'age' as keyof object)
    ).toThrowError(new Error(`Provided field is not a key of data`));
  });

  it('should return values related to provided field', () => {
    const result = extractValues(mockData, 'name');
    const values = ['Alice', 'Bob'];

    expect(result).toEqual(values);
  });
});
