import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { AuthService } from '../services/authService';
import { logger } from '../utils/logger';

export const login = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').not().isEmpty().withMessage('Password is required'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const token = await AuthService.login(req.body.email, req.body.password);
      res.status(200).json({ token });
    } catch (error) {
      logger.error('Error during login', error);
      next(error);
    }
  }
];

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await AuthService.refreshToken(req.body.token);
    res.status(200).json({ token });
  } catch (error) {
    logger.error('Error refreshing token', error);
    next(error);
  }
};