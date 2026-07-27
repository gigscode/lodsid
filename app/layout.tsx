import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LodSid - Fullstack Developer & Designer',
  description: 'Premium portfolio showcasing innovative full-stack development and modern design. Available for freelance projects and collaborations.',
  generator: 'v0.app',
  keywords: 'fullstack developer, designer, web development, react, next.js, freelance',
  openGraph: {
    title: 'LodSid - Fullstack Developer & Designer',
    description: 'Premium portfolio with innovative projects and modern design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lodsid',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
