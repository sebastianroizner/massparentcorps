import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Agencies | Mass ParentCorps',
  description: 'Learn how community-based organizations can partner with Mass ParentCorps to refer and support parent leaders.',
}

export default function ForAgenciesPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHero />
      <RoleOfAgencies />
      <ReferralProcess />
      <PartnerCBOs />
      <GetInvolved />
    </div>
  )
}

// ─── PAGE HERO ─────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section style={{ background: '#0C3B38', paddingTop: 64 }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>For Agencies</span>
        <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
          Partner with us to<br />elevate parent leaders.
        </h1>
        <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Community-based organizations play a central role in Mass ParentCorps — from
          referring participants to supporting their leadership journey.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:mpc@massparentcorps.org?subject=Agency Partnership Inquiry - Mass ParentCorps"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg"
            style={{ background: '#F0DC9A', color: '#0C3B38' }}
          >
            Contact Us to Partner →
          </a>
          <a
            href="https://docs.google.com/document/d/1Ei474xjRataSddf__vO6cpHhSVTv3-0J/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── ROLE OF AGENCIES ────────────────────────────────────────────────────────

function RoleOfAgencies() {
  const roles = [
    {
      icon: '🤝',
      title: 'Identify & Refer Parent Leaders',
      desc: 'Organizations identify parent leaders in their programs who meet eligibility requirements and refer them through the agency referral process.',
    },
    {
      icon: '📋',
      title: 'Verify Leadership Hours',
      desc: 'Sponsoring organizations verify that referred participants have completed 60 hours of leadership experience and 8 hours of approved training.',
    },
    {
      icon: '🌱',
      title: 'Support Applied Learning',
      desc: "Organizations host and support participants' Applied Learning Projects — practical projects connected to real community work.",
    },
    {
      icon: '🔗',
      title: 'Create Hiring Pathways',
      desc: 'A key goal of Mass ParentCorps is helping organizations build pathways to hire parent leaders into paid staff roles.',
    },
  ]

  return (
    <section className="py-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Role of Agencies</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#0C3B38' }}>
              How your organization<br />makes it work
            </h2>
            <p className="text-lg leading-relaxed mb-12" style={{ color: '#4B5563' }}>
              Mass ParentCorps is a partnership between community-based organizations,
              parent leaders, and academic partners. CBOs are not just a referral source —
              they are essential co-designers of the pathway.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {roles.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8"
                  style={{ background: 'white', border: '1px solid rgba(46,196,182,0.12)' }}
                >
                  <div className="text-2xl mb-4">{r.icon}</div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#0C3B38' }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── REFERRAL PROCESS ────────────────────────────────────────────────────────

function ReferralProcess() {
  const steps = [
    {
      step: '01',
      title: 'Review Eligibility Criteria',
      desc: 'Confirm the parent leader has 60+ hours of leadership experience, 8+ hours of training, a HS diploma/GED, and English proficiency.',
    },
    {
      step: '02',
      title: 'Download the Agency Guide',
      desc: 'Review the Agency Referral & Screening Guide for full requirements and the referral form. Contact us at mpc@massparentcorps.org to request the guide.',
    },
    {
      step: '03',
      title: 'Submit Your Referral',
      desc: 'Complete the referral form and submit it on behalf of your candidate before the application deadline.',
    },
    {
      step: '04',
      title: 'Support Their Journey',
      desc: 'Stay connected as their sponsoring organization — support their Applied Learning Project and help build their pathway to a paid role.',
    },
  ]

  return (
    <section id="referral" className="py-20 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Referral Process</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#F0DC9A' }}>
            How to refer a participant
          </h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Participants must be referred by a sponsoring community-based organization.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl px-8 py-6 flex items-start gap-6"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-2xl font-bold flex-shrink-0 mt-0.5" style={{ color: 'rgba(46,196,182,0.4)' }}>
                {s.step}
              </span>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: 'white' }}>{s.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PARTNER CBOs ────────────────────────────────────────────────────────────

function PartnerCBOs() {
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
    <section className="py-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Our Partners</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            Founding community partners
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cbos.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl px-6 py-5 flex items-center gap-4 bg-white"
              style={{ border: '1px solid rgba(46,196,182,0.15)' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#2EC4B6' }} />
              <span className="font-medium text-sm" style={{ color: '#0C3B38' }}>{p}</span>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#9CA3AF' }}>Design &amp; Government Partners</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {designPartners.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl px-6 py-5 flex items-center gap-4 bg-white"
              style={{ border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F0DC9A' }} />
              <span className="font-medium text-sm" style={{ color: '#4B5563' }}>{p}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm" style={{ color: '#9CA3AF' }}>
          EEC and DESE participated in the initial design phase of Mass ParentCorps.
        </p>
      </div>
    </section>
  )
}

// ─── GET INVOLVED ────────────────────────────────────────────────────────────

function GetInvolved() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Get Involved</span>
        <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#2EC4B6' }} />
        <h2 className="mt-8 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
          Ready to partner?
        </h2>
        <p className="mt-6 text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
          We welcome conversations with community-based organizations, educators, researchers,
          and government partners interested in the initiative.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:mpc@massparentcorps.org?subject=Agency Partnership Inquiry - Mass ParentCorps"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold"
            style={{ background: '#0C3B38', color: '#F0DC9A' }}
          >
            Get in Touch →
          </a>
          <a
            href="mailto:mpc@massparentcorps.org"
            className="text-base font-medium"
            style={{ color: '#2EC4B6' }}
          >
            mpc@massparentcorps.org
          </a>
        </div>
      </div>
    </section>
  )
}
