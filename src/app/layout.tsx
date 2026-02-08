import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingShapes from '@/components/FloatingShapes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'OPS - Od prvog pokreta do prvog skoka',
  description: 'Udruženje za podršku ranom razvoju deteta. Pružamo podršku roditeljima i deci kroz emocionalno orijentisan pristup.',
  keywords: ['rani razvoj deteta', 'fizioterapija za bebe', 'podrška roditeljima', 'Bobath terapija', 'senzorna integracija'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <body className={inter.className}>
        {/* Global animated background */}
        <div className="fixed inset-0 pointer-events-none z-[1]">
          <FloatingShapes />
        </div>

        <div className="relative z-[2]">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
