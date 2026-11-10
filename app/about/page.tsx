import { Button, Card, H2, Lead, PageHero, Section, SectionLabel, StatTile, BulletList, Dot } from '../components/ui'
import { Definition, FOCUS_ATTRIBUTION, FOCUS_QUOTE, FounderCards } from '../components/shared'

export const metadata = {
  title: 'About',
  description:
    'Mass ParentCorps is building a statewide infrastructure for parent leadership in Massachusetts, with parent leaders and organizations.',
}

const FOUNDERS = [
  {
    name: 'Don Hawley',
    title: 'Co-Founder and CEO',
    photo: '/images/founders/don-hawley.jpg',
    bio: 'A former business executive and consultant who, since 2010, has focused on nonprofit and early childhood systems change across Massachusetts. Years alongside organizations that engage parents as leaders showed him both the power of parent leadership and the need to connect it to structured pathways.',
  },
  {
    name: 'Magda Rodriguez-Villafañe',
    title: 'Co-Founder and President',
    photo: '/images/founders/magda-rodriguez-villafane.jpg',
    bio: 'A family engagement leader with a track record of advancing parent leadership. She led the Parent Leadership Initiative (Ripple) at Families First, recognized nationally at Harvard University, and developed Families United for School and Education (FUSE).',
  },
]

