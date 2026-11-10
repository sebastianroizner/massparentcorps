import { BadgeCheck, Briefcase, ClipboardCheck, UserPlus } from 'lucide-react'
import { Button, Card, C, Dot, H2, Lead, PageHero, Section, SectionLabel } from '../components/ui'

export const metadata = {
  title: 'For Organizations',
  description:
    'Community organizations are co-designers of the pathway that turns parent leadership into recognized, credentialed work.',
}

export default function ForOrganizationsPage() {
  return (
    <>
      <PageHero
        label="For community organizations"
        title={
          <>
            Grow leaders from within your community
            <Dot />
          </>
        }
        lead="Community organizations are not just a referral source. You are co-designers of the pathway that turns parent leadership into recognized, credentialed work."
      >
        <Button href="mailto:mpc@massparentcorps.org?subject=Agency%20partnership">Become a partner</Button>
        <Button href="#refer" variant="outline-light">
          Request the referral guide
        </Button>
      </PageHero>

      <Section bg="white">
        <SectionLabel>Your role</SectionLabel>
        <H2 className="mb-10">How your organization makes it work.</H2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: UserPlus, t: 'Identify and refer', d: 'Spot parent leaders in your programs who meet eligibility and refer them.' },
            { icon: ClipboardCheck, t: 'Verify hours', d: 'Confirm 60 hours of leadership experience and 8 hours of approved training.' },
            { icon: BadgeCheck, t: 'Support applied learning', d: "Host and guide each participant's Applied Learning Project." },
            { icon: Briefcase, t: 'Create hiring pathways', d: 'Help build routes from parent leadership into paid staff roles.' },
          ].map(({ icon: Icon, t, d }) => (
            <Card key={t} bg="ivory">
              <Icon size={36} color={C.evergreen} aria-hidden="true" />
              <h3 className="m-0 mt-5 mb-2 font-extrabold text-[22px]">{t}</h3>
              <p className="m-0">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="refer" bg="ivory" innerClassName="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
        <div>
          <SectionLabel>Referral process</SectionLabel>
          <H2>Refer a parent leader in four steps.</H2>
          <p className="m-0 mb-8 text-[19px]">Every participant is referred by a sponsoring community-based organization.</p>
          {/* TODO: if the Agency Referral and Screening Guide PDF is added to /public, link to it here instead. */}
          <Button href="mailto:mpc@massparentcorps.org?subject=Agency%20referral%20guide" variant="dark">
            Email us for the guide
          </Button>
        </div>
        <ol className="m-0 p-0 list-none flex flex-col gap-3">
          {[
            ['Review eligibility', 'Confirm 60+ hours of leadership experience, 8+ hours of training, a high school diploma or GED, and comfort learning in English.'],
            ['Get the referral guide', 'Email us for the Agency Referral and Screening Guide and the referral form.'],
            ['Submit your referral', 'Complete the form for your candidate before the cohort deadline.'],
            ['Support their journey', 'Stay connected as their sponsor through the project and toward a paid role.'],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-5 rounded-2xl bg-white p-6">
              <span className="flex-none w-11 h-11 rounded-full bg-evergreen text-white font-extrabold text-[20px] flex items-center justify-center">
                {i + 1}
              </span>
              <span>
                <span className="block font-extrabold text-[19px]">{t}</span>
                <span className="block mt-1">{d}</span>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="evergreen">
        <SectionLabel tone="light">Phase 3</SectionLabel>
        <H2>Help shape the statewide infrastructure.</H2>
        <Lead className="text-ivory">
          We&apos;re not asking organizations to watch from the outside. We&apos;re inviting you to help build it, across
          three working areas.
        </Lead>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Framework and curriculum', 'A shared Parent Leadership Framework and a universal, credit-bearing curriculum.'],
            ['Funding and policy', 'A standing coalition pursuing durable public funding and formal recognition.'],
            ['Evaluation and research', 'A statewide evidence base, with NYU Metro Center, to prove impact and improve the model.'],
          ].map(([t, d]) => (
            <Card key={t} bg="white">
              <h3 className="m-0 mb-2 font-extrabold text-[22px]">{t}</h3>
              <p className="m-0">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionLabel>Our partners</SectionLabel>
        <H2 className="mb-8">Our community partners.</H2>
        <ul className="m-0 p-0 list-none flex flex-wrap gap-2.5 mb-8">
          {[
            'Families First',
            'East Boston Social Centers',
            'Family Nurturing Center of Massachusetts',
            'Union Capital Boston',
            'Boys & Girls Clubs of Dorchester',
          ].map((p) => (
            <li key={p} className="rounded-full bg-ivory px-5 py-3 font-bold">
              {p}
            </li>
          ))}
        </ul>
        <p className="m-0 text-[18px] max-w-[48rem]">
          Design and government partners: the Department of Early Education and Care (EEC) and the Department of
          Elementary and Secondary Education (DESE) took part in the initial design phase.
        </p>
      </Section>
    </>
  )
}
