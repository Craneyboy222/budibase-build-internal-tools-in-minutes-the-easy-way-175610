/* Array utilities */
export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

export const flatten = <T>(array: any[]): T[] => {
  return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
};