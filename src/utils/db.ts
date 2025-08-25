import { PrismaClient } from '@prisma/client';
import mongoose from 'mongoose';

const prisma = new PrismaClient();

const MONGO_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/enterprise';

export async function connectToDatabase(): Promise<void> {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to database');
  }
}

export default prisma;
