import './globals.css'
import type { ReactNode } from 'react'
import { generalSans, notoSans } from '@/app/fonts'
import Footer from '@/components/custom/footer'

export const metadata = {
  title: 'Saumya Talwani',
  metadataBase: new URL(`https://me.techsaumya.in`),
  description:
    "Explore Saumya Talwani's portfolio: A passionate Computer Science student and skilled developer blending creativity and tech expertise to craft innovative web solutions.",
  authors: [{ name: 'Saumya Talwani', url: 'https://me.techsaumya.in/' }],
  generator: 'Next.js',
  creator: 'Saumya Talwani',
  keywords: [
    'next.js',
    'react',
    'javascript',
    'web developer',
    'portfolio',
    'saumya',
    'saumya talwani',
    'talwani',
  ],
  publisher: 'TechSaumya',
  openGraph: {
    title: "Saumya Talwani's Portfolio",
    description:
      "Explore Saumya Talwani's portfolio: A passionate Computer Science student and skilled developer blending creativity and tech expertise to craft innovative web solutions.",
    url: 'https://me.techsaumya.in/',
    siteName: "Saumya Talwani's Portfolio",
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/meta/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Saumya Talwani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saumya Talwani's Portfolio",
    description:
      "Explore Saumya Talwani's portfolio: A passionate Computer Science student and skilled developer blending creativity and tech expertise to craft innovative web solutions.",
    images: ['/meta/twitter-image.png'],
  },
  icons: {
    icon: [
      { url: '/meta/favicon.ico' },
      { url: '/meta/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/meta/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/meta/icon.png', type: 'image/png' },
    ],
    apple: '/meta/apple-touch-icon.png',
    shortcut: '/meta/favicon.ico',
  },

  manifest: '/meta/site.webmanifest',

  alternates: {
    canonical: `./`,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${generalSans.variable} ${notoSans.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
