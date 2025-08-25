import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import { check } from 'express-validator';
import bcrypt from 'bcrypt';
import { logSecurityEvent } from '../services/loggingService';

// Security middleware
export const securityMiddleware = (app: express.Application) => {
  // CORS configuration
  app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(','), credentials: true }));

  // Security headers
  app.use(helmet());

  // Rate limiting to prevent DDoS attacks
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.'
  });
  app.use(limiter);

  // Session management
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 3600000 } // 1 hour
  }));

  // Input validation and sanitization
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post('/api/login', [
    check('email').isEmail().withMessage('Must be a valid email'),
    check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
  ], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  });

  // Password hashing
  app.use(async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    next();
  });

  // Audit logging
  app.use((req: Request, res: Response, next: NextFunction) => {
    logSecurityEvent(req);
    next();
  });
};