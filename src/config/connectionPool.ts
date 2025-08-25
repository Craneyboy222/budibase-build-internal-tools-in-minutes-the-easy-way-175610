/* Connection pool configuration */
export const CONNECTION_POOL_CONFIG = {
  maxPoolSize: 50, // Maximum number of connections in the pool
  minPoolSize: 5,  // Minimum number of connections in the pool
  idleTimeoutMillis: 30000, // Time in ms before an idle connection is closed
  connectionTimeoutMillis: 10000, // Time in ms to wait for a connection to be established
  ssl: true // Require SSL for database connections
};