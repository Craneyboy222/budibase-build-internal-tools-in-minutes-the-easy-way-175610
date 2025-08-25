import { Request, Response, NextFunction } from 'express';
import { performance } from 'perf_hooks';

export const monitorPerformance = (req: Request, res: Response, next: NextFunction) => {
  const start = performance.now();
  res.on('finish', () => {
    const duration = performance.now() - start;
    console.log(`Request to ${req.path} took ${duration}ms`);
    // Optionally log to a monitoring service
  });
  next();
};