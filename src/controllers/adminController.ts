import { Request, Response, NextFunction } from 'express';
import { AdminService } from '../services/adminService';
import { logger } from '../utils/logger';

export const getDashboard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dashboardData = await AdminService.getDashboardData();
    res.status(200).json(dashboardData);
  } catch (error) {
    logger.error('Error fetching dashboard data', error);
    next(error);
  }
};

export const getSystemLogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const logs = await AdminService.getSystemLogs();
    res.status(200).json(logs);
  } catch (error) {
    logger.error('Error fetching system logs', error);
    next(error);
  }
};