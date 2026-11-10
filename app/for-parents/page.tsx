import { Users } from 'lucide-react'
import { Button, Card, C, Dot, H2, Lead, PageHero, Section, SectionLabel, BulletList } from '../components/ui'
import { CREDIT_BULLETS, Seal } from '../components/shared'
import QualifyChecklist from '../components/QualifyChecklist'

export const metadata = {
  title: 'For Parents',
  description:
    'Mass ParentCorps turns the leadership you already do into a credential, college credits, and a path forward.',
}

const NOTIFY = 'https://forms.gle/8ivwftzEML241N1X7'

export default function ForParentsPage() {
  return (
    <>
      <PageHero
        label="For parents and caregivers"
        title={
          <>
            <span className="block">
              I am a parent
              <Dot />
            </span>
            <span className="block text-gold-light">
              I am a leader
              <Dot />
            </span>
          </>
        }
        lead="Your leadership deserves recognition. Mass ParentCorps turns the leadership you already do into a credential, college credits, and a path forward."
      >
        <Button href={NOTIFY}>Get notified about the next cohort</Button>
        <Button href="#qualify" variant="outline-light">
          Do I qualify?
        </Button>
      </PageHero>

      <section className="bg-ivory py-6">
        <ul className="mpc-container m-0 list-none flex flex-wrap gap-x-10 gap-y-2 font-bold text-[16px]">
          <li className="flex items-center gap-2.5">
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-evergreen" />
            Cohort 1 (Urban College of Boston): complete
          </li>
          <li className="flex items-center gap-2.5">
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-evergreen-light" />
            Cohort 2 (Middlesex Community College): underway
          </li>
          <li className="flex items-center gap-2.5">
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-gold" />
            Next cohort: sign up to hear first when it opens
          </li>
        </ul>
      </section>

      <Section bg="white">
        <SectionLabel>What you earn</SectionLabel>
        <H2 className="mb-10">Two awards. Both yours to keep.</H2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card bg="ivory" className="flex flex-col gap-4">
            <Seal size={88} />
            <p className="m-0 text-[17px]">
              <strong>Mass ParentCorps Credential:</strong> A formal mark of your parent leadership expertise and
              community impact, gaining recognition across Massachusetts.
            </p>
          </Card>
          <Card bg="ivory" className="flex flex-col gap-4">
            <p className="m-0 font-extrabold text-[56px] leading-none text-evergreen">Up to 9</p>
            <p className="m-0 text-[17px]">
              <strong>College credits:</strong> Credits you can apply toward future certificates, associate&apos;s
              degrees, and beyond, on your own timeline.
            </p>
            <BulletList items={CREDIT_BULLETS} />
            <p className="m-0 text-[15px]">Up to 9 credits at Urban College of Boston · up to 6 at Middlesex Community College</p>
          </Card>
          <Card bg="ivory" className="flex flex-col gap-4">
            <span className="w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center">
              <Users size={44} color={C.evergreen} aria-hidden="true" />
            </span>
            <p className="m-0 text-[17px]">
              <strong>A community of leaders:</strong> Monthly Community Learning Sessions connect you with parent
              leaders and practitioners across the state.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="qualify" bg="ivory">
        <SectionLabel>Do I qualify?</SectionLabel>
        <H2>Check yourself in one minute.</H2>
        <Lead>
          Tap each requirement you already meet. Spots are limited, and every participant is referred by a sponsoring
          community organization.
        </Lead>
        <QualifyChecklist />
      </Section>

      <Section bg="white">
        <SectionLabel>Your journey</SectionLabel>
        <H2 className="mb-10">From leader to credentialed leader.</H2>
        <ol className="m-0 p-0 list-none grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Get referred', 'Your community organization confirms your hours and training and refers you.'],
            ['Take the course', 'Earn college credit in a course built for community leaders.'],
            ['Lead a project', 'Complete an Applied Learning Project in your own community.'],
            ['Graduate', 'Earn the Mass ParentCorps Credential and your credits.'],
          ].map(([t, d], i) => (
            <li key={t} className="rounded-card bg-ivory p-8">
              <span
                className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[22px] ${
                  i === 3 ? 'bg-gold text-ink' : 'bg-evergreen text-white'
                }`}
              >
                {i + 1}
              </span>
              <h3 className="m-0 mt-5 mb-2 font-extrabold text-[22px]">{t}</h3>
              <p className="m-0">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="evergreen">
        <SectionLabel tone="light">Not sure yet?</SectionLabel>
        <H2>We&apos;ll help you figure it out.</H2>
        <Lead className="text-ivory mb-8">
          Email us and a member of our team will walk you through eligibility and next steps.
        </Lead>
        <Button href="mailto:mpc@massparentcorps.org" className="break-all">
          Email mpc@massparentcorps.org
        </Button>
      </Section>
    </>
  )
}
