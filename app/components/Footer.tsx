import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-16" style={{ background: '#0C3B38', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ background: '#F0DC9A', color: '#0C3B38' }}
              >
                MPC
              </div>
              <span className="font-bold text-lg" style={{ color: '#F0DC9A' }}>Mass ParentCorps</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Building workforce pathways for parent leaders — a statewide initiative
              across Massachusetts.
            </p>
            <div className="mt-6 text-xs font-medium" style={{ color: '#2EC4B6' }}>
              Pilot Now Open — June 2026
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-sm mb-4 text-white">Navigate</div>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'The Initiative', href: '/about' },
                { label: 'Pilot Program', href: '/impact' },
                { label: 'For Parents', href: '/for-parents' },
                { label: 'For Agencies', href: '/for-agencies' },
                { label: 'News & Updates', href: '/news' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program elements */}
          <div>
            <div className="font-semibold text-sm mb-4 text-white">The Program</div>
            <ul className="space-y-2">
              {[
                'College Credit Course (3–9 credits)',
                'Leadership Experience (60 hrs)',
                'Leadership Training (8 hrs)',
                'Applied Learning Project',
                'Community Learning Sessions',
                'Evaluations & Graduation',
              ].map((s) => (
                <li key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-sm mb-4 text-white">Contact</div>
            <div className="space-y-1">
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Magda Rodriguez
              </div>
              <a
                href="mailto:mpc@massparentcorps.org"
                className="text-sm transition-colors"
                style={{ color: '#2EC4B6' }}
              >
                mpc@massparentcorps.org
              </a>
              <div className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Massachusetts
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2026 Mass ParentCorps. All rights reserved.
          </div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Serving families across the Commonwealth of Massachusetts
          </div>
        </div>
      </div>
    </footer>
  )
}
