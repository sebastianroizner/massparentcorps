import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Parents | Mass ParentCorps',
  description: 'Everything parent leaders need to know about the Mass ParentCorps pilot — what you earn, eligibility, and how to apply.',
}

const REGISTER_URL = 'https://forms.gle/8ivwftzEML241N1X7'

export default function ForParentsPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHero />
      <WhatIsMPC />
      <WhatYouEarn />
      <Eligibility />
      <HowToApply />
    </div>
  )
}

// ─── PAGE HERO ─────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section style={{ background: '#0C3B38', paddingTop: 64 }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>For Parents</span>
        <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#F0DC9A' }}>
          Your leadership<br />deserves recognition.
        </h1>
        <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Mass ParentCorps connects your parent leadership experience with a credential,
          college credits, and career pathways across Massachusetts.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg"
            style={{ background: '#2EC4B6', color: '#0C3B38' }}
          >
            Join Our Program →
          </a>
          <a
            href="#qualify"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}
          >
            Do I Qualify?
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── WHAT IS MPC ────────────────────────────────────────────────────────────

function WhatIsMPC() {
  return (
    <section className="py-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>What Is It?</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#0C3B38' }}>
              A program built<br />for parent leaders
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              Mass ParentCorps is a Massachusetts initiative that recognizes the real work
              you have been doing as a parent leader — and connects it to formal credentials,
              college credits, and career pathways.
            </p>
            <p className="text-lg leading-relaxed mb-3" style={{ color: '#4B5563' }}>
              <strong>Cohort 1</strong> with Urban College of Boston is now full.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              <strong>Cohort 2</strong> with Middlesex Community College is now open. Classes meet Mon &amp; Wed, 12:30–1:45 PM · September 9 – December 23, 2026 · 100% Online. Registration closes <strong>September 9, 2026</strong>.
            </p>
            <div
              className="rounded-2xl p-6 mt-4"
              style={{ background: 'white', border: '1px solid rgba(46,196,182,0.2)' }}
            >
              <p className="text-base font-semibold" style={{ color: '#0C3B38' }}>
                The course is taught in English. Participants must be proficient in English to fully participate and complete assignments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHAT YOU EARN ──────────────────────────────────────────────────────────

function WhatYouEarn() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>What You Will Earn</span>
          <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
            Two awards. Both yours to keep.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-10"
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

          <div
            className="rounded-2xl p-10"
            style={{ background: '#FBF7E8', border: '1px solid rgba(46,196,182,0.2)' }}
          >
            <div
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ background: 'rgba(46,196,182,0.12)', color: '#1A6B63' }}
            >
              Award #2
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0C3B38' }}>
              3 College Credits
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
              Earned through <strong>Middlesex Community College</strong> (Cohort 2) — credits you can apply toward
              future certificates, associate's degrees, and advanced degrees on your own timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ELIGIBILITY ────────────────────────────────────────────────────────────

function Eligibility() {
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
      desc: 'You must have a High School Diploma, GED, or higher level of education to enroll.',
    },
    {
      number: '04',
      title: 'English Proficiency',
      desc: 'The course is taught entirely in English. You must be proficient in English to fully participate and complete assignments.',
    },
    {
      number: '05',
      title: 'Agency Referral Required',
      desc: 'You must be referred by a sponsoring community-based organization. Contact your organization or reach out to massparentcorps.org to learn more.',
    },
  ]

  return (
    <section id="qualify" className="py-20 relative overflow-hidden" style={{ background: '#0C3B38' }}>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>Eligibility</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#2EC4B6' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#F0DC9A' }}>Do You Qualify?</h2>
          <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Spots are limited. To participate, you must meet all of the following:
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
      </div>
    </section>
  )
}

// ─── HOW TO APPLY ────────────────────────────────────────────────────────────

function HowToApply() {
  return (
    <section className="py-20" style={{ background: '#FBF7E8' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2EC4B6' }}>How to Apply</span>
        <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#2EC4B6' }} />
        <h2 className="mt-8 text-4xl md:text-5xl font-bold" style={{ color: '#0C3B38' }}>
          Ready to get started?
        </h2>
        <p className="mt-6 text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
          Join our program today. Once you submit, a member of our team will be in
          touch to confirm eligibility and next steps.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold"
            style={{ background: '#2EC4B6', color: '#0C3B38' }}
          >
            Join Our Program →
          </a>
          <a
            href="mailto:mpc@massparentcorps.org"
            className="text-base font-medium"
            style={{ color: '#2EC4B6' }}
          >
            mpc@massparentcorps.org
          </a>
        </div>

        <p className="mt-8 text-sm" style={{ color: '#9CA3AF' }}>
          Not sure if you qualify? Email us and we'll help you figure it out.
        </p>
      </div>
    </section>
  )
}
