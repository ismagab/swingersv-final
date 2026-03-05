import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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
    default: 'SwingerSV — Comunidad Swinger en El Salvador | De Parejas Para Parejas',
    template: '%s | SwingerSV',
  },
  description:
    'SwingerSV es la comunidad swinger más exclusiva de El Salvador. Fiestas swinger privadas en San Salvador y La Libertad para parejas, tríos, HotWife, unicornios y lifestyle. Validación discreta. De parejas para parejas.',
  keywords: [
    'SwingerSV',
    'swinger El Salvador',
    'comunidad swinger El Salvador',
    'fiestas swinger El Salvador',
    'fiestas swinger San Salvador',
    'swinger San Salvador',
    'parejas liberales El Salvador',
    'tríos El Salvador',
    'HotWife El Salvador',
    'cuckold El Salvador',
    'cornudos El Salvador',
    'unicornios El Salvador',
    'GangBang El Salvador',
    'orgías El Salvador',
    'lifestyle El Salvador',
    'SDC El Salvador',
    'fiestas para parejas El Salvador',
    'comunidad lifestyle El Salvador',
    'swinger Centroamérica',
    'fiestas privadas San Salvador',
    'eventos swinger La Libertad',
    'swinger Colonia Escalón',
    'pool party swinger El Salvador',
    'Isma y Gab SwingerSV',
    'hosts swinger El Salvador',
  ],
  authors: [{ name: 'SwingerSV', url: 'https://www.swingersv.com' }],
  creator: 'SwingerSV',
  publisher: 'SwingerSV',
  metadataBase: new URL('https://www.swingersv.com'),
  alternates: {
    canonical: 'https://www.swingersv.com',
  },
  openGraph: {
    type: 'website',
    locale: 'es_SV',
    url: 'https://www.swingersv.com',
    siteName: 'SwingerSV',
    title: 'SwingerSV — Comunidad Swinger en El Salvador | De Parejas Para Parejas',
    description:
      'La comunidad swinger más exclusiva y discreta de El Salvador. Fiestas privadas, tríos, HotWife, unicornios y lifestyle en San Salvador y La Libertad. Validación discreta garantizada.',
    images: [
      {
        url: 'https://www.swingersv.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'SwingerSV - De Parejas Para Parejas — Comunidad Swinger en El Salvador',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swinger_sv',
    creator: '@swinger_sv',
    title: 'SwingerSV — Comunidad Swinger en El Salvador',
    description:
      'Fiestas swinger privadas en San Salvador y La Libertad. Tríos, HotWife, unicornios y lifestyle. De parejas para parejas.',
    images: ['https://www.swingersv.com/images/logo.png'],
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
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  category: 'adult lifestyle',
  verification: {
    // Pega aquí tu código de Google Search Console si lo necesitas
    // google: 'TU_CODIGO_AQUI',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  userScalable: true,
}

// Schema Markup — JSON-LD para Google
const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SwingerSV',
  url: 'https://www.swingersv.com',
  logo: 'https://www.swingersv.com/images/logo.png',
  description:
    'Comunidad swinger en El Salvador. Fiestas privadas y exclusivas para parejas en San Salvador y La Libertad.',
  sameAs: ['https://x.com/swinger_sv', 'https://www.atom.bio/ismagab'],
  areaServed: {
    '@type': 'Country',
    name: 'El Salvador',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
}

const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SwingerSV',
  url: 'https://www.swingersv.com',
  description:
    'La comunidad swinger más exclusiva y discreta de El Salvador. De parejas para parejas.',
  inLanguage: 'es',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.swingersv.com/#events',
    'query-input': 'required name=search_term_string',
  },
}

const schemaEvents = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Próximas Fiestas Swinger en El Salvador — SwingerSV',
  description: 'Eventos exclusivos para parejas en San Salvador y La Libertad',
  url: 'https://www.swingersv.com/#events',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Event',
        name: 'Entre Chicas — Reunión de Esposas celebrando el Día de la Mujer',
        startDate: '2026-03-07T20:00:00-06:00',
        endDate: '2026-03-08T02:00:00-06:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'San Salvador (ubicación confidencial)',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'San Salvador',
            addressCountry: 'SV',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'SwingerSV',
          url: 'https://www.swingersv.com',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://wa.me/50369207547',
        },
        description:
          'Reunión exclusiva para esposas celebrando el día de la mujer. Evento organizado por SwingerSV en San Salvador.',
        image: 'https://www.swingersv.com/images/logo.png',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Event',
        name: 'Fiesta Disco SwingerSV',
        startDate: '2026-03-21T20:00:00-06:00',
        endDate: '2026-03-22T02:00:00-06:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Colonia Escalón, San Salvador',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'San Salvador',
            addressRegion: 'Colonia Escalón',
            addressCountry: 'SV',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'SwingerSV',
          url: 'https://www.swingersv.com',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/LimitedAvailability',
          url: 'https://wa.me/50369207547',
        },
        description:
          'Fiesta Disco exclusiva organizada por SwingerSV en Colonia Escalón, San Salvador. Cupos limitados para parejas validadas.',
        image: 'https://www.swingersv.com/images/logo.png',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Event',
        name: 'Evento Pool Party SwingerSV',
        startDate: '2026-04-18T17:00:00-06:00',
        endDate: '2026-04-19T02:00:00-06:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Playa San Diego, La Libertad',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'La Libertad',
            addressCountry: 'SV',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'SwingerSV',
          url: 'https://www.swingersv.com',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/LimitedAvailability',
          url: 'https://wa.me/50369207547',
        },
        description:
          'Pool Party exclusiva en Playa San Diego, La Libertad. Evento swinger organizado por SwingerSV. Cupos limitados.',
        image: 'https://www.swingersv.com/images/logo.png',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_playfair.variable}`}>
      <head>
        {/* Schema Markup — Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
          strategy="beforeInteractive"
        />
        {/* Schema Markup — Website */}
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
          strategy="beforeInteractive"
        />
        {/* Schema Markup — Events */}
        <Script
          id="schema-events"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaEvents) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
