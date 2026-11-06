import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
})

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
      <body className={plusJakartaSans.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
