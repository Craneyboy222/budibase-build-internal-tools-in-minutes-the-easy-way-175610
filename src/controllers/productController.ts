import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { ProductService } from '../services/productService';
import { logger } from '../utils/logger';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    logger.error('Error fetching products', error);
    next(error);
  }
};

export const createProduct = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      logger.error('Error creating product', error);
      next(error);
    }
  }
];

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await ProductService.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  } catch (error) {
    logger.error('Error updating product', error);
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting product', error);
    next(error);
  }
};