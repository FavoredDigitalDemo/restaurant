import type { Metadata, Viewport } from 'next'
import { Source_Sans_3, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'
import './globals.css'

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Restaurant | Fine Dining Experience',
  description: 'Experience exceptional cuisine in a warm, inviting atmosphere. Order online or reserve your table today.',
}

export const viewport: Viewport = {
  themeColor: '#B45309',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${libreBaskerville.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
