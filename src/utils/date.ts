/* Date utilities */
import { format, parseISO } from 'date-fns';

export const formatDate = (date: Date, dateFormat: string = 'yyyy-MM-dd'): string => {
  return format(date, dateFormat);
};

export const parseDate = (dateString: string): Date => {
  return parseISO(dateString);
};