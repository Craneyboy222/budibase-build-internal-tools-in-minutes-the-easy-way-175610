import mongoose from 'mongoose';

// Database Indexing
export const createIndexes = async () => {
  await mongoose.connection.db.collection('Users').createIndex({ 'email': 1 }, { unique: true });
  await mongoose.connection.db.collection('Applications').createIndex({ 'ownerId': 1 });
  // Add more indexes as needed
};

// Connection Pooling
export const setupConnectionPooling = () => {
  mongoose.set('poolSize', 10); // Example pool size
};

// Frontend Optimizations (code splitting and lazy loading)
// Ensure React components are split into separate bundles and loaded lazily where applicable
export const loadComponent = (componentImport) => {
  return React.lazy(() => componentImport);
};