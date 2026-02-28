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
              Transforming Communities by Elevating Parent Leadership — a statewide initiative
              across Massachusetts.
            </p>
            <div className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Launching 2026
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-sm mb-4 text-white">Navigate</div>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'The Credential', href: '/#credential' },
                { label: 'Impact', href: '/impact' },
                { label: 'News', href: '/news' },
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

          {/* Credential elements */}
          <div>
            <div className="font-semibold text-sm mb-4 text-white">The Credential</div>
            <ul className="space-y-2">
              {[
                'College Course (2 Credits)',
                'Field Experience (60 hrs)',
                'Specialized Training (10 hrs)',
                'Capstone Project',
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
                href="mailto:marostrategies@gmail.com"
                className="text-sm transition-colors"
                style={{ color: '#2EC4B6' }}
              >
                marostrategies@gmail.com
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
