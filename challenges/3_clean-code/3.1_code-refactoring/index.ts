export type Item = {
  name: string;
  price: number;
};

export function processItems(items: Item[]): void {
  items.filter(isExpensive).forEach(logExpensive);
}

function isExpensive(item: Item): boolean {
  return item.price > 100;
}

function logExpensive(item: Item): void {
  console.log(`${item.name} is expensive`);
}
