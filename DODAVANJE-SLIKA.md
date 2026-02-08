# Vodič za dodavanje slika

## Korak 1: Dodajte slike u public/images folder

Kopirajte svoje slike u `public/images/` folder:
- `logo.png` - Logo udruženja
- `president.jpg` - Fotografija predsednice
- (Druge slike po potrebi)

## Korak 2: Ažurirajte komponente

### Za Logo (Hero.tsx)

Otvorite `src/components/Hero.tsx` i pronađite liniju 18-22:

**ZAМЕНИТИ:**
```tsx
<div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
  <span className="text-4xl font-bold text-primary-600">OPS</span>
</div>
```

**SA:**
```tsx
<Image
  src="/images/logo.png"
  alt="OPS Logo"
  width={128}
  height={128}
  className="mx-auto"
/>
```

**I dodajte import na vrhu fajla:**
```tsx
import Image from 'next/image';
```

### Za fotografiju predsednice (President.tsx)

Otvorite `src/components/President.tsx` i pronađite liniju 19-23:

**ZAМЕНITI:**
```tsx
<div className="w-48 h-48 bg-gradient-to-br from-primary-200 to-beige-200 rounded-full flex items-center justify-center mx-auto">
  <span className="text-6xl font-bold text-primary-700">JD</span>
</div>
```

**SA:**
```tsx
<Image
  src="/images/president.jpg"
  alt="Jelena Despotović"
  width={192}
  height={192}
  className="rounded-full object-cover mx-auto shadow-lg"
/>
```

**I dodajte import na vrhu fajla:**
```tsx
import Image from 'next/image';
```

## Korak 3: Sačuvajte i testіrajte

1. Sačuvajte izmene
2. Ako dev server nije pokrenut, pokrenite `npm run dev`
3. Sajt će se automatski osvežiti
4. Proverite da li se slike pravilno prikazuju

## Optimizacija slika

Next.js automatski optimizuje slike, ali preporučujemo:
- Logo: PNG format, transparentan background, 512x512px
- Fotografija predsednice: JPG format, 800x800px minimum
- Kompresovati slike pre upload-a (koristi tinypng.com ili slično)

## Dodatne slike

Ako želite dodati galeriju ili druge slike:
1. Dodajte slike u `public/images/`
2. Koristite `next/image` komponentu za optimalan performance
3. Primer:
```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Opis slike"
  width={800}
  height={600}
/>
```
