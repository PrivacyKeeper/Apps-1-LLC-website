import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Apps 1, LLC',
    template: '%s | Apps 1, LLC',
  },
  description:
    'Apps 1, LLC is a software holding and publishing company behind BarrelConnect and BullRider.',
  metadataBase: new URL('https://www.apps1llc.com'),
  openGraph: {
    siteName: 'Apps 1, LLC',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
