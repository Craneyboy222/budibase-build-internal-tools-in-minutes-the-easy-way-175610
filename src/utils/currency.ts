/* Currency utilities */
export const convertCurrency = (amount: number, rate: number): number => {
  return amount * rate;
};