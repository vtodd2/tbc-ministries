# Production Deployment Checklist

This document outlines all the steps to prepare your Kingdom Light Ministry website for production deployment.

## ✅ Configuration & Environment

- [x] Environment variables configured in `.env.local`
  - `NEXT_PUBLIC_FORM_EMAIL` - Email address for form submissions
  
- [x] Security headers configured in `next.config.js`
  - X-Content-Type-Options
  - X-Frame-Options
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy

- [x] Image optimization enabled (WebP/AVIF formats)

- [x] Static export configured for deployment

## ✅ SEO & Discoverability

- [x] Meta tags configured in `app/layout.tsx`
- [x] Structured schema data (JSON-LD) in layout
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags configured
- [x] `robots.ts` created with sitemap reference
- [x] `sitemap.ts` created with all routes
- [x] Canonical URLs supported

## ✅ Accessibility

- [x] Language attribute on `<html>` element
- [x] Skip-to-content link added
- [x] Focus indicators on all interactive elements
- [x] Form labels properly associated
- [x] `prefers-reduced-motion` support in animations
- [x] ARIA labels on icon buttons
- [x] Color contrast improvements
- [x] Semantic HTML structure

## ✅ Error Handling

- [x] 404 page (`app/not-found.tsx`)
- [x] 500 error page (`app/error.tsx`)
- [x] Form validation with user feedback
- [x] Error boundaries in place

## ✅ Forms & Submissions

- [x] Form validation implemented
- [x] Email endpoint uses environment variable
- [x] Success/error feedback components
- [x] CAPTCHA disabled (requires configuration for production)
- [x] Form submission via POST to FormSubmit.co

## ✅ Mobile & Responsive Design

- [x] Mobile hamburger menu implemented
- [x] Responsive navigation
- [x] Touch-friendly button sizes
- [x] Mobile viewport meta tags

## ✅ Performance

- [x] Next.js 14.2.5 with App Router
- [x] TypeScript strict mode
- [x] CSS minification via Tailwind
- [x] Static site generation for fast performance
- [x] Image optimization enabled

## 📋 Before Deployment

### 1. Environment Setup
```bash
# Create .env.production if needed
NEXT_PUBLIC_FORM_EMAIL=hello@kingdomlightministry.org
```

### 2. Build & Test Locally
```bash
npm run build
npm run export
# Test the build output in ./out directory
```

### 3. Social Links Verification
Update these URLs if they're not correct in `components/SocialLinks.tsx`:
- Facebook: `https://www.facebook.com/kingdomlightministry`
- Instagram: `https://www.instagram.com/kingdomlightministry`
- YouTube: `https://www.youtube.com/@kingdomlightministry`

### 4. Contact Information
Verify these in `app/contact/page.tsx`:
- Email: `hello@kingdomlightministry.org`
- Phone: `+1 (555) 014-0825`
- Address: Update if needed

### 5. Deployment Options

#### Cloudflare Pages
```bash
npm run build
npm run export
# Deploy the ./out folder
```

#### Vercel
```bash
# Follow Vercel's GitHub integration
# Ensure build command: npm run build
# Output directory: out
```

#### GitHub Pages
```bash
npm run export
# Deploy ./out to gh-pages branch
```

### 6. Post-Deployment Verification

- [ ] Test all forms submit correctly
- [ ] Verify robots.txt is accessible: `/robots.txt`
- [ ] Verify sitemap.xml is accessible: `/sitemap.xml`
- [ ] Test 404 page by visiting non-existent URL
- [ ] Verify social links open correctly
- [ ] Test mobile menu on small screens
- [ ] Check Google Search Console setup
- [ ] Monitor Core Web Vitals with Lighthouse

### 7. Optional Enhancements

- [ ] Add Google Analytics: Update `next.public.ga_id` in `.env.local`
- [ ] Implement reCAPTCHA for forms (update `_captcha` setting)
- [ ] Add Sentry for error monitoring
- [ ] Set up email notifications for form submissions
- [ ] Add donation payment processor (Stripe/PayPal)

## 🚀 Deployment Command Examples

### Cloudflare Pages
```bash
npm run build
npm run export
# Deploy ./out directory
```

### Vercel (via GitHub)
Connected automatically if using Vercel's GitHub integration.

### Self-hosted
```bash
npm run build
npm run export
# Copy ./out to your server's public directory
```

## 📞 Support & Maintenance

- Monitor form submissions
- Keep dependencies updated: `npm update`
- Review error logs regularly
- Check Core Web Vitals monthly
- Update content as needed

---

**Last Updated:** May 27, 2026
