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
      <Mission />
      <Stats />
      <Credential />
      <Voices />
      <ForWhom />
      <GetInvolved />
    </div>
  )
}

// ─── HERO ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: '#0C3B38' }}
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            top: '-15%', left: '-10%',
            width: 700, height: 700,
            background: 'radial-gradient(circle, #2EC4B6 0%, transparent 70%)',
            opacity: 0.12,
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '5%', right: '-8%',
            width: 500, height: 500,
            background: 'radial-gradient(circle, #7DD8D4 0%, transparent 70%)',
            opacity: 0.10,
            filter: 'blur(70px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '5%', left: '35%',
            width: 600, height: 400,
            background: 'radial-gradient(circle, #1A6B63 0%, transparent 70%)',
            opacity: 0.25,
            filter: 'blur(60px)',
          }}
        />
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

      <div className="relative max-w-7xl mx-auto px-6 pt-4 pb-24 w-full">
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
            Transforming<br />
            Communities<br />
            <span style={{ color: 'white' }}>by Elevating</span><br />
            <span style={{ color: 'white' }}>Parent Leadership</span>
          </h1>

          <p
            className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-12"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            A collaborative backbone model dedicated to strengthening community-based
            organizations and advancing the leadership of parents across Massachusetts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:marostrategies@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              style={{ background: '#F0DC9A', color: '#0C3B38' }}
            >
              Join the Movement
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-all border"
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero illustration */}
        <div className="absolute right-8 top-1/3 -translate-y-1/3 hidden xl:block">
          <img
            src="/hero-graphic-v3.png"
            alt="Three parent leaders climbing a staircase together"
            style={{ width: 420, height: 'auto' }}
          />
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

// ─── MISSION ───────────────────────────────────────────────────────────────

