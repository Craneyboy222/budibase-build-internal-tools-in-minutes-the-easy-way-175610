/* Payment utilities */
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });

export const createCharge = async (amount: number, currency: string, source: string) => {
  return stripe.charges.create({
    amount,
    currency,
    source
  });
};