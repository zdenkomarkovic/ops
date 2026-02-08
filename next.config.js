/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Sve slike su već optimizovane u WebP formatu
    // Smanjuje broj Vercel Image Optimization transformacija
    formats: ['image/webp'],

    // Opciono: Potpuno disejblujte Image Optimization za još veću uštedu
    // unoptimized: true,

    // Dozvoljene veličine slika (dodajte samo one koje koristite)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
