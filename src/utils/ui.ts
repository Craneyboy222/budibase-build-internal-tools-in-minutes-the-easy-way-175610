/* UI utilities */
export const toggleVisibility = (element: HTMLElement) => {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
};