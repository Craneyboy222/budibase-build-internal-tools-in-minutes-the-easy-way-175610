import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth';
import UserService from '../services/UserService';
import { User } from '../types/User';

const router = express.Router();

// Middleware for error handling
function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
}

// Middleware for request validation
function validateRequest(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

// GET /api/users - List all users
router.get('/', authenticate, authorize(['admin']), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST /api/users - Create a new user
router.post('/',
  authenticate,
  authorize(['admin']),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: User = req.body;
      const newUser = await UserService.createUser(user);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

// GET /api/users/:id - Get a user by ID
router.get('/:id', authenticate, authorize(['admin', 'user']), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:id - Update a user by ID
router.put('/:id',
  authenticate,
  authorize(['admin']),
  body('email').optional().isEmail(),
  body('password').optional().isLength({ min: 6 }),
  validateRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const updates: Partial<User> = req.body;
      const updatedUser = await UserService.updateUser(userId, updates);
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE /api/users/:id - Delete a user by ID
router.delete('/:id', authenticate, authorize(['admin']), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const success = await UserService.deleteUser(userId);
    if (!success) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// Error handling middleware should be the last middleware
router.use(errorHandler);

export default router;
