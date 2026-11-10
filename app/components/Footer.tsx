import Link from 'next/link'
import { Logo } from './ui'

const cols = [
  {
    title: 'Explore',
    links: [
      { label: 'The Movement', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'The Pilot', href: '/impact' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Get involved',
    links: [
      { label: 'For Parents', href: '/for-parents' },
      { label: 'For Organizations', href: '/for-organizations' },
      { label: 'Invest', href: '/invest' },
      { label: 'Join the Movement', href: '/#join' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-evergreen text-white">
      <div className="mpc-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo light height={48} />
            <p className="mt-5 mb-0 text-ivory max-w-[22rem]">
              A statewide movement to recognize, elevate, and invest in parent leadership.
            </p>
            <p className="mt-4 mb-0 text-gold-light font-bold text-[15px]">
              Now in Phase 3: building statewide infrastructure.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h2 className="text-[15px] font-bold uppercase tracking-[0.08em] text-gold-light m-0 mb-4">{c.title}</h2>
              <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white hover:underline underline-offset-4">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-[15px] font-bold uppercase tracking-[0.08em] text-gold-light m-0 mb-4">Contact</h2>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              <li>
                <a href="mailto:mpc@massparentcorps.org" className="text-white underline underline-offset-4 break-all">
                  mpc@massparentcorps.org
                </a>
              </li>
              <li className="text-ivory">Boston, Massachusetts</li>
            </ul>
          </div>
        </div>

        <p className="mt-14 pt-8 mb-0 border-t border-white/15 text-[14px] text-ivory">
          © 2026 Mass ParentCorps. Serving families across the Commonwealth of Massachusetts.
        </p>
      </div>
    </footer>
  )
}
