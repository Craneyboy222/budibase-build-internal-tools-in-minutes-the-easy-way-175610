import { PrismaClient } from '@prisma/client';

export default async function seedUsers(prisma: PrismaClient) {
  await prisma.user.createMany({
    data: [
      { username: 'admin', email: 'admin@example.com', password_hash: 'hashedpassword1' },
      { username: 'user1', email: 'user1@example.com', password_hash: 'hashedpassword2' },
      { username: 'user2', email: 'user2@example.com', password_hash: 'hashedpassword3' }
    ]
  });
}