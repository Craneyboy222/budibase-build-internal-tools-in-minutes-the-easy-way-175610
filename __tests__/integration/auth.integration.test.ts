import request from 'supertest';
import app from '../../app';

describe('Authentication Integration', () => {
  test('should login a user and return a token', async () => {
    const res = await request(app).post('/api/auth/login').send({ username: 'validUser', password: 'validPassword' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  test('should not login a user with invalid credentials', async () => {
    const res = await request(app).post('/api/auth/login').send({ username: 'invalidUser', password: 'invalidPassword' });
    expect(res.statusCode).toEqual(401);
  });
});