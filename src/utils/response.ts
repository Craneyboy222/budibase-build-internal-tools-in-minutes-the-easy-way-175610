/* Response utilities */
export const successResponse = (data: any, message: string = 'Success') => ({
  status: 'success',
  message,
  data
});

export const errorResponse = (error: any, message: string = 'Error') => ({
  status: 'error',
  message,
  error
});