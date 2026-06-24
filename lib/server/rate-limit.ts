import { RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW_MS } from './env';

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalAny = globalThis as any;
globalAny.__tbcRateLimitStore ??= new Map<string, RateLimitEntry>();
const rateLimitStore = globalAny.__tbcRateLimitStore as Map<string, RateLimitEntry>;

const now = () => Date.now();

export function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const remote = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0].trim() || remote || 'unknown';
}

export function consumeRateLimit(key: string) {
  const entry = rateLimitStore.get(key);
  if (!entry || now() > entry.resetAt) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now() + RATE_LIMIT_WINDOW_MS,
    });

    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: now() + RATE_LIMIT_WINDOW_MS,
    };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetAt: entry.resetAt,
  };
}
