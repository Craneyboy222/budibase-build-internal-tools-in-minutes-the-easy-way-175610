import express from 'express';
export const api = express.Router();
api.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});
api.get('/info', (_req, res) => {
  res.json({ name: "Budibase | Build internal tools in minutes, the easy way", description: "Modern Budibase | Build internal tools in minutes, the easy way app with enterprise quality.", quality: 'enterprise' });
});
export default api;
