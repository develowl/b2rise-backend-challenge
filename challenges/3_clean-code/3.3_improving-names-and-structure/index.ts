export function multiplyEvensByTwo(dividends: number[]): number[] {
  return dividends
    .filter((dividend) => dividend % 2 === 0)
    .map((dividend) => dividend * 2);
}
