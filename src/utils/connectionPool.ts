/* Connection pool utilities */
import { Pool } from 'pg';

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'dbname',
  password: 'password',
  port: 5432
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};