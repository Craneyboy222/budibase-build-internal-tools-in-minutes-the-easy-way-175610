import { Db } from 'mongodb';

class SeedingService {
  constructor(private db: Db) {}

  async seed() {
    try {
      // Example seed data
      const usersCollection = this.db.collection('Users');
      await usersCollection.insertMany([
        { name: 'Admin', role: 'admin' },
        { name: 'User', role: 'user' }
      ]);
      console.log('Database seeding completed');
    } catch (error) {
      console.error('Database seeding error:', error);
    }
  }
}

export default SeedingService;
