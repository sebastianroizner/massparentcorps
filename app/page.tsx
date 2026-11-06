'use client'

import { useState } from 'react'

// Brand colors (The Movement):
// Deep green bg:     #2E5B3B
// Gold accent:        #C19844
// Light gold (on dark): #EBD29A
// Ink (on gold):       #17301F
// Cream section bg:   #F3E8CF
// Mint section bg:    #EEF3EF
// Soft mint card bg:  #E6EFE8 / #EEF3EF

export default function Home() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 64 }}>
      <Hero />
      <ThreeBigQuestions />
      <WhatIsParentLeadership />
      <MythOrFact />
      <WhyItMatters />
      <CaseForInvestment />
      <Voice />
      <Journey />
      <MeetOurParentLeaders />
      <Join />
      <FinalCTA />
    </div>
  )
}

// ─── FINAL CTA ──────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section style={{ background: '#2E5B3B', color: '#FFFFFF' }}>
      <div
        className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 items-center justify-between"
        style={{ paddingTop: 'clamp(56px, 6vw, 80px)', paddingBottom: 'clamp(56px, 6vw, 80px)' }}
      >
        <h2
          className="font-extrabold"
          style={{ margin: 0, flex: '1 1 520px', fontSize: 'clamp(2.4rem, 4.6vw, 4.2rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
        >
          When parents lead, <span style={{ color: '#EBD29A' }}>we all rise.</span>
        </h2>
        <a
          href="mailto:mpc@massparentcorps.org"
          className="font-bold rounded-full"
          style={{ background: '#C19844', color: '#17301F', padding: '18px 32px', fontSize: 19, textDecoration: 'none' }}
        >
          Join the Movement
        </a>
      </div>
    </section>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" style={{ background: '#2E5B3B', color: '#FFFFFF', overflow: 'hidden' }}>
      <div
        className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-12"
        style={{ paddingTop: 'clamp(56px, 7vw, 96px)', paddingBottom: 'clamp(56px, 7vw, 96px)' }}
      >
        <div style={{ flex: '1 1 600px', minWidth: 0 }}>
          <div
            className="inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase"
            style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', color: '#EBD29A', letterSpacing: '0.04em' }}
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: '#C19844' }} />
            A statewide movement for parent leadership
          </div>

          <h1
            className="font-extrabold"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.6rem)', lineHeight: 1.04, letterSpacing: '-0.035em', margin: '24px 0 28px' }}
          >
            <span className="block whitespace-nowrap">
              I am a parent
              <Dot />
            </span>
            <span className="block whitespace-nowrap" style={{ color: '#EBD29A' }}>
              I am a leader
              <Dot />
            </span>
          </h1>

          <p className="font-bold" style={{ fontSize: 26, lineHeight: 1.3, margin: '0 0 14px' }}>
            When parents lead, Massachusetts rises.
          </p>
          <p style={{ fontSize: 20, lineHeight: 1.55, margin: '0 0 36px', maxWidth: '36rem', color: '#E6EFE8' }}>
            Parent leadership is the cornerstone of a healthy economy. Mass ParentCorps is a
            movement to recognize, credential, and elevate the parents already leading our
            communities — and to build the statewide infrastructure that makes it last.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#join"
              className="font-extrabold rounded-full"
              style={{ background: '#C19844', color: '#17301F', padding: '16px 28px', fontSize: 18, textDecoration: 'none' }}
            >
              Join the Movement
            </a>
            <a
              href="#invest"
              className="font-bold rounded-full"
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                padding: '14px 26px',
                fontSize: 18,
                border: '2px solid #FFFFFF',
                textDecoration: 'none',
              }}
            >
              See the Case for Investment
            </a>
          </div>
        </div>

        <div style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="inline-block rounded-full"
      style={{ width: '0.2em', height: '0.2em', background: '#C19844', marginLeft: '0.06em' }}
    />
  )
}

