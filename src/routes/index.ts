import express from 'express';
import apiRoutes from './api';
import authRoutes from './auth';

const router = express.Router();

// Main entry point for all API routes
router.use('/api', apiRoutes);

// Authentication routes
router.use('/auth', authRoutes);

export default router;