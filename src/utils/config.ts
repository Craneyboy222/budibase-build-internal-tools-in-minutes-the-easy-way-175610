/* Configuration */
export const getConfig = () => {
  return {
    apiUrl: process.env.API_URL,
    environment: process.env.NODE_ENV
  };
};