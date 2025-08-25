import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../utils/auth';
import { connectToDatabase } from '../../utils/db';
import Order from '../../models/Order';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    await connectToDatabase();

    switch (method) {
      case 'GET':
        // Get all orders
        const orders = await Order.find({});
        return res.status(200).json(orders);
      case 'POST':
        // Create a new order
        const { productIds, userId, total } = req.body;
        // Validate input
        if (!productIds || !userId || !total) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        const newOrder = new Order({ productIds, userId, total });
        await newOrder.save();
        return res.status(201).json(newOrder);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Orders API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
