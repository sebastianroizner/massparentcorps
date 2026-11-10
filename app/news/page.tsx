import { Button, Dot, H2, Lead, PageHero, Section, SectionLabel } from '../components/ui'
import NewsList from '../components/NewsList'

export const metadata = {
  title: 'News',
  description: 'Updates on Mass ParentCorps cohorts, partnerships, research, and events as the movement grows.',
}

const SUBSCRIBE = 'mailto:mpc@massparentcorps.org?subject=Subscribe%20to%20MPC%20updates'

export default function NewsPage() {
  return (
    <>
      <PageHero
        art={false}
        label="News and updates"
        title={
          <>
            From the field
            <Dot />
          </>
        }
        lead="Updates on our cohorts, partnerships, research, and events as the movement grows."
      >
        <Button href={SUBSCRIBE}>Subscribe for updates</Button>
      </PageHero>

      <Section bg="white">
        <div className="rounded-card bg-ivory p-8 md:p-12 mb-16">
          <SectionLabel>Upcoming event</SectionLabel>
          <h2 className="m-0 mb-4 font-extrabold text-[28px] md:text-[40px] leading-[1.1] max-w-[48rem]">
            Elevating Parent Leadership: Lessons from Our First Cohort
          </h2>
          <p className="m-0 mb-8 text-[18px] max-w-[46rem]">
            Tuesday, November 17, 2026, 9:30 to 11:00 a.m. Urban College of Boston, 2 Boylston Street, and online.
            Breakfast provided; in-person seating is limited to 40.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button href="https://forms.gle/SriwfVDiQMvBxqXZ7" variant="dark">
              RSVP to join online
            </Button>
            <Button href="mailto:qli@massparentcorps.org?subject=Panel%20RSVP" variant="outline-dark">
              RSVP to attend in person
            </Button>
          </div>
        </div>

        <H2 className="mb-8">All updates</H2>
        <NewsList />
      </Section>

      <Section bg="evergreen">
        <SectionLabel tone="light">Stay connected</SectionLabel>
        <Lead className="text-ivory mb-8">
          Get updates about pilot cohorts, partnerships, evaluation insights, and future opportunities delivered directly
          to your inbox.
        </Lead>
        <Button href={SUBSCRIBE}>Subscribe via email</Button>
      </Section>
    </>
  )
}
