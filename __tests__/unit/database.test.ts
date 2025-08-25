import { connectToDatabase, Users, Roles, Applications, Components, Templates, Workflows, Logs } from '../src/database';

describe('Database Unit Tests', () => {
  beforeAll(async () => {
    await connectToDatabase();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('Should connect to database successfully', async () => {
    const connection = mongoose.connection.readyState;
    expect(connection).toBe(1);
  });

  test('Users table should have necessary fields', async () => {
    const user = new Users({ name: 'John Doe', email: 'john@example.com', role: 'admin' });
    expect(user.name).toBeDefined();
    expect(user.email).toBeDefined();
    expect(user.role).toBeDefined();
  });

  test('Roles table should have necessary fields', async () => {
    const role = new Roles({ name: 'admin', permissions: ['read', 'write'] });
    expect(role.name).toBeDefined();
    expect(role.permissions).toBeDefined();
  });

  // Additional tests for other tables...
});