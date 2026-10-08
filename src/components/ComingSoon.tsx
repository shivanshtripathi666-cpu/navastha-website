import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Bell } from 'lucide-react'
import Reveal from './Reveal'
import { SUPPORT_EMAIL, WAITLIST_ENDPOINT } from '../config'

type Status = 'idle' | 'sending' | 'done' | 'mail' | 'invalid' | 'error'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const messages: Record<Status, string> = {
  idle: '',
  sending: 'Adding you to the list...',
  done: "You're on the list. We'll email you when Navastha launches.",
  mail: 'Your email app should open. Press send there to join the list.',
  invalid: 'Enter a valid email address.',
  error: 'Could not reach the list. Check your connection and try again.',
}

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [trap, setTrap] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Hidden field only bots fill in: pretend it worked and do nothing.
    if (trap) {
      setStatus('done')
      return
    }

    const value = email.trim()
    if (!emailPattern.test(value)) {
      setStatus('invalid')
      return
    }

    if (WAITLIST_ENDPOINT) {
      setStatus('sending')
      try {
        await fetch(WAITLIST_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          body: new URLSearchParams({ email: value, source: 'navastha.com' }),
        })
        setStatus('done')
        setEmail('')
      } catch {
        setStatus('error')
      }
      return
    }

    const subject = 'Notify me when Navastha launches'
    const body = `Please add me to the Navastha early-access list.\n\nMy email: ${value}`
    window.location.href =
      `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('mail')
  }

  return (
    <section id="early-access" aria-labelledby="early-title" className="py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <h2 id="early-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Navastha is being built.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          We're building the next generation of student and study-space experiences. Leave your email and we'll tell
          you when it launches.
        </p>

        <form onSubmit={onSubmit} noValidate className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="notify-email" className="sr-only">
            Email address
          </label>
          <input
            id="notify-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full rounded-full border border-line bg-surface px-5 py-3 text-fg placeholder:text-muted/70 focus:border-brand"
          />
          {/* Honeypot: hidden from people, visible to bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={trap}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTrap(e.target.value)}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 font-medium text-on-brand shadow-lg shadow-brand/20 transition hover:opacity-90 disabled:opacity-60"
          >
            <Bell className="h-4 w-4" aria-hidden="true" />
            Notify me
          </button>
        </form>

        <p aria-live="polite" className="mt-4 min-h-6 text-sm text-muted">
          {messages[status]}
        </p>
        <p className="mt-1 text-xs text-muted">
          We use your email only to tell you about the launch. Read the{' '}
          <a href="./privacy.html" className="underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
      </Reveal>
    </section>
  )
}
