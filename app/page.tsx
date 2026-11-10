import Link from 'next/link'
import { Building2, Landmark, School, Users } from 'lucide-react'
import { Button, Card, C, Dot, H2, Lead, Section, SectionLabel, StatTile, BulletList } from './components/ui'
import {
  Definition,
  FOCUS_ATTRIBUTION,
  FOCUS_QUOTE,
  FounderCards,
  MomentsGrid,
  QuoteMark,
  Seal,
} from './components/shared'
import MythOrFact from './components/home/MythOrFact'
import Ripple from './components/home/Ripple'
import ParentLeaders from './components/home/ParentLeaders'
import WhoAreYou from './components/home/WhoAreYou'

export const metadata = {
  title: { absolute: 'Mass ParentCorps | A statewide movement for parent leadership' },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ThreeQuestions />
      <WhatIsParentLeadership />
      <MythSection />
      <WhyItMatters />
      <CaseForInvestment />
      <VoiceQuote />
      <Roots />
      <Journey />
      <MeetParentLeaders />
      <Join />
      <Closing />
    </>
  )
}

/* ─── Prompt 4: Hero ─── */

function Hero() {
  return (
    <section className="bg-evergreen text-white overflow-hidden">
      <div className="mpc-container flex flex-wrap items-center gap-12 py-[72px] md:py-[96px]">
        <div className="flex-[1_1_580px] min-w-0">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 m-0 text-gold-light font-bold uppercase text-[15px] tracking-[0.06em]">
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-gold flex-none" />
            A statewide movement for parent leadership
          </p>
          <h1 className="mpc-h1 mt-6 mb-7">
            <span className="block mpc-fade-up" style={{ animationDelay: '0.1s' }}>
              I am a parent
              <Dot />
            </span>
            <span className="block text-gold-light mpc-fade-up" style={{ animationDelay: '0.35s' }}>
              I am a leader
              <Dot />
            </span>
          </h1>
          <p className="m-0 mb-3.5 font-bold text-[22px] md:text-[26px] leading-[1.3]">When parents lead, Massachusetts rises.</p>
          <p className="m-0 mb-9 text-[18px] md:text-[20px] leading-[1.55] text-ivory max-w-[38rem]">
            Parents are already leading. Our job is to make that leadership visible, valued, and supported. Mass
            ParentCorps is a statewide movement to recognize, elevate, and invest in parent leadership, the cornerstone of
            Massachusetts communities and a pillar of its economy.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button href="#join">Join the Movement</Button>
            <Button href="#invest" variant="outline-light">
              See the Case for Investment
            </Button>
          </div>
        </div>
        <div className="flex-[1_1_300px] min-w-0 flex justify-center">
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}

function HeroGraphic() {
  const bars = [
    { x: 0, y: 392, h: 208, label: 'Parent', delay: 0.1 },
    { x: 186, y: 288, h: 312, label: 'Family', delay: 0.3 },
    { x: 372, y: 184, h: 416, label: 'Community', delay: 0.5 },
  ]
  return (
    <svg
      viewBox="0 0 500 600"
      role="img"
      aria-label="Parent, Family and Community rise like the bars of the Mass ParentCorps logo, with Economy as the gold dot on top."
      className="block w-full max-w-[400px] h-auto overflow-visible"
    >
      {bars.map((b) => (
        <g
          key={b.label}
          style={{
            animation: `mpcRise 1.1s cubic-bezier(.2,.8,.2,1) ${b.delay}s both`,
            transformBox: 'fill-box',
            transformOrigin: '50% 100%',
          }}
        >
          <rect x={b.x} y={b.y} width="128" height={b.h} rx="64" fill="#FFFFFF" />
          <text
            x={b.x + 64}
            y={b.y + 62}
            textAnchor="middle"
            fontSize={b.label === 'Community' ? 19 : 21}
            fontWeight="800"
            fill={C.evergreen}
          >
            {b.label}
          </text>
        </g>
      ))}
      <g style={{ animation: 'mpcDrop .8s cubic-bezier(.3,.7,.3,1) 0.9s both', transformBox: 'fill-box' }}>
        <g style={{ animation: 'mpcBounce 2.4s ease-in-out 1.7s infinite', transformBox: 'fill-box' }}>
          <circle cx="436" cy="68" r="64" fill={C.gold} />
          <text x="436" y="75" textAnchor="middle" fontSize="20" fontWeight="800" fill={C.ink}>
            Economy
          </text>
        </g>
      </g>
    </svg>
  )
}

/* ─── Prompt 5: Three questions + What is parent leadership ─── */

function ThreeQuestions() {
  const cards = [
    {
      n: '01',
      title: 'What is parent leadership?',
      body: 'Parents shaping the systems that shape their families.',
      cta: 'Read the definition',
      href: '#what',
      dark: false,
    },
    {
      n: '02',
      title: 'Why does it matter?',
      body: "One parent's leadership lifts a family, a community, and our whole economy.",
      cta: 'See the ripple',
      href: '#why',
      dark: false,
    },
    {
      n: '03',
      title: 'Why invest now?',
      body: "Parent leadership is infrastructure. It's time we fund it like it is.",
      cta: 'Make the case',
      href: '#invest',
      dark: true,
    },
  ]
  return (
    <section className="bg-ivory py-12 md:py-16">
      <div className="mpc-container grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.n}
            href={c.href}
            className={`mpc-lift rounded-card p-8 flex flex-col gap-3 no-underline ${
              c.dark ? 'bg-terracotta text-white' : 'bg-white text-ink'
            }`}
          >
            <span className={`font-extrabold text-[52px] leading-none ${c.dark ? 'text-gold-light' : 'text-evergreen-light'}`}>
              {c.n}
              <Dot size="12px" />
            </span>
            <span className="font-extrabold text-[26px] leading-[1.15]">{c.title}</span>
            <span className="text-[17px]">{c.body}</span>
            <span className={`mt-auto font-bold underline underline-offset-4 ${c.dark ? 'text-white' : 'text-evergreen'}`}>
              {c.cta}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function WhatIsParentLeadership() {
  const rows = [
    { icon: School, text: "Guiding their children's schools" },
    { icon: Users, text: 'Organizing their neighborhoods' },
    { icon: Building2, text: 'Shaping the organizations that serve families' },
    { icon: Landmark, text: 'Informing public systems and policy' },
  ]
  return (
    <Section id="what" bg="white" innerClassName="flex flex-wrap gap-14 items-center">
      <div className="flex-[1_1_560px] min-w-0">
        <SectionLabel>What is parent leadership?</SectionLabel>
        <Definition className="text-[30px] md:text-[44px] lg:text-[48px]" />
        <p className="m-0 mt-8 font-bold text-[20px] md:text-[22px] leading-[1.4] max-w-[40rem]">
          Parent leaders translate at parent-teacher conferences, turn school gyms into family nights, and make sure no
          neighbor falls through the cracks.
        </p>
        <p className="m-0 mt-4 text-[18px] max-w-[38rem]">
          It&apos;s not volunteering on the side. It&apos;s real work, with real skills, and across Massachusetts, parents
          are already doing it.
        </p>
      </div>
      <div className="flex-[1_1_380px] min-w-0 flex flex-col gap-3.5">
        <h3 className="m-0 font-bold text-[18px]">Parent leaders are already…</h3>
        {rows.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-4 rounded-2xl bg-ivory px-5 py-4">
            <Icon size={28} color={C.evergreen} strokeWidth={2} aria-hidden="true" className="flex-none" />
            <span className="text-[18px]">{text}</span>
          </div>
        ))}
        <p className="m-0 mt-2 font-bold text-[18px] text-evergreen">
          Mass ParentCorps makes sure that leadership is seen, credentialed, and elevated.
        </p>
      </div>
    </Section>
  )
}

/* ─── Prompt 6: Myth or fact ─── */

function MythSection() {
  return (
    <Section bg="ivory">
      <SectionLabel>Myth or fact?</SectionLabel>
      <H2>Think you know parent leadership? Flip a card.</H2>
      <Lead>What we heard from parents and partners across Massachusetts.</Lead>
      <MythOrFact />
    </Section>
  )
}

/* ─── Prompt 7: Why it matters ─── */

function WhyItMatters() {
  return (
    <Section id="why" bg="white">
      <SectionLabel>Why it matters</SectionLabel>
      <H2>One parent leader. A whole ecosystem rises.</H2>
      <Lead>
        Parent leadership is a force that moves through every layer of our society, all the way to the economy. Tap each
        step to see how.
      </Lead>
      <Ripple />

      <p className="m-0 mt-16 mb-4 text-[18px] font-medium max-w-[44rem]">
        Families experience life as a whole, but the systems that serve them often operate separately.
      </p>
      <div className="rounded-card bg-ivory p-8 md:p-10">
        <h3 className="m-0 mb-6 font-extrabold text-[24px] md:text-[28px]">From family engagement to shared leadership</h3>
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1.4fr] items-center">
          <p className="m-0 text-[20px] font-bold text-evergreen-light">Family engagement invites parents in.</p>
          <span aria-hidden="true" className="hidden md:block w-3 h-3 rounded-full bg-gold" />
          <p className="m-0 text-[20px] font-bold">
            Shared leadership gives them a real say in setting priorities, making decisions, and evaluating the systems
            that shape their families&apos; lives.
          </p>
        </div>
      </div>
    </Section>
  )
}

