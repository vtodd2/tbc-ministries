import './globals.css';
import type { Metadata } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.kingdomlightministry.org/#organization',
      name: 'Kingdom Light Ministry',
      url: 'https://www.kingdomlightministry.org',
      sameAs: [
        'https://www.facebook.com/kingdomlightministry',
        'https://www.instagram.com/kingdomlightministry',
        'https://www.youtube.com/kingdomlightministry',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'hello@kingdomlightministry.org',
          telephone: '+1-555-014-0825',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.kingdomlightministry.org/#website',
      url: 'https://www.kingdomlightministry.org',
      name: 'Kingdom Light Ministry',
      description: 'A luxury Christian ministry experience with sermons, book sales, donations, and community connection.',
      publisher: {
        '@id': 'https://www.kingdomlightministry.org/#organization',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kingdomlightministry.org/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.kingdomlightministry.org/about' },
        { '@type': 'ListItem', position: 3, name: 'Books', item: 'https://www.kingdomlightministry.org/books' },
        { '@type': 'ListItem', position: 4, name: 'Donate', item: 'https://www.kingdomlightministry.org/donate' },
        { '@type': 'ListItem', position: 5, name: 'Sermons', item: 'https://www.kingdomlightministry.org/sermons' },
        { '@type': 'ListItem', position: 6, name: 'Contact', item: 'https://www.kingdomlightministry.org/contact' },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Kingdom Light Ministry',
    template: '%s | Kingdom Light Ministry',
  },
  description:
    'A luxury Christian ministry experience with sermons, book sales, donations, and community connection.',
  metadataBase: new URL('https://www.kingdomlightministry.org'),
  keywords: [
    'Christian ministry',
    'sermons',
    'church resources',
    'Christian books',
    'donations',
    'faith community',
    'luxury ministry',
  ],
  authors: [{ name: 'Kingdom Light Ministry' }],
  themeColor: '#000000',
  openGraph: {
    title: 'Kingdom Light Ministry',
    description: 'Discover sermons, devotionals, books, and support for a luxury Christian ministry.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kingdom Light Ministry',
    url: 'https://www.kingdomlightministry.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingdom Light Ministry',
    description: 'Discover sermons, devotionals, books, and support for a luxury Christian ministry.',
    creator: '@KingdomLight',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="min-h-screen bg-brand-950 text-white selection:bg-gold/40 selection:text-black">
          <div className="bg-hero-glow absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
