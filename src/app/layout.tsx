import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const siteUrl = 'https://udruzenjeops.rs';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OPS – Rani razvoj deteta i edukacija za fizioterapeute',
    template: '%s | OPS Udruženje',
  },
  description: 'Udruženje OPS posvećeno je podršci ranom razvoju deteta i edukaciji fizioterapeuta. Radimo na motornom razvoju, tretmanu tortikolisa, hipertonusa i hipotonusa kod beba i male dece.',
  keywords: [
    'rani razvoj',
    'rani razvoj deteta',
    'motorni razvoj',
    'edukacija za fizioterapeuta',
    'tortikolis',
    'hipertonus',
    'hipotonus',
    'fizioterapija za bebe',
    'Bobath terapija',
    'senzorna integracija',
    'rani razvoj beba',
    'fizioterapeut za bebe',
    'razvojne teškoće',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: siteUrl,
    siteName: 'OPS Udruženje',
    title: 'OPS – Rani razvoj deteta i edukacija za fizioterapeute',
    description: 'Udruženje OPS posvećeno je podršci ranom razvoju deteta i edukaciji fizioterapeuta. Motorni razvoj, tortikolis, hipertonus i hipotonus.',
    images: [
      {
        url: '/images/7.webp',
        width: 1200,
        height: 630,
        alt: 'OPS – Od prvog pokreta do prvog skoka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPS – Rani razvoj deteta i edukacija za fizioterapeute',
    description: 'Udruženje OPS posvećeno je podršci ranom razvoju deteta i edukaciji fizioterapeuta.',
    images: ['/images/7.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
