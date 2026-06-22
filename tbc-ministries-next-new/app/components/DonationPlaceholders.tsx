export function DonationPlaceholders() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-white/6 bg-surface p-6">
        <h4 className="text-lg font-semibold text-slate-950">Stripe</h4>
        <p className="mt-2 text-slate-300">Placeholder for Stripe checkout integration.</p>
        <div className="mt-4">
          <button className="rounded-md bg-gold px-4 py-2 font-semibold text-black">Donate with Card</button>
        </div>
      </div>
      <div className="rounded-lg border border-white/6 bg-surface p-6">
        <h4 className="text-lg font-semibold text-slate-950">PayPal</h4>
        <p className="mt-2 text-slate-300">Placeholder for PayPal donation link.</p>
        <div className="mt-4">
          <button className="rounded-md bg-slate-100 px-4 py-2 font-semibold text-slate-950">Donate with PayPal</button>
        </div>
      </div>
    </div>
  );
}
