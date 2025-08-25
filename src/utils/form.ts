/* Form utilities */
export const serializeForm = (form: HTMLFormElement): any => {
  const formData = new FormData(form);
  const data: any = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  return data;
};