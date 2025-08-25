/* Error types */

/**
 * Interface for an application error.
 */
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

/**
 * Enum for common error codes.
 */
export enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  SERVER_ERROR = 'SERVER_ERROR'
}