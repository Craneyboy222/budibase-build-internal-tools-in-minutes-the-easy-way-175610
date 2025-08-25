import Bull from 'bull';
import { logger } from '../utils/logger';

const jobQueue = new Bull('jobQueue');

export const queueService = {
  async addJob(data: any) {
    try {
      await jobQueue.add(data);
      logger.info('Job added to queue');
    } catch (error) {
      logger.error('Error adding job to queue:', error);
    }
  },

  processJobs() {
    jobQueue.process(async (job) => {
      try {
        logger.info('Processing job:', job.data);
        // Job processing logic here
      } catch (error) {
        logger.error('Error processing job:', error);
      }
    });
  }
};