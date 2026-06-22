'use client';

import { useState } from 'react';
import { FormFeedback } from './FormFeedback';
import { CONTACT_EMAIL } from '../lib/constants';

export function PrayerRequestForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!isAnonymous && !formData.name.trim()) {
      setMessage('Please enter your name or submit anonymously.');
      setStatus('error');
      return false;
    }
    if (!isAnonymous && !formData.email.includes('@')) {
      setMessage('Please enter a valid email address.');
      setStatus('error');
      return false;
    }
    if (!formData.request.trim() || formData.request.trim().length < 10) {
      setMessage('Please describe your prayer request (at least 10 characters).');
      setStatus('error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setMessage('Submitting your prayer request...');

    try {
      const response = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: isAnonymous ? 'Anonymous' : formData.name,
          email: isAnonymous ? CONTACT_EMAIL : formData.email,
          message: formData.request,
          _subject: 'New Prayer Request — Transformed Believers Church',
          _captcha: 'false',
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setMessage(
          'Your prayer request has been received. Our prayer team will lift you up in prayer. May God meet you right where you are.'
        );
        setFormData({ name: '', email: '', request: '' });
        setIsAnonymous(false);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setMessage('A network error occurred. Please try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
    >
      {status !== 'idle' && (
        <div className="mb-2">
          <FormFeedback status={status} message={message} />
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={isAnonymous}
          onClick={() => setIsAnonymous(!isAnonymous)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full border transition ${
            isAnonymous ? 'border-gold bg-gold/20' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full transition ${
              isAnonymous ? 'translate-x-6 bg-gold' : 'translate-x-1 bg-slate-500'
            }`}
          />
        </button>
        <span className="text-sm text-slate-700">Submit anonymously</span>
      </div>

      {!isAnonymous && (
        <>
          <div>
            <label className="block text-sm uppercase tracking-[0.35em] text-gold/70" htmlFor="prayer-name">
              Your Name
            </label>
            <input
              id="prayer-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
              placeholder="Your full name"
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-white/95 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm uppercase tracking-[0.35em] text-gold/70" htmlFor="prayer-email">
              Email Address
            </label>
            <input
              id="prayer-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
              placeholder="your@email.com"
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-white/95 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10 disabled:opacity-50"
            />
          </div>
        </>
      )}

      <div>
        <label className="block text-sm uppercase tracking-[0.35em] text-gold/70" htmlFor="prayer-request">
          Your Prayer Request
        </label>
        <textarea
          id="prayer-request"
          name="request"
          rows={7}
          value={formData.request}
          onChange={handleChange}
          disabled={status === 'loading'}
          placeholder="Share what's on your heart. Our prayer team will intercede on your behalf..."
          className="mt-3 w-full rounded-3xl border border-slate-200 bg-white/95 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10 disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#c8a55d] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Prayer Request'}
      </button>
    </form>
  );
}
