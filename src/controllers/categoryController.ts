import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { CategoryService } from '../services/categoryService';
import { logger } from '../utils/logger';

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    logger.error('Error fetching categories', error);
    next(error);
  }
};

export const createCategory = [
  body('name').not().isEmpty().withMessage('Name is required'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const category = await CategoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (error) {
      logger.error('Error creating category', error);
      next(error);
    }
  }
];

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await CategoryService.updateCategory(req.params.id, req.body);
    res.status(200).json(category);
  } catch (error) {
    logger.error('Error updating category', error);
    next(error);
  }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await CategoryService.deleteCategory(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting category', error);
    next(error);
  }
};