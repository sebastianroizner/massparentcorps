'use client'

import { useState } from 'react'
import { Button } from '../ui'

const ROLES = [
  {
    label: 'Parent or caregiver',
    eyebrow: 'For parents & caregivers',
    title: "You're already leading. Let's make it count.",
    body: 'Turn the leadership you already do into a Mass ParentCorps Credential, up to 9 college credits, and a community of parent leaders who have your back.',
    cta: 'Start your path',
    href: '/for-parents',
  },
  {
    label: 'Community organization',
    eyebrow: 'For organizations',
    title: 'Grow leaders from within your community.',
    body: 'Sponsor a parent leader, join the coalition, and help shape a shared Parent Leadership Framework for the field.',
    cta: 'Partner with us',
    href: '/for-organizations',
  },
  {
    label: 'Funder',
    eyebrow: 'For funders',
    title: 'Invest where a healthy economy starts.',
    body: 'Help build the statewide infrastructure: a shared framework, a cross-agency coalition, and a lasting funding base for parent leadership.',
    cta: 'Talk with us',
    href: '/invest',
  },
  {
    label: 'Policymaker',
    eyebrow: 'For policymakers',
    title: 'Champion parent leadership across the Commonwealth.',
    body: 'Help Massachusetts move from family engagement to shared leadership, and recognize parent leadership as skilled work worth public investment.',
    cta: 'Connect with us',
    href: '/invest',
  },
]

export default function WhoAreYou() {
  const [sel, setSel] = useState(0)
  const r = ROLES[sel]

  return (
    <>
      <div role="group" aria-label="I am a" className="flex flex-wrap gap-3 mb-7">
        {ROLES.map((x, i) => {
          const on = i === sel
          return (
            <button
              key={x.label}
              type="button"
              aria-pressed={on}
              onClick={() => setSel(i)}
              className={`min-h-[48px] px-6 rounded-full font-bold text-[17px] border-2 border-evergreen cursor-pointer transition ${
                on ? 'bg-evergreen text-white' : 'bg-white text-evergreen hover:bg-tint-100'
              }`}
            >
              {x.label}
            </button>
          )
        })}
      </div>

      <div aria-live="polite" className="rounded-card bg-ink text-white p-8 md:p-12 flex flex-wrap gap-8 items-center justify-between">
        <div className="flex-[1_1_480px] min-w-0">
          <p className="m-0 mb-3 font-bold uppercase text-[15px] tracking-[0.08em] text-gold-light">{r.eyebrow}</p>
          <h3 className="m-0 mb-3.5 font-extrabold text-[30px] md:text-[40px] leading-[1.08]">{r.title}</h3>
          <p className="m-0 text-[19px] text-ivory max-w-[40rem]">{r.body}</p>
        </div>
        <Button href={r.href}>{r.cta}</Button>
      </div>
    </>
  )
}