/* ─── Prompt 8: Case for investment + quote ─── */

function CaseForInvestment() {
  return (
    <Section id="invest" bg="evergreen">
      <SectionLabel tone="light">The case for investment</SectionLabel>
      <H2>Parent leadership is essential infrastructure. Let&apos;s fund it that way.</H2>
      <Lead className="text-ivory">
        Our goal is not to create leadership where it doesn&apos;t exist. It is to recognize, connect, and invest in the
        leadership that is already there.
      </Lead>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card bg="glass" lift={false}>
          <h3 className="m-0 mb-5 font-extrabold text-[24px] text-gold-light">What we&apos;re hearing</h3>
          <p className="m-0 mb-2.5 font-bold">From parents</p>
          <BulletList
            tone="light"
            items={[
              'Parent leadership is still widely seen as volunteerism, not a profession',
              'Their impact is undervalued and not formally recognized in systems',
              'There are no structured pathways to elevate',
              'Leadership skills are hard to translate into résumés and careers',
            ]}
          />
          <p className="m-0 mt-6 mb-2.5 font-bold">From agencies</p>
          <BulletList
            tone="light"
            items={[
              'Limited funding and recognition',
              'A disconnected framework across organizations',
              'Disconnection with higher education',
              'Burnout among staff who support parent leaders',
            ]}
          />
        </Card>

        <Card bg="white" lift={false} className="flex flex-col gap-5">
          <h3 className="m-0 font-extrabold text-[24px]">The pilot is working</h3>
          <div className="flex flex-wrap gap-3">
            <StatTile n="40" label="Parent leaders enrolled" />
            <StatTile n="2" label="Cohorts" />
            <StatTile n="15" label="Sponsor agencies" />
            <StatTile n="2" label="Community colleges" />
            <StatTile n="15+" label="Other agencies" />
          </div>
          <p className="m-0 text-[16px]">
            Independently evaluated by NYU Metro Center&apos;s Center for Policy, Research &amp; Evaluation.
          </p>
        </Card>

        <Card bg="ivory" lift={false} className="flex flex-col gap-4">
          <h3 className="m-0 font-extrabold text-[24px]">What your investment builds</h3>
          <p className="m-0">A statewide infrastructure for parent leadership, built with parent leaders and organizations, to:</p>
          <ol className="m-0 p-0 list-none flex flex-col gap-2">
            {['Increase awareness of impact', 'Expand pathways', 'Influence policy', 'Attract investment'].map((t, i) => (
              <li key={t} className="flex gap-3.5 items-baseline">
                <span className="font-extrabold text-[26px] text-evergreen">{i + 1}</span>
                <span className="font-bold text-[18px]">{t}</span>
              </li>
            ))}
          </ol>
          <p className="m-0 text-[16px]">
            Lasting change takes collective investment. Philanthropy can help test and strengthen the model, government
            can sustain it, and community organizations, colleges, and parent leaders make it work.
          </p>
          <Button
            href="mailto:mpc@massparentcorps.org?subject=Investing%20in%20parent%20leadership"
            variant="dark"
            className="mt-auto"
          >
            Invest in Parent Leadership
          </Button>
        </Card>
      </div>
    </Section>
  )
}

