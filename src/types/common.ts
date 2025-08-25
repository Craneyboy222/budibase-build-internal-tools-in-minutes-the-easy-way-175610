/* Common types */

/**
 * Type for a UUID string.
 */
export type UUID = string;

/**
 * Interface for pagination options.
 */
export interface PaginationOptions {
  page: number;
  limit: number;
}

/**
 * Utility type for optional properties.
 */
export type Optional<T> = {
  [P in keyof T]?: T[P];
};