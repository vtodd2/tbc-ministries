import type { Metadata } from 'next';
import { SectionHeader } from '../../components/SectionHeader';
import { PrayerRequestForm } from '../../components/PrayerRequestForm';

export const metadata: Metadata = {
  title: 'Prayer Requests | Transformed Believers Church',
  description:
    'Submit a prayer request to TBC Ministries. Our dedicated prayer team intercedes for every request with faith, compassion, and Scripture.',
};

const howWePray = [
  {
    step: '01',
    title: 'We Receive Your Request',
    body: 'Every submission is read by a dedicated member of our prayer team — not automated. You are seen and heard.',
  },
  {
    step: '02',
    title: 'We Pray Specifically',
    body: 'Our team prays over your request with Scripture, faith, and specificity — calling on God by name for your situation.',
  },
  {
    step: '03',
    title: 'We Believe Together',
    body: 'We stand in agreement with you because where two or three gather in His name, He is present. Matthew 18:20.',
  },
  {
    step: '04',
    title: 'We Follow Up',
    body: 'If you shared your email, a prayer team member may reach out with encouragement and continued intercession.',
  },
];

const scriptures = [
  { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', ref: 'Philippians 4:6' },
  { text: 'The prayer of a righteous person is powerful and effective.', ref: 'James 5:16' },
  { text: 'Call to me and I will answer you and tell you great and unsearchable things you do not know.', ref: 'Jeremiah 33:3' },
];

export default function PrayerPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Prayer"
          subtitle="Share what's on your heart. We will lift you up in faith."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-7 rounded-[1.75rem] border border-gold/15 bg-gold/5 p-6">
              <p className="text-sm leading-7 text-slate-700">
                <span className="font-semibold text-slate-950">You are not alone.</span>{' '}
                Our prayer team reviews every submission and prays over each request with Scripture
                and faith. Submit anonymously or share your name — whatever feels right to you.
              </p>
            </div>
            <PrayerRequestForm />
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* How we pray */}
            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-glow">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">How We Pray</p>
              <div className="mt-7 space-y-6">
                {howWePray.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 text-sm font-semibold text-gold/60">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-950">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-700">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scripture */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70 mb-6">
                God&apos;s Promises on Prayer
              </p>
              <div className="space-y-5">
                {scriptures.map((s) => (
                  <blockquote key={s.ref} className="border-l-2 border-gold/30 pl-5">
                    <p className="text-sm leading-6 text-slate-950/65 italic">&ldquo;{s.text}&rdquo;</p>
                    <cite className="mt-2 block text-xs uppercase tracking-[0.2em] text-gold/55 not-italic">
                      — {s.ref}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </div>

            {/* Prayer wall placeholder */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Community Prayer Wall</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Our community prayer wall — where members share and pray for one another — is
                coming soon. Join our newsletter to be notified when it launches.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-950/15 text-xs"
                  >
                    ✦
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-slate-500">Prayer wall — coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
