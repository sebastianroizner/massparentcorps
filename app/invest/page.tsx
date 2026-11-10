import { HandCoins, Landmark, Network, Sprout, TrendingUp, Users } from 'lucide-react'
import { Button, Card, C, Dot, H2, Lead, PageHero, Section, SectionLabel, StatTile } from '../components/ui'

export const metadata = {
  title: 'Invest',
  description:
    'Parent leadership is essential infrastructure. Help build a statewide infrastructure for parent leadership in Massachusetts.',
}

const TALK = 'mailto:mpc@massparentcorps.org?subject=Investing%20in%20parent%20leadership'

export default function InvestPage() {
  return (
    <>
      <PageHero
        label="For funders and policymakers"
        title={
          <>
            Parent leadership is essential infrastructure
            <Dot />
          </>
        }
        lead="Our goal is not to create leadership where it doesn't exist. It is to recognize, connect, and invest in the leadership that is already there."
      >
        <Button href={TALK}>Talk with us about investing</Button>
        <Button href="#proof" variant="outline-light">
          See the proof
        </Button>
      </PageHero>

      <Section bg="white">
        <SectionLabel>Why it matters</SectionLabel>
        <H2>Families experience life as a whole. Systems don&apos;t.</H2>
        <Lead>
          Education, health, housing, and work are connected in every family&apos;s life, but the systems that serve
          families often operate separately. Parent leaders bridge those gaps. From early childhood to higher education,
          they touch every system families rely on, yet their leadership is rarely recognized or funded.
        </Lead>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, t: 'Builds connection and civic power', s: 'ZERO TO THREE (2020); Henderson et al. (2016)' },
            { icon: TrendingUp, t: 'Expands education and career pathways', s: 'Geller et al. (2017), NYU Metro Center' },
            { icon: Network, t: 'Influences systems and policy', s: 'Geller et al. (2017); Henderson et al. (2016)' },
          ].map(({ icon: Icon, t, s }) => (
            <Card key={t} bg="ivory">
              <Icon size={36} color={C.evergreen} aria-hidden="true" />
              <h3 className="m-0 mt-5 mb-2 font-extrabold text-[22px]">{t}</h3>
              <p className="m-0 text-[15px]">Research: {s}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="proof" bg="ivory">
        <SectionLabel>The proof</SectionLabel>
        <H2 className="mb-10">The pilot is working.</H2>
        <div className="flex flex-wrap gap-3 mb-6">
          <StatTile bg="white" n="40" label="Parent leaders across two cohorts" />
          <StatTile bg="white" n="15" label="Sponsor agencies" />
          <StatTile bg="white" n="15+" label="Other partner agencies" />
          <StatTile bg="white" n="2" label="Community colleges" />
        </div>
        <p className="m-0 text-[18px]">
          Independently evaluated by NYU Metro Center&apos;s Center for Policy, Research and Evaluation.
        </p>
      </Section>

      <Section bg="evergreen">
        <SectionLabel tone="light">What your investment builds</SectionLabel>
        <H2 className="mb-10">A statewide infrastructure for parent leadership.</H2>
        <ol className="m-0 p-0 list-none grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Increase awareness', 'Make parent leadership visible and recognized as skilled, valuable work.'],
            ['Expand pathways', 'Connect leadership experience to college credit, credentials, and careers.'],
            ['Influence policy', 'Move from family engagement to shared leadership in public decisions.'],
            ['Attract investment', 'Build lasting public, philanthropic, and community funding.'],
          ].map(([t, d], i) => (
            <li key={t} className="mpc-lift rounded-card bg-white text-ink p-8">
              <span className="block font-extrabold text-[56px] leading-none text-gold">{i + 1}</span>
              <h3 className="m-0 mt-4 mb-2 font-extrabold text-[22px]">{t}</h3>
              <p className="m-0">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="white">
        <SectionLabel>Collective investment</SectionLabel>
        <H2 className="mb-10">Lasting change takes all of us.</H2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: HandCoins, t: 'Philanthropy', d: 'Helps test and strengthen the model while the evidence grows.' },
            {
              icon: Landmark,
              t: 'Government',
              d: 'Sustains what works and recognizes parent leadership as skilled work worth public investment.',
            },
            {
              icon: Sprout,
              t: 'Partners',
              d: 'Community organizations, colleges, and parent leaders make the change real on the ground.',
            },
          ].map(({ icon: Icon, t, d }) => (
            <Card key={t} bg="ivory">
              <Icon size={36} color={C.evergreen} aria-hidden="true" />
              <h3 className="m-0 mt-5 mb-2 font-extrabold text-[22px]">{t}</h3>
              <p className="m-0">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="evergreen">
        <SectionLabel tone="light">Our vision</SectionLabel>
        <p className="m-0 mb-10 font-extrabold text-[30px] md:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-[56rem]">
          A Commonwealth where parent leadership is recognized as skilled work and invested in as a public good
          <Dot />
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Button href={TALK}>Talk with us about investing</Button>
          <Button href="mailto:mpc@massparentcorps.org?subject=Case%20for%20investment" variant="outline-light">
            Request the case for investment
          </Button>
        </div>
      </Section>
    </>
  )
}
