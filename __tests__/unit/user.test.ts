import { createUser, getUser } from '../services/user';

describe('User Service', () => {
  test('should create a new user', () => {
    const user = createUser({ username: 'newUser', password: 'password123' });
    expect(user).toHaveProperty('id');
  });

  test('should retrieve a user by ID', () => {
    const user = getUser('userId123');
    expect(user).toHaveProperty('username', 'existingUser');
  });
});