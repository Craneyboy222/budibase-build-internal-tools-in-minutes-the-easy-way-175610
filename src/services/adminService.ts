import { Request, Response } from 'express';
import { Role, User } from '../models';
import { logger } from '../utils/logger';

export const adminService = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      logger.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async updateUserRole(req: Request, res: Response) {
    const { userId, roleId } = req.body;
    try {
      const user = await User.findById(userId);
      const role = await Role.findById(roleId);
      if (!user || !role) {
        return res.status(404).json({ error: 'User or Role not found' });
      }
      user.role = role;
      await user.save();
      res.json(user);
    } catch (error) {
      logger.error('Error updating user role:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};