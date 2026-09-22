import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mass ParentCorps | Transforming Communities by Elevating Parent Leadership',
  description: 'Mass ParentCorps is a Massachusetts initiative building the statewide infrastructure for parent leadership — connecting parent leadership experience to academic learning, college credit, and career pathways across the Commonwealth.',
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
