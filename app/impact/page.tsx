import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impact | Mass ParentCorps',
  description: 'Tracking the real-world impact of the Mass ParentCorps credential program.',
}

export default function ImpactPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHero />
      <CredentialMetrics />
      <OutcomesTracking />
      <CommunityReach />
      <DataCommitment />
    </div>
  )
}

// ─── PAGE HERO ─────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ bottom: '-10%', left: '20%', width: 700, height: 500, background: 'radial-gradient(circle, #2EC4B6 0%, transparent 70%)', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="absolute rounded-full" style={{ top: '-10%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, #F0DC9A 0%, transparent 70%)', opacity: 0.05, filter: 'blur(60px)' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Impact</span>
        <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
          Measuring what<br />
          <span style={{ color: 'white' }}>actually matters</span>
        </h1>
        <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Mass ParentCorps is committed to transparent impact tracking — from credentials earned
          to careers launched and communities strengthened. As the program launches in 2026, this
          page will grow with real data.
        </p>

        <div
          className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full"
          style={{ background: 'rgba(240,220,154,0.1)', border: '1px solid rgba(240,220,154,0.25)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#F0DC9A' }} />
          <span className="text-sm font-medium" style={{ color: '#F0DC9A' }}>
            Program launching 2026 — baseline data in progress
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── CREDENTIAL METRICS ────────────────────────────────────────────────────

function CredentialMetrics() {
  const metrics = [
    {
      label: 'Credentials Issued',
      current: 0,
      target: 30,
      unit: '',
      description: 'Parent leaders who have completed all four credential elements and received the MPC Parent Leadership Credential.',
      phase: 'Year 1 Target: 30',
    },
    {
      label: 'Currently Enrolled',
      current: 0,
      target: 40,
      unit: '',
      description: 'Parent leaders actively working toward their credential across all partner CBO sites.',
      phase: 'Year 1 Target: 40',
    },
    {
      label: 'Field Hours Logged',
      current: 0,
      target: 2400,
      unit: 'hrs',
      description: 'Total supervised field experience hours completed by program participants at partner CBOs.',
      phase: 'Year 1 Target: 2,400',
    },
    {
      label: 'College Credits Earned',
      current: 0,
      target: 60,
      unit: '',
      description: 'Academic credits earned by parent leaders through partnering Massachusetts community colleges.',
      phase: 'Year 1 Target: 60',
    },
  ]

  return (
    <section className="pt-16 pb-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Credential Metrics</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            Credential progress
          </h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: '#4B5563' }}>
            Tracking enrollment, completion, and academic achievement across the MPC program.
            Year 1 targets are set; actuals will populate as the cohort progresses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-white"
              style={{ border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm font-semibold mb-1" style={{ color: '#6B7280' }}>{m.label}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold" style={{ color: '#0C3B38' }}>
                      {m.current.toLocaleString()}{m.unit}
                    </span>
                    <span className="text-lg" style={{ color: '#9CA3AF' }}>
                      / {m.target.toLocaleString()}{m.unit}
                    </span>
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'rgba(46,196,182,0.12)', color: '#1A6B63' }}
                >
                  {m.phase}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: m.current === 0 ? '2px' : `${(m.current / m.target) * 100}%`,
                      background: 'linear-gradient(to right, #2EC4B6, #0C3B38)',
                    }}
                  />
                </div>
                <div className="mt-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                  {m.current === 0 ? 'Launching 2026' : `${Math.round((m.current / m.target) * 100)}% of target`}
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── OUTCOMES TRACKING ─────────────────────────────────────────────────────