function VoiceQuote() {
  return (
    <section className="mpc-section bg-terracotta text-white">
      <figure className="mpc-container max-w-[1000px] text-center m-0 mx-auto">
        <QuoteMark />
        <blockquote className="m-0 mt-6 mb-5 font-bold text-[26px] md:text-[38px] leading-[1.22]">“{FOCUS_QUOTE}”</blockquote>
        <figcaption className="text-ivory font-bold text-[17px]">{FOCUS_ATTRIBUTION}</figcaption>
      </figure>
    </section>
  )
}

/* ─── Prompt 9 + 10b: Roots, journey, who are you, closing ─── */

const TIMELINE = [
  { when: 'Early 2000s', what: 'Community organizations across Massachusetts engage parents as leaders' },
  { when: '2006–2010', what: 'Thrive in 5 and Parent Partners bring parent voices into early childhood policy' },
  { when: '2009', what: 'Parent University builds leadership in schools and communities' },
  { when: '2010–2020', what: 'Organizations such as East Boston Social Centers and Families First expand the work' },
  { when: '2025', what: 'Mass ParentCorps begins', now: true },
  { when: 'June 2026', what: 'The pilot launches', now: true },
]

const FOUNDERS_SHORT = [
  {
    name: 'Don Hawley',
    title: 'Co-Founder and CEO',
    photo: '/images/founders/don-hawley.jpg',
    bio: 'A former business executive and consultant who, since 2010, has focused on nonprofit and early childhood systems change across Massachusetts, and on connecting parent leadership to real career pathways.',
  },
  {
    name: 'Magda Rodriguez-Villafañe',
    title: 'Co-Founder and President',
    photo: '/images/founders/magda-rodriguez-villafane.jpg',
    bio: 'A family engagement leader who led the Parent Leadership Initiative (Ripple) at Families First, recognized nationally at Harvard University, and developed Families United for School and Education (FUSE).',
  },
]

