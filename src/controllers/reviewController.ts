import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { ReviewService } from '../services/reviewService';
import { logger } from '../utils/logger';

export const getReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reviews = await ReviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    logger.error('Error fetching reviews', error);
    next(error);
  }
};

export const createReview = [
  body('productId').not().isEmpty().withMessage('Product ID is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const review = await ReviewService.createReview(req.body);
      res.status(201).json(review);
    } catch (error) {
      logger.error('Error creating review', error);
      next(error);
    }
  }
];

export const updateReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const review = await ReviewService.updateReview(req.params.id, req.body);
    res.status(200).json(review);
  } catch (error) {
    logger.error('Error updating review', error);
    next(error);
  }
};

export const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ReviewService.deleteReview(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting review', error);
    next(error);
  }
};