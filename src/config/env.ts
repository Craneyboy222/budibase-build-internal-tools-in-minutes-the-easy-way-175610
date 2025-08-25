/* Environment variables */

import dotenv from 'dotenv';
dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/enterpriseapp';
export const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
export const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID || '';
export const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET || '';