/* Security configuration */

import helmet from 'helmet';
import cors from 'cors';

export const securityMiddleware = [
    helmet(),
    cors({
        origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
        optionsSuccessStatus: 200
    })
];

export const rateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
};