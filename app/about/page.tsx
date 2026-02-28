import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Mass ParentCorps',
  description: 'Learn about the history, team, and research behind Mass ParentCorps.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHero />
      <History />
      <Team />
      <Research />
    </div>
  )
}

// ─── PAGE HERO ─────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ top: '-20%', left: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, #2EC4B6 0%, transparent 70%)', opacity: 0.1, filter: 'blur(80px)' }} />
        <div className="absolute rounded-full" style={{ bottom: '-10%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, #F0DC9A 0%, transparent 70%)', opacity: 0.06, filter: 'blur(60px)' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>About</span>
        <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
          The story behind<br />Mass ParentCorps
        </h1>
        <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          From community listening sessions to a statewide credential — how MPC came to be,
          who is building it, and what the research says.
        </p>

        {/* In-page nav */}
        <div className="mt-12 flex flex-wrap gap-3">
          {[
            { label: 'Our History', href: '#history' },
            { label: 'The Team', href: '#team' },
            { label: 'The Research', href: '#research' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-medium border transition-all"
              style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HISTORY ───────────────────────────────────────────────────────────────

function History() {
  const timeline = [
    {
      year: '2023',
      title: 'The Idea Takes Root',
      desc: 'Conversations begin between Magda Rodriguez and community partners about the gap between parent leadership practice and formal recognition. The question: what would it look like to credential the work parents are already doing?',
    },
    {
      year: '2024',
      title: 'Coalition Building',
      desc: "MARO Strategies convenes a cross-sector group including EEC, DESE, Boston Opportunity Agenda, and community colleges to explore a collaborative backbone model. NY Metro Center's approach to parent leadership becomes a key reference point.",
    },
    {
      year: 'Jan 2025',
      title: 'Partner CBOs Join',
      desc: 'Five community-based organizations across Massachusetts formally join the initiative, committing to co-design the credential pathway and host parent leaders for field experience placements.',
    },
    {
      year: 'Jan 2026',
      title: 'Focus Groups Complete',
      desc: '27 parent leaders across Massachusetts participate in 6 focus groups (English & Spanish) to shape the credential. Their voices — on leadership, barriers, and aspirations — become the foundation of the MPC model.',
    },
    {
      year: '2026',
      title: 'Launch',
      desc: 'Mass ParentCorps formally launches the Parent Leadership Credential program across Massachusetts, with the first cohort of parent leaders beginning their pathway.',
    },
  ]

  return (
    <section id="history" className="pt-16 pb-28" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Our History</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#0C3B38' }}>
              From conversation<br />to credential
            </h2>
            <p className="text-lg leading-relaxed mb-16" style={{ color: '#4B5563' }}>
              Mass ParentCorps didn't begin with a grant or a government mandate. It began with
              a simple observation: parents across Massachusetts are doing extraordinary leadership
              work — advocating for families, building community trust, navigating complex systems —
              with no formal recognition or career pathway to show for it. MPC was built to change that.
            </p>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'rgba(46,196,182,0.25)', marginLeft: 11 }} />
              <div className="space-y-10">
                {timeline.map((event, i) => (
                  <div key={i} className="relative pl-10">
                    <div
                      className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      style={{ background: '#FBF7E8', borderColor: '#2EC4B6' }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: '#2EC4B6' }} />
                    </div>
                    <div
                      className="inline-block text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded mb-2"
                      style={{ background: 'rgba(46,196,182,0.12)', color: '#1A6B63' }}
                    >
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0C3B38' }}>{event.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backbone model callout */}
            <div
              className="mt-16 rounded-2xl p-8 md:p-10"
              style={{ background: 'white', border: '1px solid rgba(46,196,182,0.2)' }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#2EC4B6' }}>
                The Backbone Model
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0C3B38' }}>
                Coordination without duplication
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                Mass ParentCorps operates as a backbone organization — a coordinating entity that
                supports the whole system without replacing the work of individual CBOs. Rather than
                creating a new service delivery program, MPC handles the infrastructure:
                curriculum development, credential management, funding coordination, and data
                collection.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                Partner CBOs remain the direct connectors to parent leaders and community members.
                This model is inspired by the NY Metro Center's approach, adapted for Massachusetts'
                unique landscape of family-serving organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TEAM ──────────────────────────────────────────────────────────────────

function Team() {
  const teamMembers = [
    {
      name: 'Magda Rodriguez',
      title: 'Founder & Lead Strategist',
      org: 'MARO Strategies',
      bio: 'Magda has spent over a decade working at the intersection of community organizing, early education policy, and parent leadership development across Massachusetts. She founded MARO Strategies to advance equity-driven solutions for families.',
      email: 'marostrategies@gmail.com',
    },
  ]

  const advisors = [
    { name: 'EEC (Early Education & Care)', role: 'State Partner' },
    { name: 'DESE (Dept. of Elementary & Secondary Education)', role: 'State Partner' },
    { name: 'Boston Opportunity Agenda', role: 'Strategic Partner' },
    { name: 'NY Metro Center', role: 'National Model' },
    { name: 'MSPCC', role: 'CBO Partner' },
    { name: 'MA Association of Community Colleges', role: 'Academic Partner' },
    { name: 'The Boston Foundation', role: 'Funder / Partner' },
  ]

  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>The Team</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#0C3B38' }}>
              Built by and for<br />the community
            </h2>
            <p className="text-lg leading-relaxed mb-16" style={{ color: '#4B5563' }}>
              Mass ParentCorps is led by practitioners with deep roots in Massachusetts communities,
              supported by a cross-sector coalition of state agencies, funders, and community organizations.
            </p>

            {/* Team cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl p-8"
                  style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.15)' }}
                >
                  {/* Avatar placeholder */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-xl font-bold"
                    style={{ background: '#0C3B38', color: '#F0DC9A' }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="font-bold text-xl mb-1" style={{ color: '#0C3B38' }}>{member.name}</div>
                  <div className="text-sm font-medium mb-0.5" style={{ color: '#2EC4B6' }}>{member.title}</div>
                  <div className="text-sm mb-4" style={{ color: '#9CA3AF' }}>{member.org}</div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#4B5563' }}>{member.bio}</p>
                  <a href={`mailto:${member.email}`} className="text-sm font-medium" style={{ color: '#2EC4B6' }}>
                    {member.email}
                  </a>
                </div>
              ))}

              {/* Join the team card */}
              <div
                className="rounded-2xl p-8 flex flex-col items-start justify-between"
                style={{ background: '#0C3B38', border: '1px solid rgba(46,196,182,0.2)' }}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(240,220,154,0.1)', border: '1px dashed rgba(240,220,154,0.3)' }}>
                    <svg className="w-8 h-8" style={{ color: '#F0DC9A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="font-bold text-xl mb-2" style={{ color: '#F0DC9A' }}>Grow With Us</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    The MPC team is growing. If you're passionate about parent leadership and
                    community development, we want to hear from you.
                  </p>
                </div>
                <a
                  href="mailto:marostrategies@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{ background: '#F0DC9A', color: '#0C3B38' }}
                >
                  Get in Touch →
                </a>
              </div>
            </div>

            {/* Partners & advisors grid */}
            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: 'rgba(0,0,0,0.35)' }}>
                Partners & Stakeholders
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {advisors.map((a) => (
                  <div
                    key={a.name}
                    className="rounded-xl px-5 py-4 flex items-center justify-between"
                    style={{ background: '#FBF7E8' }}
                  >
                    <span className="text-sm font-medium" style={{ color: '#0C3B38' }}>{a.name}</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full ml-3 flex-shrink-0"
                      style={{ background: 'rgba(46,196,182,0.12)', color: '#1A6B63' }}
                    >
                      {a.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── RESEARCH ──────────────────────────────────────────────────────────────

function Research() {
  const findings = [
    {
      number: '01',
      title: 'Leadership as Advocacy',
      desc: 'Parents consistently defined leadership through the lens of advocacy — being a voice for their children, families, and neighbors. They described themselves as connectors, translators, and trusted community bridges, often filling roles that no formal job title captured.',
      quote: '"I am a parent leader because I fight for my community. I make sure people who don\'t have a voice get heard."',
    },
    {
      number: '02',
      title: 'Workforce-Ready Skills',
      desc: 'Through their leadership work, parents are developing high-level professional competencies — public speaking, community organizing, systems navigation, cultural brokering, and facilitation. These skills are directly transferable to paid roles in CBOs, schools, and government agencies.',
      quote: '"I learned to speak at city hall. I learned to organize. I learned how to help people who don\'t know the system. That\'s a skill. Why doesn\'t it count?"',
    },
    {
      number: '03',
      title: 'The Credential Gap',
      desc: 'Despite the depth of skill development, no formal credential or recognized career pathway existed. Parents reported feeling undervalued and unable to translate their community work into economic advancement. The absence of recognition was both a personal and systemic barrier.',
      quote: '"Certificates would recognize the time and effort I put into developing my skills, and show the value of parent leadership."',
    },
    {
      number: '04',
      title: 'Desire for Community',
      desc: 'Participants were enthusiastic about the idea of a statewide network. They wanted connection with other parent leaders across Massachusetts — to share strategies, learn from each other, and feel part of something larger than their local program.',
      quote: '"Imagine if it\'s statewide, bringing people together, sharing experiences and culture. That\'s very powerful."',
    },
    {
      number: '05',
      title: 'Barrier: Time & Financial Constraints',
      desc: 'Parents flagged time and financial pressure as the primary barriers to participation in formal training. Any credential pathway must include stipend support, flexible scheduling, and childcare accommodations to be genuinely accessible.',
      quote: '"I want to participate but I need to be able to pay my bills. If there\'s a stipend, that changes everything."',
    },
    {
      number: '06',
      title: 'Language & Cultural Accessibility',
      desc: 'Sessions were conducted in both English and Spanish, and participants emphasized the importance of culturally responsive, bilingual programming. Any MPC curriculum must reflect the linguistic and cultural diversity of Massachusetts families.',
      quote: '"When things are in my language, I can participate fully. I can lead. I can share my real experience."',
    },
  ]

  return (
    <section id="research" className="py-28 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="absolute rounded-full pointer-events-none" style={{ top: '30%', right: '-10%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(46,196,182,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>The Research</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#F0DC9A' }}>
              Parent leadership research:<br />
              <span style={{ color: 'white' }}>January 2026 findings</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              In January 2026, MPC conducted 6 focus groups with 27 parent leaders across 5
              community-based organizations in Massachusetts. Sessions were held in both English
              and Spanish. The goal: understand what parent leadership means to those doing the
              work, what skills they're developing, and what a credential pathway would mean for them.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-16">
              {[
                { n: '27', label: 'Parent leaders' },
                { n: '6', label: 'Focus groups' },
                { n: '5', label: 'Partner CBOs' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="text-4xl font-bold mb-1" style={{ color: '#F0DC9A' }}>{s.n}</div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Findings */}
            <div className="space-y-6">
              {findings.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-3xl font-bold flex-shrink-0" style={{ color: 'rgba(46,196,182,0.35)' }}>
                      {f.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#F0DC9A' }}>{f.title}</h3>
                      <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>{f.desc}</p>
                      <blockquote
                        className="text-sm italic leading-relaxed pl-4"
                        style={{ color: 'rgba(255,255,255,0.5)', borderLeft: '2px solid rgba(46,196,182,0.4)' }}
                      >
                        {f.quote}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Methodology note */}
            <div className="mt-10 rounded-xl p-6" style={{ background: 'rgba(46,196,182,0.08)', border: '1px solid rgba(46,196,182,0.2)' }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#2EC4B6' }}>
                Methodology
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Qualitative focus groups conducted January 2026. Participants recruited through partner
                CBO networks. Sessions ranged from 60–90 minutes, facilitated in English and Spanish.
                Participants were current or former parent leaders engaged in community work across
                Massachusetts. All quotes used with permission; identifying details withheld.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
