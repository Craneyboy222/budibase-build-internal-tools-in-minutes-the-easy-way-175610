import { authenticateUser, authorizeUser } from '../services/auth';

describe('Authentication Service', () => {
  test('should authenticate a user with valid credentials', () => {
    const result = authenticateUser('validUser', 'validPassword');
    expect(result).toBe(true);
  });

  test('should not authenticate a user with invalid credentials', () => {
    const result = authenticateUser('invalidUser', 'invalidPassword');
    expect(result).toBe(false);
  });

  test('should authorize user with correct role', () => {
    const result = authorizeUser('validUser', 'admin');
    expect(result).toBe(true);
  });

  test('should not authorize user with incorrect role', () => {
    const result = authorizeUser('validUser', 'guest');
    expect(result).toBe(false);
  });
});