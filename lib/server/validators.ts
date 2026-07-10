const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ValidationResult<T> =
  | { valid: true; data: T }
  | { valid: false; error: string };

const normalize = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const buildErrorResponse = (message: string): ValidationResult<never> => ({ valid: false, error: message });

export function validateContactForm(payload: unknown): ValidationResult<{ name: string; email: string; subject: string; message: string }> {
  if (!payload || typeof payload !== 'object') {
    return buildErrorResponse('Invalid request body.');
  }

  const { name, email, subject, message, honey } = payload as Record<string, unknown>;

  if (normalize(honey)) {
    return buildErrorResponse('Spam protection triggered.');
  }

  if (!normalize(name)) {
    return buildErrorResponse('Please enter your name.');
  }

  if (!emailPattern.test(normalize(email))) {
    return buildErrorResponse('Please enter a valid email address.');
  }

  if (!normalize(message)) {
    return buildErrorResponse('Please enter a message.');
  }

  if (normalize(subject).length > 100) {
    return buildErrorResponse('Subject is too long.');
  }

  return { valid: true, data: { name: normalize(name), email: normalize(email), subject: normalize(subject) || 'Ministry Inquiry', message: normalize(message) } };
}

export function validatePrayerForm(payload: unknown): ValidationResult<{ name: string; email: string; message: string }> {
  if (!payload || typeof payload !== 'object') {
    return buildErrorResponse('Invalid request body.');
  }

  const { name, email, request, anonymous, honey } = payload as Record<string, unknown>;
  const isAnonymous = anonymous === true || anonymous === 'true';

  if (normalize(honey)) {
    return buildErrorResponse('Spam protection triggered.');
  }

  if (!isAnonymous && !normalize(name)) {
    return buildErrorResponse('Please enter your name or submit anonymously.');
  }

  if (!isAnonymous && !emailPattern.test(normalize(email))) {
    return buildErrorResponse('Please enter a valid email address.');
  }

  const requestText = normalize(request);
  if (requestText.length < 10) {
    return buildErrorResponse('Please describe your prayer request with at least 10 characters.');
  }

  return {
    valid: true,
    data: {
      name: isAnonymous ? 'Anonymous' : normalize(name),
      email: isAnonymous ? 'no-reply@transformedbelieverschurch.org' : normalize(email),
      message: requestText,
    },
  };
}

export function validateNewsletterForm(payload: unknown): ValidationResult<{ email: string }> {
  if (!payload || typeof payload !== 'object') {
    return buildErrorResponse('Invalid request body.');
  }

  const { email, honey } = payload as Record<string, unknown>;

  if (normalize(honey)) {
    return buildErrorResponse('Spam protection triggered.');
  }

  if (!emailPattern.test(normalize(email))) {
    return buildErrorResponse('Please enter a valid email address.');
  }

  return { valid: true, data: { email: normalize(email) } };
}

export function validateDonationRequest(payload: unknown): ValidationResult<{ amount: number; recurring: boolean }> {
  if (!payload || typeof payload !== 'object') {
    return buildErrorResponse('Invalid request body.');
  }

  const { amount, recurring } = payload as Record<string, unknown>;
  const parsedAmount = typeof amount === 'number' ? amount : Number(amount);

  if (!Number.isFinite(parsedAmount) || parsedAmount < 1 || parsedAmount > 100000) {
    return buildErrorResponse('Please enter a donation amount between $1 and $100,000.');
  }

  return {
    valid: true,
    data: { amount: Math.round(parsedAmount * 100) / 100, recurring: recurring === true },
  };
}
