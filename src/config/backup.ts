/* Backup configuration */
export const BACKUP_CONFIG = {
  frequency: 'daily', // Options: daily, weekly, monthly
  retentionPeriod: 30, // Number of days to retain backups
  storageLocation: 's3://enterprise-backups',
  encryption: true, // Enable encryption for backups
  notificationEmail: 'admin@enterprise.com' // Email for backup notifications
};