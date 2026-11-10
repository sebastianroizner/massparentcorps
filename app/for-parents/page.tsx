import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Parents | Mass ParentCorps',
  description: 'Everything parent leaders need to know about the Mass ParentCorps pilot — what you earn, eligibility, and how to apply.',
}

export default function ForParentsPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
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
    <section style={{ background: '#2E5B3B', paddingTop: 64 }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C19844' }}>For Parents</span>
        <div className="mt-2 w-10 h-px" style={{ background: '#C19844' }} />
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#EBD29A' }}>
          Your leadership<br />deserves recognition.
        </h1>
        <p className="mt-6 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Mass ParentCorps connects your parent leadership experience with a credential,
          college credits, and career pathways across Massachusetts.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:mpc@massparentcorps.org"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg"
            style={{ background: '#C19844', color: '#2E5B3B' }}
          >
            Get Notified About Future Cohorts →
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
    <section className="py-20" style={{ background: '#F3E8CF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:pt-2">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C19844' }}>What Is It?</span>
            <div className="mt-2 w-10 h-px" style={{ background: '#C19844' }} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#2E5B3B' }}>
              A program built<br />for parent leaders
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              Mass ParentCorps is a Massachusetts initiative that recognizes the real work
              you have been doing as a parent leader — and connects it to formal credentials,
              college credits, and career pathways.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
              Cohort 1 (Urban College of Boston) is complete. Cohort 2 (Middlesex Community College) is underway. Sign up to hear when the next cohort opens.
            </p>
            <div
              className="rounded-2xl p-6 mt-4"
              style={{ background: 'white', border: '1px solid rgba(193,152,68,0.2)' }}
            >
              <p className="text-base font-semibold" style={{ color: '#2E5B3B' }}>
                The course is taught in English. Participants must be proficient in English to fully participate and complete assignments.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://docs.google.com/document/d/1NNcT_9AHYZBR9s8_hFoP1KlODyjuGlqx/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base"
                style={{ background: '#2E5B3B', color: '#EBD29A' }}
              >
                Learn More →
              </a>
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
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C19844' }}>What You Will Earn</span>
          <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#C19844' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#2E5B3B' }}>
            Two awards. Both yours to keep.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-10"
            style={{ background: '#2E5B3B' }}
          >
            <div
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ background: 'rgba(193,152,68,0.2)', color: '#C19844' }}
            >
              Award #1
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#EBD29A' }}>
              Mass ParentCorps Credential
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              A new, emerging credential gaining statewide recognition across Massachusetts —
              a formal mark of your parent leadership expertise and community impact.
            </p>
          </div>

          <div
            className="rounded-2xl p-10"
            style={{ background: '#F3E8CF', border: '1px solid rgba(193,152,68,0.2)' }}
          >
            <div
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-6"
              style={{ background: 'rgba(193,152,68,0.12)', color: '#1E3D28' }}
            >
              Award #2
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#2E5B3B' }}>
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
    <section id="qualify" className="py-20 relative overflow-hidden" style={{ background: '#2E5B3B' }}>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C19844' }}>Eligibility</span>
          <div className="mt-2 w-10 h-px" style={{ background: '#C19844' }} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold" style={{ color: '#EBD29A' }}>Do You Qualify?</h2>
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
              <span className="text-2xl font-bold flex-shrink-0 mt-0.5" style={{ color: 'rgba(193,152,68,0.4)' }}>
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
    <section className="py-20" style={{ background: '#F3E8CF' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C19844' }}>How to Apply</span>
        <div className="mt-2 w-10 h-px mx-auto" style={{ background: '#C19844' }} />
        <h2 className="mt-8 text-4xl md:text-5xl font-bold" style={{ color: '#2E5B3B' }}>
          Interested in a future cohort?
        </h2>
        <p className="mt-6 text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
          Both current cohorts are underway. Email us to be notified when applications open
          again, and a member of our team will follow up with next steps.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:mpc@massparentcorps.org"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold"
            style={{ background: '#C19844', color: '#2E5B3B' }}
          >
            Get Notified About Future Cohorts →
          </a>
          <a
            href="mailto:mpc@massparentcorps.org"
            className="text-base font-medium"
            style={{ color: '#C19844' }}
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
