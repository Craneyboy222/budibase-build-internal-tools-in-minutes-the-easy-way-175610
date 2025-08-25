import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { OrderService } from '../services/orderService';
import { logger } from '../utils/logger';

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    logger.error('Error fetching orders', error);
    next(error);
  }
};

export const createOrder = [
  body('userId').not().isEmpty().withMessage('User ID is required'),
  body('products').isArray({ min: 1 }).withMessage('At least one product is required'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const order = await OrderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      logger.error('Error creating order', error);
      next(error);
    }
  }
];

export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await OrderService.updateOrder(req.params.id, req.body);
    res.status(200).json(order);
  } catch (error) {
    logger.error('Error updating order', error);
    next(error);
  }
};

export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await OrderService.deleteOrder(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting order', error);
    next(error);
  }
};