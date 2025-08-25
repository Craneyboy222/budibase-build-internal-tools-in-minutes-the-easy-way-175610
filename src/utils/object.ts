/* Object utilities */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const mergeObjects = <T>(obj1: T, obj2: T): T => {
  return { ...obj1, ...obj2 };
};