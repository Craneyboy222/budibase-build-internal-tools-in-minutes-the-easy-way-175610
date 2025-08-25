import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getUserRoles, getPermissionsForRole } from '../services/roleService';

// Middleware for role-based access control
export const rbacMiddleware = (requiredPermissions: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.sub;

      const userRoles = await getUserRoles(userId);
      const permissions = new Set<string>();

      for (const role of userRoles) {
        const rolePermissions = await getPermissionsForRole(role);
        rolePermissions.forEach(perm => permissions.add(perm));
      }

      const hasPermission = requiredPermissions.every(perm => permissions.has(perm));

      if (!hasPermission) {
        return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
      }

      next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  };
};