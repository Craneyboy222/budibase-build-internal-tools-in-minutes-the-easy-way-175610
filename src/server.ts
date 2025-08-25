import express from 'express';
import http from 'http';
import { app } from './app';
import { connectToDatabase } from './utils/db';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on port ${PORT}`);
});