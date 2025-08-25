/* Database types */

/**
 * Interface representing a database connection configuration.
 */
export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  type: 'SQL' | 'NoSQL';
}

/**
 * Interface for a database entity.
 */
export interface DatabaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}