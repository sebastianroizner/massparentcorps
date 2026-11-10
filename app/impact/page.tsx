import { Button, Card, Dot, H2, Lead, PageHero, Section, SectionLabel, StatTile, BulletList } from '../components/ui'
import { CREDIT_BULLETS, Seal } from '../components/shared'

export const metadata = {
  title: 'The Pilot',
  description:
    'Two cohorts, two community colleges, and 15 sponsor agencies, independently evaluated by NYU Metro Center.',
}

const NOTIFY = 'https://forms.gle/8ivwftzEML241N1X7'

const STEPS = [
  { kind: 'Prerequisite', title: 'Leadership experience', text: 'At least 60 hours as a parent leader, family advocate, or organizer.' },
  { kind: 'Prerequisite', title: 'Leadership training', text: 'At least 8 hours of approved training through a partner organization.' },
  { kind: 'College credit', title: 'College credit course', text: 'A credit-bearing course with Urban College of Boston or Middlesex Community College.' },
  { kind: 'Applied learning', title: 'Applied Learning Project', text: "A project connected to the parent's organization and community." },
  { kind: 'Community', title: 'Community Learning Sessions', text: 'Monthly sessions with peers and practitioners across the state.' },
  { kind: 'Graduation', title: 'Credential and credits', text: 'Evaluations, graduation, and the Mass ParentCorps Credential.' },
]

const STAIR = ['lg:min-h-[260px]', 'lg:min-h-[290px]', 'lg:min-h-[320px]', 'lg:min-h-[350px]', 'lg:min-h-[380px]', 'lg:min-h-[410px]']

