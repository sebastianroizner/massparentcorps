import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Initiative | Mass ParentCorps',
  description: 'Learn about the Mass ParentCorps initiative — its vision, history, and founders.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHero />
      <Overview />
      <WhyItMatters />
      <History />
      <Founders />
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
          src="/community-banner.jpg"
          alt="Community members joining hands together"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(12,59,56,0.65) 0%, rgba(12,59,56,0.85) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>The Initiative</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
              A collaborative initiative<br />for parent leadership
            </h1>
            <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Connecting parent leadership experience with academic learning and workforce
              preparation across Massachusetts.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: 'Overview', href: '#overview' },
                { label: 'Why It Matters', href: '#why' },
                { label: 'Our History', href: '#history' },
                { label: 'Founders', href: '#founders' },
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

// ─── OVERVIEW ───────────────────────────────────────────────────────────────

function Overview() {
  return (
    <section id="overview" className="pt-16 pb-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Overview</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold leading-snug mb-8" style={{ color: '#0C3B38' }}>
              Mass ParentCorps is a collaborative initiative designed to{' '}
              <span style={{ color: '#2EC4B6' }}>strengthen organizations that engage parents as leaders.</span>
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              Across Massachusetts, parents contribute as leaders, advisors, and community advocates.
              Yet many organizations lack clear pathways for parent leaders to transition into
              professional roles.
            </p>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#4B5563' }}>
              Mass ParentCorps seeks to bridge that gap by connecting parent leadership experience
              with academic learning and workforce preparation.
            </p>

            {/* Vision callout */}
            <div
              className="rounded-2xl p-8"
              style={{ background: '#0C3B38' }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(46,196,182,0.8)' }}>
                Our Vision
              </div>
              <p className="text-xl font-semibold leading-relaxed" style={{ color: '#F0DC9A' }}>
                Communities where parent leadership is recognized as a powerful asset and where
                parents have meaningful opportunities to contribute professionally to organizations
                that support families and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHY IT MATTERS ─────────────────────────────────────────────────────────

function WhyItMatters() {
  const reasons = [
    {
      icon: '📈',
      title: 'Parent Leadership Is Growing',
      desc: 'Organizations across Massachusetts increasingly recognize the importance of engaging parents as partners and leaders.',
    },
    {
      icon: '🏢',
      title: 'Organizations Need Trusted Staff',
      desc: 'Parents bring lived experience, community knowledge, and trusted relationships that strengthen programs serving families.',
    },
    {
      icon: '🚀',
      title: 'Career Pathways Matter',
      desc: 'Many parent leaders seek opportunities to build careers that allow them to continue supporting their communities and contributing to organizations that serve families.',
    },
  ]

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>
            Why This Initiative Matters
          </span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            The gap we're closing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl p-8"
              style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.12)' }}
            >
              <div className="text-3xl mb-5">{r.icon}</div>
              <h3 className="font-bold text-xl mb-3" style={{ color: '#0C3B38' }}>{r.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HISTORY ────────────────────────────────────────────────────────────────

function History() {
  const timeline = [
    {
      year: 'Early 2000s',
      title: 'Community Programs Expand',
      desc: 'Community-based organizations across Massachusetts expand programs that engage parents as leaders.',
    },
    {
      year: '2006–2010',
      title: 'Thrive in 5 & Parent Partners',
      desc: 'The launch of Thrive in 5 helps elevate parent voices in shaping early childhood policies and systems. Parent Partners work alongside organizations to strengthen early childhood systems.',
    },
    {
      year: '2009',
      title: 'Parent University',
      desc: 'Parent University initiatives begin offering leadership development opportunities for parents in schools and communities.',
    },
    {
      year: '2010–2020',
      title: 'Expansion Across Massachusetts',
      desc: 'Parent leadership initiatives expand across Massachusetts through community-based organizations and collaborative programs. Organizations such as East Boston Social Centers contribute to advancing parent leadership and community engagement.',
    },
    {
      year: '2015–2024',
      title: 'Exploring Workforce Pathways',
      desc: 'Don Hawley works closely with community-based organizations that engage parents as leaders and begins exploring how parent leadership experience could be connected to workforce pathways.',
    },
    {
      year: '2025',
      title: 'Mass ParentCorps Begins',
      desc: 'Mass ParentCorps begins conversations with community organizations across Massachusetts about developing a Parent Leadership Workforce Credential.',
    },
    {
      year: 'Summer 2025',
      title: 'Co-Founders Unite',
      desc: 'Magda Rodriguez-Villafañe joins the initiative and begins working with Don Hawley to develop the Mass ParentCorps pilot. Magda previously spearheaded and led the Parent Leadership Initiative (Ripple) at Families First, which received national recognition at Harvard University.',
    },
    {
      year: '2026',
      title: 'Pilot Launch',
      desc: 'Mass ParentCorps launches the pilot phase of the initiative.',
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
              A history of parent<br />leadership in Massachusetts
            </h2>
            <p className="text-lg leading-relaxed mb-16" style={{ color: '#4B5563' }}>
              Massachusetts has a strong history of initiatives that elevate parent leadership
              and strengthen partnerships between families and organizations. Mass ParentCorps
              builds on this legacy.
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
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOUNDERS ───────────────────────────────────────────────────────────────

function Founders() {
  const founders = [
    {
      name: 'Don Hawley',
      title: 'Co-Founder',
      bio: 'Don Hawley has worked for many years with community-based organizations across Massachusetts that engage parents as leaders. Through this work he observed both the impact of parent leadership and the lack of workforce pathways connecting leadership experience to professional opportunities. Don brings extensive experience in public policy, nonprofit leadership, and early childhood systems change. Over the course of his career he has collaborated with community organizations, philanthropic partners, and government agencies to strengthen programs that support children and families. These experiences helped inspire the creation of Mass ParentCorps.',
    },
    {
      name: 'Magda Rodriguez-Villafañe',
      title: 'Co-Founder',
      bio: 'Magda Rodriguez-Villafañe is a family engagement leader and co-founder of Mass ParentCorps. She spearheaded and led the Parent Leadership Initiative (Ripple) at Families First, which received a national award at Harvard University recognizing its innovative approach to empowering parents as leaders. Magda also developed Families United for School and Education (FUSE), an initiative designed to support families in advocating for their children and strengthening community leadership. At Mass ParentCorps she works with community organizations, community colleges, and research partners to design and implement the Parent Leadership Workforce Credential pilot.',
      email: 'marostrategies@gmail.com',
    },
  ]

  return (
    <section id="founders" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Founders</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#0C3B38' }}>
              The people behind<br />Mass ParentCorps
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {founders.map((f) => (
                <div
                  key={f.name}
                  className="rounded-2xl p-8"
                  style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.15)' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-xl font-bold"
                    style={{ background: '#0C3B38', color: '#F0DC9A' }}
                  >
                    {f.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="font-bold text-xl mb-1" style={{ color: '#0C3B38' }}>{f.name}</div>
                  <div className="text-sm font-medium mb-4" style={{ color: '#2EC4B6' }}>{f.title}</div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#4B5563' }}>{f.bio}</p>
                  {f.email && (
                    <a href={`mailto:${f.email}`} className="text-sm font-medium" style={{ color: '#2EC4B6' }}>
                      {f.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
