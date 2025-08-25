/* Validation types */

/**
 * Interface for a validation error.
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Interface for validating a form.
 */
export interface FormValidation<T> {
  validate: (data: T) => ValidationError[];
}