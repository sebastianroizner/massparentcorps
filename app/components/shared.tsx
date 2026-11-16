import moments from '../../data/moments.json'
import Photo from './Photo'
import { C } from './ui'

/** Mass ParentCorps Credential seal. */
export function Seal({ size = 88 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/seal.png" alt="Mass ParentCorps Credential seal" width={size} height={size} className="block flex-none" />
  )
}

export type Founder = { name: string; title: string; photo: string; bio: string }

export function FounderCards({ founders, bg = 'ivory' }: { founders: Founder[]; bg?: 'ivory' | 'white' }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {founders.map((f) => (
        <article
          key={f.name}
          className={`mpc-lift rounded-card p-7 md:p-8 flex flex-wrap gap-6 items-start ${bg === 'ivory' ? 'bg-ivory' : 'bg-white'}`}
        >
          <div className="flex-none w-[132px] h-[176px] rounded-full overflow-hidden">
            <Photo src={f.photo} alt={`Portrait of ${f.name}`} className="w-full h-full" position="center 25%" />
          </div>
          <div className="flex-[1_1_220px] min-w-0">
            <h3 className="m-0 font-extrabold text-[24px] leading-tight">{f.name}</h3>
            <p className="m-0 mt-1 mb-3 font-bold text-evergreen-light">{f.title}</p>
            <p className="m-0 text-[17px]">{f.bio}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export function MomentsGrid() {
  return (
    <ul className="m-0 p-0 list-none grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {moments.map((m) => (
        <li key={m.photo}>
          <figure className="m-0">
            <div className="rounded-card overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
              <Photo src={m.photo} alt={m.alt} className="w-full h-full" position="center 30%" />
            </div>
            <figcaption className="mt-3 text-[15px] leading-snug">{m.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

export function QuoteMark({ color = C.ivory }: { color?: string }) {
  return (
    <svg width="56" height="44" viewBox="0 0 56 44" aria-hidden="true" className="mx-auto block">
      <path
        d="M0 44V26C0 11 8 2 22 0l3 6c-8 3-12 9-12 16h10v22H0zm31 0V26C31 11 39 2 53 0l3 6c-8 3-12 9-12 16h10v22H31z"
        fill={color}
      />
    </svg>
  )
}

export const FOCUS_QUOTE =
  'Right now, we kind of play it by ear. I took one class, then another, but there wasn’t a real pathway to follow.'
export const FOCUS_ATTRIBUTION = 'Massachusetts parent leader, January 2026 focus groups'

export const DEFINITION_HIGHLIGHT = 'design, implementation, and evaluation'

export function Definition({ className = '', onIvory = false }: { className?: string; onIvory?: boolean }) {
  return (
    <blockquote className={`m-0 font-bold leading-[1.15] tracking-[-0.02em] ${className}`}>
      “The active engagement of parents &amp; caregivers in the{' '}
      <span className={`${onIvory ? 'bg-white' : 'bg-ivory'} rounded-full px-2.5 box-decoration-clone`}>{DEFINITION_HIGHLIGHT}</span> of the systems
      that impact their families and communities.”
    </blockquote>
  )
}

export const CREDIT_BULLETS = [
  '3 credits for completing the college course',
  '3 credits for prior learning, by demonstrating the leadership you already have',
  '3 more at Urban College of Boston for earning the Mass ParentCorps Credential',
]
