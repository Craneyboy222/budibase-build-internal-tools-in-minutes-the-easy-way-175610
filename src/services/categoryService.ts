import { Category } from '../models/category';
import { Logger } from '../utils/logger';

export class CategoryService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger('CategoryService');
  }

  async createCategory(categoryData: Partial<Category>): Promise<Category> {
    try {
      const category = new Category(categoryData);
      await category.save();
      this.logger.info('Category created successfully', { categoryId: category.id });
      return category;
    } catch (error) {
      this.logger.error('Error creating category', { error });
      throw new Error('Unable to create category');
    }
  }

  // Additional category-related methods...
}
