/* Seeding configuration */

import { User } from '../models/User';
import { Role } from '../models/Role';

export const seedDatabase = async () => {
    try {
        await User.create({ username: 'admin', password: 'admin', email: 'admin@example.com', role: 'Admin' });
        await Role.create({ name: 'Admin', permissions: ['*'] });
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Seeding failed', error);
    }
};