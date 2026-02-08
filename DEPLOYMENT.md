# Deployment Guide

## Vercel Deployment (Preporučeno)

1. Napravite GitHub repository i pushujte kod
2. Idite na [vercel.com](https://vercel.com)
3. Kliknite "Import Project"
4. Selektujte vaš GitHub repository
5. Vercel će automatski detektovati Next.js i deployovati

## Netlify Deployment

1. Napravite GitHub repository i pushujte kod
2. Idite na [netlify.com](https://netlify.com)
3. Kliknite "New site from Git"
4. Selektujte vaš repository
5. Build command: `npm run build`
6. Publish directory: `.next`

## Pre deployment checklist

- [ ] Dodati pravi logo u `public/images/logo.png`
- [ ] Dodati fotografiju predsednice u `public/images/president.jpg`
- [ ] Proveriti sve kontakt informacije
- [ ] Testirati sajt na različitim uređajima (desktop, tablet, mobile)
- [ ] Proveriti sve linkove
- [ ] Optimizovati slike (kompresija)
- [ ] Testirati navigaciju
- [ ] Proveriti SEO metadata u `src/app/layout.tsx`

## Domain setup

Nakon deploymenta, možete povezati vlastiti domen kroz Vercel ili Netlify panel.
