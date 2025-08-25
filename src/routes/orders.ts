import express, { Request, Response, NextFunction } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth';
import { OrderService } from '../services/OrderService';
import { logger } from '../utils/logger';

const router = express.Router();

// Validation schema for order requests
const orderValidationSchema = checkSchema({
  productId: {
    in: ['body'],
    isString: true,
    errorMessage: 'Product ID is required and should be a string',
  },
  quantity: {
    in: ['body'],
    isInt: { options: { min: 1 } },
    errorMessage: 'Quantity is required and should be an integer greater than 0',
  },
  userId: {
    in: ['body'],
    isString: true,
    errorMessage: 'User ID is required and should be a string',
  },
});

// Error handling middleware
function handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
}

// GET /api/orders - List all orders
router.get('/', authenticate, authorize(['admin', 'user']), async (req: Request, res: Response) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.json(orders);
  } catch (err) {
    handleErrors(err, req, res, next);
  }
});

// POST /api/orders - Create a new order
router.post('/', authenticate, authorize(['user']), orderValidationSchema, async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const order = await OrderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    handleErrors(err, req, res, next);
  }
});

// GET /api/orders/:id - Get a specific order
router.get('/:id', authenticate, authorize(['admin', 'user']), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    handleErrors(err, req, res, next);
  }
});

// PUT /api/orders/:id - Update an order
router.put('/:id', authenticate, authorize(['admin']), orderValidationSchema, async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const order = await OrderService.updateOrder(req.params.id, req.body);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    handleErrors(err, req, res, next);
  }
});

// DELETE /api/orders/:id - Delete an order
router.delete('/:id', authenticate, authorize(['admin']), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const success = await OrderService.deleteOrder(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(204).send();
  } catch (err) {
    handleErrors(err, req, res, next);
  }
});

export default router;
