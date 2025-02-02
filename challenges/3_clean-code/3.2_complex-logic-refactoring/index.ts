export function calculateDiscount(price: number, isPremium: boolean): number {
  if (isPremium) {
    return calculatePremium(price);
  }

  return calculateNotPremium(price);
}

function calculate(
  price: number,
  greaterThanHundred: number,
  lessOrEqualHundred: number
) {
  return price > 100 ? price * greaterThanHundred : price * lessOrEqualHundred;
}

function calculatePremium(price: number) {
  return calculate(price, 0.8, 0.9);
}

function calculateNotPremium(price: number) {
  return calculate(price, 0.9, 1);
}
