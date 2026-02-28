'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'About', href: '/about' },
  { label: 'The Credential', href: '/#credential' },
  { label: 'Impact', href: '/impact' },
  { label: 'News', href: '/news' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: '#0C3B38', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: '#F0DC9A', color: '#0C3B38' }}
          >
            MPC
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: '#F0DC9A' }}>
            Mass ParentCorps
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.replace('/#', '/').split('#')[0]))
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: isActive ? '#F0DC9A' : 'rgba(255,255,255,0.7)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F0DC9A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#F0DC9A' : 'rgba(255,255,255,0.7)')}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="mailto:marostrategies@gmail.com"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={{ background: '#F0DC9A', color: '#0C3B38' }}
          >
            Get Involved
          </a>
        </div>
      </div>
    </nav>
  )
}
