import { Db } from 'mongodb';
import fs from 'fs';
import path from 'path';

class BackupService {
  constructor(private db: Db) {}

  async backup(filePath: string) {
    try {
      const collections = await this.db.collections();
      const backupData = {};

      for (const collection of collections) {
        const data = await collection.find().toArray();
        backupData[collection.collectionName] = data;
      }

      fs.writeFileSync(path.resolve(filePath), JSON.stringify(backupData));
      console.log('Database backup completed');
    } catch (error) {
      console.error('Database backup error:', error);
    }
  }
}

export default BackupService;
