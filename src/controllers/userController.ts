import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { UserService } from '../services/userService';
import { logger } from '../utils/logger';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    logger.error('Error fetching users', error);
    next(error);
  }
};

export const createUser = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      logger.error('Error creating user', error);
      next(error);
    }
  }
];

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    logger.error('Error updating user', error);
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting user', error);
    next(error);
  }
};