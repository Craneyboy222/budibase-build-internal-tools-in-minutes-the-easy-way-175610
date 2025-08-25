import { User, Role } from '../models';

const seedDatabase = async () => {
  try {
    const adminRole = new Role({ roleName: 'Admin' });
    const userRole = new Role({ roleName: 'User' });
    await adminRole.save();
    await userRole.save();

    const adminUser = new User({ username: 'admin', password: 'password', roleId: adminRole.id });
    await adminUser.save();

    console.log('Database seeding completed');
  } catch (error) {
    console.error('Seeding error:', error);
    throw new Error('Seeding error');
  }
};

export { seedDatabase };