function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 500 600"
      role="img"
      aria-label="Parent, Family and Community rise like the bars of the Mass ParentCorps logo, with Economy as the gold dot on top"
      style={{ width: '100%', maxWidth: 400, height: 'auto', display: 'block', overflow: 'visible' }}
    >
      <g style={{ animation: 'mpcRise 1.1s cubic-bezier(.2,.8,.2,1) 0.1s both', transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
        <rect x="0" y="392" width="128" height="208" rx="64" fill="#FFFFFF" />
        <text x="64" y="452" textAnchor="middle" fontSize="21" fontWeight="800" fill="#2E5B3B">Parent</text>
      </g>
      <g style={{ animation: 'mpcRise 1.1s cubic-bezier(.2,.8,.2,1) 0.3s both', transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
        <rect x="186" y="288" width="128" height="312" rx="64" fill="#FFFFFF" />
        <text x="250" y="348" textAnchor="middle" fontSize="21" fontWeight="800" fill="#2E5B3B">Family</text>
      </g>
      <g style={{ animation: 'mpcRise 1.1s cubic-bezier(.2,.8,.2,1) 0.5s both', transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
        <rect x="372" y="184" width="128" height="416" rx="64" fill="#FFFFFF" />
        <text x="436" y="244" textAnchor="middle" fontSize="18" fontWeight="800" fill="#2E5B3B">Community</text>
      </g>
      <g style={{ animation: 'mpcDrop .8s cubic-bezier(.3,.7,.3,1) 0.9s both', transformBox: 'fill-box' }}>
        <g style={{ animation: 'mpcBounce 2.4s ease-in-out 1.7s infinite', transformBox: 'fill-box' }}>
          <circle cx="436" cy="68" r="64" fill="#C19844" />
          <text x="436" y="75" textAnchor="middle" fontSize="20" fontWeight="800" fill="#17301F">Economy</text>
        </g>
      </g>
      <style>{`
        @keyframes mpcRise { from { transform: scaleY(0) } to { transform: scaleY(1) } }
        @keyframes mpcBounce { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-16px) } }
        @keyframes mpcDrop { 0% { transform: translateY(-120px); opacity: 0 } 60% { transform: translateY(10px); opacity: 1 } 100% { transform: translateY(0); opacity: 1 } }
        @media (prefers-reduced-motion: reduce) { g { animation: none !important } }
      `}</style>
    </svg>
  )
}

// ─── THREE BIG QUESTIONS ────────────────────────────────────────────────────

function ThreeBigQuestions() {
  const cards = [
    {
      n: '01', href: '#what', bg: '#FFFFFF', color: '#2E5B3B', numColor: '#376846',
      title: 'What is parent leadership?', body: 'Parents shaping the systems that shape their families.', cta: 'Read the definition', ctaColor: '#2E5B3B',
    },
    {
      n: '02', href: '#why', bg: '#FFFFFF', color: '#2E5B3B', numColor: '#376846',
      title: 'Why does it matter?', body: "One parent's leadership lifts a family, a community, and our whole economy.", cta: 'See the ripple', ctaColor: '#2E5B3B',
    },
    {
      n: '03', href: '#invest', bg: '#2E5B3B', color: '#FFFFFF', numColor: '#EBD29A',
      title: 'Why invest now?', body: "Parent leadership is infrastructure. It's time we fund it like it is.", cta: 'Make the case', ctaColor: '#EBD29A',
    },
  ]

  return (
    <section style={{ background: '#F3E8CF' }}>
      <div
        className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6"
        style={{ paddingTop: 'clamp(40px, 5vw, 64px)', paddingBottom: 'clamp(40px, 5vw, 64px)' }}
      >
        {cards.map((c) => (
          <a
            key={c.n}
            href={c.href}
            className="mpc-card rounded-3xl flex flex-col gap-3"
            style={{ flex: '1 1 300px', minWidth: 0, background: c.bg, color: c.color, padding: 32, textDecoration: 'none' }}
          >
            <span className="font-extrabold" style={{ fontSize: 56, lineHeight: 1, color: c.numColor }}>
              {c.n}
              <span aria-hidden="true" className="inline-block rounded-full" style={{ width: 12, height: 12, background: '#C19844', marginLeft: 4 }} />
            </span>
            <span className="font-bold" style={{ fontSize: 28, lineHeight: 1.15 }}>{c.title}</span>
            <span style={{ fontSize: 17 }}>{c.body}</span>
            <span className="font-bold" style={{ fontSize: 16, textDecoration: 'underline', color: c.ctaColor }}>{c.cta}</span>
          </a>
        ))}
      </div>
      <style>{`.mpc-card{transition:transform .2s ease, box-shadow .2s ease}.mpc-card:hover{transform:translateY(-6px) rotate(-.6deg);box-shadow:0 18px 36px rgba(12,69,55,.18)}`}</style>
    </section>
  )
}

// ─── WHAT IS PARENT LEADERSHIP ───────────────────────────────────────────

function WhatIsParentLeadership() {
  const bullets = [
    { label: 'schools', text: 'Guiding their children’s ', icon: <HomeIcon /> },
    { label: 'neighborhoods', text: 'Organizing their ', icon: <PeopleIcon /> },
    { label: 'organizations', text: 'Shaping the ', suffix: ' that serve families', icon: <OrgIcon /> },
    { label: 'public systems', text: 'Informing ', suffix: ' and policy', icon: <PolicyIcon /> },
  ]

  return (
    <section id="what" style={{ background: '#FFFFFF' }}>
      <div
        className="max-w-7xl mx-auto px-6 flex flex-wrap gap-14 items-center"
        style={{ paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}
      >
        <div style={{ flex: '1 1 560px', minWidth: 0 }}>
          <Eyebrow color="#2E5B3B">01 · What is parent leadership?</Eyebrow>
          <blockquote
            className="font-bold"
            style={{ margin: 0, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
          >
            “The active engagement of parents &amp; caregivers in the{' '}
            <span style={{ background: '#F3E8CF', padding: '0 6px', borderRadius: 6 }}>
              design, implementation, and evaluation
            </span>{' '}
            of the systems that impact their families and communities.”
          </blockquote>
          <p style={{ margin: '28px 0 0', fontSize: 20, maxWidth: '38rem' }}>
            It&apos;s not volunteering on the side. It&apos;s real work, with real skills — and
            across Massachusetts, parents are already doing it.
          </p>
        </div>

        <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p className="font-bold" style={{ margin: 0, fontSize: 17 }}>Parent leaders are already…</p>
          {bullets.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-4 rounded-2xl"
              style={{ background: '#EEF3EF', padding: '18px 22px' }}
            >
              {b.icon}
              <span style={{ fontSize: 18 }}>
                {b.text}
                <strong>{b.label}</strong>
                {b.suffix}
              </span>
            </div>
          ))}
          <p className="font-bold" style={{ margin: '6px 0 0', fontSize: 18, color: '#2E5B3B' }}>
            Mass ParentCorps makes sure that leadership is seen, credentialed, and elevated.
          </p>
        </div>
      </div>
    </section>
  )
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p
      className="flex items-center gap-2.5 font-bold uppercase"
      style={{ margin: '0 0 16px', fontSize: 15, letterSpacing: '0.08em', color }}
    >
      <span aria-hidden="true" className="rounded-full flex-none" style={{ width: 10, height: 10, background: '#C19844' }} />
      {children}
    </p>
  )
}

function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}
function HomeIcon() {
  return <IconBase><path d="M3 10l9-6 9 6" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></IconBase>
}
function PeopleIcon() {
  return <IconBase><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M15 14.5c3 0 6 1.8 6 5.5" /></IconBase>
}
function OrgIcon() {
  return <IconBase><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></IconBase>
}
function PolicyIcon() {
  return <IconBase><path d="M4 21V10l8-6 8 6v11" /><path d="M9 21v-5h6v5" /><path d="M2 21h20" /></IconBase>
}

// ─── MYTH OR FACT ───────────────────────────────────────────────────────

const MYTHS = [
  { myth: 'Parent leadership is just volunteering.', fact: 'It’s skilled work: designing, implementing, and evaluating the systems families rely on. It deserves to be recognized as a profession.' },
  { myth: 'Leadership at your kid’s school doesn’t count on a résumé.', fact: 'With Mass ParentCorps it counts: a Mass ParentCorps Credential plus 3–6 college credits, both yours to keep.' },
  { myth: 'It’s a nice-to-have.', fact: 'Research shows parent leadership builds civic power, expands education and career pathways, and influences systems and policy.' },
  { myth: 'It only helps one family.', fact: 'One parent’s leadership lifts a family, a community, the organizations that serve them — and our economy.' },
]

function MythOrFact() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({})

  return (
    <section style={{ background: '#F3E8CF' }}>
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}>
        <Eyebrow color="#2E5B3B">Myth or fact?</Eyebrow>
        <h2
          className="font-extrabold"
          style={{ margin: '0 0 12px', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '48rem' }}
        >
          Think you know parent leadership? Flip a card.
        </h2>
        <p style={{ margin: '0 0 40px', fontSize: 20, maxWidth: '40rem' }}>
          What we heard from parents and partners across Massachusetts.
        </p>
        <div className="flex flex-wrap gap-5">
          {MYTHS.map((m, i) => {
            const f = !!flipped[i]
            return (
              <button
                key={i}
                type="button"
                className="mpc-card rounded-3xl text-left flex flex-col gap-[18px] cursor-pointer"
                aria-pressed={f}
                onClick={() => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }))}
                style={{
                  flex: '1 1 260px', minWidth: 0, minHeight: 280, boxSizing: 'border-box',
                  border: 'none', padding: 28, fontFamily: 'inherit',
                  background: f ? '#2E5B3B' : '#FFFFFF', color: f ? '#FFFFFF' : '#2E5B3B',
                }}
              >
                <span
                  className="self-start rounded-full font-bold"
                  style={{ padding: '6px 14px', fontSize: 14, letterSpacing: '0.08em', background: f ? '#C19844' : '#2E5B3B', color: f ? '#17301F' : '#FFFFFF' }}
                >
                  {f ? 'FACT' : 'MYTH'}
                </span>
                <span className="font-bold" style={{ fontSize: 24, lineHeight: 1.2 }}>{f ? m.fact : m.myth}</span>
                <span
                  className="font-bold"
                  style={{ marginTop: 'auto', fontSize: 15, textDecoration: 'underline', color: f ? '#EBD29A' : '#2E5B3B' }}
                >
                  {f ? 'Tap to see the myth' : 'Tap to reveal the fact'}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── WHY IT MATTERS — INTERACTIVE RIPPLE ──────────────────────────────────

const LEVELS = [
  { id: 'parent', label: 'Parent leader', title: 'It starts with one parent.', body: 'Parents are already leading in schools, community organizations, and early childhood programs. Mass ParentCorps recognizes that leadership with a credential and 3–6 college credits, and connects it to professional roles.', source: '' },
  { id: 'family', label: 'Family', title: 'Families grow stronger.', body: "When a parent’s leadership is recognized and connected to a career pathway, the whole household rises with them — and children see leadership modeled up close.", source: '' },
  { id: 'community', label: 'Community', title: 'Builds connection & civic power.', body: 'Parent leaders build trust, bring neighbors together, and help families find their voice in the decisions that shape their lives.', source: 'ZERO TO THREE (2020); Henderson et al. (2016)' },
  { id: 'orgs', label: 'Organizations', title: 'Expands education & career pathways.', body: 'Agencies gain skilled, trusted leaders with lived experience. Parents gain pathways into professional roles that strengthen programs and organizations.', source: 'Geller et al. (2017), NYU Metro Center' },
  { id: 'systems', label: 'Systems & policy', title: 'Influences systems & policy.', body: 'When parents help design, implement, and evaluate the systems that affect their families, those systems work better for everyone they serve.', source: 'Geller et al. (2017); Henderson et al. (2016)' },
  { id: 'economy', label: 'Economy', title: 'Massachusetts rises.', body: "Stronger families, connected communities, and better systems add up to a healthier economy. Parent leadership isn’t a side project — it’s economic infrastructure.", source: '' },
]

function WhyItMatters() {
  const [sel, setSel] = useState('economy')
  const idx = Math.max(0, LEVELS.findIndex((d) => d.id === sel))
  const current = LEVELS[idx]

  return (
    <section id="why" style={{ background: '#EEF3EF' }}>
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}>
        <Eyebrow color="#2E5B3B">02 · Why it matters</Eyebrow>
        <h2
          className="font-extrabold"
          style={{ margin: '0 0 16px', fontSize: 'clamp(2.4rem, 4.4vw, 4rem)', lineHeight: 1.02, letterSpacing: '-0.025em', maxWidth: '52rem' }}
        >
          One parent leader. A whole ecosystem rises.
        </h2>
        <p style={{ margin: '0 0 48px', fontSize: 20, maxWidth: '42rem' }}>
          Parent leadership is a force that moves through every layer of our society — all the
          way to the economy. Tap each step to see how.
        </p>

        <div className="flex flex-wrap gap-10 items-stretch">
          <div style={{ flex: '1 1 560px', minWidth: 0, overflowX: 'auto' }}>
            <div
              role="group"
              aria-label="Levels of impact"
              className="flex items-end gap-2.5"
              style={{ minWidth: 540, height: 380 }}
            >
              {LEVELS.map((item, i) => {
                const selected = item.id === sel
                const h = 90 + i * 46
                const bg = selected ? '#2E5B3B' : i % 2 === 0 ? '#C9DCCD' : '#A9C6B0'
                const fg = selected ? '#FFFFFF' : '#2E5B3B'
                return (
                  <div key={item.id} className="flex flex-col items-center justify-end gap-2.5 h-full" style={{ flex: '1 1 0', minWidth: 0 }}>
                    {selected && (
                      <div aria-hidden="true" className="mpc-bounce rounded-full" style={{ width: 28, height: 28, background: '#C19844' }} />
                    )}
                    <button
                      type="button"
                      className="mpc-bar font-bold"
                      aria-pressed={selected}
                      onClick={() => setSel(item.id)}
                      style={{
                        width: '100%', height: h, background: bg, color: fg, border: 'none',
                        borderRadius: '999px 999px 0 0', fontSize: 15, padding: '26px 6px',
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                        textAlign: 'center', cursor: 'pointer', lineHeight: 1.2,
                      }}
                    >
                      {item.label}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className="rounded-3xl flex flex-col gap-4 justify-center"
            style={{ flex: '1 1 380px', minWidth: 0, background: '#FFFFFF', padding: 40 }}
          >
            <span className="font-bold uppercase" style={{ fontSize: 15, letterSpacing: '0.08em', color: '#2E5B3B' }}>
              Step {idx + 1} of 6 · {current.label}
            </span>
            <h3 className="font-extrabold" style={{ margin: 0, fontSize: 34, lineHeight: 1.1 }}>{current.title}</h3>
            <p style={{ margin: 0, fontSize: 19 }}>{current.body}</p>
            {current.source && (
              <p style={{ margin: 0, fontSize: 15, color: '#3F5B47' }}>Research: {current.source}</p>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes mpcBounce2{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}.mpc-bounce{animation:mpcBounce2 2.4s ease-in-out infinite}.mpc-bar{transition:filter .15s ease, transform .15s ease}.mpc-bar:hover{filter:brightness(1.06);transform:translateY(-4px)}`}</style>
    </section>
  )
}

// ─── CASE FOR INVESTMENT ──────────────────────────────────────────────────

function CaseForInvestment() {
  const stats = [
    { n: '40', label: 'Parent leaders enrolled' },
    { n: '2', label: 'Cohorts' },
    { n: '15', label: 'Sponsor agencies' },
    { n: '2', label: 'Community colleges' },
    { n: '15+', label: 'Other agencies' },
  ]

  return (
    <section id="invest" style={{ background: '#2E5B3B', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}>
        <Eyebrow color="#EBD29A">03 · The case for investment</Eyebrow>
        <h2
          className="font-extrabold"
          style={{ margin: '0 0 20px', fontSize: 'clamp(2.4rem, 4.4vw, 4rem)', lineHeight: 1.02, letterSpacing: '-0.025em', maxWidth: '54rem' }}
        >
          Parent leadership is infrastructure. Let&apos;s fund it like it is.
        </h2>
        <p style={{ margin: '0 0 56px', fontSize: 20, maxWidth: '44rem', color: '#E6EFE8' }}>
          Massachusetts already depends on parent leaders. What&apos;s missing is the
          infrastructure to recognize them, pay them, and help them elevate. That&apos;s what
          your investment builds.
        </p>

        <div className="flex flex-wrap gap-6">
          <div className="rounded-3xl" style={{ flex: '1 1 340px', minWidth: 0, background: 'rgba(255,255,255,0.07)', padding: 32 }}>
            <h3 className="font-bold" style={{ margin: '0 0 18px', fontSize: 26, color: '#EBD29A' }}>What we&apos;re hearing</h3>
            <p className="font-bold" style={{ margin: '0 0 8px', fontSize: 16 }}>From parents</p>
            <ul className="flex flex-col gap-1.5" style={{ margin: '0 0 20px', paddingLeft: 20, fontSize: 17, color: '#E6EFE8' }}>
              <li>Parent leadership is still widely seen as volunteerism, not a profession</li>
              <li>Their impact is undervalued and not formally recognized in systems</li>
              <li>There are no structured pathways to elevate</li>
              <li>Leadership skills are hard to translate into résumés and careers</li>
            </ul>
            <p className="font-bold" style={{ margin: '0 0 8px', fontSize: 16 }}>From agencies</p>
            <ul className="flex flex-col gap-1.5" style={{ margin: 0, paddingLeft: 20, fontSize: 17, color: '#E6EFE8' }}>
              <li>Limited funding and recognition</li>
              <li>A disconnected framework across organizations</li>
              <li>Disconnection with higher education</li>
              <li>Burnout among staff who support parent leaders</li>
            </ul>
          </div>

          <div
            className="rounded-3xl flex flex-col gap-[18px]"
            style={{ flex: '1 1 340px', minWidth: 0, background: '#FFFFFF', color: '#2E5B3B', padding: 32 }}
          >
            <h3 className="font-bold" style={{ margin: 0, fontSize: 26 }}>The pilot is working</h3>
            <div className="flex flex-wrap gap-3.5">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl" style={{ flex: '1 1 120px', background: '#EEF3EF', padding: 16 }}>
                  <div
                    className="font-extrabold inline-block"
                    style={{ fontSize: 48, lineHeight: 1, borderBottom: '4px solid #C19844', paddingBottom: 6, marginBottom: 8 }}
                  >
                    {s.n}
                  </div>
                  <div className="font-medium" style={{ fontSize: 15 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ margin: 0, fontSize: 16 }}>
              Independently evaluated by NYU Metro Center&apos;s Center for Policy, Research &amp;
              Evaluation.
            </p>
          </div>

          <div
            className="rounded-3xl flex flex-col gap-3.5"
            style={{ flex: '1 1 340px', minWidth: 0, background: '#F3E8CF', color: '#2E5B3B', padding: 32 }}
          >
            <h3 className="font-bold" style={{ margin: '0 0 4px', fontSize: 26 }}>What your investment builds</h3>
            <p style={{ margin: 0, fontSize: 17 }}>
              A statewide infrastructure for parent leadership, built with parent leaders and
              organizations, to:
            </p>
            {['Increase awareness of impact', 'Expand pathways', 'Influence policy', 'Attract investment'].map((t, i) => (
              <div key={t} className="flex gap-3.5 items-baseline">
                <span className="font-extrabold" style={{ fontSize: 28 }}>{i + 1}</span>
                <span className="font-bold" style={{ fontSize: 18 }}>{t}</span>
              </div>
            ))}
            <a
              href="mailto:mpc@massparentcorps.org?subject=Investing%20in%20parent%20leadership"
              className="font-bold rounded-full text-center"
              style={{ marginTop: 'auto', background: '#2E5B3B', color: '#FFFFFF', padding: '16px 24px', textDecoration: 'none' }}
            >
              Invest in Parent Leadership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── VOICE ──────────────────────────────────────────────────────────────

function Voice() {
  return (
    <section style={{ background: '#FFFFFF' }}>
      <div
        className="mx-auto px-6 text-center"
        style={{ maxWidth: 1000, paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}
      >
        <svg width="56" height="44" viewBox="0 0 56 44" aria-hidden="true" className="mx-auto">
          <path d="M0 44V26C0 11 8 2 22 0l3 6c-8 3-12 9-12 16h10v22H0zm31 0V26C31 11 39 2 53 0l3 6c-8 3-12 9-12 16h10v22H31z" fill="#C19844" />
        </svg>
        <p className="font-bold" style={{ margin: '20px 0 16px', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', lineHeight: 1.2 }}>
          [Parent leader quote from the January 2026 focus groups]
        </p>
        <p className="font-bold" style={{ margin: 0, fontSize: 17, color: '#2E5B3B' }}>
          [First name], Parent Leader · [Cohort / Community]
        </p>
      </div>
    </section>
  )
}

// ─── JOURNEY ──────────────────────────────────────────────────────────────

function Journey() {
  const phases = [
    { tag: 'Complete', title: 'Phase 1 · Listening', body: 'A needs assessment with parent leaders, community organizations, state agencies, and higher education — including focus groups with 27 parents.', bg: '#FFFFFF', color: '#2E5B3B', tagBg: '#E6EFE8', tagColor: '#2E5B3B', minH: 260 },
    { tag: 'Underway', title: 'Phase 2 · The Pilot', body: 'Two cohorts with Urban College of Boston and Middlesex Community College. Parents earn a Mass ParentCorps Credential and 3–6 college credits — both theirs to keep.', bg: '#FFFFFF', color: '#2E5B3B', tagBg: '#E6EFE8', tagColor: '#2E5B3B', minH: 320, withSeal: true },
    { tag: 'Building now', title: 'Phase 3 · Statewide', body: 'Infrastructure & sustainability: a shared framework, a cross-agency coalition, and a lasting funding base so parent leadership can grow across the Commonwealth.', bg: '#2E5B3B', color: '#FFFFFF', tagBg: '#C19844', tagColor: '#17301F', minH: 380 },
  ]

  return (
    <section id="journey" style={{ background: '#EEF3EF' }}>
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}>
        <Eyebrow color="#2E5B3B">The journey so far</Eyebrow>
        <h2
          className="font-extrabold"
          style={{ margin: '0 0 48px', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          Elevating, step by step.
        </h2>
        <div className="flex flex-wrap gap-5 items-end">
          {phases.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl"
              style={{ flex: '1 1 300px', minWidth: 0, background: p.bg, color: p.color, padding: 32, minHeight: p.minH, boxSizing: 'border-box' }}
            >
              <div className="flex justify-between items-start gap-3">
                <span className="inline-block rounded-full font-bold" style={{ background: p.tagBg, color: p.tagColor, fontSize: 14, padding: '6px 12px' }}>
                  {p.tag}
                </span>
                {p.withSeal && <CredentialSeal />}
              </div>
              <h3 className="font-bold" style={{ margin: '16px 0 8px', fontSize: 26 }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: 17, color: p.color === '#FFFFFF' ? '#E6EFE8' : undefined }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CredentialSeal() {
  return (
    <svg
      viewBox="0 0 72 72"
      width="72"
      height="72"
      aria-label="Mass ParentCorps credential seal"
      className="mpc-spin"
      style={{ animation: 'mpcSpin 40s linear infinite' }}
    >
      <circle cx="36" cy="36" r="33" fill="#F3E8CF" stroke="#C19844" strokeWidth="3" />
      <circle cx="36" cy="36" r="24" fill="none" stroke="#2E5B3B" strokeWidth="2" strokeDasharray="3 4" />
      <text x="36" y="32" textAnchor="middle" fontSize="9" fontWeight="800" fill="#2E5B3B">MPC</text>
      <text x="36" y="44" textAnchor="middle" fontSize="7" fontWeight="700" fill="#2E5B3B">CREDENTIAL</text>
      <style>{`@keyframes mpcSpin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){.mpc-spin{animation:none}}`}</style>
    </svg>
  )
}

// ─── MEET OUR PARENT LEADERS ───────────────────────────────────────────

const COHORTS = [
  { id: 1, label: 'Cohort 1 · Urban College of Boston', note: '19 parent leaders, launched June 2026. [Add each photo with the parent’s written consent.]' },
  { id: 2, label: 'Cohort 2 · Middlesex Community College', note: 'Now underway. [Add each photo with the parent’s written consent.]' },
]

function MeetOurParentLeaders() {
  const [cohort, setCohort] = useState(1)
  const current = COHORTS.find((c) => c.id === cohort) ?? COHORTS[0]
  const people = Array.from({ length: 8 }, () => ({ name: '[Parent leader name]', place: '[Neighborhood] · [Partner organization]' }))

  return (
    <section id="parents" style={{ background: '#F3E8CF' }}>
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}>
        <Eyebrow color="#2E5B3B">Meet our parent leaders</Eyebrow>
        <h2
          className="font-extrabold"
          style={{ margin: '0 0 16px', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          The faces of the movement.
        </h2>
        <p style={{ margin: '0 0 36px', fontSize: 20, maxWidth: '42rem' }}>
          Parents from Dorchester, East Boston, and communities across Massachusetts, many of
          them immigrants and multilingual, leading where they live.
        </p>

        <div role="group" aria-label="Choose a cohort" className="flex flex-wrap gap-3" style={{ marginBottom: 14 }}>
          {COHORTS.map((k) => {
            const selected = k.id === cohort
            return (
              <button
                key={k.id}
                type="button"
                className="mpc-bar font-bold rounded-full cursor-pointer"
                aria-pressed={selected}
                onClick={() => setCohort(k.id)}
                style={{
                  minHeight: 48, padding: '12px 22px', fontSize: 17,
                  border: '2px solid #2E5B3B', background: selected ? '#2E5B3B' : '#FFFFFF',
                  color: selected ? '#FFFFFF' : '#2E5B3B',
                }}
              >
                {k.label}
              </button>
            )
          })}
        </div>
        <p className="font-medium" style={{ margin: '0 0 44px', fontSize: 16 }}>{current.note}</p>

        <div className="grid gap-x-7 gap-y-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))' }}>
          {people.map((pp, i) => (
            <figure key={i} className="mpc-card text-center" style={{ margin: 0 }}>
              <div
                className="rounded-full flex items-center justify-center mx-auto"
                style={{ aspectRatio: '3 / 4', overflow: 'hidden', background: '#FFFFFF', border: '4px solid #FFFFFF', boxShadow: '0 0 0 2px #2E5B3B', marginBottom: 16, maxWidth: 200 }}
              >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#A9C6B0" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
              <figcaption>
                <p className="font-extrabold" style={{ margin: 0, fontSize: 18, lineHeight: 1.3 }}>{pp.name}</p>
                <p style={{ margin: '2px 0 0', fontSize: 15, lineHeight: 1.4 }}>{pp.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── JOIN ──────────────────────────────────────────────────────────────

const ROLES = [
  { id: 'parent', label: 'Parent or caregiver', eyebrow: 'For parents & caregivers', title: 'You’re already leading. Let’s make it count.', body: 'Turn the leadership you already do into a Mass ParentCorps Credential, 3–6 college credits, and a community of parent leaders who have your back.', cta: 'Start your path', href: 'https://www.massparentcorps.org/for-parents' },
  { id: 'org', label: 'Community organization', eyebrow: 'For organizations', title: 'Grow leaders from within your community.', body: 'Sponsor a parent leader, join the coalition, and help shape a shared Parent Leadership Framework for the field.', cta: 'Partner with us', href: 'https://www.massparentcorps.org/for-agencies' },
  { id: 'funder', label: 'Funder', eyebrow: 'For funders', title: 'Invest where a healthy economy starts.', body: 'Help build the statewide infrastructure: a shared framework, a cross-agency coalition, and a lasting funding base for parent leadership.', cta: 'Talk with us', href: 'mailto:mpc@massparentcorps.org?subject=Investing%20in%20parent%20leadership' },
  { id: 'policy', label: 'Policymaker', eyebrow: 'For policymakers', title: 'Champion parent leadership across the Commonwealth.', body: 'Recognize parent leadership as a profession and connect it to real pathways that elevate families and communities.', cta: 'Connect with us', href: 'mailto:mpc@massparentcorps.org?subject=Parent%20leadership%20policy' },
]

const PARTNERS = [
  'Families First', 'Union Capital Boston', 'East Boston Social Centers',
  'Family Nurturing Center of Massachusetts', 'Urban College of Boston',
  'Middlesex Community College', 'NYU Metro Center', 'EEC', 'DESE',
]

function Join() {
  const [role, setRole] = useState('parent')
  const current = ROLES.find((r) => r.id === role) ?? ROLES[0]

  return (
    <section id="join" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 'clamp(72px, 8vw, 104px)', paddingBottom: 'clamp(72px, 8vw, 104px)' }}>
        <h2
          className="font-extrabold"
          style={{ margin: '0 0 12px', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          I am a parent. I am a leader. <span style={{ color: '#376846' }}>Who are you?</span>
        </h2>
        <p style={{ margin: '0 0 28px', fontSize: 20, maxWidth: '40rem' }}>
          Everyone has a role in elevating parent leadership. Join us to build it. <strong>I am a…</strong>
        </p>

        <div role="group" aria-label="Choose who you are" className="flex flex-wrap gap-3" style={{ marginBottom: 28 }}>
          {ROLES.map((r) => {
            const selected = r.id === role
            return (
              <button
                key={r.id}
                type="button"
                className="mpc-bar font-bold rounded-full cursor-pointer"
                aria-pressed={selected}
                onClick={() => setRole(r.id)}
                style={{
                  minHeight: 48, padding: '12px 22px', fontSize: 17,
                  border: '2px solid #2E5B3B', background: selected ? '#2E5B3B' : '#FFFFFF',
                  color: selected ? '#FFFFFF' : '#2E5B3B',
                }}
              >
                {r.label}
              </button>
            )
          })}
        </div>

        <div
          className="mpc-pop rounded-3xl flex flex-wrap gap-8 items-center justify-between"
          style={{ background: '#2E5B3B', color: '#FFFFFF', padding: 48 }}
        >
          <div style={{ flex: '1 1 520px', minWidth: 0 }}>
            <p className="font-bold uppercase" style={{ margin: '0 0 12px', fontSize: 15, letterSpacing: '0.08em', color: '#EBD29A' }}>
              {current.eyebrow}
            </p>
            <h3 className="font-extrabold" style={{ margin: '0 0 14px', fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', lineHeight: 1.08 }}>
              {current.title}
            </h3>
            <p style={{ margin: 0, fontSize: 20, color: '#E6EFE8', maxWidth: '40rem' }}>{current.body}</p>
          </div>
          <a
            href={current.href}
            className="font-bold rounded-full"
            style={{ background: '#C19844', color: '#17301F', padding: '18px 30px', fontSize: 19, textDecoration: 'none' }}
          >
            {current.cta}
          </a>
        </div>

        <div style={{ marginTop: 72, borderTop: '1px solid #DCE6DE', paddingTop: 40 }}>
          <Eyebrow color="#2E5B3B">Building it together with</Eyebrow>
          <div className="flex flex-wrap gap-2.5" style={{ fontSize: 16, fontWeight: 500 }}>
            {PARTNERS.map((p) => (
              <span key={p} className="mpc-chip rounded-full" style={{ background: '#EEF3EF', padding: '10px 16px' }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`.mpc-chip{transition:background .15s ease, color .15s ease}.mpc-chip:hover{background:#2E5B3B;color:#FFFFFF}`}</style>
    </section>
  )
}
