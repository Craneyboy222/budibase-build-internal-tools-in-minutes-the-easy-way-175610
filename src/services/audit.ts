import { Logger } from 'winston';

export const logSecurityEvent = (event: string, details: any) => {
  const logger: Logger = createLogger();
  logger.info(`Security Event: ${event}`, details);
};

const createLogger = (): Logger => {
  return new (winston.Logger)({
    transports: [
      new (winston.transports.File)({ filename: 'security.log' })
    ]
  });
};
