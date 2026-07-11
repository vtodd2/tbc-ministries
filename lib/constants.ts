export const SITE_NAME = 'Transformed Believers Church';
export const SITE_SHORT_NAME = 'TBC Ministries';
export const SITE_TAGLINE = 'Transformed by Grace. Built for Purpose.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.transformedbelieverschurch.org';
export const SITE_DESCRIPTION =
  'Transformed Believers Church — a luxury Christian ministry rooted in biblical truth, Spirit-led worship, and the transforming power of God\'s word.';

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'admin@tbcministries-us.org';
export const CONTACT_PHONE = '940-290-2143';
export const CONTACT_ADDRESS = '3700 Preston Rd Suite 1522, Plano, TX 75093';

export const SOCIAL = {
  facebook: 'https://www.facebook.com/profile.php?id=61592057720376',
  instagram: 'https://www.instagram.com/transformedbelievers/',
  youtube: 'https://www.youtube.com/@tbcministries-us',
  twitter: 'https://twitter.com/transformedbc',
  spotify: 'https://open.spotify.com/show/transformedbelieverschurch',
  apple: 'https://podcasts.apple.com/podcast/transformedbelieverschurch',
};

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Blog', href: '/blog' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Books', href: '/books' },
  { label: 'Community', href: '/community' },
  { label: 'Livestream', href: '/livestream' },
  { label: 'Prayer', href: '/prayer' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV = {
  ministry: [
    { label: 'About Us', href: '/about' },
    { label: 'Sermons', href: '/sermons' },
    { label: 'Blog', href: '/blog' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Livestream', href: '/livestream' },
  ],
  resources: [
    { label: 'Books & Resources', href: '/books' },
    { label: 'Community', href: '/community' },
    { label: 'Prayer Requests', href: '/prayer' },
    { label: 'Newsletter', href: '/#newsletter' },
  ],
  connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Give / Donate', href: '/donate' },
    { label: 'Facebook', href: SOCIAL.facebook },
    { label: 'Instagram', href: SOCIAL.instagram },
    { label: 'YouTube', href: SOCIAL.youtube },
  ],
};
