import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../utils/auth';
import { connectToDatabase } from '../../utils/db';
import User from '../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    await connectToDatabase();

    switch (method) {
      case 'GET':
        // Get all users
        const users = await User.find({});
        return res.status(200).json(users);
      case 'POST':
        // Create a new user
        const { name, email, role } = req.body;
        // Validate input
        if (!name || !email || !role) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        const newUser = new User({ name, email, role });
        await newUser.save();
        return res.status(201).json(newUser);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Users API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
