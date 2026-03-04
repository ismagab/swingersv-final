import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default:
      'SwingerSV — Comunidad Swinger en El Salvador | Fiestas Swinger, Trios, HotWife, Lifestyle',
    template: '%s | SwingerSV',
  },
  description:
    'SwingerSV es la comunidad swinger en El Salvador de parejas para parejas. Fiestas swinger, trios, HotWife, cuckold, cornudos, unicornios, GangBang, orgias y lifestyle en San Salvador y La Libertad. Eventos exclusivos y privados. SDC El Salvador.',
  keywords: [
    'SwingerSV',
    'swinger El Salvador',
    'comunidad swinger en El Salvador',
    'fiestas swinger El Salvador',
    'trios El Salvador',
    'HotWife El Salvador',
    'cuckold',
    'cornudos',
    'unicornios El Salvador',
    'GangBang El Salvador',
    'orgias El Salvador',
    'lifestyle El Salvador',
    'SDC El Salvador',
    'swinger San Salvador',
    'fiestas para parejas El Salvador',
    'comunidad lifestyle El Salvador',
    'parejas liberales El Salvador',
    'swinger Centroamerica',
    'fiestas privadas San Salvador',
    'eventos swinger La Libertad',
  ],
  authors: [{ name: 'SwingerSV' }],
  creator: 'SwingerSV',
  publisher: 'SwingerSV',
  metadataBase: new URL('https://swingersv.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_SV',
    url: 'https://swingersv.com',
    siteName: 'SwingerSV',
    title:
      'SwingerSV — Comunidad Swinger en El Salvador | De Parejas Para Parejas',
    description:
      'La comunidad swinger mas exclusiva de El Salvador. Fiestas privadas, trios, HotWife, cuckold, unicornios, lifestyle y mas. Eventos en San Salvador y La Libertad.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'SwingerSV - De Parejas Para Parejas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swinger_sv',
    creator: '@swinger_sv',
    title: 'SwingerSV — Comunidad Swinger en El Salvador',
    description:
      'Fiestas swinger, trios, HotWife, cuckold, unicornios, GangBang, orgias y lifestyle en El Salvador. De parejas para parejas.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  category: 'adult lifestyle',
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
