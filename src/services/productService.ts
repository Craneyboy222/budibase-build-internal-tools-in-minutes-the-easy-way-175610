import { Request, Response, NextFunction } from 'express';
import { Product } from '../models/product';
import { User } from '../models/user';
import { Role } from '../models/role';
import { ErrorHandler } from '../utils/errorHandler';
import { validateProductRequest } from '../validators/productValidator';

export class ProductService {
  /**
   * Create a new product
   * @param req Express Request
   * @param res Express Response
   */
  public async createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user as User;
      if (!user || !user.hasRole(Role.Admin)) {
        throw new ErrorHandler(403, 'Forbidden: Insufficient permissions');
      }

      const { error } = validateProductRequest(req.body);
      if (error) {
        throw new ErrorHandler(400, error.details[0].message);
      }

      const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        createdBy: user.id
      });

      await product.save();
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Get all products
   * @param req Express Request
   * @param res Express Response
   */
  public async getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Update a product by ID
   * @param req Express Request
   * @param res Express Response
   */
  public async updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user as User;
      if (!user || !user.hasRole(Role.Admin)) {
        throw new ErrorHandler(403, 'Forbidden: Insufficient permissions');
      }

      const { error } = validateProductRequest(req.body);
      if (error) {
        throw new ErrorHandler(400, error.details[0].message);
      }

      const product = await Product.findById(req.params.id);
      if (!product) {
        throw new ErrorHandler(404, 'Product not found');
      }

      product.name = req.body.name;
      product.description = req.body.description;
      product.price = req.body.price;
      await product.save();

      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Delete a product by ID
   * @param req Express Request
   * @param res Express Response
   */
  public async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user as User;
      if (!user || !user.hasRole(Role.Admin)) {
        throw new ErrorHandler(403, 'Forbidden: Insufficient permissions');
      }

      const product = await Product.findById(req.params.id);
      if (!product) {
        throw new ErrorHandler(404, 'Product not found');
      }

      await product.remove();
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
