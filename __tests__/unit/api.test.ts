import request from 'supertest';
import app from '../app';

describe('API Endpoints', () => {
  test('GET /api/users should return a list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });

  test('POST /api/applications should create a new application', async () => {
    const res = await request(app).post('/api/applications').send({ name: 'New App' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});