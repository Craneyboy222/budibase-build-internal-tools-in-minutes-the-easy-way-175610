import { Request, Response } from 'express';
import { Order } from '../models/orderModel';
import { User } from '../models/userModel';
import { validateOrder, validateObjectId } from '../validators/orderValidator';
import { logger } from '../utils/logger';
import { authorize } from '../middleware/authMiddleware';

// Order Management Service
export class OrderService {
  // Create a new order
  async createOrder(req: Request, res: Response): Promise<Response> {
    try {
      // Validate request
      const { error } = validateOrder(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      // Authorize user
      const user: User = await authorize(req);
      if (!user) return res.status(403).json({ error: 'Access denied.' });

      // Create order
      const order = new Order({ ...req.body, user: user._id });
      await order.save();
      return res.status(201).json(order);
    } catch (err) {
      logger.error('Error creating order:', err);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  // Get order by ID
  async getOrderById(req: Request, res: Response): Promise<Response> {
    try {
      // Validate Object ID
      if (!validateObjectId(req.params.id))
        return res.status(400).json({ error: 'Invalid order ID.' });

      // Authorize user
      const user: User = await authorize(req);
      if (!user) return res.status(403).json({ error: 'Access denied.' });

      // Find order
      const order = await Order.findById(req.params.id);
      if (!order) return res.status(404).json({ error: 'Order not found.' });

      return res.json(order);
    } catch (err) {
      logger.error('Error fetching order:', err);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  // Update order
  async updateOrder(req: Request, res: Response): Promise<Response> {
    try {
      // Validate request
      const { error } = validateOrder(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      // Validate Object ID
      if (!validateObjectId(req.params.id))
        return res.status(400).json({ error: 'Invalid order ID.' });

      // Authorize user
      const user: User = await authorize(req);
      if (!user) return res.status(403).json({ error: 'Access denied.' });

      // Update order
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!order) return res.status(404).json({ error: 'Order not found.' });

      return res.json(order);
    } catch (err) {
      logger.error('Error updating order:', err);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  // Delete order
  async deleteOrder(req: Request, res: Response): Promise<Response> {
    try {
      // Validate Object ID
      if (!validateObjectId(req.params.id))
        return res.status(400).json({ error: 'Invalid order ID.' });

      // Authorize user
      const user: User = await authorize(req);
      if (!user) return res.status(403).json({ error: 'Access denied.' });

      // Delete order
      const order = await Order.findByIdAndRemove(req.params.id);
      if (!order) return res.status(404).json({ error: 'Order not found.' });

      return res.json({ message: 'Order deleted successfully.' });
    } catch (err) {
      logger.error('Error deleting order:', err);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }
}