import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pilot Program | Mass ParentCorps',
  description: 'Learn about the Mass ParentCorps pilot program structure, partnerships, and evaluation.',
}

export default function ImpactPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHero />
      <PilotOverview />
      <ProgramStructure />
      <WhatWeHopeToLearn />
      <PartnersEvaluation />
    </div>
  )
}

// ─── PAGE HERO ─────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="relative pt-20 overflow-hidden" style={{ background: '#0C3B38' }}>
      {/* Photo hero */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <img
          src="/parent-leader.jpg"
          alt="Parent leader in the community"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(12,59,56,0.6) 0%, rgba(12,59,56,0.88) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Pilot Program</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
              From design to<br />implementation
            </h1>
            <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              The Mass ParentCorps pilot will include 40+ parent leaders representing more than
              10 organizations across Massachusetts.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: 'Pilot Overview', href: '#overview' },
                { label: 'Program Structure', href: '#structure' },
                { label: 'Partners & Evaluation', href: '#partners' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-5 py-2 rounded-full text-sm font-medium border transition-all"
                  style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PILOT OVERVIEW ─────────────────────────────────────────────────────────

function PilotOverview() {
  const stats = [
    { number: '40+', label: 'Parent Leaders' },
    { number: '2', label: 'Cohorts' },
    { number: '10+', label: 'Organizations' },
    { number: '1', label: 'Evaluation Partner' },
  ]

  return (
    <section id="overview" className="pt-16 pb-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Pilot Overview</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#0C3B38' }}>
              Who's in the pilot
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#4B5563' }}>
              The Mass ParentCorps pilot will include parent leaders across two cohorts,
              representing more than 10 organizations across Massachusetts. Participants come
              from organizations that engage parents as leaders.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'white', border: '1px solid rgba(46,196,182,0.15)' }}
                >
                  <div className="text-5xl font-bold mb-2" style={{ color: '#0C3B38' }}>{s.number}</div>
                  <div className="text-sm font-medium" style={{ color: '#6B7280' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PROGRAM STRUCTURE ──────────────────────────────────────────────────────

function ProgramStructure() {
  const elements = [
    {
      tag: '3 Credits',
      title: '3-Credit College Course',
      desc: 'Participants enroll in a course developed with community colleges.',
      bullets: ['Leadership', 'Community engagement', 'Workforce preparation'],
    },
    {
      tag: 'Capstone',
      title: 'Capstone Project',
      desc: 'Participants complete a leadership project connected to their organization.',
      bullets: ['Improving outreach to families', 'Developing engagement strategies', 'Organizing community resource events'],
    },
    {
      tag: '60 Hours',
      title: 'Parent Leadership Experience',
      desc: 'The program recognizes 60 hours of parent leadership experience.',
      bullets: ['Facilitating meetings', 'Organizing programs', 'Community outreach', 'Advocacy'],
    },
    {
      tag: '8 Hours',
      title: 'Leadership Training',
      desc: 'Recognition of 8 hours of leadership training completed through partner organizations.',
      bullets: [],
    },
  ]

  return (
    <section id="structure" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Program Structure</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            How the program works
          </h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: '#4B5563' }}>
            Four elements that together build a recognized Parent Leadership Workforce Credential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {elements.map((el, i) => (
            <div
              key={i}
              className="rounded-2xl p-8"
              style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.12)' }}
            >
              <div
                className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(46,196,182,0.15)', color: '#1A6B63' }}
              >
                {el.tag}
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ color: '#0C3B38' }}>{el.title}</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6B7280' }}>{el.desc}</p>
              {el.bullets.length > 0 && (
                <ul className="space-y-2">
                  {el.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#2EC4B6' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── WHAT WE HOPE TO LEARN ──────────────────────────────────────────────────

function WhatWeHopeToLearn() {
  const questions = [
    'What workforce skills are most important for parent leaders transitioning into staff roles',
    'How leadership experience can be recognized as professional preparation',
    'How academic learning strengthens leadership practice',
    'How organizations can create hiring pathways for parent leaders',
    'How the model can expand across Massachusetts',
  ]

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="absolute rounded-full pointer-events-none" style={{ top: '50%', left: '-5%', transform: 'translateY(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(46,196,182,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>What We Hope to Learn</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10" style={{ color: '#F0DC9A' }}>
              Questions guiding<br />the pilot
            </h2>
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-8 py-5 flex items-start gap-5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="text-2xl font-bold flex-shrink-0 mt-0.5" style={{ color: 'rgba(46,196,182,0.4)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PARTNERS & EVALUATION ──────────────────────────────────────────────────

function PartnersEvaluation() {
  const evalPoints = [
    'Develop a logic model',
    'Measure leadership skill development',
    'Assess workforce readiness',
    'Document lessons learned',
  ]

  return (
    <section id="partners" className="py-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Partners & Evaluation</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            How we partner and measure
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {/* Organizational */}
          <div className="rounded-2xl p-8 bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="font-bold text-xl mb-3" style={{ color: '#0C3B38' }}>Organizational Partnerships</h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#4B5563' }}>
              Mass ParentCorps collaborates with organizations across Massachusetts that engage
              parents as leaders.
            </p>
            <ul className="space-y-2">
              {['Nominate parent leaders', 'Support leadership activities', 'Host capstone projects'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#2EC4B6' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div className="rounded-2xl p-8 bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="font-bold text-xl mb-3" style={{ color: '#0C3B38' }}>Academic Partnerships</h3>
            <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
              Community colleges collaborate to develop the 3-credit course and support the
              academic component of the pilot.
            </p>
          </div>

          {/* Evaluation */}
          <div className="rounded-2xl p-8" style={{ background: '#0C3B38' }}>
            <div className="text-3xl mb-4">🔬</div>
            <h3 className="font-bold text-xl mb-3" style={{ color: '#F0DC9A' }}>Evaluation</h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              The pilot will be evaluated in partnership with NYU Metro Center under the
              leadership of Joanna Geller.
            </p>
            <ul className="space-y-2">
              {evalPoints.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#2EC4B6' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: '#0C3B38' }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#F0DC9A' }}>
              Interested in partnering?
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We welcome conversations with organizations, educators, researchers, and community leaders.
            </p>
          </div>
          <a
            href="mailto:marostrategies@gmail.com"
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
