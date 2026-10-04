import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

const tabs = [
  {
    id: 'students',
    label: 'Students',
    title: 'A calmer way to find where to study',
    text: 'Students will be able to discover study libraries and spaces that suit them, and keep their study life organised around a personal profile.',
    points: ['Library and study-space discovery', 'Seat booking', 'Personal profile'],
  },
  {
    id: 'libraries',
    label: 'Libraries',
    title: 'Tools for running a study space',
    text: 'Libraries are planned to get a digital presence, clearer seat management and a simpler way to handle student requests.',
    points: ['Seat management', 'Librarian approval for requests', 'Student management'],
  },
  {
    id: 'community',
    label: 'Community',
    title: 'Study alongside other people',
    text: 'Friends, chat and notifications are planned so students and libraries can stay connected.',
    points: ['Friends and community', 'Chat', 'Notifications'],
  },
  {
    id: 'focus',
    label: 'Focus',
    title: 'Support for steady study habits',
    text: 'Productivity tools are planned to help students build focus into their daily routine.',
    points: ['Study productivity tools', 'A study environment built around focus'],
  },
  {
    id: 'future',
    label: 'Future',
    title: 'Room to grow',
    text: 'Navastha is being built as a platform, so more learning tools can be added over time.',
    points: ['Future learning tools', 'More to be announced'],
  },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    let next = i
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length
    else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length
    else return
    e.preventDefault()
    setActive(next)
    refs.current[next]?.focus()
  }

  const tab = tabs[active]

  return (
    <section id="features" aria-labelledby="features-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading id="features-title" title="One platform, many sides" text="Explore what Navastha is planned to offer." />

        <div role="tablist" aria-label="Navastha features" className="mt-10 flex gap-2 overflow-x-auto pb-1">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el
              }}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={active === i}
              aria-controls={`panel-${t.id}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                active === i
                  ? 'border-brand bg-brand text-on-brand'
                  : 'border-line bg-surface text-muted hover:border-brand hover:text-fg'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="mt-6 min-h-[16rem] rounded-3xl border border-line bg-surface p-6 sm:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{tab.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{tab.text}</p>
              <ul className="mt-6 space-y-2.5">
                {tab.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">Coming soon. These features are in development.</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
