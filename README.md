# OPS - Od prvog pokreta do prvog skoka

Sajt udruženja za podršku ranom razvoju deteta.

## Pokretanje projekta

1. Instalirajte dependencies:
```bash
npm install
```

2. Pokrenite development server:
```bash
npm run dev
```

3. Otvorite [http://localhost:3000](http://localhost:3000) u pretraživaču.

## Struktura projekta

```
ops/
├── public/
│   └── images/          # Ovde dodajte slike (logo, fotografije, galerija)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Homepage
│   │   └── globals.css  # Global styles
│   ├── components/      # Sve komponente
│   └── constants/
│       └── content.ts   # Sav tekstualni sadržaj
```

## Dodavanje slika

1. Dodajte logo u `public/images/logo.png`
2. Dodajte fotografiju predsednice u `public/images/president.jpg`
3. Sve dodatne slike dodajte u `public/images/` folder

Nakon dodavanja slika, ažurirajte komponente da koriste prave slike umesto placeholder-a.

## Prilagođavanje

- **Tekstualni sadržaj**: `src/constants/content.ts`
- **Boje**: `tailwind.config.ts` (primary i beige paleta)
- **Komponente**: `src/components/`

## Build za produkciju

```bash
npm run build
npm start
```

## Kontakt informacije

- Email: vezbezabebe@gmail.com
- Telefon: +381603011147
