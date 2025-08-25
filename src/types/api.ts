/* API types */

/**
 * HTTP methods supported by the API.
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * Interface for API response.
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}