import { BaseRepository } from './BaseRepository';
import { Notification } from '../models/Notification';

export class NotificationRepository extends BaseRepository<Notification> {
  constructor() {
    super('notifications');
  }

  async findByUserId(userId: string): Promise<Notification[]> {
    try {
      return await this.collection.find({ userId }).toArray();
    } catch (error) {
      console.error('Error finding notifications by user ID:', error);
      throw new Error('Database find operation failed');
    }
  }

  async addNotification(notification: Notification): Promise<Notification> {
    try {
      const result = await this.collection.insertOne(notification);
      return result.ops[0];
    } catch (error) {
      console.error('Error adding notification:', error);
      throw new Error('Database insert operation failed');
    }
  }

  // Additional notification-specific methods...
}