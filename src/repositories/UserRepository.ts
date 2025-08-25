import { BaseRepository } from './BaseRepository';
import { User } from '../models/User';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super('users');
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.collection.findOne({ email });
      return user ? new User(user) : null;
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw new Error('Database find operation failed');
    }
  }

  async addUser(user: User): Promise<User> {
    try {
      const result = await this.collection.insertOne(user);
      return result.ops[0];
    } catch (error) {
      console.error('Error adding user:', error);
      throw new Error('Database insert operation failed');
    }
  }

  // Additional user-specific methods...
}