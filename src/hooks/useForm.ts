import { useState } from 'react';

interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
}

function useForm<T>(initialValues: T, validate: (values: T) => Partial<Record<keyof T, string>>) {
  const [formState, setFormState] = useState<FormState<T>>({ values: initialValues, errors: {} });

  const handleChange = (key: keyof T) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...formState.values, [key]: event.target.value };
    const newErrors = validate(newValues);
    setFormState({ values: newValues, errors: newErrors });
  };

  const handleSubmit = (callback: () => void) => (event: React.FormEvent) => {
    event.preventDefault();
    if (Object.keys(formState.errors).length === 0) {
      callback();
    }
  };

  return { ...formState, handleChange, handleSubmit };
}

export default useForm;