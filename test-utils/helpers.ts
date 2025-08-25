export const generateRandomEmail = () => `test_${Math.random().toString(36).substring(2, 15)}@example.com`;

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));