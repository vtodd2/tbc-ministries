import { SectionHeader } from '../../components/SectionHeader';

export const metadata = {
  title: 'Donate | Kingdom Light Ministry',
  description: 'Give securely to Kingdom Light Ministry and support outreach, teaching, and community care.',
};

const tiers = [
  { label: 'Seed', value: '$25', description: 'Supports one prayer packet and devotional access.' },
  { label: 'Harvest', value: '$75', description: 'Funds sermon outreach and community engagement resources.' },
  { label: 'Legacy', value: '$250', description: 'Plants long-term ministry initiatives and training programs.' },
];

export default function DonatePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeader title="Donate" subtitle="Support Kingdom Light Ministry with secure, meaningful giving." />
      <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
        <div className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <p className="text-white/70 leading-8">
            Your generosity helps us create strong teaching, supply ministry resources, and cultivate growing communities around the globe. Every gift is stewarded with transparency, excellence, and prayer.
          </p>
          <div className="grid gap-6">
            {tiers.map((tier) => (
              <div key={tier.label} className="rounded-3xl border border-white/10 bg-black/80 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gold/80">{tier.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{tier.value}</p>
                  </div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">Give</span>
                </div>
                <p className="mt-4 text-white/70 leading-7">{tier.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-gold/20 bg-black/90 p-6 text-white/70">
            <p className="text-sm uppercase tracking-[0.35em] text-gold/80">Flexible Giving</p>
            <p className="mt-4 leading-7">
              For custom support, partnership commitments, or nonprofit collaborations, contact us directly so we can tailor a giving pathway that matches your ministry goals.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-black/80 p-10 text-white shadow-glow">
          <h3 className="text-2xl font-semibold">Secure Donation Details</h3>
          <ul className="mt-6 space-y-4 text-white/70 leading-7">
            <li>Payment processor: secure, encrypted checkout.</li>
            <li>Donation receipts sent instantly by email.</li>
            <li>Minimum gift options available for monthly support.</li>
          </ul>
          <p className="mt-8 text-white/75 leading-7">
            We recommend using a trusted payment partner. Once you donate, your contribution is stewarded with reverence and full accountability.
          </p>
        </div>
      </div>
    </section>
  );
}
