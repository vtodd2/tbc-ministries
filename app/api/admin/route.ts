import { NextResponse } from 'next/server';
import { requireAdminAuth } from '../../../lib/server/auth';
import { ALLOWED_ORIGINS } from '../../../lib/server/env';

const isAllowedOrigin = (origin: string | null) => {
  if (!origin) return true;
  return ALLOWED_ORIGINS.includes(origin);
};

export async function GET(req: Request) {
  const origin = req.headers.get('origin');
  if (!isAllowedOrigin(origin)) {
    return NextResponse.json({ error: 'Origin not allowed.' }, { status: 403 });
  }

  const authError = requireAdminAuth(req);
  if (authError) return authError;

  return NextResponse.json({ status: 'ok', timestamp: Date.now() });
}
