import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/UserModel';
import logger from '../utils/logger';
import { Types } from '../types';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';
const TOKEN_EXPIRATION = '1h';

interface AuthTokenPayload {
  userId: string;
  roles: string[];
}

class AuthService {
  async register(userData: Types.User): Promise<Types.User> {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = new UserModel({
        ...userData,
        password: hashedPassword,
      });
      await user.save();
      return user;
    } catch (error) {
      logger.error('Error registering user:', error);
      throw new Error('Registration failed');
    }
  }

  async login(email: string, password: string): Promise<{ token: string; user: Types.User }> {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

      const payload: AuthTokenPayload = {
        userId: user.id,
        roles: user.roles,
      };

      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });
      return { token, user };
    } catch (error) {
      logger.error('Error logging in:', error);
      throw new Error('Login failed');
    }
  }

  authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401);
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        logger.error('Token verification failed:', err);
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  }

  async logout(req: Request, res: Response): Promise<void> {
    // Implement token invalidation logic if necessary (e.g., add to blacklist)
    res.sendStatus(204);
  }
}

export default new AuthService();
