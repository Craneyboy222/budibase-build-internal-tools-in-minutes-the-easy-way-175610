import request from 'supertest';
import app from '../../app';

describe('User Integration', () => {
  test('should register a new user', async () => {
    const res = await request(app).post('/api/users').send({ username: 'newUser', password: 'password123' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  test('should fetch user details', async () => {
    const res = await request(app).get('/api/users/userId123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('username', 'existingUser');
  });
});