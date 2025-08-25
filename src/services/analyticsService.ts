import { Log } from '../models';
import { logger } from '../utils/logger';

export const analyticsService = {
  async trackEvent(event: string, data: any) {
    try {
      const log = new Log({ event, data });
      await log.save();
      logger.info('Event tracked:', event);
    } catch (error) {
      logger.error('Error tracking event:', error);
    }
  },

  async getEventLogs(event: string) {
    try {
      return await Log.find({ event });
    } catch (error) {
      logger.error('Error fetching event logs:', error);
      throw new Error('Internal server error');
    }
  }
};