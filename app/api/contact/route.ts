import { NextResponse } from 'next/server';
import { consumeRateLimit, getClientIp } from '../../../lib/server/rate-limit';
import { submitFormSubmit } from '../../../lib/server/formsubmit';
import { validateContactForm } from '../../../lib/server/validators';
import { ALLOWED_ORIGINS } from '../../../lib/server/env';

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
  const rate = consumeRateLimit(`contact:${ip}`);
  if (!rate.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait and try again.', retryAfter: Math.ceil((rate.resetAt - Date.now()) / 1000) },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((rate.resetAt - Date.now()) / 1000)) } }
    );
  }

  const body = await req.json().catch(() => null);
  const validation = validateContactForm(body);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const response = await submitFormSubmit({
    name: validation.data.name,
    email: validation.data.email,
    subject: validation.data.subject,
    message: validation.data.message,
    _subject: `New Contact: ${validation.data.subject} — TBC`,
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Unable to send message at this time. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
