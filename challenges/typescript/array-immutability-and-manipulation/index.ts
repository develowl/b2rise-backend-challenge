export function makeAllPositive(data: number[]): number[] {
  if (data.some((value) => isNaN(value))) {
    throw new Error('Provided data must be an array of numbers');
  }

  return data.map((value) => Math.abs(value));
}
