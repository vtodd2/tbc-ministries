const requiredEnv = (key: string) => {
  const value = process.env[key];
  if (!value || value.trim() === '') {
    throw new Error(`Missing required server environment variable: ${key}`);
  }
  return value;
};

export const APP_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.transformedbelieverschurch.org';
export const getFormEmail = () => requiredEnv('FORM_EMAIL');
export const ALLOWED_ORIGINS = (process.env.APP_ALLOWED_ORIGINS ?? APP_URL)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

export const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000);
export const RATE_LIMIT_MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS ?? 6);

export const requireAdminApiToken = () => requiredEnv('ADMIN_API_TOKEN');

export const getStripeSecretKey = () => requiredEnv('STRIPE_SECRET_KEY');
export const getPaypalClientId = () => requiredEnv('PAYPAL_CLIENT_ID');
export const getPaypalClientSecret = () => requiredEnv('PAYPAL_CLIENT_SECRET');
export const PAYPAL_API_BASE =
  process.env.PAYPAL_ENV === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';
