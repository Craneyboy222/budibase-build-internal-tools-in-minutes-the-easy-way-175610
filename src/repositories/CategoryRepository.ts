import { BaseRepository } from './BaseRepository';
import { Category } from '../models/Category';

export class CategoryRepository extends BaseRepository<Category> {
  constructor() {
    super('categories');
  }

  async findByName(name: string): Promise<Category | null> {
    try {
      const category = await this.collection.findOne({ name });
      return category ? new Category(category) : null;
    } catch (error) {
      console.error('Error finding category by name:', error);
      throw new Error('Database find operation failed');
    }
  }

  async addCategory(category: Category): Promise<Category> {
    try {
      const result = await this.collection.insertOne(category);
      return result.ops[0];
    } catch (error) {
      console.error('Error adding category:', error);
      throw new Error('Database insert operation failed');
    }
  }

  // Additional category-specific methods...
}