import { exec } from 'child_process';

const backupDatabase = (backupPath: string) => {
  const command = `mongodump --archive=${backupPath} --gzip`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Backup error:', stderr);
      throw new Error('Backup error');
    }
    console.log('Database backup completed successfully');
  });
};

const restoreDatabase = (backupPath: string) => {
  const command = `mongorestore --archive=${backupPath} --gzip`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Restore error:', stderr);
      throw new Error('Restore error');
    }
    console.log('Database restore completed successfully');
  });
};

export { backupDatabase, restoreDatabase };