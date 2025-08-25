import Redis from 'ioredis';
import { logger } from '../utils/logger';

const redis = new Redis();

export const cacheService = {
  async setCache(key: string, value: any, ttl: number) {
    try {
      await redis.set(key, JSON.stringify(value), 'EX', ttl);
      logger.info(`Cache set for key: ${key}`);
    } catch (error) {
      logger.error('Error setting cache:', error);
    }
  },

  async getCache(key: string) {
    try {
      const data = await redis.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      logger.error('Error getting cache:', error);
      return null;
    }
  }
};