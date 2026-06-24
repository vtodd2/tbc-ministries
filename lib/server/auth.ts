import { NextResponse } from 'next/server';
import { requireAdminApiToken } from './env';

export function getBearerToken(req: Request) {
  const header = req.headers.get('authorization') ?? '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match?.[1] ?? null;
}

export function requireAdminAuth(req: Request) {
  const token = getBearerToken(req);
  const adminToken = requireAdminApiToken();
  if (!token || token !== adminToken) {
    return NextResponse.json({ error: 'Unauthorized request.' }, { status: 401 });
  }
  return null;
}
