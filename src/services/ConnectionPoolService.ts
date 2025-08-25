import { MongoClient, Db } from 'mongodb';

class ConnectionPoolService {
  private client: MongoClient;
  private db: Db;

  constructor(private uri: string, private dbName: string) {}

  async connect() {
    try {
      this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 10 });
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log('Connection pool established');
    } catch (error) {
      console.error('Connection pool error:', error);
      throw error;
    }
  }

  getDb(): Db {
    if (!this.db) {
      throw new Error('Database not connected');
    }
    return this.db;
  }
}

export default ConnectionPoolService;
