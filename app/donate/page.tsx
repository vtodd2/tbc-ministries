import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import type { DonationTier } from '../../types';

export const metadata: Metadata = {
  title: 'Give | Transformed Believers Church',
  description:
    'Support TBC Ministries through secure online giving. Your generosity funds outreach, discipleship programs, and kingdom-building initiatives.',
};

const tiers: DonationTier[] = [
  {
    label: 'Seed',
    value: '$25',
    description: 'Plants a seed of faith — covers weekly devotional resources and prayer materials for one family.',
    impact: 'Prayer packets & resources',
  },
  {
    label: 'Growth',
    value: '$75',
    description: 'Fuels community outreach events, local mission work, and small group curriculum.',
    impact: 'Community outreach',
    recommended: true,
  },
  {
    label: 'Kingdom',
    value: '$150',
    description: 'Supports ministry programs, leadership training, and new believer discipleship.',
    impact: 'Ministry programs',
  },
  {
    label: 'Legacy',
    value: '$500',
    description: 'Transforms generations — funds long-term missions, building projects, and media ministry expansion.',
    impact: 'Generational impact',
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Give"
          subtitle="Your generosity transforms lives and advances God's kingdom."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Giving tiers */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Choose a Gift Amount</p>
              <p className="mt-3 leading-7 text-slate-700">
                Every gift — no matter the size — is a step of faith that multiplies beyond what we can see.
                Your generosity is stewarded with prayer, accountability, and kingdom purpose.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {tiers.map((tier) => (
                  <div
                    key={tier.label}
                    className={`relative rounded-[1.5rem] border p-6 transition ${
                      tier.recommended
                        ? 'border-gold/40 bg-gold/5'
                        : 'border-slate-200 bg-slate-100 hover:border-slate-200'
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-3 left-5 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                        Most Popular
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gold/70">{tier.label}</p>
                        <p className="mt-2 text-3xl font-semibold text-slate-950">{tier.value}</p>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
                        {tier.impact}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-700">{tier.description}</p>

                    {/* Stripe placeholder */}
                    <button
                      type="button"
                      className="mt-5 w-full rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
                      aria-label={`Give ${tier.value} — Stripe payment`}
                    >
                      Give {tier.value} — Stripe
                    </button>
                    {/* PayPal placeholder */}
                    <button
                      type="button"
                      className="mt-2 w-full rounded-full border border-slate-200 bg-[#003087]/20 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#009cde] transition hover:border-[#009cde]/40"
                      aria-label={`Give ${tier.value} — PayPal`}
                    >
                      Give {tier.value} — PayPal
                    </button>
                  </div>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-100 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/70">Custom Amount</p>
                <div className="mt-4 flex gap-3">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      className="w-full rounded-full border border-slate-200 bg-white/95 py-3 pl-8 pr-5 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-gold focus:ring-4 focus:ring-gold/10"
                    />
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-gold-light"
                  >
                    Give
                  </button>
                </div>
              </div>
            </div>

            {/* Recurring giving */}
            <div className="rounded-[2rem] border border-gold/15 bg-gold/4 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Monthly Partnership</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">Become a Ministry Partner</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Monthly partners form the backbone of TBC&apos;s ministry. Your recurring gift
                enables us to plan, build, and sustain programs that transform lives year-round.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['$25/mo', '$50/mo', '$100/mo', '$250/mo'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className="rounded-full border border-gold/30 bg-gold/8 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold/15"
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
              >
                Set Up Monthly Giving
              </button>
            </div>
          </div>

          {/* Sidebar: transparency + info */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Why Give to TBC?</p>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                {[
                  'Every dollar is stewarded with accountability and prayer',
                  'Funds local outreach programs in our community',
                  'Supports global missions and partner ministries',
                  'Grows our media and discipleship platforms',
                  'Instant digital receipt sent to your email',
                  'Fully secure, encrypted payment processing',
                  'Cancel monthly giving at any time',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Other Ways to Give</p>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-950">Check / Money Order</p>
                  <p className="mt-1">Mail to: 1200 Horizon Ave, Suite 205, Atlanta, GA 30301</p>
                  <p>Payable to: Transformed Believers Church</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Zelle / Cash App</p>
                  <p className="mt-1">Contact us for giving details via secure transfer.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Legacy Giving / Estate</p>
                  <p className="mt-1">
                    For major gifts, planned giving, or estate considerations,{' '}
                    <Link href="/contact" className="text-gold underline underline-offset-4 hover:text-gold-light">
                      contact our team
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="text-xs text-slate-600">
                Transformed Believers Church is a registered 501(c)(3) nonprofit organization.
                All donations are tax-deductible to the extent permitted by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
