import Link from 'next/link'
import type { ReactNode } from 'react'

/* ─── Brand tokens (mirror of tailwind.config.ts, for inline SVG) ─── */
export const C = {
  evergreen: '#1E5D4B',
  evergreenLight: '#2A7560',
  gold: '#C8A645',
  goldLight: '#E4D3A2',
  terracotta: '#B5532E',
  ivory: '#F7F4EC',
  ink: '#15251D',
  tint100: '#ECF3F0',
  tint200: '#D9E7E1',
  tint300: '#C6DED4',
  white: '#FFFFFF',
}

/* ─── Button ─── */
type Variant = 'primary' | 'dark' | 'outline-light' | 'outline-dark'

const variantClass: Record<Variant, string> = {
  primary: 'bg-gold text-ink hover:brightness-105',
  dark: 'bg-evergreen text-white hover:bg-evergreen-light',
  'outline-light': 'bg-transparent text-white border-2 border-white hover:bg-white/10',
  'outline-dark': 'bg-transparent text-evergreen border-2 border-evergreen hover:bg-tint-100',
}

export function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  newTab,
}: {
  href: string
  variant?: Variant
  children: ReactNode
  className?: string
  newTab?: boolean
}) {
  const cls = `inline-flex items-center justify-center text-center min-h-[44px] px-7 py-3 rounded-full font-bold text-[17px] leading-tight no-underline transition ${variantClass[variant]} ${className}`
  const external = newTab ?? /^https?:/.test(href)
  if (href.startsWith('/') && !external) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

/* ─── Gold dot (used in place of a period) ─── */
export function Dot({ size = '0.2em', className = '' }: { size?: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block rounded-full bg-gold align-baseline ${className}`}
      style={{ width: size, height: size, marginLeft: '0.06em' }}
    />
  )
}

/* ─── Section label (eyebrow) ─── */
export function SectionLabel({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <p
      className={`flex items-center gap-2.5 font-bold uppercase text-[15px] tracking-[0.08em] mb-4 ${
        tone === 'light' ? 'text-gold-light' : 'text-evergreen'
      } ${className}`}
    >
      <span aria-hidden="true" className="flex-none rounded-full bg-gold" style={{ width: 10, height: 10 }} />
      {children}
    </p>
  )
}

/* ─── Section wrapper ─── */
const bgClass = {
  white: 'bg-white',
  ivory: 'bg-ivory',
  evergreen: 'bg-evergreen text-white',
  terracotta: 'bg-terracotta text-white',
  ink: 'bg-ink text-white',
} as const

export function Section({
  id,
  bg = 'white',
  children,
  className = '',
  innerClassName = '',
}: {
  id?: string
  bg?: keyof typeof bgClass
  children: ReactNode
  className?: string
  innerClassName?: string
}) {
  return (
    <section id={id} className={`mpc-section ${bgClass[bg]} ${className}`}>
      <div className={`mpc-container ${innerClassName}`}>{children}</div>
    </section>
  )
}

export function H2({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`mpc-h2 m-0 mb-5 max-w-[52rem] ${className}`}>{children}</h2>
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[19px] md:text-[20px] leading-[1.55] max-w-[46rem] m-0 mb-10 ${className}`}>{children}</p>
}

/* ─── Card ─── */
const cardBg = {
  white: 'bg-white text-ink',
  ivory: 'bg-ivory text-ink',
  evergreen: 'bg-evergreen text-white',
  terracotta: 'bg-terracotta text-white',
  ink: 'bg-ink text-white',
  glass: 'bg-white/10 text-white',
} as const

export function Card({
  children,
  bg = 'white',
  className = '',
  lift = true,
}: {
  children: ReactNode
  bg?: keyof typeof cardBg
  className?: string
  lift?: boolean
}) {
  return <div className={`rounded-card p-8 ${cardBg[bg]} ${lift ? 'mpc-lift' : ''} ${className}`}>{children}</div>
}

/* ─── Stat tile ─── */
export function StatTile({ n, label, bg = 'ivory' }: { n: string; label: string; bg?: 'ivory' | 'white' }) {
  return (
    <div className={`rounded-2xl p-4 flex-1 min-w-[130px] ${bg === 'ivory' ? 'bg-ivory' : 'bg-white'} text-ink`}>
      <div className="inline-block font-extrabold text-[44px] leading-none pb-1.5 mb-2 border-b-4 border-gold">{n}</div>
      <div className="font-medium text-[15px] leading-snug">{label}</div>
    </div>
  )
}

/* ─── Check bullet list ─── */
export function BulletList({ items, tone = 'dark' }: { items: string[]; tone?: 'dark' | 'light' }) {
  return (
    <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 items-start">
          <span aria-hidden="true" className="flex-none mt-[0.55em] rounded-full bg-gold" style={{ width: 8, height: 8 }} />
          <span className={tone === 'light' ? 'text-ivory' : ''}>{t}</span>
        </li>
      ))}
    </ul>
  )
}

