import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { authenticateToken, authorizeRole } from '../middleware/authMiddleware';
import { createProduct, getProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { Product } from '../models/Product';
import logger from '../utils/logger';

const router = express.Router();

// Middleware for validating request
const validateProduct = [
  body('name').isString().notEmpty().withMessage('Product name is required'),
  body('description').isString().optional(),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than zero'),
  body('category').isString().notEmpty().withMessage('Category is required'),
];

// Error handling middleware
const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to create a new product
router.post('/', authenticateToken, authorizeRole(['admin', 'product_manager']), validateProduct, handleValidationErrors, async (req: Request, res: Response) => {
  try {
    const productData = req.body as Product;
    const newProduct = await createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    logger.error(`Failed to create product: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get a product by ID
router.get('/:id', authenticateToken, authorizeRole(['admin', 'product_manager', 'user']), param('id').isMongoId(), handleValidationErrors, async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await getProduct(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    logger.error(`Failed to retrieve product: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update a product
router.put('/:id', authenticateToken, authorizeRole(['admin', 'product_manager']), param('id').isMongoId(), validateProduct, handleValidationErrors, async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const productData = req.body as Product;
    const updatedProduct = await updateProduct(productId, productData);
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    logger.error(`Failed to update product: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a product
router.delete('/:id', authenticateToken, authorizeRole(['admin', 'product_manager']), param('id').isMongoId(), handleValidationErrors, async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await deleteProduct(productId);
    if (!result) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    logger.error(`Failed to delete product: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
