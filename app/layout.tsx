import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL } from '../lib/constants';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Church',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.youtube, SOCIAL.twitter],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: CONTACT_EMAIL,
          telephone: CONTACT_PHONE,
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1200 Horizon Ave, Suite 205',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        postalCode: '30301',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/sermons?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Transformed by Grace`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'Transformed Believers Church',
    'TBC Ministries',
    'Christian ministry',
    'sermons',
    'Christian community',
    'faith',
    'worship',
    'biblical teaching',
    'Atlanta church',
    'online ministry',
    'Christian books',
    'prayer',
    'podcast',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: {
    title: `${SITE_NAME} | Transformed by Grace`,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Transformed by Grace`,
    description: SITE_DESCRIPTION,
    creator: '@transformedbc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TBC Ministries" />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative min-h-screen bg-[#f8f5ee] text-slate-950 selection:bg-gold/30 selection:text-black">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
          <div className="relative z-10">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
