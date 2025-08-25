import { BaseRepository } from './BaseRepository';
import { Review } from '../models/Review';

export class ReviewRepository extends BaseRepository<Review> {
  constructor() {
    super('reviews');
  }

  async findByProductId(productId: string): Promise<Review[]> {
    try {
      return await this.collection.find({ productId }).toArray();
    } catch (error) {
      console.error('Error finding reviews by product ID:', error);
      throw new Error('Database find operation failed');
    }
  }

  async addReview(review: Review): Promise<Review> {
    try {
      const result = await this.collection.insertOne(review);
      return result.ops[0];
    } catch (error) {
      console.error('Error adding review:', error);
      throw new Error('Database insert operation failed');
    }
  }

  // Additional review-specific methods...
}