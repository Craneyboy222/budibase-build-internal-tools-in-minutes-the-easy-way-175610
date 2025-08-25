import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../utils/auth';
import { connectToDatabase } from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    await connectToDatabase();

    switch (method) {
      case 'POST':
        // Handle login
        const { username, password } = req.body;
        // Validate input
        if (!username || !password) {
          return res.status(400).json({ error: 'Missing username or password' });
        }
        // Authenticate user (example implementation)
        // Replace with actual authentication logic
        if (username === 'admin' && password === 'admin') {
          return res.status(200).json({ token: 'example-token' });
        } else {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Auth API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
