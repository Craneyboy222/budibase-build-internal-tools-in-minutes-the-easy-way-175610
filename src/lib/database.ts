import { MongoClient } from 'mongodb';

export const createConnection = async (uri: string, dbName: string) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client.db(dbName);
};

export const closeConnection = async (client: MongoClient) => {
  await client.close();
};
