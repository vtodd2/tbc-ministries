import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import type { Book } from '../../types';

export const metadata: Metadata = {
  title: 'Books & Resources | Transformed Believers Church',
  description:
    'Shop Christian books and devotional resources from TBC Ministries. Biblical, practical, and designed to fuel your spiritual transformation.',
};

const books: Book[] = [
  {
    id: '1',
    title: 'Breaking Spiritual Curses: Spiritual Freedom For You and The Generations After You',
    description:
      'Breaking Spiritual Curses addresses the spiritual strongholds and generational patterns that can hinder believers from walking in God\'s purpose. Drawing from Scripture and personal experience, V. Lydell Todd offers biblical insight, prayer, and practical steps toward freedom through Jesus Christ. This powerful resource helps readers identify spiritual bondage, experience healing, and embrace God\'s restoration — breaking destructive cycles and leaving a legacy of faith for future generations.',
    price: '$14.99',
    badge: 'Bestseller',
    available: true,
    format: ['Paperback', 'eBook'],
    paypalUrl: 'https://www.paypal.com/ncp/payment/EFPUEXUCXTBLW',
    ebookUrl: 'https://toddgroupofms.gumroad.com/l/zmfap',
    coverImage: '/images/books/breaking-spiritual-curses.jpg',
  },
  {
    id: '2',
    title: 'The Stairway to Heaven Headed to Hell: The False Teachings Of The Church',
    description:
      'The Stairway to Heaven Headed to Hell is a bold call to examine faith through the lens of Scripture rather than tradition. Drawing on years of personal trials and biblical study, V. Lydell Todd challenges readers to test long-held beliefs and consider whether religious customs align with God\'s Word. Addressing topics such as tradition, worship, and salvation, this book encourages believers to seek truth with humility, courage, and discernment — an invitation to move beyond religious routine and pursue a deeper walk of obedience, faith, and freedom in Christ.',
    price: '$19.99',
    badge: 'Bestseller',
    available: true,
    format: ['Paperback', 'eBook'],
    paypalUrl: 'https://www.paypal.com/ncp/payment/SZBH4ZX7GFZF4',
    ebookUrl: 'https://toddgroupofms.gumroad.com/l/mhkmd',
    coverImage: '/images/books/stairway-to-heaven-headed-to-hell.jpg',
  },
  {
    id: '3',
    title: 'Breaking Spiritual Curses: Spiritual Freedom For You and The Generations After You — Volume Two',
    description:
      'If destructive patterns have echoed through your family for generations, you do not have to remain bound by them. Rooted in Scripture and personal testimony, this powerful book explores the spiritual impact of words, inherited bondage, and generational patterns — equipping believers to confront cycles of addiction, broken relationships, violence, poverty, and despair through faith in Jesus Christ. Inside, readers will find biblical insight, practical guidance, case studies, and targeted prayers designed to help identify destructive spiritual patterns, renounce negative confessions, and embrace God\'s promises of freedom and blessing. The past may have shaped your family\'s story — but it does not have to determine your future.',
    price: '$14.99',
    badge: 'New Release',
    available: true,
    format: ['Paperback'],
    paypalUrl: 'https://www.paypal.com/ncp/payment/BMJ6TUFZTLRAN',
    coverImage: '/images/books/breaking-spiritual-curses-vol-2.jpg',
  },
  {
    id: '4',
    title: '30-Day Devotional for Breaking Generational Curses and Reclaiming Identity',
    description:
      'Begin a 30-day journey toward spiritual freedom, healing, and a renewed family legacy. This companion devotional builds on the biblical principles of breaking generational bondage through the authority of Jesus Christ. Each daily reading offers a focused Scripture, practical reflection, declaration of faith, and prayer to help you confront destructive patterns and replace them with God\'s truth. Designed for personal prayer, quiet time, or small-group study, this devotional provides a daily pathway for believers seeking to break cycles of fear, addiction, broken relationships, despair, and negative confession. Your past does not have the final word — step into God\'s promises one day at a time.',
    price: '$14.99',
    available: true,
    format: ['Paperback'],
    paypalUrl: 'https://www.paypal.com/ncp/payment/EM9EBV276FM2G',
    coverImage: '/images/books/30-day-devotional.jpg',
  },
];

export default function BooksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeader
          title="Books & Resources"
          subtitle="Biblical resources crafted to fuel your spiritual transformation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.id}
              className="flex flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:border-gold/25 hover:bg-slate-100"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                {book.coverImage && (
                  <img
                    src={book.coverImage}
                    alt={`${book.title} — book cover`}
                    className="mx-auto w-44 shrink-0 rounded-xl border border-gold/20 shadow-glow sm:mx-0"
                  />
                )}
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold text-slate-950">{book.title}</h2>
                    {book.badge && (
                      <span className="shrink-0 rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
                        {book.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-500">by V. Lydell Todd</p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-700">{book.description}</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl font-semibold text-slate-950">{book.price}</span>
                  {book.format?.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {book.paypalUrl && (
                    <a
                      href={book.paypalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-gold-light"
                      aria-label={`Buy ${book.title} paperback with PayPal`}
                    >
                      Buy Paperback
                    </a>
                  )}
                  {book.ebookUrl && (
                    <a
                      href={book.ebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-gold/30 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold transition hover:border-gold hover:bg-gold/10"
                      aria-label={`Buy ${book.title} eBook`}
                    >
                      Buy eBook
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bulk / Ministry Orders */}
        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Ministry & Bulk Orders</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                Equip Your Church or Small Group
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                TBC books are available in bulk at discounted rates for churches, small groups,
                and ministry teams. We also offer signed copies, speaking event packages, and
                custom ministry bundles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-light"
              >
                Request Bulk Pricing
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:border-gold hover:text-gold"
              >
                Contact Book Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
