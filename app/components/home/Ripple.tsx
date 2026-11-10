'use client'

import { useState } from 'react'

const STEPS = [
  {
    label: 'Parent leader',
    title: 'It starts with one parent.',
    text: 'Parents are already leading in schools, community organizations, and early childhood programs. Mass ParentCorps recognizes that leadership with a credential and up to 9 college credits, and connects it to professional roles.',
    source: '',
  },
  {
    label: 'Family',
    title: 'Families grow stronger.',
    text: "When a parent's leadership is recognized and connected to a career pathway, the whole household rises with them, and children see leadership modeled up close.",
    source: '',
  },
  {
    label: 'Community',
    title: 'Builds connection & civic power.',
    text: 'Parent leaders build trust, bring neighbors together, and help families find their voice in the decisions that shape their lives.',
    source: 'ZERO TO THREE (2020); Henderson et al. (2016)',
  },
  {
    label: 'Organizations',
    title: 'Expands education & career pathways.',
    text: 'Agencies gain skilled, trusted leaders with lived experience. Parents gain pathways into professional roles that strengthen programs and organizations.',
    source: 'Geller et al. (2017), NYU Metro Center',
  },
  {
    label: 'Systems & policy',
    title: 'Influences systems & policy.',
    text: 'When parents help design, implement, and evaluate the systems that affect their families, those systems work better for everyone they serve.',
    source: 'Geller et al. (2017); Henderson et al. (2016)',
  },
  {
    label: 'Economy',
    title: 'Massachusetts rises.',
    text: "Stronger families, connected communities, and better systems add up to a healthier economy. Parent leadership isn't a side project; it's economic infrastructure.",
    source: '',
  },
]

const HEIGHTS = [90, 136, 182, 228, 274, 320]
const WIDTHS = [30, 44, 58, 72, 86, 100]

export default function Ripple() {
  const [sel, setSel] = useState(5)
  const cur = STEPS[sel]

  return (
    <div className="flex flex-wrap gap-10 items-stretch">
      <div className="flex-[1_1_520px] min-w-0">
        {/* Desktop / tablet: vertical bars */}
        <div role="group" aria-label="Steps of impact" className="hidden sm:flex items-end gap-2.5 h-[420px]">
          {STEPS.map((s, i) => {
            const on = i === sel
            return (
              <button
                key={s.label}
                type="button"
                aria-pressed={on}
                onClick={() => setSel(i)}
                className="group flex-1 min-w-0 h-full flex flex-col items-center justify-end gap-2.5 bg-transparent border-0 p-0 cursor-pointer"
              >
                {on && <span aria-hidden="true" className="mpc-bounce block w-7 h-7 rounded-full bg-gold" />}
                <span
                  aria-hidden="true"
                  className="block w-full transition-transform group-hover:-translate-y-1"
                  style={{
                    height: HEIGHTS[i],
                    borderRadius: '999px 999px 0 0',
                    background: on ? '#1E5D4B' : i % 2 === 0 ? '#C6DED4' : '#A3CBBB',
                  }}
                />
                <span
                  className={`block w-full text-center text-[14px] leading-[1.25] min-h-[2.5em] ${
                    on ? 'font-extrabold text-evergreen' : 'font-bold text-ink'
                  }`}
                  style={{ overflowWrap: 'anywhere', hyphens: 'auto' }}
                >
                  {s.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Phones: horizontal bars */}
        <div role="group" aria-label="Steps of impact" className="flex sm:hidden flex-col gap-3">
          {STEPS.map((s, i) => {
            const on = i === sel
            return (
              <button
                key={s.label}
                type="button"
                aria-pressed={on}
                onClick={() => setSel(i)}
                className="flex items-center gap-3 w-full min-h-[44px] bg-transparent border-0 p-0 cursor-pointer text-left"
              >
                <span
                  className={`flex-none w-[120px] text-[14px] whitespace-nowrap ${
                    on ? 'font-extrabold text-evergreen' : 'font-bold text-ink'
                  }`}
                >
                  {s.label}
                </span>
                <span className="flex-1 min-w-0">
                  <span
                    aria-hidden="true"
                    className="block h-[30px] rounded-full"
                    style={{
                      width: `${WIDTHS[i]}%`,
                      background: on ? '#1E5D4B' : i % 2 === 0 ? '#C6DED4' : '#A3CBBB',
                    }}
                  />
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div
        aria-live="polite"
        className="flex-[1_1_360px] min-w-0 rounded-card bg-ivory p-8 md:p-10 flex flex-col gap-4 justify-center"
      >
        <span className="font-bold uppercase text-[15px] tracking-[0.08em] text-evergreen">
          Step {sel + 1} of 6, {cur.label}
        </span>
        <h3 className="m-0 font-extrabold text-[30px] md:text-[34px] leading-[1.1]">{cur.title}</h3>
        <p className="m-0 text-[18px]">{cur.text}</p>
        {cur.source && <p className="m-0 text-[15px]">Research: {cur.source}</p>}
      </div>
    </div>
  )
}
