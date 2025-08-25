import Stripe from 'stripe';
import { logger } from '../utils/logger';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });

export const paymentService = {
  async createCharge(amount: number, currency: string, source: string) {
    try {
      const charge = await stripe.charges.create({
        amount,
        currency,
        source,
      });
      logger.info('Charge created:', charge.id);
      return charge;
    } catch (error) {
      logger.error('Error creating charge:', error);
      throw new Error('Payment processing error');
    }
  }
};