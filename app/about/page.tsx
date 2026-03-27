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
  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Why It Matters', href: '#why' },
    { label: 'Our History', href: '#history' },
    { label: 'Founders', href: '#founders' },
  ]

  return (
    <section style={{ background: '#000' }}>
      {/* Photo */}
      <div className="relative w-full h-[55vw] md:h-[80vh] md:min-h-[500px]" style={{ marginTop: 64 }}>
        <img
          src="/parent-leader.jpg"
          alt="Parent leader in the community"
          className="w-full h-full object-cover object-top"
        />
        {/* Desktop overlay */}
        <div
          className="absolute inset-0 hidden md:flex items-end pb-16"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)' }}
        >
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
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="px-5 py-2 rounded-full text-sm font-medium border" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile text below photo */}
      <div className="md:hidden px-6 py-10" style={{ background: '#0C3B38' }}>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>The Initiative</span>
        <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
        <h1 className="mt-5 text-4xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
          A collaborative initiative for parent leadership
        </h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Connecting parent leadership experience with academic learning and workforce
          preparation across Massachusetts.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-4 py-1.5 rounded-full text-sm font-medium border" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}>{link.label}</a>
          ))}
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
              Mass ParentCorps is building a collaborative model to{' '}
              <span style={{ color: '#2EC4B6' }}>recognize parent leadership as a professional, compensated workforce.</span>
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              Across Massachusetts, parents contribute as leaders, advisors, and community advocates.
              Yet too often, this leadership is treated as volunteerism rather than recognized as
              skilled, impactful work — and there is an opportunity to better connect parent
              leadership experience to structured, professional pathways.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              Mass ParentCorps works alongside partners to do just that. We connect parent
              leadership experience with academic learning and workforce preparation —
              transforming parent leadership into a recognized, compensated, and professional
              pathway.
            </p>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#4B5563' }}>
              Together, we are closing opportunity gaps, creating meaningful career pathways for
              parents, and advancing community-driven leadership across Massachusetts.
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
      desc: 'Across Massachusetts, organizations increasingly recognize the importance of engaging parents as partners and leaders in shaping programs, services, and systems.',
    },
    {
      icon: '🏢',
      title: 'Trusted Leadership Matters',
      desc: 'Parents bring lived experience, cultural knowledge, and trusted relationships that strengthen connections between organizations and the communities they serve.',
    },
    {
      icon: '🚀',
      title: 'Career Pathways Matter',
      desc: 'Many parent leaders are seeking opportunities to translate their leadership into careers — pathways that provide economic stability while allowing them to continue contributing to their communities.',
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
      desc: 'Community-based organizations across Massachusetts expand programs that engage parents as leaders, laying the foundation for more formalized parent leadership efforts.',
    },
    {
      year: '2006–2010',
      title: 'Thrive in 5 & Parent Partners',
      desc: 'The launch of Thrive in 5 helps elevate parent voices in shaping early childhood policies and systems. Parent Partners work alongside organizations to strengthen early childhood systems. During this period, initiatives also promote the use of Ages and Stages developmental screening tools to support early identification and connection to services.',
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
      desc: 'Don Hawley works closely with community-based organizations that engage parents as leaders and begins exploring how parent leadership experience can be connected to workforce pathways.',
    },
    {
      year: '2025',
      title: 'Mass ParentCorps Begins',
      desc: 'Mass ParentCorps begins conversations with community organizations across Massachusetts to develop a Parent Leadership Workforce Credential.',
    },
    {
      year: 'Summer 2025',
      title: 'Co-Founders Unite',
      desc: 'Magda Rodriguez-Villafañe joins the initiative and begins working with Don Hawley to develop the Mass ParentCorps pilot. She previously led the Parent Leadership Initiative (Ripple) at Families First, which received national recognition at Harvard University, and developed Families United for School and Education (FUSE).',
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
              Parent Leadership in<br />Massachusetts
            </h2>
            <div className="mb-16 space-y-4">
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                Massachusetts has a strong and evolving history of initiatives that elevate parent
                leadership and strengthen partnerships between families and organizations.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                This work has been shaped by generations of parent leaders across the state —
                including pioneers such as Gloria Devine and Cyntoria Grant — alongside many others
                who have led change within their communities, organizations, and systems.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                Together, these leaders have shown that parent leadership is a powerful force for
                strengthening communities, shaping systems, and improving outcomes for families.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                Mass ParentCorps builds on this collective legacy — advancing a model that
                recognizes parent leadership as a professional, compensated, and sustainable
                workforce.
              </p>
            </div>

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
      bio: 'Don Hawley spent much of his career in senior leadership roles across the business sector, working as both a consultant and executive focused on strategy, organizational leadership, and performance. In 2010, he transitioned from the corporate world to apply his experience in service of local nonprofit organizations. Over time, his work became increasingly focused on early childhood, where he has contributed through pro bono consulting and active philanthropic engagement across Massachusetts. Through years of collaboration with community-based organizations that engage parents as leaders, Don observed both the profound impact of parent leadership and a critical opportunity: the need to better connect that leadership experience to structured workforce pathways. He brings deep experience in public policy, nonprofit leadership, and early childhood systems change, having worked alongside community organizations, philanthropic partners, and government agencies to support programs serving children and families. These experiences helped inspire the creation of Mass ParentCorps — an effort to recognize parent leadership as a professional, compensated workforce and expand economic opportunity for parents across Massachusetts.',
    },
    {
      name: 'Magda Rodriguez-Villafañe',
      title: 'Co-Founder',
      bio: 'Magda Rodriguez-Villafañe is a family engagement leader and co-founder of Mass ParentCorps, with a strong track record of advancing parent leadership and community-driven change. She spearheaded and led the Parent Leadership Initiative (Ripple) at Families First, which received national recognition at Harvard University for its innovative approach to empowering parents as leaders. Magda also developed Families United for School and Education (FUSE), an initiative designed to support families in advocating for their children and strengthening leadership within their communities. At Mass ParentCorps, she works in partnership with community organizations, community colleges, and research partners to design and implement the Parent Leadership Workforce Credential pilot — helping to transform parent leadership into a recognized, professional, and compensated pathway.',
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
