export function multiplyEvensByTwo(dividends: number[]): number[] {
  return dividends.filter(isEvenNumber).map(getDouble);
}

function isEvenNumber(dividend: number): boolean {
  return dividend % 2 === 0;
}

function getDouble(dividend: number): number {
  return dividend * 2;
}
