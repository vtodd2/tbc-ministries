import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { CustomAmountGiving, DonationButtons, MonthlyGiving } from '../../components/DonationButtons';
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

export default function DonatePage({
  searchParams,
}: {
  searchParams: { status?: string; method?: string };
}) {
  const status = searchParams?.status;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Give"
          subtitle="Your generosity transforms lives and advances God's kingdom."
        />

        {status === 'success' && (
          <div className="mt-8 rounded-[1.5rem] border border-emerald-400/30 bg-emerald-400/10 p-5 text-center text-sm font-medium text-emerald-700">
            Thank you for your gift! A confirmation has been sent to your email.
          </div>
        )}
        {status === 'cancelled' && (
          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-100 p-5 text-center text-sm font-medium text-slate-700">
            Your donation was cancelled. No charge was made.
          </div>
        )}
        {status === 'error' && (
          <div className="mt-8 rounded-[1.5rem] border border-red-400/30 bg-red-400/10 p-5 text-center text-sm font-medium text-red-700">
            Something went wrong processing your gift. Please try again or contact us.
          </div>
        )}

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

                    <DonationButtons amount={Number(tier.value.replace(/[^0-9.]/g, ''))} label={tier.value} />
                  </div>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-100 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/70">Custom Amount</p>
                <div className="mt-4">
                  <CustomAmountGiving />
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
              <div className="mt-6">
                <MonthlyGiving />
              </div>
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
                  <p className="mt-1">Mail to: 3700 Preston Rd Suite 1522, Plano, TX 75093</p>
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
