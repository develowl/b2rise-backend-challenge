export function extractValues<
  T extends Record<keyof T, any>,
  K extends keyof T
>(data: T[], field: K): T[K][] {
  if (!(Array.isArray(data) && data.every((obj) => typeof obj === 'object'))) {
    throw new Error('Provided data should be an array of objects');
  }

  if (!data.every((obj) => field in obj)) {
    throw new Error(`Provided field is not a key of data`);
  }

  return data.map((obj) => obj[field]);
}
