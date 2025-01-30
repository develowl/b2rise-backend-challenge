import assert from 'node:assert';
import { describe, it } from 'node:test';
import { extractValues } from '.';

describe('Types and Generics manipulation', () => {
  const mockData = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  it('should throw an error when data is not an array of objects', () => {
    const modifiedData = [...mockData, 1];

    assert.throws(() => {
      extractValues<any, any>(modifiedData, 'field');
    });
  });

  it('should throw an error when field is not a key of object from data', () => {
    const modifiedData = [...mockData, { id: 3, age: 28 }];

    assert.throws(() => {
      extractValues(modifiedData, 'name' as any);
    });
  });

  it('should return values related to provided field', () => {
    const result = extractValues(mockData, 'name');
    const values = ['Alice', 'Bob'];

    assert.deepEqual(result, values);
  });
});
