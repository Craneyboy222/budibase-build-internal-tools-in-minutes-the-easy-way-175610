import { Db } from 'mongodb';
import { migrateUp, migrateDown } from '../lib/migrations';

class MigrationService {
  constructor(private db: Db) {}

  async up() {
    try {
      await migrateUp(this.db);
      console.log('Migration up completed');
    } catch (error) {
      console.error('Migration up error:', error);
    }
  }

  async down() {
    try {
      await migrateDown(this.db);
      console.log('Migration down completed');
    } catch (error) {
      console.error('Migration down error:', error);
    }
  }
}

export default MigrationService;