function OutcomesTracking() {
  const outcomes = [
    {
      icon: '💼',
      category: 'Workforce Outcomes',
      metrics: [
        { label: 'Placed in paid CBO roles', current: 0, target: 20 },
        { label: 'Moved from volunteer to paid', current: 0, target: 15 },
        { label: 'Pursuing further education', current: 0, target: 10 },
      ],
    },
    {
      icon: '🏢',
      category: 'CBO Capacity',
      metrics: [
        { label: 'Partner CBOs enrolled', current: 5, target: 10 },
        { label: 'New parent leader roles created', current: 0, target: 20 },
        { label: 'Organizations using MPC curriculum', current: 0, target: 8 },
      ],
    },
    {
      icon: '🌐',
      category: 'Community Reach',
      metrics: [
        { label: 'Families reached through parent leaders', current: 0, target: 500 },
        { label: 'Languages served', current: 2, target: 5 },
        { label: 'Massachusetts counties represented', current: 0, target: 6 },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Outcomes</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            Beyond the credential
          </h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: '#4B5563' }}>
            The MPC credential is a milestone, not the finish line. We track what happens after —
            in families, CBOs, and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {outcomes.map((category, i) => (
            <div
              key={i}
              className="rounded-2xl p-8"
              style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.12)' }}
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="font-bold text-lg mb-6" style={{ color: '#0C3B38' }}>{category.category}</h3>
              <div className="space-y-5">
                {category.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm" style={{ color: '#4B5563' }}>{m.label}</span>
                      <span className="text-sm font-bold" style={{ color: '#0C3B38' }}>
                        {m.current} <span style={{ color: '#9CA3AF', fontWeight: 400 }}>/ {m.target.toLocaleString()}</span>
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.08)' }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: m.current === 0 ? '1%' : `${Math.min((m.current / m.target) * 100, 100)}%`,
                          background: '#2EC4B6',
                          opacity: m.current === 0 ? 0.3 : 1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── COMMUNITY REACH ───────────────────────────────────────────────────────

function CommunityReach() {
  const cbos = [
    { name: 'Partner CBO 1', location: 'Greater Boston', status: 'Active partner' },
    { name: 'Partner CBO 2', location: 'Springfield area', status: 'Active partner' },
    { name: 'Partner CBO 3', location: 'Worcester area', status: 'Active partner' },
    { name: 'Partner CBO 4', location: 'Lowell area', status: 'Active partner' },
    { name: 'Partner CBO 5', location: 'Southeast MA', status: 'Active partner' },
  ]

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="absolute rounded-full pointer-events-none" style={{ top: '50%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(46,196,182,0.1) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translateY(-50%)' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Partner Network</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#F0DC9A' }}>
            Where MPC is active
          </h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Five partner CBOs form the foundation of the MPC network, with plans to expand
            statewide. Partner names will be updated as organizations go public with their involvement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cbos.map((cbo, i) => (
            <div
              key={i}
              className="rounded-xl px-6 py-5 flex items-center justify-between"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}
            >
              <div>
                <div className="font-semibold text-sm" style={{ color: 'white' }}>{cbo.name}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{cbo.location}</div>
              </div>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-3"
                style={{ background: 'rgba(46,196,182,0.2)', color: '#2EC4B6' }}
              >
                {cbo.status}
              </span>
            </div>
          ))}

          {/* Expand card */}
          <div
            className="rounded-xl px-6 py-5 flex items-center gap-4"
            style={{ background: 'rgba(240,220,154,0.06)', border: '1px dashed rgba(240,220,154,0.25)' }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(240,220,154,0.15)' }}>
              <svg className="w-4 h-4" style={{ color: '#F0DC9A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm" style={{ color: '#F0DC9A' }}>Become a partner CBO</div>
              <a href="mailto:marostrategies@gmail.com" className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                marostrategies@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── DATA COMMITMENT ───────────────────────────────────────────────────────

function DataCommitment() {
  const principles = [
    {
      icon: '🔓',
      title: 'Transparent by default',
      desc: 'MPC publishes program data openly. We believe accountability to the community requires radical transparency about what we measure and how.',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Parent-informed metrics',
      desc: 'The metrics on this page were shaped by focus group participants. We only track what parent leaders told us matters — not just what funders want to see.',
    },
    {
      icon: '🔄',
      title: 'Updated regularly',
      desc: 'Impact data will be updated quarterly once the program launches. Every number here is tied to a real person\'s journey, not just a statistic.',
    },
    {
      icon: '🛡️',
      title: 'Privacy protected',
      desc: 'Aggregate data only. Individual participant data is never shared without explicit consent. MPC adheres to community-based participatory research standards.',
    },
  ]

  return (
    <section className="py-24" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Our Commitment</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            How we measure impact
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {principles.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-white"
              style={{ border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#0C3B38' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: '#0C3B38' }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#F0DC9A' }}>
              Want to partner on impact measurement?
            </h3>
            <p className="text-base leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              MPC is looking for research partners, evaluators, and data collaborators to build
              a rigorous, community-centered impact framework.
            </p>
          </div>
          <a
            href="mailto:marostrategies@gmail.com?subject=Impact Measurement Partnership"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm"
            style={{ background: '#F0DC9A', color: '#0C3B38' }}
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  )
}
