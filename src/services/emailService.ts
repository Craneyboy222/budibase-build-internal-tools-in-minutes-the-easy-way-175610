import nodemailer from 'nodemailer';
import { Logger } from '../utils/logger';

export class EmailService {
  private logger: Logger;
  private transporter: nodemailer.Transporter;

  constructor() {
    this.logger = new Logger('EmailService');
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_FROM,
        to,
        subject,
        text,
      });
      this.logger.info('Email sent', { to, subject });
    } catch (error) {
      this.logger.error('Error sending email', { error });
      throw new Error('Email sending failed');
    }
  }

  // Additional email-related methods...
}
