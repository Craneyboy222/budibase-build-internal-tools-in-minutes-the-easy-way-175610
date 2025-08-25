import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { authenticateAdmin, authorizeAdmin } from '../middleware/auth';
import { createLogger } from '../utils/logger';
import { UserController, ApplicationController, RoleController } from '../controllers';

const router = express.Router();
const logger = createLogger('adminRoutes');

// Error handling middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, { stack: err.stack });
  res.status(500).json({ error: 'Internal Server Error' });
};

// Validate request
const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Admin authentication and authorization middleware
router.use(authenticateAdmin, authorizeAdmin);

// Admin routes

// Get all users
router.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserController.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// Create new user
router.post('/users', 
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  validate,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserController.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

// Get all applications
router.get('/applications', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const applications = await ApplicationController.getAllApplications();
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
});

// Update user role
router.put('/users/:id/role', 
  body('role').notEmpty(),
  validate,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedUser = await RoleController.updateUserRole(req.params.id, req.body.role);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

// Use error handler
router.use(errorHandler);

export default router;
