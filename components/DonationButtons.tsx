'use client';

import { useState } from 'react';

async function startCheckout(provider: 'stripe' | 'paypal', amount: number, recurring: boolean) {
  const res = await fetch(`/api/checkout/${provider}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, recurring }),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.url) {
    throw new Error(data?.error ?? 'Unable to start checkout. Please try again.');
  }

  window.location.href = data.url;
}

export function DonationButtons({ amount, label }: { amount: number; label: string }) {
  const [loading, setLoading] = useState<'stripe' | 'paypal' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async (provider: 'stripe' | 'paypal') => {
    setLoading(provider);
    setError(null);
    try {
      await startCheckout(provider, amount, false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setLoading(null);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => handleClick('stripe')}
        disabled={loading !== null}
        className="mt-5 w-full rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light disabled:opacity-60"
        aria-label={`Give ${label} — Stripe payment`}
      >
        {loading === 'stripe' ? 'Redirecting…' : `Give ${label} — Stripe`}
      </button>
      <button
        type="button"
        onClick={() => handleClick('paypal')}
        disabled={loading !== null}
        className="mt-2 w-full rounded-full border border-slate-200 bg-[#003087]/20 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#009cde] transition hover:border-[#009cde]/40 disabled:opacity-60"
        aria-label={`Give ${label} — PayPal`}
      >
        {loading === 'paypal' ? 'Redirecting…' : `Give ${label} — PayPal`}
      </button>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </>
  );
}

export function CustomAmountGiving() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parsed = Number(amount);
  const valid = amount.trim() !== '' && Number.isFinite(parsed) && parsed >= 1;

  const handleGive = async () => {
    if (!valid) return;
    setLoading(true);
    setError(null);
    try {
      await startCheckout('stripe', parsed, false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-3">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">$</span>
          <input
            type="number"
            min="1"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white/95 py-3 pl-8 pr-5 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10"
          />
        </div>
        <button
          type="button"
          onClick={handleGive}
          disabled={!valid || loading}
          className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-gold-light disabled:opacity-60"
        >
          {loading ? 'Redirecting…' : 'Give'}
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const monthlyAmounts = [25, 50, 100, 250];

export function MonthlyGiving() {
  const [selected, setSelected] = useState(monthlyAmounts[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSetup = async () => {
    setLoading(true);
    setError(null);
    try {
      await startCheckout('stripe', selected, true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {monthlyAmounts.map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => setSelected(amt)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              selected === amt
                ? 'border-gold bg-gold text-black'
                : 'border-gold/30 bg-gold/8 text-gold hover:bg-gold/15'
            }`}
          >
            ${amt}/mo
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={handleSetup}
        disabled={loading}
        className="mt-6 w-full rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light disabled:opacity-60"
      >
        {loading ? 'Redirecting…' : `Set Up Monthly Giving — $${selected}/mo`}
      </button>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
