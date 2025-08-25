import { Prisma, User as PrismaUser } from '@prisma/client';

export type User = PrismaUser;

// Additional methods related to User model can be added here
export const findUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};