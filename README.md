# Kingdom Light Ministry

A luxury Christian ministry website built with Next.js, TypeScript, and Tailwind CSS. Production-ready with comprehensive SEO, accessibility, security, and mobile optimization.

## ✨ Features

- **Modern Tech Stack**: Next.js 14.2.5, React 18.3, TypeScript, Tailwind CSS
- **Performance**: Static site generation with optimized images (WebP/AVIF)
- **SEO**: Complete schema markup, meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- **Accessibility**: WCAG 2.1 compliant, keyboard navigation, focus indicators, reduced motion support
- **Security**: Content Security Policy headers, XSS protection, secure form handling
- **Mobile First**: Responsive design with mobile hamburger menu and touch-friendly interface
- **Forms**: Validated contact and newsletter forms with real-time feedback
- **Error Handling**: Custom 404 and 500 error pages
- **Luxury Design**: Black and gold aesthetic with smooth animations

## Pages & Routes

- `/` - Home with hero, services overview, featured book
- `/about` - Mission, vision, and values
- `/books` - Books and resources catalog
- `/donate` - Giving tiers and donation information
- `/sermons` - Sermons and devotionals
- `/contact` - Contact form and information

## 🚀 Quick Start

### Installation

```bash
cd ~/christian-ministry-site
npm install
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm run export
# Output in ./out directory
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_FORM_EMAIL=hello@transformedbelieverschurch.org
```

### Update Important Information

1. **Social Links** - `components/SocialLinks.tsx`
   - Facebook, Instagram, YouTube URLs

2. **Contact Info** - `app/contact/page.tsx`
   - Email, phone, address

3. **Metadata** - `app/layout.tsx`
   - Organization name, description, social profiles

## 📋 Pre-Deployment Checklist

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete production checklist.

### Key Steps:
1. Configure environment variables
2. Update social media links
3. Verify contact information
4. Test all forms locally
5. Run build and export
6. Test in `./out` directory

## 🌐 Deployment Options

### Cloudflare Pages
```bash
npm run build
npm run export
# Deploy ./out folder
```

### Vercel
Connect via GitHub integration for automatic deployments.

### Self-Hosted
Copy `./out` directory to your web server.

## 📊 Performance & Quality

- **Lighthouse Score**: Targets 90+
- **Core Web Vitals**: Optimized
- **SEO Ready**: All best practices implemented
- **Accessibility**: WCAG 2.1 AA compliant
- **Security**: A+ security headers

## 🎨 Design System

### Colors
- **Primary**: Gold (#bfa369)
- **Background**: Black (#050505)
- **Text**: Light gray (#f6f2ec)

### Typography
- **Font**: Inter
- **Display**: 5xl-6xl
- **Body**: sm-lg

## 🛠 Technology Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.5
- **Animation**: Framer Motion 12.40.0
- **Linting**: ESLint 8.57.0

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run export       # Export static files
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔒 Security Features

- ✅ Content Security Policy headers
- ✅ XSS protection headers
- ✅ Clickjacking protection (X-Frame-Options)
- ✅ MIME type sniffing protection
- ✅ Referrer policy
- ✅ Form validation and sanitization
- ✅ HTTPS ready

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators visible
- ✅ Color contrast WCAG AA compliant
- ✅ Reduced motion preferences respected
- ✅ Skip-to-content link
- ✅ Screen reader friendly

## 📱 Mobile Optimization

- ✅ Responsive viewport meta tag
- ✅ Touch-friendly button sizes (min 44px)
- ✅ Mobile hamburger menu
- ✅ Optimized for all screen sizes
- ✅ Fast loading on mobile networks

## 🔍 SEO Features

- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Mobile-friendly

## 📞 Support

For updates or issues, check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide.

## 📄 License

© 2026 Transformed Believers Church. All rights reserved.

