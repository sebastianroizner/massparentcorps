'use client'

import { useState } from 'react'
import news from '../../data/news.json'

const FILTERS = ['All', 'Events', 'Milestones', 'Research', 'Academic'] as const
const TAG_FOR: Record<string, string> = { Events: 'Event', Milestones: 'Milestone', Research: 'Research', Academic: 'Academic' }

export default function NewsList() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const items = filter === 'All' ? news : news.filter((n) => n.tag === TAG_FOR[filter])

  return (
    <>
      <div role="group" aria-label="Filter posts" className="flex flex-wrap gap-2.5 mb-8">
        {FILTERS.map((f) => {
          const on = f === filter
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f)}
              className={`min-h-[44px] px-5 rounded-full font-bold border-2 border-evergreen cursor-pointer transition ${
                on ? 'bg-evergreen text-white' : 'bg-white text-evergreen hover:bg-tint-100'
              }`}
            >
              {f}
            </button>
          )
        })}
      </div>
      <ul aria-live="polite" className="m-0 p-0 list-none flex flex-col gap-3">
        {items.map((n) => (
          <li key={n.title} className="rounded-2xl bg-ivory p-6 md:p-7">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="rounded-full bg-evergreen text-white px-3 py-1 text-[13px] font-bold uppercase tracking-[0.06em]">
                {n.tag}
              </span>
              <span className="text-[15px] font-medium">{n.date}</span>
            </div>
            <h3 className="m-0 mb-1.5 font-extrabold text-[21px] leading-snug">{n.title}</h3>
            <p className="m-0">{n.summary}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