export default function PilotPage() {
  return (
    <>
      <PageHero
        label="The Pilot"
        title={
          <>
            Proof that parent leadership can be credentialed
            <Dot />
          </>
        }
        lead="Two cohorts, two community colleges, and 15 sponsor agencies, independently evaluated by NYU Metro Center."
      >
        <Button href={NOTIFY}>Get notified about future cohorts</Button>
        <Button href="#how" variant="outline-light">
          See how it works
        </Button>
      </PageHero>

      <Section bg="white">
        <SectionLabel>The pilot at a glance</SectionLabel>
        <H2 className="mb-10">The numbers so far.</H2>
        <div className="flex flex-wrap gap-3 mb-10">
          <StatTile n="40" label="Parent leaders across two cohorts" />
          <StatTile n="19" label="Parent leaders in Cohort 1" />
          <StatTile n="21" label="Parent leaders in Cohort 2" />
          <StatTile n="15" label="Sponsor agencies" />
          <StatTile n="15+" label="Other partner agencies" />
          <StatTile n="2" label="Community colleges" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card bg="ivory">
            <p className="m-0 mb-2 font-bold uppercase text-[14px] tracking-[0.08em] text-evergreen">Cohort 1 · Complete</p>
            <h3 className="m-0 mb-3 font-extrabold text-[24px]">Urban College of Boston</h3>
            <p className="m-0">
              Launched June 2026 with 19 parent leaders, many of them immigrants and multilingual. Course: HUS 110, Core
              Competencies for Community Workers.
            </p>
            <p className="m-0 mt-3 font-bold">Up to 9 college credits.</p>
          </Card>
          <Card bg="ivory">
            <p className="m-0 mb-2 font-bold uppercase text-[14px] tracking-[0.08em] text-evergreen">Cohort 2 · Underway</p>
            <h3 className="m-0 mb-3 font-extrabold text-[24px]">Middlesex Community College</h3>
            <p className="m-0">
              Fall 2026, 100% online, with 21 parent leaders. Course: SOC 110, Community Leadership and Organizing.
            </p>
            <p className="m-0 mt-3 font-bold">Up to 6 college credits.</p>
          </Card>
          <Card bg="evergreen" className="flex flex-col">
            <p className="m-0 mb-2 font-bold uppercase text-[14px] tracking-[0.08em] text-gold-light">Next</p>
            <h3 className="m-0 mb-3 font-extrabold text-[24px]">Future cohorts</h3>
            <p className="m-0 mb-6 text-ivory">
              Planning is underway as part of Phase 3. Sign up to hear first when the next cohort opens.
            </p>
            <Button href={NOTIFY} className="mt-auto self-start">
              Notify me
            </Button>
          </Card>
        </div>
      </Section>

      <Section id="how" bg="ivory">
        <SectionLabel>How it works</SectionLabel>
        <H2>Six steps, rising to a credential.</H2>
        <Lead>Every step builds on the leadership parents already practice.</Lead>
        <ol className="m-0 p-0 list-none grid gap-4 sm:grid-cols-2 lg:grid-cols-6 items-end">
          {STEPS.map((s, i) => {
            const last = i === STEPS.length - 1
            return (
              <li
                key={s.title}
                className={`rounded-card p-6 flex flex-col ${STAIR[i]} ${
                  last ? 'bg-evergreen text-white border-t-[6px] border-gold' : 'bg-white'
                }`}
              >
                <span className={`font-extrabold text-[15px] ${last ? 'text-gold-light' : 'text-evergreen'}`}>Step {i + 1}</span>
                <span className={`mt-1 text-[13px] font-bold uppercase tracking-[0.06em] ${last ? 'text-ivory' : ''}`}>
                  {s.kind}
                </span>
                <h3 className="m-0 mt-auto pt-6 mb-2 font-extrabold text-[20px] leading-tight">{s.title}</h3>
                <p className={`m-0 text-[15px] leading-snug ${last ? 'text-ivory' : ''}`}>{s.text}</p>
              </li>
            )
          })}
        </ol>
      </Section>

      <Section bg="white">
        <SectionLabel>What parents earn</SectionLabel>
        <H2 className="mb-10">Two awards. Both theirs to keep.</H2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card bg="ivory" className="flex flex-col gap-4">
            <Seal size={96} />
            <p className="m-0 text-[18px]">
              <strong>Mass ParentCorps Credential:</strong> A new credential gaining statewide recognition, a formal mark
              of parent leadership expertise and community impact.
            </p>
          </Card>
          <Card bg="ivory" className="flex flex-col gap-4">
            <p className="m-0 font-extrabold text-[56px] leading-none text-evergreen">Up to 9</p>
            <p className="m-0 text-[18px]">
              <strong>College credits:</strong> Credits earned through Urban College of Boston or Middlesex Community
              College, and applicable toward future certificates and degrees.
            </p>
            <BulletList items={CREDIT_BULLETS} />
            <p className="m-0 text-[15px]">Up to 9 credits at Urban College of Boston · up to 6 at Middlesex Community College</p>
          </Card>
        </div>
      </Section>

      <Section bg="evergreen" innerClassName="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel tone="light">Evaluation</SectionLabel>
          <H2>Learning as we go.</H2>
          <p className="m-0 mb-8 text-[19px] text-ivory">
            The pilot is independently evaluated by NYU Metro Center&apos;s Center for Policy, Research and Evaluation,
            led by Dr. Joanna Geller and Lisette DeSouza, to build the evidence base for statewide expansion.
          </p>
          <BulletList
            tone="light"
            items={[
              'Develop a logic model',
              'Measure leadership skill development',
              'Assess workforce readiness',
              'Document lessons learned',
            ]}
          />
        </div>
        <div className="rounded-card bg-white/10 p-8">
          <h3 className="m-0 mb-5 font-extrabold text-[24px] text-gold-light">Questions guiding the pilot</h3>
          <ol className="m-0 p-0 list-none flex flex-col gap-4">
            {[
              'Which workforce skills matter most as parent leaders move into staff roles?',
              'How can leadership experience be recognized as professional preparation?',
              'How does academic learning strengthen leadership practice?',
              'How can organizations create hiring pathways for parent leaders?',
              'How can the model expand across Massachusetts?',
            ].map((q, i) => (
              <li key={q} className="flex gap-4">
                <span className="flex-none w-8 h-8 rounded-full bg-gold text-ink font-extrabold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-ivory">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section bg="ivory">
        <SectionLabel>Meet the cohort</SectionLabel>
        <H2>Put faces to the numbers.</H2>
        <Lead className="mb-8">See the parent leaders of Cohort 1 and Cohort 2 on our homepage.</Lead>
        <Button href="/#parents" variant="dark">
          Meet our parent leaders
        </Button>
      </Section>
    </>
  )
}
