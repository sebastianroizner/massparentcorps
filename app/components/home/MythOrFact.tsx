'use client'

import { useState } from 'react'

const CARDS = [
  {
    myth: 'Parent leadership is just volunteering.',
    fact: "It's skilled work: designing, implementing, and evaluating the systems families rely on. It deserves to be recognized as a profession.",
  },
  {
    myth: "Leadership at your kid's school doesn't count on a résumé.",
    fact: 'With Mass ParentCorps it counts: a Mass ParentCorps Credential plus up to 9 college credits, both yours to keep.',
  },
  {
    myth: "It's a nice-to-have.",
    fact: 'Research shows parent leadership builds civic power, expands education and career pathways, and influences systems and policy.',
  },
  {
    myth: 'It only helps one family.',
    fact: "One parent's leadership lifts a family, a community, the organizations that serve them, and our economy.",
  },
]

export default function MythOrFact() {
  const [flipped, setFlipped] = useState<boolean[]>(CARDS.map(() => false))

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((c, i) => {
        const f = flipped[i]
        return (
          <button
            key={c.myth}
            type="button"
            aria-pressed={f}
            onClick={() => setFlipped((prev) => prev.map((v, j) => (j === i ? !v : v)))}
            className={`mpc-lift rounded-card p-7 min-h-[300px] text-left flex flex-col gap-5 cursor-pointer border-0 ${
              f ? 'bg-evergreen text-white' : 'bg-white text-ink'
            }`}
          >
            <span
              className={`self-start rounded-full px-3.5 py-1.5 text-[14px] font-bold tracking-[0.08em] ${
                f ? 'bg-gold text-ink' : 'bg-terracotta text-white'
              }`}
            >
              {f ? 'FACT' : 'MYTH'}
            </span>
            <span className={`font-bold leading-[1.25] ${f ? 'text-[19px]' : 'text-[24px]'}`}>{f ? c.fact : c.myth}</span>
            <span
              className={`mt-auto font-bold text-[15px] underline underline-offset-4 ${f ? 'text-gold-light' : 'text-evergreen'}`}
            >
              {f ? 'Tap to see the myth' : 'Tap to reveal the fact'}
            </span>
          </button>
        )
      })}
    </div>
  )
}
