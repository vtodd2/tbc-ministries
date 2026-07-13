import { NextResponse } from 'next/server';
import { consumeRateLimit, getClientIp } from '../../../../lib/server/rate-limit';
import { validateDonationRequest } from '../../../../lib/server/validators';
import { ALLOWED_ORIGINS, APP_URL } from '../../../../lib/server/env';
import { getStripe } from '../../../../lib/server/stripe';

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
  const rate = consumeRateLimit(`checkout-stripe:${ip}`);
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

  const { amount, recurring } = validation.data;
  const siteUrl = origin ?? APP_URL;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: recurring ? 'subscription' : 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: recurring ? 'TBC Monthly Giving' : 'TBC Donation',
            },
            unit_amount: Math.round(amount * 100),
            ...(recurring ? { recurring: { interval: 'month' as const } } : {}),
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/donate?status=success&method=stripe`,
      cancel_url: `${siteUrl}/donate?status=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Unable to start Stripe checkout.' }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: 'Unable to start Stripe checkout.' }, { status: 502 });
  }
}
