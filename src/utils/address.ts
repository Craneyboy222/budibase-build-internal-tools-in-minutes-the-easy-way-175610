/* Address utilities */
export const formatAddress = (address: any): string => {
  return `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}`;
};