import { MongoClient, Db } from 'mongodb';

class DatabaseService {
  private client: MongoClient;
  private db: Db;

  constructor(private uri: string, private dbName: string) {}

  async connect() {
    try {
      this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  }

  getDb(): Db {
    if (!this.db) {
      throw new Error('Database not connected');
    }
    return this.db;
  }

  async closeConnection() {
    try {
      await this.client.close();
      console.log('Database connection closed');
    } catch (error) {
      console.error('Error closing database connection:', error);
    }
  }
}

export default DatabaseService;
