import { useState } from 'react'
import Reveal from './Reveal'

export default function ComingSoon() {
  const [shown, setShown] = useState(false)

  function onClick() {
    setShown(true)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="early-access" aria-labelledby="early-title" className="py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <h2 id="early-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Navastha is being built.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          We're building the next generation of student and study-space experiences. Follow the journey as Navastha
          grows.
        </p>
        <button
          type="button"
          onClick={onClick}
          className="mt-8 rounded-full bg-brand px-7 py-3 font-medium text-on-brand shadow-lg shadow-brand/20 transition hover:opacity-90"
        >
          Stay Updated
        </button>
        <p aria-live="polite" className="mt-4 min-h-6 text-sm text-muted">
          {shown ? 'Coming soon. Update options will appear here.' : ''}
        </p>
      </Reveal>
    </section>
  )
}
