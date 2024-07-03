import type { Metadata } from 'next'
import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-darkMode container mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
