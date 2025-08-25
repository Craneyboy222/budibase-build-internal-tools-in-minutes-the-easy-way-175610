import { BaseRepository } from './BaseRepository';
import { Order } from '../models/Order';

export class OrderRepository extends BaseRepository<Order> {
  constructor() {
    super('orders');
  }

  async findByUserId(userId: string): Promise<Order[]> {
    try {
      return await this.collection.find({ userId }).toArray();
    } catch (error) {
      console.error('Error finding orders by user ID:', error);
      throw new Error('Database find operation failed');
    }
  }

  async addOrder(order: Order): Promise<Order> {
    try {
      const result = await this.collection.insertOne(order);
      return result.ops[0];
    } catch (error) {
      console.error('Error adding order:', error);
      throw new Error('Database insert operation failed');
    }
  }

  // Additional order-specific methods...
}