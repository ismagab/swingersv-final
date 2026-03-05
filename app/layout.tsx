import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { getAllEventsForSchema } from '@/data/events'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: {
    default: 'SwingerSV — Comunidad Swinger en El Salvador | De Parejas Para Parejas',
    template: '%s | SwingerSV',
  },
  description:
    'SwingerSV es la comunidad swinger más exclusiva de El Salvador. Fiestas swinger privadas en San Salvador y La Libertad para parejas, tríos, HotWife, unicornios y lifestyle. Validación discreta. De parejas para parejas.',
  keywords: [
    'SwingerSV','swinger El Salvador','comunidad swinger El Salvador',
    'fiestas swinger El Salvador','fiestas swinger San Salvador','swinger San Salvador',
    'parejas liberales El Salvador','tríos El Salvador','HotWife El Salvador',
    'cuckold El Salvador','unicornios El Salvador','GangBang El Salvador',
    'orgías El Salvador','lifestyle El Salvador','SDC El Salvador',
    'fiestas privadas San Salvador','eventos swinger La Libertad',
    'pool party swinger El Salvador','Isma y Gab SwingerSV','hosts swinger El Salvador',
  ],
  authors: [{ name: 'SwingerSV', url: 'https://www.swingersv.com' }],
  creator: 'SwingerSV',
  publisher: 'SwingerSV',
  metadataBase: new URL('https://www.swingersv.com'),
  alternates: { canonical: 'https://www.swingersv.com' },
  openGraph: {
    type: 'website',
    locale: 'es_SV',
    url: 'https://www.swingersv.com',
    siteName: 'SwingerSV',
    title: 'SwingerSV — Comunidad Swinger en El Salvador | De Parejas Para Parejas',
    description:
      'La comunidad swinger más exclusiva y discreta de El Salvador. Fiestas privadas, tríos, HotWife, unicornios y lifestyle en San Salvador y La Libertad.',
    images: [{
      url: 'https://www.swingersv.com/images/og-image.jpg',
      width: 1200, height: 630,
      alt: 'SwingerSV - De Parejas Para Parejas',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swinger_sv',
    creator: '@swinger_sv',
    title: 'SwingerSV — Comunidad Swinger en El Salvador',
    description: 'Fiestas swinger privadas en San Salvador y La Libertad. Tríos, HotWife, unicornios y lifestyle.',
    images: ['https://www.swingersv.com/images/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: { icon: '/images/logo.png', shortcut: '/images/logo.png', apple: '/images/logo.png' },
  category: 'adult lifestyle',
}

export const viewport: Viewport = { themeColor: '#0A0A0A', userScalable: true }

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SwingerSV',
  url: 'https://www.swingersv.com',
  logo: 'https://www.swingersv.com/images/logo.png',
  description: 'Comunidad swinger en El Salvador. Fiestas privadas y exclusivas para parejas en San Salvador y La Libertad.',
  sameAs: ['https://x.com/swinger_sv', 'https://www.atom.bio/ismagab'],
  areaServed: { '@type': 'Country', name: 'El Salvador' },
}

const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SwingerSV',
  url: 'https://www.swingersv.com',
  description: 'La comunidad swinger más exclusiva y discreta de El Salvador. De parejas para parejas.',
  inLanguage: 'es',
}

const schemaEvents = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Próximas Fiestas Swinger en El Salvador — SwingerSV',
  url: 'https://www.swingersv.com/#events',
  itemListElement: getAllEventsForSchema(),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_playfair.variable}`}>
      <head>
        <Script id="schema-organization" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
          strategy="beforeInteractive" />
        <Script id="schema-website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
          strategy="beforeInteractive" />
        <Script id="schema-events" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaEvents) }}
          strategy="beforeInteractive" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
