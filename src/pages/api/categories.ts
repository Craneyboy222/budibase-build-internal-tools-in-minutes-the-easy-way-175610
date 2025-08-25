import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../utils/auth';
import { connectToDatabase } from '../../utils/db';
import Category from '../../models/Category';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    await connectToDatabase();

    switch (method) {
      case 'GET':
        // Get all categories
        const categories = await Category.find({});
        return res.status(200).json(categories);
      case 'POST':
        // Create a new category
        const { name } = req.body;
        // Validate input
        if (!name) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        const newCategory = new Category({ name });
        await newCategory.save();
        return res.status(201).json(newCategory);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Categories API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
