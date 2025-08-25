export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export async function fetcher(url: string, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}