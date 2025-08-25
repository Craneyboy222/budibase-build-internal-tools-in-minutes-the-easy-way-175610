import { exec } from 'child_process';
import { logger } from '../utils/logger';

export const backupService = {
  async createBackup() {
    try {
      exec('backup-script.sh', (error, stdout, stderr) => {
        if (error) {
          logger.error('Error creating backup:', stderr);
          return;
        }
        logger.info('Backup created successfully:', stdout);
      });
    } catch (error) {
      logger.error('Error in backup service:', error);
    }
  }
};