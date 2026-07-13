import { PAYPAL_API_BASE, getPaypalClientId, getPaypalClientSecret } from './env';

async function getAccessToken() {
  const credentials = Buffer.from(`${getPaypalClientId()}:${getPaypalClientSecret()}`).toString('base64');

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error('Unable to authenticate with PayPal.');
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

export async function createPayPalOrder(amount: number, returnUrl: string, cancelUrl: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          description: 'Donation to Transformed Believers Church',
          amount: {
            currency_code: 'USD',
            value: amount.toFixed(2),
          },
        },
      ],
      application_context: {
        brand_name: 'Transformed Believers Church',
        return_url: returnUrl,
        cancel_url: cancelUrl,
        user_action: 'PAY_NOW',
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Unable to create PayPal order.');
  }

  const order = (await response.json()) as { id: string; links: { rel: string; href: string }[] };
  const approveLink = order.links.find((link) => link.rel === 'approve');

  if (!approveLink) {
    throw new Error('PayPal did not return an approval link.');
  }

  return { orderId: order.id, approveUrl: approveLink.href };
}

export async function capturePayPalOrder(orderId: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Unable to capture PayPal order.');
  }

  return response.json();
}
