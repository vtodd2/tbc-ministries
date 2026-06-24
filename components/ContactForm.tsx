'use client';

import { useState } from 'react';
import { FormFeedback } from './FormFeedback';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
    honey: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) {
      setMessage('Please enter your name.');
      setStatus('error');
      return false;
    }
    if (!formData.email.includes('@')) {
      setMessage('Please enter a valid email address.');
      setStatus('error');
      return false;
    }
    if (!formData.body.trim()) {
      setMessage('Please enter a message.');
      setStatus('error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setMessage('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.body,
          honey: formData.honey,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setMessage(
          'Thank you! Your message has been sent. Our team will respond within 1–2 business days.'
        );
        setFormData({ name: '', email: '', subject: '', body: '', honey: '' });
      } else {
        setStatus('error');
        setMessage(result.error || 'Failed to send. Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setMessage('A network error occurred. Please try again later.');
    }
  };

  const fieldClass =
    'mt-3 w-full rounded-3xl border border-slate-200 bg-white/95 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10 disabled:opacity-50';
  const labelClass = 'block text-xs uppercase tracking-[0.35em] text-gold/70';

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
      aria-live="polite"
    >
      {status !== 'idle' && <FormFeedback status={status} message={message} />}

      <input
        type="text"
        name="honey"
        value={formData.honey}
        onChange={handleChange}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === 'loading'}
            placeholder="Your full name"
            aria-invalid={status === 'error' && !formData.name.trim()}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            placeholder="your@email.com"
            aria-invalid={status === 'error' && !formData.email.includes('@')}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-subject">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={status === 'loading'}
          className={fieldClass}
        >
          <option value="">Select a topic</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Prayer Request">Prayer Request</option>
          <option value="Book Order">Book Order</option>
          <option value="Ministry Partnership">Ministry Partnership</option>
          <option value="Donation Question">Donation Question</option>
          <option value="Speaking Engagement">Speaking Engagement</option>
          <option value="Media / Press">Media / Press</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-body">
          Message
        </label>
        <textarea
          id="contact-body"
          name="body"
          required
          rows={6}
          value={formData.body}
          onChange={handleChange}
          disabled={status === 'loading'}
          placeholder="Share your inquiry, prayer need, or ministry interest..."
          aria-invalid={status === 'error' && !formData.body.trim()}
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
