/* Error utilities */
export class AppError extends Error {
  constructor(public message: string, public statusCode: number) {
    super(message);
    this.name = 'AppError';
  }
}

export const handleError = (error: AppError) => {
  console.error(`Error: ${error.message}, Status Code: ${error.statusCode}`);
};