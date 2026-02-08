# OPS Website - Implementaciona checklist

## ✅ Završeno

### Tehnička implementacija
- [x] Next.js 14 projekat sa TypeScript
- [x] Tailwind CSS konfiguracija
- [x] React Icons instaliran
- [x] Font optimizacija (Inter)
- [x] Folder struktura kreirana
- [x] Build uspešan

### Komponente
- [x] Navigation.tsx - Sticky navigation sa mobile menu
- [x] Hero.tsx - Hero sekcija sa ključnom rečenicom
- [x] Mission.tsx - Misija i vizija
- [x] Approach.tsx - Pristup radu sa bullet points
- [x] WhyDifferent.tsx - Zašto smo drugačiji
- [x] Values.tsx - 5 osnovnih vrednosti
- [x] About.tsx - O udruženju
- [x] President.tsx - Predsednica sa expandable biografijom
- [x] Education.tsx - Edukacija i stručni razvoj
- [x] Contact.tsx - Kontakt informacije
- [x] Footer.tsx - Footer sa quick links

### Sadržaj
- [x] Sav dati tekst implementiran u `content.ts`
- [x] Naslovi i podnaslovi očuvani
- [x] Bullet points sa checkmark ikonama
- [x] Kontakt informacije tačne

### Design
- [x] Pastelne boje (primary blue, beige)
- [x] Čitljivi fontovi (Inter)
- [x] White space za čitljivost
- [x] Mobile responsive design
- [x] Smooth scroll navigacija

## 📝 Za korisnika

### Dodavanje slika
- [ ] Dodati logo u `public/images/logo.png`
- [ ] Dodati fotografiju predsednice u `public/images/president.jpg`
- [ ] (Opciono) Dodati dodatne slike za galeriju

### Ažuriranje komponenti za slike

Nakon dodavanja logo-a, ažurirati `Hero.tsx`:
```tsx
// Zameniti placeholder div sa:
<Image
  src="/images/logo.png"
  alt="OPS Logo"
  width={128}
  height={128}
  className="rounded-full"
/>
```

Nakon dodavanja fotografije predsednice, ažurirati `President.tsx`:
```tsx
// Zameniti placeholder div sa:
<Image
  src="/images/president.jpg"
  alt="Jelena Despotović"
  width={192}
  height={192}
  className="rounded-full object-cover"
/>
```

### Testiranje
- [ ] Pokrenuti `npm run dev`
- [ ] Otvoriti http://localhost:3000
- [ ] Testirati navigation (smooth scroll)
- [ ] Testirati mobile view
- [ ] Testirati sve sekcije
- [ ] Proveriti kontakt linkove (email, telefon)

### Deployment
- [ ] Kreirati GitHub repository
- [ ] Push kod na GitHub
- [ ] Deploy na Vercel ili Netlify
- [ ] Povezati domen (opciono)

## 📂 Važni fajlovi

- `src/constants/content.ts` - SVE tekstualne izmene ovde
- `src/components/` - Pojedinačne komponente
- `tailwind.config.ts` - Izmena boja
- `public/images/` - Dodavanje slika
- `src/app/layout.tsx` - SEO metadata

## 🚀 Komande

```bash
npm install        # Instalacija
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm start         # Production server
```

## ✨ Sve funkcionalnosti

1. ✅ Responsive design (desktop, tablet, mobile)
2. ✅ Smooth scroll navigacija
3. ✅ Mobile hamburger menu
4. ✅ Expandable biografija predsednice
5. ✅ Sve sekcije iz plana
6. ✅ Dati tekst netaknut
7. ✅ Kontakt informacije tačne
8. ✅ SEO optimizacija
9. ✅ Font optimizacija
10. ✅ Ready za slike
