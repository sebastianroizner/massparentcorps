'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './ui'

const links = [
  { label: 'The Movement', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'The Pilot', href: '/impact' },
  { label: 'For Parents', href: '/for-parents' },
  { label: 'For Organizations', href: '/for-organizations' },
  { label: 'Invest', href: '/invest' },
  { label: 'News', href: '/news' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      {pathname === '/' && (
        <div className="bg-gold text-ink text-center text-[15px] leading-snug px-4 py-2.5">
          Elevating Parent Leadership: Lessons from Our First Cohort. Tuesday, November 17, 9:30 a.m., Urban
          College of Boston and online.{' '}
          <a
            href="https://forms.gle/SriwfVDiQMvBxqXZ7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold underline underline-offset-2"
          >
            RSVP
          </a>
        </div>
      )}
      <header className="sticky top-0 z-50 bg-white border-b border-tint-200">
        <nav aria-label="Main" className="mpc-container flex items-center justify-between gap-6 py-3">
          <Link href="/" aria-label="Mass ParentCorps, home" className="flex-none">
            <Logo height={44} />
          </Link>

          <ul className="hidden xl:flex items-center gap-6 m-0 p-0 list-none">
            {links.map((l) => {
              const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={`block py-2 text-[15px] font-bold text-ink hover:text-evergreen border-b-[3px] ${
                      active ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#join"
              className="hidden sm:inline-flex items-center min-h-[44px] px-6 rounded-full bg-evergreen text-white font-bold text-[15px] hover:bg-evergreen-light"
            >
              Join the Movement
            </Link>
            <button
              type="button"
              className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-evergreen hover:bg-tint-100"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-menu" className="xl:hidden border-t border-tint-200 bg-white">
            <ul className="mpc-container py-3 m-0 list-none flex flex-col">
              {links.map((l) => {
                const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center min-h-[48px] text-[17px] font-bold border-b border-tint-100 ${
                        active ? 'text-evergreen' : 'text-ink'
                      }`}
                    >
                      {active && <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-gold mr-2.5" />}
                      {l.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-4 pb-2">
                <Link
                  href="/#join"
                  className="flex items-center justify-center min-h-[48px] rounded-full bg-evergreen text-white font-bold"
                >
                  Join the Movement
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
