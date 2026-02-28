import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mass ParentCorps | Transforming Communities by Elevating Parent Leadership',
  description: 'Mass ParentCorps is a collaborative backbone model dedicated to strengthening community-based organizations and advancing the leadership of parents across Massachusetts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
