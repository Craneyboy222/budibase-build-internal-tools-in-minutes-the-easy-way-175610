import { BaseRepository } from './BaseRepository';
import { Product } from '../models/Product';

export class ProductRepository extends BaseRepository<Product> {
  constructor() {
    super('products');
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    try {
      return await this.collection.find({ categoryId }).toArray();
    } catch (error) {
      console.error('Error finding products by category:', error);
      throw new Error('Database find operation failed');
    }
  }

  async addProduct(product: Product): Promise<Product> {
    try {
      const result = await this.collection.insertOne(product);
      return result.ops[0];
    } catch (error) {
      console.error('Error adding product:', error);
      throw new Error('Database insert operation failed');
    }
  }

  // Additional product-specific methods...
}