'use client';

import { useState } from 'react';
import { FormFeedback } from './FormFeedback';
import { CONTACT_EMAIL } from '../lib/constants';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      const response = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Ministry Inquiry',
          message: formData.body,
          _subject: `New Contact: ${formData.subject || 'Ministry Inquiry'} — TBC`,
          _captcha: 'false',
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setMessage(
          'Thank you! Your message has been sent. Our team will respond within 1–2 business days.'
        );
        setFormData({ name: '', email: '', subject: '', body: '' });
      } else {
        setStatus('error');
        setMessage('Failed to send. Please try again or email us directly.');
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
    >
      {status !== 'idle' && <FormFeedback status={status} message={message} />}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === 'loading'}
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            placeholder="your@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="contact-subject">Subject</label>
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
        <label className={labelClass} htmlFor="contact-body">Message</label>
        <textarea
          id="contact-body"
          name="body"
          required
          rows={6}
          value={formData.body}
          onChange={handleChange}
          disabled={status === 'loading'}
          placeholder="Share your inquiry, prayer need, or ministry interest..."
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
