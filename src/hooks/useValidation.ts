type Validator<T> = (value: T) => string | null;

function useValidation<T>(validators: Partial<Record<keyof T, Validator<T[keyof T]>>>) {
  return (values: T): Partial<Record<keyof T, string>> => {
    return Object.keys(validators).reduce((errors, key) => {
      const value = values[key as keyof T];
      const validator = validators[key as keyof T];
      if (validator) {
        const error = validator(value);
        if (error) {
          errors[key as keyof T] = error;
        }
      }
      return errors;
    }, {} as Partial<Record<keyof T, string>>);
  };
}

export default useValidation;