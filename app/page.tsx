'use client'

// Brand colors:
// Deep teal bg:   #0C3B38
// Accent mint:    #2EC4B6
// Cream/yellow:   #F0DC9A
// Light cream bg: #FBF7E8

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Hero />
      <WhereWeAre />
      <PilotSnapshot />
      <WhatMakesUnique />
      <FoundingPartners />
      <GetInvolved />
    </div>
  )
}

// ─── HERO ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Background photo */}
      <img
        src="/community-banner.jpg"
        alt="Community members together"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
      />

      {/* Teal overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(12,59,56,0.12) 0%, rgba(12,59,56,0.50) 100%)' }} />

      {/* Decorative overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative curve */}
        <svg
          className="absolute"
          style={{ top: 0, right: 0, width: '35%', opacity: 0.15 }}
          viewBox="0 0 400 400"
          fill="none"
        >
          <path d="M400 0 Q200 200 400 400" stroke="white" strokeWidth="1" />
          <path d="M420 0 Q220 200 420 400" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-24 w-full">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
              style={{ color: '#2EC4B6', borderColor: 'rgba(46,196,182,0.35)', background: 'rgba(46,196,182,0.06)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Statewide Initiative · Massachusetts · Launching 2026
            </span>
          </div>

          <h1
            className="text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.02] tracking-tight mb-8"
            style={{ color: '#F0DC9A' }}
          >
            Building Workforce<br />
            Pathways for<br />
            <span style={{ color: 'white' }}>Parent Leaders</span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-6"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Connecting parent leadership experience with college learning and workforce opportunities.
          </p>

          <p
            className="text-lg max-w-2xl leading-relaxed mb-12"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            Mass ParentCorps is a Massachusetts initiative that works in partnership with
            organizations that center parent leadership to advance opportunities for parent leaders
            across the state. By connecting parent leadership experience with academic learning
            and workforce preparation, the initiative aims to create pathways for parent leaders
            to transition into professional roles that strengthen programs, organizations, and
            communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/impact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              style={{ background: '#F0DC9A', color: '#0C3B38' }}
            >
              Learn About the Pilot
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-all border"
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}
            >
              About the Initiative
            </a>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
      </div>
    </section>
  )
}

// ─── WHERE WE ARE ───────────────────────────────────────────────────────────

function WhereWeAre() {
  return (
    <section id="where-we-are" className="pt-16 pb-28" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
              Where We Are Now
            </span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6" style={{ color: '#0C3B38' }}>
              From Needs Assessment to Pilot
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#4B5563' }}>
              Mass ParentCorps was developed in response to insights from parent leaders and
              organizations across Massachusetts who identified the need for stronger pathways
              connecting parent leadership with professional opportunities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Needs Assessment',
                  status: 'Completed',
                  statusColor: '#2EC4B6',
                  statusBg: 'rgba(46,196,182,0.12)',
                },
                {
                  phase: 'Phase 2',
                  title: 'Design, Implementation, and Evaluation',
                  status: 'In Progress',
                  statusColor: '#F0DC9A',
                  statusBg: 'rgba(240,220,154,0.15)',
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="rounded-2xl p-6"
                  style={{ background: 'white', border: '1px solid rgba(46,196,182,0.2)' }}
                >
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ background: item.statusBg, color: item.statusColor }}
                  >
                    {item.status}
                  </div>
                  <div className="font-bold text-xs tracking-widest uppercase mb-1" style={{ color: '#9CA3AF' }}>{item.phase}</div>
                  <div className="font-semibold" style={{ color: '#0C3B38' }}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PILOT SNAPSHOT ─────────────────────────────────────────────────────────

