export type Item = {
  name: string;
  price: number;
};

export function processItems(items: Item[]) {
  items
    .filter((item) => item.price > 100)
    .forEach((item) => console.log(`${item.name} is expensive`));
}
