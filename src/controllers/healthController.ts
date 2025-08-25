import { Request, Response, NextFunction } from 'express';

export const healthCheck = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ status: 'Healthy' });
  } catch (error) {
    next(error);
  }
};