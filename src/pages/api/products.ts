import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../utils/auth';
import { connectToDatabase } from '../../utils/db';
import Product from '../../models/Product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    await connectToDatabase();

    switch (method) {
      case 'GET':
        // Get all products
        const products = await Product.find({});
        return res.status(200).json(products);
      case 'POST':
        // Create a new product
        const { name, price, category } = req.body;
        // Validate input
        if (!name || !price || !category) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        const newProduct = new Product({ name, price, category });
        await newProduct.save();
        return res.status(201).json(newProduct);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Products API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
