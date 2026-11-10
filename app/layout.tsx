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
  title: {
    default: 'Mass ParentCorps | A statewide movement for parent leadership',
    template: '%s | Mass ParentCorps',
  },
  description:
    'Mass ParentCorps is a statewide movement to recognize, elevate, and invest in parent leadership in Massachusetts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-ink focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
