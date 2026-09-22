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
      <WhatYouWillEarn />
      <DoYouQualify />
      <ProgramStructure />
      <WhatWeHopeToLearn />
      <PartnersEvaluation />
    </div>
  )
}

// ─── PAGE HERO ─────────────────────────────────────────────────────────────

function PageHero() {
  const navLinks = [
    { label: 'Pilot Overview', href: '#overview' },
    { label: 'What You Earn', href: '#earn' },
    { label: 'Do You Qualify?', href: '#qualify' },
    { label: 'Program Structure', href: '#structure' },
    { label: 'Partners & Evaluation', href: '#partners' },
  ]

  return (
    <section style={{ background: '#000' }}>
      {/* Photo */}
      <div className="relative w-full h-[55vw] md:h-[80vh] md:min-h-[500px]" style={{ marginTop: 64 }}>
        <img
          src="/cbo-meeting.jpg"
          alt="Community organization meeting"
          className="w-full h-full object-cover object-top"
        />
        {/* Desktop overlay */}
        <div
          className="absolute inset-0 hidden md:flex items-start pt-20"
          style={{ background: 'linear-gradient(to bottom, rgba(12,59,56,0.65) 0%, rgba(12,59,56,0.10) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Pilot Program</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
              From design to<br />implementation
            </h1>
            <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Both cohorts are now underway — 39 parent leaders enrolled across Urban College of Boston and Middlesex Community College.
            </p>
            <div className="mt-6">
              <a
                href="mailto:mpc@massparentcorps.org"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
                style={{ background: '#2EC4B6', color: '#0C3B38' }}
              >
                Get Notified About Future Cohorts →
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="px-5 py-2 rounded-full text-sm font-medium border" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile text below photo */}
      <div className="md:hidden px-6 py-10" style={{ background: '#0C3B38' }}>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Pilot Program</span>
        <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
        <h1 className="mt-5 text-4xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
          From design to implementation
        </h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Both cohorts are now underway — 39 parent leaders enrolled across Urban College of Boston and Middlesex Community College.
        </p>
        <a
          href="mailto:mpc@massparentcorps.org"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
          style={{ background: '#2EC4B6', color: '#0C3B38' }}
        >
          Get Notified About Future Cohorts →
        </a>
        <div className="mt-6 flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-4 py-1.5 rounded-full text-sm font-medium border" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}>{link.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PILOT OVERVIEW ─────────────────────────────────────────────────────────

function PilotOverview() {
  const stats = [
    { number: '39', label: 'Parent Leaders', sub: 'Across both cohorts' },
    { number: '15', label: 'Sponsor Agencies', sub: '' },
    { number: '2', label: 'Community Colleges', sub: '' },
    { number: '15+', label: 'Other Agencies', sub: 'Statewide' },
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
            <div className="rounded-2xl p-5 mb-6" style={{ background: 'rgba(46,196,182,0.08)', border: '1px solid rgba(46,196,182,0.25)' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: '#1A6B63' }}>Cohort 1 — Urban College of Boston</p>
              <p className="text-base" style={{ color: '#4B5563' }}>
                The first cohort of parent leaders completed their credentialing course in partnership
                with Urban College of Boston — Course: <strong>HUS110: Core Competencies for
                Community Behavioral Health Workers</strong>.
              </p>
            </div>
            <div className="rounded-2xl p-5 mb-8" style={{ background: '#0C3B38' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: '#2EC4B6' }}>Cohort 2 — Middlesex Community College</p>
              <p className="text-base mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
                The second cohort is underway in partnership with Middlesex Community College.
                Course: <strong style={{ color: '#F0DC9A' }}>SOC 110: Community Leadership &amp; Organizing</strong> — Mon &amp; Wed, 12:30–1:45 PM · 100% Online.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'white', border: '1px solid rgba(46,196,182,0.15)' }}
                >
                  <div className="text-5xl font-bold mb-2" style={{ color: '#0C3B38' }}>{s.number}</div>
                  <div className="text-sm font-medium mb-1" style={{ color: '#6B7280' }}>{s.label}</div>
                  <div className="text-xs" style={{ color: '#9CA3AF' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHAT YOU WILL EARN ─────────────────────────────────────────────────────

function WhatYouWillEarn() {
  return (
    <section id="earn" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>What You Will Earn</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            Two awards. Both yours to keep.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Award 1 */}
          <div
            className="rounded-2xl p-10 flex flex-col"
            style={{ background: '#0C3B38' }}
          >
            <div
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ background: 'rgba(46,196,182,0.2)', color: '#2EC4B6' }}
            >
              Award #1
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#F0DC9A' }}>
              Mass ParentCorps Credential
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              A new, emerging credential gaining statewide recognition across Massachusetts —
              a formal mark of your parent leadership expertise and community impact.
            </p>
          </div>

          {/* Award 2 */}
          <div
            className="rounded-2xl p-10 flex flex-col"
            style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.2)' }}
          >
            <div
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ background: 'rgba(46,196,182,0.12)', color: '#1A6B63' }}
            >
              Award #2
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0C3B38' }}>
              3–6 College Credits
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
              Earned through <strong>Urban College of Boston or Middlesex Community College</strong> —
              credits you can apply toward future certificates, associate's degrees, and advanced
              degrees on your own timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── DO YOU QUALIFY ─────────────────────────────────────────────────────────

function DoYouQualify() {
  const requirements = [
    {
      number: '01',
      title: '60 Hours of Leadership Experience',
      desc: 'At least 60 hours of community leadership experience as a Parent Leader, Family Advocate, Community Organizer, or similar role. Hours can be combined from multiple organizations.',
    },
    {
      number: '02',
      title: '8 Hours of Leadership Training',
      desc: 'At least 8 hours of approved parent leadership training completed before applying.',
    },
    {
      number: '03',
      title: 'High School Diploma or GED',
      desc: 'Participants must have a High School Diploma, GED, or higher level of education to enroll.',
    },
    {
      number: '04',
      title: 'English Proficiency',
      desc: 'The course is taught entirely in English. Participants must be proficient in English to fully participate and complete assignments.',
    },
    {
      number: '05',
      title: 'Agency Referral Required',
      desc: 'Participants must be referred by a sponsoring community-based organization. Contact your organization or reach out to massparentcorps.org to learn more.',
    },
  ]

  return (
    <section id="qualify" className="py-20 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="absolute rounded-full pointer-events-none" style={{ top: '50%', left: '-5%', transform: 'translateY(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(46,196,182,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Eligibility</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
            Do You Qualify?
          </h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Spots are limited. To participate, applicants must meet all of the following:
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {requirements.map((r) => (
            <div
              key={r.number}
              className="rounded-2xl px-8 py-6 flex items-start gap-6"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-2xl font-bold flex-shrink-0 mt-0.5" style={{ color: 'rgba(46,196,182,0.4)' }}>
                {r.number}
              </span>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: 'white' }}>{r.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:mpc@massparentcorps.org"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-semibold text-lg"
            style={{ background: '#2EC4B6', color: '#0C3B38' }}
          >
            Get Notified About Future Cohorts →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── PROGRAM STRUCTURE ──────────────────────────────────────────────────────

function ProgramStructure() {
  const elements = [
    {
      tag: 'Prerequisite',
      title: 'Leadership Experience (60 hrs)',
      desc: 'At least 60 hours of parent leadership experience, verifiable through your sponsoring organization.',
      bullets: ['Facilitating meetings', 'Organizing programs', 'Community outreach', 'Advocacy'],
    },
    {
      tag: 'Prerequisite',
      title: 'Leadership Training (8 hrs)',
      desc: 'At least 8 hours of approved leadership training completed through a partner organization before the course begins.',
      bullets: [],
    },
    {
      tag: '3–6 Credits',
      title: 'College Credit Course',
      desc: 'HUS110: Core Competencies for Community Behavioral Health Workers (Urban College of Boston, Cohort 1) or SOC 110: Community Leadership & Organizing (Middlesex Community College, Cohort 2). Taught in English — participants must be proficient in English to fully participate and complete assignments.',
      bullets: ['Leadership', 'Community engagement', 'Workforce preparation'],
    },
    {
      tag: 'Applied Learning',
      title: 'Applied Learning Project',
      desc: 'Participants complete an Applied Learning Project connected to their organization and community.',
      bullets: ['Improving outreach to families', 'Developing engagement strategies', 'Organizing community resource events'],
    },
    {
      tag: 'Community',
      title: 'Community Learning Sessions',
      desc: 'Structured sessions that connect participants with peers and practitioners across Massachusetts.',
      bullets: [],
    },
    {
      tag: 'Evaluation',
      title: 'Evaluations & Graduation',
      desc: 'Participants complete program evaluations and graduate with their credential and college credits upon successful completion.',
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
            Six components that together build a recognized, emerging Parent Leadership Workforce Credential.
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

        <div className="mt-10 text-center">
          <a
            href="mailto:mpc@massparentcorps.org"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base"
            style={{ background: '#0C3B38', color: '#F0DC9A' }}
          >
            Get Notified About Future Cohorts →
          </a>
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

  const cbos = [
    'Families First',
    'East Boston Social Centers',
    'Family Nurturing Center of Massachusetts',
    'Union Capital Boston',
  ]

  const designPartners = [
    'Department of Early Education and Care (EEC)',
    'Department of Elementary and Secondary Education (DESE)',
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

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {/* Organizational */}
          <div className="rounded-2xl p-8 bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="font-bold text-xl mb-3" style={{ color: '#0C3B38' }}>Founding Community Partners</h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#4B5563' }}>
              Mass ParentCorps collaborates with founding community-based organizations that engage
              parents as leaders.
            </p>
            <ul className="space-y-2">
              {cbos.map((item, i) => (
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
            <h3 className="font-bold text-xl mb-3" style={{ color: '#0C3B38' }}>Academic Partnership</h3>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#4B5563' }}>
              <strong>Urban College of Boston</strong> partnered on Cohort 1, offering HUS110: Core
              Competencies for Community Behavioral Health Workers. <strong>Middlesex Community College</strong> is
              the academic partner for Cohort 2, offering SOC 110: Community Leadership &amp; Organizing.
            </p>
            <div className="mt-4">
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#9CA3AF' }}>Design &amp; Government Partners</div>
              <ul className="space-y-2">
                {designPartners.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F0DC9A' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Evaluation */}
          <div className="rounded-2xl p-8" style={{ background: '#0C3B38' }}>
            <div className="text-3xl mb-4">🔬</div>
            <h3 className="font-bold text-xl mb-3" style={{ color: '#F0DC9A' }}>Evaluation</h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              The pilot is being evaluated in partnership with NYU Metro Center's Center for Policy,
              Research &amp; Evaluation, led by Dr. Joanna Geller and Lisette DeSouza.
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
            href="mailto:mpc@massparentcorps.org"
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
