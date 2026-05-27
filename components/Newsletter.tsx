export function Newsletter() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-black/80 p-8 shadow-glow sm:p-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Stay connected</p>
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Join our email list for sermon releases and ministry updates.
        </h2>
        <p className="max-w-2xl text-white/70">
          Receive devotional guidance, book launch alerts, and a weekly recap designed for growth, generosity, and spiritual clarity.
        </p>
      </div>
      <form action="https://formsubmit.co/your-email@example.com" method="POST" className="mt-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-gold focus:ring-4 focus:ring-gold/10"
        />
        <button type="submit" className="rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#c8a55d]">
          Subscribe
        </button>
      </form>
    </section>
  );
}
