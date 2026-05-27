export function ContactForm() {
  return (
    <form action="https://formsubmit.co/your-email@example.com" method="POST" className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow sm:p-10">
      <input type="hidden" name="_subject" value="New contact submission from Kingdom Light" />
      <input type="hidden" name="_captcha" value="false" />
      <div>
        <label className="block text-sm uppercase tracking-[0.35em] text-gold/70" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-3 w-full rounded-3xl border border-white/10 bg-black/80 px-5 py-4 text-white outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-sm uppercase tracking-[0.35em] text-gold/70" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-3 w-full rounded-3xl border border-white/10 bg-black/80 px-5 py-4 text-white outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm uppercase tracking-[0.35em] text-gold/70" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-3 w-full rounded-3xl border border-white/10 bg-black/80 px-5 py-4 text-white outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/10"
          placeholder="Share your prayer request, ministry inquiry, or partnership interest."
        />
      </div>
      <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#c8a55d]">
        Send Message
      </button>
    </form>
  );
}
