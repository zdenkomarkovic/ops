# Optimizacija slika - Uputstvo

## Zašto optimizujemo slike?

Vercel Image Optimization ima limit na broj transformacija mesečno. Velike neoptimizovane slike troše mnogo transformacija i usporavaju sajt.

## Rešenje

Koristimo **lokalno optimizovane WebP slike** umesto da se oslanjamo na Vercel transformacije.

### Rezultati optimizacije:

- **Ukupna veličina**: 78MB → 948KB (98.8% ušteda!)
- **Format**: JPEG/PNG → WebP
- **Rezolucija**: Maksimalno 1920px širine
- **Kvalitet**: 80%

### Pojedinačni rezultati:

| Slika         | Pre      | Posle   | Ušteda  |
|---------------|----------|---------|---------|
| 3.jpg         | 16.20MB  | 0.16MB  | 99.0%   |
| 4.jpg         | 14.43MB  | 0.07MB  | 99.5%   |
| 6.jpg         | 14.00MB  | 0.08MB  | 99.5%   |
| 7.jpg         | 11.40MB  | 0.08MB  | 99.3%   |
| 8.jpg         | 15.55MB  | 0.08MB  | 99.5%   |
| president.jpg | 1.58MB   | 0.07MB  | 95.8%   |

## Kako dodati nove slike?

### Metod 1: Automatska optimizacija (preporučeno)

1. Dodajte nove slike u `/public/images/`
2. Pokrenite: `npm run optimize-images`
3. Proverite optimizovane slike u `/public/images-optimized/`
4. Premestite ih u `/public/images/`
5. Obrišite originale
6. Ažurirajte kod da koristi `.webp` ekstenziju

### Metod 2: Ručna optimizacija

Koristite online alate kao:
- [Squoosh.app](https://squoosh.app/) (Google)
- [TinyPNG](https://tinypng.com/)
- [Optimizilla](https://imagecompressor.com/)

**Podešavanja:**
- Format: WebP
- Kvalitet: 80%
- Rezolucija: max 1920px

## Podešavanja

### next.config.js

```javascript
images: {
  formats: ['image/webp'], // Koristi samo WebP
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### Opcija: Potpuno disejblovanje Image Optimization

Ako želite potpuno da izbegnete Vercel Image Optimization, dodajte u `next.config.js`:

```javascript
images: {
  unoptimized: true,
}
```

**Napomena:** Ovo će koristiti slike direktno bez ikakve optimizacije, ali će potpuno eliminisati Vercel troškove.

## Provera optimizacije

Pre deploy-a, proverite:

```bash
# Veličinu slika
ls -lh public/images/

# Da li su sve WebP
ls public/images/*.webp

# Ukupnu veličinu
du -sh public/images/
```

## Backup

Stare slike su sačuvane u `/public/images-backup/` za slučaj da vam zatrebaju.
