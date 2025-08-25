import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken, isAdmin } from '../../utils/auth';
import { connectToDatabase } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    await connectToDatabase();

    // Verify admin access
    const token = req.headers.authorization?.split(' ')[1];
    if (!token || !isAdmin(token)) {
      return res.status(403).json({ error: 'Access denied' });
    }

    switch (method) {
      case 'GET':
        // Admin specific operations
        return res.status(200).json({ message: 'Admin operations successful' });
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Admin API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