const HISTORY = [
  { when: 'Early 2000s', title: 'Community programs expand', text: 'Community organizations across Massachusetts engage parents as leaders.' },
  { when: '2006–2010', title: 'Thrive in 5 and Parent Partners', text: 'Parent voices help shape early childhood policies and systems.' },
  { when: '2009', title: 'Parent University', text: 'Leadership development for parents in schools and communities.' },
  { when: '2010–2020', title: 'Expansion across Massachusetts', text: 'Organizations such as East Boston Social Centers advance parent leadership.' },
  { when: '2015–2024', title: 'Exploring workforce pathways', text: 'Don Hawley explores how leadership experience can connect to careers.' },
  { when: '2025', title: 'Mass ParentCorps begins', text: 'Co-founders Don Hawley and Magda Rodriguez-Villafañe design the pilot.' },
  { when: 'June 2026', title: 'Pilot launch', text: 'Cohort 1 begins at Urban College of Boston; Cohort 2 follows at Middlesex.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Mass ParentCorps"
        title={
          <>
            Parents are already leading
            <Dot />
          </>
        }
        lead="Our job is to help the world recognize it, invest in it, and build the structures that allow it to thrive."
      >
        <Button href="/#join">Join the Movement</Button>
        <Button href="#founders" variant="outline-light">
          Meet the founders
        </Button>
      </PageHero>

      {/* 2. Mission and vision */}
      <Section bg="white">
        <SectionLabel>Mission and vision</SectionLabel>
        <H2 className="mb-10">What we&apos;re building, and why.</H2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card bg="ivory">
            <h3 className="m-0 mb-3 font-extrabold text-[26px]">Our mission</h3>
            <p className="m-0 text-[18px]">
              Build a statewide infrastructure for parent leadership in Massachusetts, with parent leaders and
              organizations, that increases awareness of parent leadership&apos;s impact, expands pathways and
              opportunities, influences policy and systems, and attracts investment to the field.
            </p>
          </Card>
          <Card bg="evergreen">
            <h3 className="m-0 mb-3 font-extrabold text-[26px] text-gold-light">Our vision</h3>
            <p className="m-0 text-[18px] text-ivory">
              A Commonwealth where parent leadership is visible, recognized, valued, and invested in; where systems
              serving families have structures for parents to lead and shape solutions; and where parent leaders have
              pathways to grow in leadership, education, and careers.
            </p>
          </Card>
        </div>
      </Section>

      {/* 7. Founders */}
      <Section id="founders" bg="ivory">
        <SectionLabel>Founders</SectionLabel>
        <H2 className="mb-10">The people behind Mass ParentCorps.</H2>
        <FounderCards founders={FOUNDERS} bg="white" />
      </Section>

      {/* 5. History */}
      <Section bg="white">
        <SectionLabel>Our history</SectionLabel>
        <H2>Honoring those who came before.</H2>
        <Lead>
          Mass ParentCorps did not start from scratch. This work has been shaped by generations of parent leaders and
          the organizations that believed in them, including pioneers such as <strong>Gloria DeVine</strong> and{' '}
          <strong>Cyntoria Grant</strong>. With gratitude, we build on what they started.
        </Lead>
        <ol className="m-0 p-0 list-none max-w-[48rem]">
          {HISTORY.map((h, i) => {
            const last = i === HISTORY.length - 1
            return (
              <li key={h.when} className="relative pl-10 pb-8 last:pb-0">
                {!last && <span aria-hidden="true" className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-tint-300" />}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${last ? 'bg-gold' : 'bg-evergreen'}`}
                />
                <p className="m-0 font-extrabold text-evergreen text-[17px]">{h.when}</p>
                <p className="m-0 mt-0.5 text-[18px]">
                  <strong>{h.title}:</strong> {h.text}
                </p>
              </li>
            )
          })}
        </ol>
      </Section>

      {/* 3. What is parent leadership */}
      <Section bg="ivory">
        <SectionLabel>What is parent leadership?</SectionLabel>
        <Definition onIvory className="text-[28px] md:text-[42px] max-w-[60rem]" />
        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <Card bg="white">
            <h3 className="m-0 mb-2 font-extrabold text-[24px] text-evergreen-light">Family engagement</h3>
            <p className="m-0 text-[19px] font-bold">Invites parents in.</p>
          </Card>
          <Card bg="evergreen">
            <h3 className="m-0 mb-2 font-extrabold text-[24px] text-gold-light">Shared leadership</h3>
            <p className="m-0 text-[19px] font-bold">
              Gives parents a real say in setting priorities, making decisions, and evaluating the systems that shape
              their families&apos; lives.
            </p>
          </Card>
        </div>
      </Section>

      {/* 4. What we heard */}
      <Section bg="white">
        <SectionLabel>What parents and agencies told us</SectionLabel>
        <H2>Built on what we heard.</H2>
        <Lead>
          In January 2026 we held six focus groups with 27 parent leaders, four in English and two in Spanish, from five
          community-based organizations. These findings shaped the design of Mass ParentCorps.
        </Lead>
        <div className="flex flex-wrap gap-3 mb-10">
          <StatTile n="6" label="Focus groups" />
          <StatTile n="27" label="Parent leaders" />
          <StatTile n="2" label="Languages" />
          <StatTile n="5" label="Community organizations" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card bg="ivory" lift={false}>
            <h3 className="m-0 mb-4 font-extrabold text-[24px]">Parents told us</h3>
            <BulletList
              items={[
                'Leadership is advocacy: they use lived experience to influence systems and support families',
                'They are building workforce-ready skills without formal recognition',
                'No clear pathway exists to turn leadership into career advancement',
                'There is strong demand for credentials, paid roles, and college credit',
                'Equity and multilingual access are non-negotiable',
              ]}
            />
          </Card>
          <Card bg="ivory" lift={false}>
            <h3 className="m-0 mb-4 font-extrabold text-[24px]">Agencies told us</h3>
            <BulletList
              items={[
                'A persistent lack of dedicated funding for parent leadership roles',
                'Parent leadership is not consistently recognized as a formal role',
                'A disconnected framework, with no shared standards across organizations',
                'Burnout among the staff who support parent leaders',
              ]}
            />
          </Card>
        </div>
        <figure className="m-0 mt-6 rounded-card bg-terracotta text-white p-8 md:p-10">
          <blockquote className="m-0 font-bold text-[22px] md:text-[28px] leading-[1.3]">“{FOCUS_QUOTE}”</blockquote>
          <figcaption className="mt-4 text-ivory font-bold">{FOCUS_ATTRIBUTION}</figcaption>
        </figure>
      </Section>

      {/* 6. Watch */}
      <Section bg="ivory">
        <SectionLabel>Watch</SectionLabel>
        <H2>Hear from Huong and Peace.</H2>
        <Lead>
          Huong Vu and Peace Junaid, Cohort 1 parent leaders from Boys &amp; Girls Clubs of Dorchester, share their
          experience as parent leaders in Mass ParentCorps.
        </Lead>
        <div className="relative w-full max-w-[960px] overflow-hidden rounded-[28px] bg-ink" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/fbjoawtn_1w"
            title="Huong Vu and Peace Junaid on parent leadership"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Section>
    </>
  )
}