function Mission() {
  return (
    <section id="about" className="pt-16 pb-28" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
              Our Mission
            </span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <p className="text-3xl md:text-4xl font-semibold leading-snug mb-8" style={{ color: '#0C3B38' }}>
              Parents are already leaders in their families and communities.{' '}
              <span style={{ color: '#2EC4B6' }}>Our role is to help them build on their strengths,</span>{' '}
              deepen their skills, and expand their opportunities.
            </p>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#4B5563' }}>
              Mass ParentCorps is a collaborative backbone model dedicated to strengthening
              community-based organizations (CBOs) and advancing the leadership of parents.
              We do this through a structured pathway from training and certification to
              workforce placement — ensuring CBOs have access to skilled, motivated parent
              leaders who enhance service delivery, deepen community trust, and drive
              measurable outcomes.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🎓', label: 'Education & Training', desc: '6–12 month program with classes aligned to CBO and community needs' },
                { icon: '📜', label: 'Certification', desc: 'Credentials and college credit that open career doors' },
                { icon: '🤝', label: 'Workforce Placement', desc: 'Connecting trained parent leaders to paid, meaningful roles' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-6"
                  style={{ background: 'white', border: '1px solid rgba(46,196,182,0.2)' }}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="font-semibold mb-1 text-sm" style={{ color: '#0C3B38' }}>{item.label}</div>
                  <div className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: '#2EC4B6' }}
              >
                Read the full story →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── STATS ─────────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { number: '27', label: 'Parent Leaders', sub: 'Engaged in focus groups' },
    { number: '6', label: 'Focus Groups', sub: 'English & Spanish' },
    { number: '5', label: 'Partner CBOs', sub: 'Across Massachusetts' },
    { number: '72', label: 'Hours', sub: 'To earn the credential' },
  ]

  return (
    <section className="py-20" style={{ background: '#0C3B38' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
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
      </div>
    </section>
  )
}

// ─── CREDENTIAL ────────────────────────────────────────────────────────────

function Credential() {
  const elements = [
    {
      icon: '🏛️',
      tag: '2 Credits',
      title: 'Community College Course',
      desc: 'A 2-credit leadership course at a partnering Massachusetts community college, providing foundational knowledge and academic recognition.',
      detail: 'Academic credit',
    },
    {
      icon: '🌱',
      tag: '60 Hours',
      title: 'Field Experience',
      desc: 'Supervised practical leadership embedded at a CBO or government agency — building skills through direct community work.',
      detail: 'Hands-on practice',
    },
    {
      icon: '🎤',
      tag: '10 Hours',
      title: 'Specialized Training',
      desc: 'Focused sessions in advocacy, public speaking, community organizing, and systems navigation chosen to meet real community needs.',
      detail: 'Targeted skills',
    },
    {
      icon: '🏆',
      tag: 'Capstone',
      title: 'Capstone Project',
      desc: 'A culminating project that demonstrates leadership impact within the community — the foundation of the recognized statewide credential.',
      detail: 'Credential awarded',
    },
  ]

  return (
    <section id="credential" className="pt-16 pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
              The MPC Credential
            </span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#0C3B38' }}>
              A recognized credential<br />built from lived experience
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              The Mass ParentCorps Credential is not a test — it's a portfolio of real experience.
              It's earned through a combination of academic coursework, hands-on field work,
              specialized training, and a community-facing capstone project.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Together, these four elements add up to a statewide credential recognized by
              partner CBOs, colleges, and workforce systems across Massachusetts.
            </p>
          </div>
        </div>

        {/* Credential element cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {elements.map((el, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.12)' }}
            >
              <div className="text-3xl mb-5">{el.icon}</div>

              <div
                className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(46,196,182,0.15)', color: '#1A6B63' }}
              >
                {el.tag}
              </div>

              <h3 className="font-bold text-lg mb-3 leading-snug" style={{ color: '#0C3B38' }}>
                {el.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#6B7280' }}>
                {el.desc}
              </p>

              <div
                className="text-xs font-semibold pt-4"
                style={{ color: '#2EC4B6', borderTop: '1px solid rgba(46,196,182,0.2)' }}
              >
                {el.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div
          className="rounded-2xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: '#0C3B38' }}
        >
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: 'rgba(46,196,182,0.8)' }}>
              What you earn
            </div>
            <div className="text-2xl font-bold" style={{ color: '#F0DC9A' }}>
              The MPC Parent Leadership Credential
            </div>
            <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Statewide recognition · College credit · Workforce-ready
            </div>
          </div>
          <a
            href="mailto:marostrategies@gmail.com"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all"
            style={{ background: '#F0DC9A', color: '#0C3B38' }}
          >
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── VOICES ────────────────────────────────────────────────────────────────

function Voices() {
  const quotes = [
    {
      quote: 'One word that describes what a parent leader means to me is empowering. When I became a mother, this work became very, very important to me.',
      source: 'Focus Group Participant',
      org: 'Massachusetts',
    },
    {
      quote: 'Certificates would recognize the time and effort I put into developing my skills, and show the value of parent leadership.',
      source: 'Focus Group Participant',
      org: 'Massachusetts',
    },
    {
      quote: "Imagine if it's statewide, bringing people together, sharing experiences and culture. That's very powerful. That's really exciting.",
      source: 'Focus Group Participant',
      org: 'Massachusetts',
    },
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
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
            Voices from the Field
          </span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'white' }}>
            Parents are already leading.{' '}
            <span style={{ color: '#F0DC9A' }}>The system hasn't caught up.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="text-5xl font-serif leading-none mb-5" style={{ color: 'rgba(46,196,182,0.5)', lineHeight: 1 }}>
                "
              </div>
              <p className="text-white text-lg leading-relaxed font-medium flex-1 mb-6">{q.quote}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 }}>
                <div className="font-semibold text-sm" style={{ color: '#F0DC9A' }}>{q.source}</div>
                <div className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{q.org}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="/about#research" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#2EC4B6' }}>
            Read the full research findings →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── FOR WHOM ──────────────────────────────────────────────────────────────

function ForWhom() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
            Who We Serve
          </span>
          <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            Built for everyone in the ecosystem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Parent Leaders */}
          <div id="for-parents" className="rounded-3xl p-10 lg:p-14" style={{ background: '#FBF7E8' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8" style={{ background: '#0C3B38' }}>
              <svg className="w-7 h-7" style={{ color: '#F0DC9A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#0C3B38' }}>For Parent Leaders</h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#4B5563' }}>
              You're already doing the work. Mass ParentCorps gives you the credentials,
              connections, and career pathway to turn your leadership into lasting opportunity.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'Earn a recognized Parent Leadership Credential',
                'Access college credit and career pathways',
                'Join a statewide network of parent leaders',
                'Receive stipend support and professional development',
                'Move from volunteer role to paid, permanent position',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#374151' }}>
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(46,196,182,0.2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2EC4B6' }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="mailto:marostrategies@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm" style={{ background: '#0C3B38', color: '#F0DC9A' }}>
              Get Involved →
            </a>
          </div>

          {/* CBOs */}
          <div id="for-cbos" className="rounded-3xl p-10 lg:p-14 relative overflow-hidden" style={{ background: '#0C3B38' }}>
            <div className="absolute top-0 right-0 rounded-full pointer-events-none" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(46,196,182,0.2) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(30%, -30%)' }} />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8" style={{ background: 'rgba(240,220,154,0.15)' }}>
                <svg className="w-7 h-7" style={{ color: '#F0DC9A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#F0DC9A' }}>For CBOs</h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Mass ParentCorps strengthens — not replaces — your existing models. We handle
                training infrastructure, credentials, and funding coordination so you can focus
                on your mission.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Access a pipeline of credentialed parent leaders',
                  'Reduce administrative burden on your team',
                  'Participate in a statewide CBO peer network',
                  'Co-design the program with your community',
                  'Streamlined funding coordination and stipend management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(46,196,182,0.25)' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2EC4B6' }} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:marostrategies@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm" style={{ background: '#F0DC9A', color: '#0C3B38' }}>
                Partner With Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── GET INVOLVED ──────────────────────────────────────────────────────────

function GetInvolved() {
  return (
    <section className="py-28" style={{ background: '#FBF7E8' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
          Get Involved
        </span>
        <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#2EC4B6' }} />

        <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#0C3B38' }}>
          Join the Mass<br />ParentCorps Movement
        </h2>
        <p className="mt-6 text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
          Whether you're a parent leader, a community organization, a funder, or a policymaker —
          there's a place for you in this work.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            Email Magda Rodriguez
          </a>
          <a href="mailto:marostrategies@gmail.com" className="text-base font-medium" style={{ color: '#2EC4B6' }}>
            marostrategies@gmail.com
          </a>
        </div>

        {/* Partners row */}
        <div className="mt-20">
          <div className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: 'rgba(0,0,0,0.3)' }}>
            Stakeholders & Partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {['EEC', 'Boston Opportunity Agenda', 'DESE', 'NY Metro Center', 'MSPCC', 'MA Association of Community Colleges', 'The Boston Foundation'].map((p) => (
              <span key={p} className="text-sm font-medium" style={{ color: 'rgba(0,0,0,0.4)' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
