import { NextResponse } from 'next/server';
import { consumeRateLimit, getClientIp } from '../../../../lib/server/rate-limit';
import { validateDonationRequest } from '../../../../lib/server/validators';
import { ALLOWED_ORIGINS, APP_URL } from '../../../../lib/server/env';
import { createPayPalOrder } from '../../../../lib/server/paypal';

const isAllowedOrigin = (origin: string | null) => {
  if (!origin) return true;
  return ALLOWED_ORIGINS.includes(origin);
};

export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  if (!isAllowedOrigin(origin)) {
    return NextResponse.json({ error: 'Origin not allowed.' }, { status: 403 });
  }

  const ip = getClientIp(req);
  const rate = consumeRateLimit(`checkout-paypal:${ip}`);
  if (!rate.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait and try again.', retryAfter: Math.ceil((rate.resetAt - Date.now()) / 1000) },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((rate.resetAt - Date.now()) / 1000)) } }
    );
  }

  const body = await req.json().catch(() => null);
  const validation = validateDonationRequest(body);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const siteUrl = origin ?? APP_URL;

  try {
    const { approveUrl } = await createPayPalOrder(
      validation.data.amount,
      `${siteUrl}/api/checkout/paypal/capture`,
      `${siteUrl}/donate?status=cancelled`
    );

    return NextResponse.json({ url: approveUrl });
  } catch {
    return NextResponse.json({ error: 'Unable to start PayPal checkout.' }, { status: 502 });
  }
}
