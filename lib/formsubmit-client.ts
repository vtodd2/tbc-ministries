const FORM_EMAIL = 'admin@tbcministries-us.org';

export async function sendViaFormSubmit(fields: Record<string, string>) {
  const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...fields, _captcha: 'false', _template: 'table' }),
  });
  const result = await response.json().catch(() => null);
  const ok = response.ok && result && (result.success === 'true' || result.success === true);
  return { ok, result };
}
