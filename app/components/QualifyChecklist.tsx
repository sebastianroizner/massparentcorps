'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from './ui'

const ITEMS = [
  {
    title: '60 hours of leadership experience',
    text: 'As a parent leader, family advocate, community organizer, or similar role. Hours can come from more than one organization.',
  },
  { title: '8 hours of leadership training', text: 'Approved parent leadership training, completed before you apply.' },
  { title: 'High school diploma or GED', text: 'Or a higher level of education.' },
  { title: 'Comfortable learning in English', text: 'The course is taught in English.' },
  { title: 'A sponsoring organization', text: 'A community-based organization that can refer you.' },
]

const MAILTO = 'mailto:mpc@massparentcorps.org?subject=Do%20I%20qualify%3F'

export default function QualifyChecklist() {
  const [on, setOn] = useState<boolean[]>(ITEMS.map(() => false))
  const n = on.filter(Boolean).length

  const result =
    n === 5
      ? {
          title: 'You may qualify.',
          text: 'Talk with your community organization about a referral, and sign up to hear when the next cohort opens.',
          cta: 'Notify me about the next cohort',
        }
      : n >= 3
        ? {
            title: "You're almost there.",
            text: 'Many parent leaders complete the last requirements through their community organization. We can help you plan.',
            cta: 'Ask us how to get there',
          }
        : {
            title: 'Every leader starts somewhere.',
            text: "Tap the requirements you already meet. If you're not there yet, we'll point you to training and organizations near you.",
            cta: 'Ask us where to start',
          }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-start">
      <ul className="m-0 p-0 list-none flex flex-col gap-3">
        {ITEMS.map((it, i) => (
          <li key={it.title}>
            <button
              type="button"
              aria-pressed={on[i]}
              onClick={() => setOn((prev) => prev.map((v, j) => (j === i ? !v : v)))}
              className={`w-full text-left flex gap-4 items-start rounded-2xl p-5 border-2 cursor-pointer transition ${
                on[i] ? 'bg-tint-100 border-evergreen' : 'bg-white border-tint-200 hover:border-tint-300'
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex-none w-8 h-8 rounded-full border-2 border-evergreen flex items-center justify-center ${
                  on[i] ? 'bg-evergreen text-white' : 'bg-white'
                }`}
              >
                {on[i] && <Check size={18} strokeWidth={3} />}
              </span>
              <span>
                <span className="block font-extrabold text-[18px]">{it.title}</span>
                <span className="block mt-1 text-[16px]">{it.text}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div aria-live="polite" className="rounded-card bg-evergreen text-white p-8 lg:sticky lg:top-28">
        <p className="m-0 font-extrabold text-[48px] leading-none text-gold-light">
          {n} <span className="text-[22px] text-ivory">of 5</span>
        </p>
        <h3 className="m-0 mt-5 mb-2 font-extrabold text-[26px]">{result.title}</h3>
        <p className="m-0 mb-6 text-ivory">{result.text}</p>
        <Button href={MAILTO}>{result.cta}</Button>
      </div>
    </div>
  )
}
