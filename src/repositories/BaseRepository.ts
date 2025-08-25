import { MongoClient, Collection } from 'mongodb';

export abstract class BaseRepository<T> {
  protected collection: Collection;

  constructor(private collectionName: string) {
    const client = new MongoClient(process.env.MONGO_URI || '');
    client.connect().then(client => {
      this.collection = client.db().collection(this.collectionName);
    }).catch(err => {
      console.error('Error connecting to the database:', err);
      throw new Error('Database connection failed');
    });
  }

  async findById(id: string): Promise<T | null> {
    try {
      const result = await this.collection.findOne({ _id: id });
      return result as T;
    } catch (error) {
      console.error('Error finding by ID:', error);
      throw new Error('Database find operation failed');
    }
  }

  async findAll(): Promise<T[]> {
    try {
      return await this.collection.find().toArray();
    } catch (error) {
      console.error('Error finding all documents:', error);
      throw new Error('Database find operation failed');
    }
  }

  // Additional shared repository methods...
}