'use client';

import { useState } from 'react';
import { FormFeedback } from './FormFeedback';
import { CONTACT_EMAIL } from '../lib/constants';

export function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

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
      const response = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          email,
          _subject: 'New Newsletter Subscription — TBC Ministries',
          _captcha: 'false',
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to the TBC community! Check your inbox for a confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
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
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading' || status === 'success'}
          required
          placeholder="your@email.com"
          aria-label="Email address for newsletter"
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
