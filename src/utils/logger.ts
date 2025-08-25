/* Logging utility */
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

export const log = (level: string, message: string) => {
  logger.log({ level, message });
};

export default logger;