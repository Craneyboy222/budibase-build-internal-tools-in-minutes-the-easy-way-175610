/* Validation utilities */
import { ValidationError, object, string, number } from 'yup';

export const validateUser = async (userData: any) => {
  const schema = object({
    name: string().required(),
    email: string().email().required(),
    age: number().positive().integer().required()
  });

  try {
    await schema.validate(userData);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new Error(`Validation error: ${error.message}`);
    }
  }
};