/* ─── Logo mark: three rising pills + gold dot ─── */
export function LogoMark({ size = 40, light = false }: { size?: number; light?: boolean }) {
  const bar = light ? C.white : C.evergreen
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <rect x="6" y="58" width="22" height="38" rx="11" fill={bar} />
      <rect x="39" y="40" width="22" height="56" rx="11" fill={bar} />
      <rect x="72" y="22" width="22" height="74" rx="11" fill={bar} />
      <circle cx="83" cy="9" r="9" fill={C.gold} />
    </svg>
  )
}

/**
 * Logo lockup. TODO: swap for /images/logo-color.png and /images/logo-white.png
 * once the Mass-ParentCorps-Logos-Evergreen.zip files are added to public/images/.
 */
export function Logo({ light = false, height = 50 }: { light?: boolean; height?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5" style={{ height }}>
      <LogoMark size={Math.round(height * 0.82)} light={light} />
      <span
        className={`font-extrabold tracking-[-0.02em] leading-none ${light ? 'text-white' : 'text-evergreen'}`}
        style={{ fontSize: Math.round(height * 0.4) }}
      >
        Mass ParentCorps
      </span>
    </span>
  )
}

/* ─── Small logo art for inner-page heroes ─── */
export function HeroArt() {
  return (
    <svg viewBox="0 0 300 340" className="w-full max-w-[260px] h-auto" aria-hidden="true" focusable="false">
      <rect x="0" y="210" width="76" height="130" rx="38" fill="#FFFFFF" fillOpacity="0.22" />
      <rect x="112" y="150" width="76" height="190" rx="38" fill="#FFFFFF" fillOpacity="0.4" />
      <rect x="224" y="90" width="76" height="250" rx="38" fill="#FFFFFF" />
      <circle cx="262" cy="40" r="38" fill={C.gold} className="mpc-bounce" />
    </svg>
  )
}

/* ─── Reusable inner-page hero ─── */
export function PageHero({
  label,
  title,
  lead,
  children,
  art = true,
}: {
  label: string
  title: ReactNode
  lead: ReactNode
  children?: ReactNode
  art?: boolean
}) {
  return (
    <section className="bg-evergreen text-white overflow-hidden">
      <div className="mpc-container flex flex-wrap items-center gap-12 py-[72px] md:py-[96px]">
        <div className="flex-[1_1_560px] min-w-0">
          <SectionLabel tone="light">{label}</SectionLabel>
          <h1 className="mpc-h1-inner m-0 mb-6">{title}</h1>
          <p className="text-[19px] md:text-[21px] leading-[1.5] text-ivory max-w-[40rem] m-0">{lead}</p>
          {children && <div className="flex flex-wrap gap-3.5 mt-9">{children}</div>}
        </div>
        {art && (
          <div className="hidden md:flex flex-[0_1_300px] justify-center">
            <HeroArt />
          </div>
        )}
      </div>
    </section>
  )
}
