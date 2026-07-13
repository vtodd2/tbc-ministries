import Stripe from 'stripe';
import { getStripeSecretKey } from './env';

let client: Stripe | null = null;

export const getStripe = () => {
  if (!client) client = new Stripe(getStripeSecretKey());
  return client;
};