function PilotSnapshot() {
  const stats = [
    { number: '40+', label: 'Parent Leaders', sub: 'Across two cohorts' },
    { number: '10+', label: 'Organizations', sub: 'Represented statewide' },
    { number: '3', label: 'College Credits', sub: 'Community college course' },
    { number: '1', label: 'Evaluation Partner', sub: 'NYU Metro Center' },
  ]

  return (
    <section className="py-20" style={{ background: '#0C3B38' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
            Pilot Snapshot
          </span>
          <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#2EC4B6' }} />
          <p className="mt-6 text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            The Mass ParentCorps pilot will bring together parent leaders and organizations
            from across Massachusetts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center px-8 py-6"
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
            >
              <div className="text-6xl md:text-7xl font-bold mb-2" style={{ color: '#F0DC9A' }}>
                {s.number}
              </div>
              <div className="font-semibold text-white mb-1">{s.label}</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/impact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all"
            style={{ background: '#F0DC9A', color: '#0C3B38' }}
          >
            Explore the Pilot →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── WHAT MAKES MPC UNIQUE ──────────────────────────────────────────────────

function WhatMakesUnique() {
  const pillars = [
    {
      icon: '🤝',
      title: 'Collaborative Initiative',
      desc: 'Mass ParentCorps is being developed through collaboration with community-based organizations, parent leaders, community colleges, and governmental partners across Massachusetts. This collaborative approach helps ensure the model reflects community needs, workforce opportunities, and the experience of organizations that engage parents as leaders.',
    },
    {
      icon: '📜',
      title: 'Builds on a Strong History',
      desc: 'Massachusetts has a long history of initiatives that elevate parent leadership and family engagement, including Thrive in 5, Parent Partners, Parent University, and community-based programs across the state. Mass ParentCorps builds on this legacy while exploring new ways to connect parent leadership experience with workforce opportunities.',
    },
    {
      icon: '💼',
      title: 'Connects Leadership with Workforce Pathways',
      desc: 'Parent leaders bring valuable lived experience, community knowledge, and trusted relationships. Mass ParentCorps explores how this leadership experience can be recognized and connected to professional roles within organizations that partner with families and communities.',
    },
    {
      icon: '🎓',
      title: 'Partnership with Community Colleges',
      desc: 'Community colleges are collaborating to develop a 3-credit course that connects parent leadership experience with academic learning and workforce preparation.',
    },
    {
      icon: '🔬',
      title: 'Research and Evaluation Partnership',
      desc: 'The pilot will be evaluated in partnership with NYU Metro Center under the leadership of Joanna Geller. The evaluation will help document outcomes and inform future expansion of the model.',
    },
  ]

  return (
    <section id="unique" className="pt-16 pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
              What Makes MPC Unique
            </span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12" style={{ color: '#0C3B38' }}>
              Built differently,<br />by design
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8"
                  style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.12)' }}
                >
                  <div className="text-2xl mb-4">{p.icon}</div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#0C3B38' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOUNDING PARTNERS ──────────────────────────────────────────────────────

function FoundingPartners() {
  const partners = [
    'Families First',
    'Union Capital Boston',
    'East Boston Social Centers',
    'Family Nurturing Center of Massachusetts',
    'Vital Village Network',
  ]

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900, height: 500,
          background: 'radial-gradient(ellipse, rgba(46,196,182,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
            Founding Community Partners
          </span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'white' }}>
            Organizations that helped{' '}
            <span style={{ color: '#F0DC9A' }}>shape the vision</span>
          </h2>
          <p className="mt-6 text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The development of Mass ParentCorps has been supported by several community-based
            organizations that have long histories of engaging parents as leaders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {partners.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl px-6 py-5 flex items-center gap-4"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#2EC4B6' }} />
              <span className="font-medium" style={{ color: 'white' }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── GET INVOLVED ──────────────────────────────────────────────────────────

function GetInvolved() {
  const audiences = [
    'Community organizations that engage parents as leaders',
    'Community colleges and educators',
    'Government agencies',
    'Researchers and practitioners',
    'Parent leaders interested in future opportunities',
  ]

  return (
    <section className="py-28" style={{ background: '#FBF7E8' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
          Learn More
        </span>
        <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#2EC4B6' }} />

        <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#0C3B38' }}>
          Join the Mass<br />ParentCorps Initiative
        </h2>
        <p className="mt-6 text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
          Mass ParentCorps is currently in the pilot development phase. We welcome conversations
          with organizations, educators, researchers, community leaders, and public partners
          interested in learning more about the initiative.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 mb-12">
          {audiences.map((a, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'white', color: '#4B5563', border: '1px solid rgba(0,0,0,0.08)' }}
            >
              {a}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:marostrategies@gmail.com"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold"
            style={{ background: '#0C3B38', color: '#F0DC9A' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get in Touch
          </a>
          <a href="mailto:marostrategies@gmail.com" className="text-base font-medium" style={{ color: '#2EC4B6' }}>
            marostrategies@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