function Roots() {
  return (
    <Section id="legacy" bg="white">
      <SectionLabel>Our roots</SectionLabel>
      <H2>Built on a legacy of parent leadership.</H2>
      <p className="m-0 mb-12 text-[19px] max-w-[48rem]">
        Mass ParentCorps did not start from scratch. For more than two decades, parents and organizations across
        Massachusetts have led this work in early childhood programs, schools, and community agencies. We honor pioneers
        such as <strong>Gloria DeVine</strong> and <strong>Cyntoria Grant</strong>, and every parent leader who opened
        doors before us. Our work is to build on what they started.
      </p>

      <ol className="m-0 p-0 list-none grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
        {TIMELINE.map((t, i) => (
          <li key={t.when} className="relative pl-7 lg:pl-0 lg:pt-9">
            {i < TIMELINE.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bg-tint-300 left-[6px] top-4 bottom-[-2rem] w-[2px] sm:hidden lg:block lg:left-3 lg:right-[-1.5rem] lg:top-[6px] lg:bottom-auto lg:w-auto lg:h-[2px]"
              />
            )}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 lg:top-0 w-3.5 h-3.5 rounded-full ${t.now ? 'bg-gold' : 'bg-evergreen'}`}
            />
            <p className="m-0 font-extrabold text-evergreen text-[17px]">{t.when}</p>
            <p className="m-0 mt-1 text-[16px] leading-snug">{t.what}</p>
          </li>
        ))}
      </ol>

      <h3 className="m-0 mt-16 mb-6 font-extrabold text-[28px]">The founders</h3>
      <FounderCards founders={FOUNDERS_SHORT} />
      <div className="mt-8">
        <Button href="/about" variant="dark">
          Read our story
        </Button>
      </div>

      <hr className="my-16 border-0 h-px bg-tint-200" />
      <h3 className="m-0 mb-2 font-extrabold text-[28px]">The movement today</h3>
      <p className="m-0 mb-8 text-[18px]">Parent leaders from both cohorts, out in the community and at the table.</p>
      <MomentsGrid />
    </Section>
  )
}

function Journey() {
  const phases = [
    {
      badge: 'Complete',
      title: 'Phase 1 · Listening',
      body: 'A needs assessment with parent leaders, community organizations, state agencies, and higher education, including focus groups with 27 parents.',
      dark: false,
      seal: false,
      minH: 'md:min-h-[280px]',
    },
    {
      badge: 'Underway',
      title: 'Phase 2 · The Pilot',
      body: 'Two cohorts with Urban College of Boston and Middlesex Community College. Parents earn a Mass ParentCorps Credential and college credits: up to 9 at Urban College of Boston and up to 6 at Middlesex Community College.',
      dark: false,
      seal: true,
      minH: 'md:min-h-[340px]',
    },
    {
      badge: 'Building now',
      title: 'Phase 3 · Statewide',
      body: 'Infrastructure & sustainability: a shared framework, a cross-agency coalition, and a lasting funding base so parent leadership can grow across the Commonwealth.',
      dark: true,
      seal: false,
      minH: 'md:min-h-[400px]',
    },
  ]
  return (
    <Section id="journey" bg="ivory">
      <SectionLabel>The journey so far</SectionLabel>
      <H2 className="mb-12">Elevating, step by step.</H2>
      <div className="grid gap-5 md:grid-cols-3 items-end">
        {phases.map((p) => (
          <div
            key={p.title}
            className={`mpc-lift rounded-card p-8 ${p.minH} ${p.dark ? 'bg-ink text-white' : 'bg-white text-ink'}`}
          >
            <div className="flex justify-between items-start gap-3">
              <span
                className={`inline-block rounded-full px-3 py-1.5 text-[14px] font-bold ${
                  p.dark ? 'bg-gold text-ink' : 'bg-tint-100 text-evergreen'
                }`}
              >
                {p.badge}
              </span>
              {p.seal && <Seal size={76} />}
            </div>
            <h3 className="m-0 mt-4 mb-2 font-extrabold text-[24px]">{p.title}</h3>
            <p className={`m-0 text-[17px] ${p.dark ? 'text-ivory' : ''}`}>{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function MeetParentLeaders() {
  return (
    <Section id="parents" bg="white">
      <SectionLabel>Meet our parent leaders</SectionLabel>
      <H2>The faces of the movement.</H2>
      <Lead className="mb-8">
        Parents from Dorchester, East Boston, and communities across Massachusetts, many of them immigrants and
        multilingual, leading where they live.
      </Lead>
      <ParentLeaders />
    </Section>
  )
}

const PARTNERS = [
  'Families First',
  'Union Capital Boston',
  'East Boston Social Centers',
  'Family Nurturing Center of Massachusetts',
  'Boys & Girls Clubs of Dorchester',
  'Urban College of Boston',
  'Middlesex Community College',
  'NYU Metro Center',
  'EEC',
  'DESE',
]

function Join() {
  return (
    <Section id="join" bg="ivory">
      <H2 className="mb-3">
        I am a parent. I am a leader. <span className="text-evergreen">Who are you?</span>
      </H2>
      <p className="m-0 mb-7 text-[19px] max-w-[42rem]">
        Everyone has a role in elevating parent leadership. Join us to build it. <strong>I am a…</strong>
      </p>
      <WhoAreYou />

      <div className="mt-16 pt-10 border-t border-tint-200">
        <SectionLabel>Building it together with</SectionLabel>
        <ul className="m-0 p-0 list-none flex flex-wrap gap-2.5">
          {PARTNERS.map((p) => (
            <li key={p} className="rounded-full bg-white px-4 py-2.5 text-[16px] font-medium">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function Closing() {
  return (
    <section className="bg-evergreen text-white border-b border-white/10">
      <div className="mpc-container py-[72px] md:py-[96px] flex flex-wrap gap-10 items-center justify-between">
        <p className="m-0 flex-[1_1_560px] min-w-0 font-extrabold text-[30px] md:text-[44px] leading-[1.1] tracking-[-0.02em]">
          A Commonwealth where parent leadership is recognized as skilled work and invested in as a public good
          <Dot />
        </p>
        <Link
          href="#join"
          className="inline-flex items-center min-h-[52px] px-8 rounded-full bg-gold text-ink font-bold text-[18px] hover:brightness-105"
        >
          Join the Movement
        </Link>
      </div>
    </section>
  )
}
