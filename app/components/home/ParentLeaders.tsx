'use client'

import { useState } from 'react'
import cohort1 from '../../../data/cohort1.json'
import cohort2 from '../../../data/cohort2.json'
import Photo from '../Photo'
import { SectionLabel } from '../ui'

type Parent = { name: string; title: string; organization: string; photo: string; quote: string; project: string }

const COHORTS = [
  {
    label: 'Cohort 1 · Urban College of Boston',
    note: '19 parent leaders, launched June 2026. Choose a parent to read their words.',
    people: cohort1 as Parent[],
  },
  {
    label: 'Cohort 2 · Middlesex Community College',
    note: '21 parent leaders, now underway.',
    people: cohort2 as Parent[],
  },
]

export default function ParentLeaders() {
  const [cohort, setCohort] = useState(0)
  const c = COHORTS[cohort]

  return (
    <>
      <div role="group" aria-label="Choose a cohort" className="flex flex-wrap gap-3 mb-3">
        {COHORTS.map((k, i) => {
          const on = i === cohort
          return (
            <button
              key={k.label}
              type="button"
              aria-pressed={on}
              onClick={() => setCohort(i)}
              className={`min-h-[48px] px-6 rounded-full font-bold text-[16px] sm:text-[17px] border-2 border-evergreen cursor-pointer transition ${
                on ? 'bg-evergreen text-white' : 'bg-white text-evergreen hover:bg-tint-100'
              }`}
            >
              {k.label}
            </button>
          )
        })}
      </div>
      <p className="m-0 mb-10 text-[16px] font-medium">{c.note}</p>

      {cohort === 0 && <VideoFeature />}

      {c.people.length > 0 ? (
        <Gallery key={cohort} people={c.people} defaultName={cohort === 0 ? 'Huong Vu' : undefined} />
      ) : (
        <CohortTwoFirstLook />
      )}
    </>
  )
}

function VideoFeature() {
  return (
    <div className="flex flex-wrap gap-8 items-center mb-12">
      <div className="flex-[1_1_520px] min-w-0">
        <div className="relative w-full overflow-hidden rounded-[28px] bg-ink" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/fbjoawtn_1w"
            title="Huong Vu and Peace Junaid on parent leadership"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <div className="flex-[1_1_300px] min-w-0">
        <SectionLabel>Watch</SectionLabel>
        <h3 className="m-0 mb-3 font-extrabold text-[30px] leading-[1.1]">Hear it from our parent leaders.</h3>
        <p className="m-0 text-[18px]">
          Huong Vu and Peace Junaid, Cohort 1 parent leaders from Boys &amp; Girls Clubs of Dorchester, share their
          experience as parent leaders in Mass ParentCorps.
        </p>
      </div>
    </div>
  )
}

function Gallery({ people, defaultName }: { people: Parent[]; defaultName?: string }) {
  const start = Math.max(0, defaultName ? people.findIndex((p) => p.name === defaultName) : 0)
  const [sel, setSel] = useState(start)
  const p = people[sel]

  return (
    <>
      <div
        aria-live="polite"
        className="rounded-[28px] bg-ivory p-7 md:p-10 flex flex-wrap gap-8 items-center mb-12"
      >
        <div className="flex-none mx-auto sm:mx-0">
          <div className="rounded-full p-[3px] bg-gold">
            <div className="rounded-full border-[6px] border-white overflow-hidden w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
              <Photo key={p.photo} src={p.photo} alt={`Portrait of ${p.name}`} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex-[1_1_380px] min-w-0">
          <h3 className="m-0 font-extrabold text-[28px] md:text-[30px] leading-tight">{p.name}</h3>
          <p className="m-0 mt-1 mb-5 font-bold text-evergreen-light">
            {p.title}, {p.organization}
          </p>
          {p.quote ? (
            <>
              <blockquote className="m-0 text-[19px] md:text-[21px] font-medium leading-[1.5]">“{p.quote}”</blockquote>
              {p.project && (
                <p className="m-0 mt-5 text-[16px]">
                  <strong>Applied Learning Project:</strong> {p.project}
                </p>
              )}
            </>
          ) : (
            <p className="m-0 text-[19px] leading-[1.5]">
              <strong>Applied Learning Project:</strong> {p.project}
            </p>
          )}
        </div>
      </div>

      <ul className="m-0 p-0 list-none grid gap-x-5 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {people.map((x, i) => {
          const on = i === sel
          return (
            <li key={x.name}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setSel(i)}
                className="w-full flex flex-col items-center text-center bg-transparent border-0 p-0 cursor-pointer group"
              >
                <span
                  className={`block rounded-full p-[3px] transition ${on ? 'bg-gold' : 'bg-evergreen group-hover:bg-evergreen-light'}`}
                >
                  <span className="block rounded-full border-4 border-white overflow-hidden w-[112px] h-[112px] sm:w-[132px] sm:h-[132px]">
                    <Photo src={x.photo} alt={`Portrait of ${x.name}`} className="w-full h-full" />
                  </span>
                </span>
                <span className={`mt-3 text-[16px] leading-tight ${on ? 'font-extrabold text-evergreen' : 'font-bold'}`}>
                  {x.name}
                </span>
                <span className="mt-1 text-[14px] leading-snug">{x.organization}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

function CohortTwoFirstLook() {
  return (
    <div className="rounded-[28px] bg-ivory p-7 md:p-10 flex flex-wrap gap-8 items-center">
      <div className="flex-[1_1_380px] min-w-0">
        <SectionLabel>A first look at Cohort 2</SectionLabel>
        <h3 className="m-0 mb-4 font-extrabold text-[28px] md:text-[34px] leading-[1.1]">
          21 parent leaders at Middlesex Community College.
        </h3>
        <p className="m-0 text-[18px]">
          Their individual portraits are coming in spring 2027. Until then, here are Dominique Bellegarde and Maribel
          Carvajal with Magda and Qin Li at the Vital Village Networks National Community Leadership Summit in Boston.
        </p>
      </div>
      <div className="flex-[1_1_320px] min-w-0">
        <Photo
          src="/images/moments/summit-group.jpg"
          alt="Magda Rodriguez-Villafañe, Dominique Bellegarde, Qin Li and Maribel Carvajal at the Vital Village Networks summit"
          className="w-full rounded-card aspect-[4/3]"
          position="center 35%"
          fallbackLabel="Cohort Two"
        />
      </div>
    </div>
  )
}
