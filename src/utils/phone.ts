/* Phone utilities */
import phone from 'phone';

export const formatPhoneNumber = (phoneNumber: string, country: string = 'USA'): string => {
  const result = phone(phoneNumber, { country });
  return result.phoneNumber || '';
};