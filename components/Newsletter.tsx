'use client';

import { useState } from 'react';
import { FormFeedback } from './FormFeedback';

export function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [honey, setHoney] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('Subscribing...');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, honey }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setMessage('Welcome to the TBC community! Check your inbox for a confirmation.');
        setEmail('');
        setHoney('');
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('A network error occurred. Please try again later.');
    }
  };

  return (
    <section
      id="newsletter"
      className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow sm:p-10"
      aria-live="polite"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Stay Connected</p>
        <h2 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
          Join the TBC email community.
        </h2>
        <p className="max-w-xl text-slate-700 leading-7">
          Receive sermon releases, devotional guides, event announcements, and ministry updates
          crafted to deepen your faith every week.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="honey"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading' || status === 'success'}
          required
          placeholder="your@email.com"
          aria-label="Email address for newsletter"
          aria-invalid={status === 'error' && !email.trim()}
          className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="shrink-0 rounded-full bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status !== 'idle' && (
        <div className="mt-4">
          <FormFeedback status={status} message={message} />
        </div>
      )}
    </section>
  );
}
