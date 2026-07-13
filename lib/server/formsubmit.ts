import { getFormEmail } from './env';

export async function submitFormSubmit(data: Record<string, string>) {
  const formBody = new URLSearchParams({
    ...data,
    _captcha: 'false',
  });

  return fetch(`https://formsubmit.co/${getFormEmail()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: formBody.toString(),
  });
}
