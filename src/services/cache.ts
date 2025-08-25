import Redis from 'redis';

const client = Redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

client.on('error', (err) => {
  console.error('Redis error: ', err);
});

export const setCache = (key: string, value: any, expiry: number) => {
  client.setex(key, expiry, JSON.stringify(value));
};

export const getCache = (key: string) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) return reject(err);
      resolve(data ? JSON.parse(data) : null);
    });
  });
};