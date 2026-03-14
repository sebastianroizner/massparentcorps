'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'The Initiative', href: '/about' },
  { label: 'Pilot Program', href: '/impact' },
  { label: 'News & Updates', href: '/news' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: '#0C3B38', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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

        {/* Mobile: hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: '#F0DC9A' }}
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Desktop: nav links + button */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(1).map((link) => {
            const isActive = pathname === link.href
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

      {/* Mobile menu dropdown */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: '#0C3B38', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b"
                style={{
                  color: pathname === link.href ? '#F0DC9A' : 'rgba(255,255,255,0.75)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:marostrategies@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: '#F0DC9A', color: '#0C3B38' }}
            >
              Get Involved
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
