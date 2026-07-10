import { NextResponse } from 'next/server';
import { APP_URL } from '../../../../../lib/server/env';
import { capturePayPalOrder } from '../../../../../lib/server/paypal';

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const orderId = searchParams.get('token');
  const siteUrl = origin || APP_URL;

  if (!orderId) {
    return NextResponse.redirect(`${siteUrl}/donate?status=cancelled`);
  }

  try {
    await capturePayPalOrder(orderId);
    return NextResponse.redirect(`${siteUrl}/donate?status=success&method=paypal`);
  } catch {
    return NextResponse.redirect(`${siteUrl}/donate?status=error`);
  }
}
