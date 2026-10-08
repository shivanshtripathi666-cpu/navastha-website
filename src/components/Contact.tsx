import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Check, Copy, Mail, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { SUPPORT_EMAIL } from '../config'

const topics = [
  'General question',
  'Library partnership',
  'Student support',
  'Privacy or data request',
  'Press',
] as const

type CopyState = 'idle' | 'yes' | 'no'

export default function Contact() {
  const [copy, setCopy] = useState<CopyState>('idle')
  const [topic, setTopic] = useState<string>(topics[0])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [opened, setOpened] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL)
      setCopy('yes')
    } catch {
      setCopy('no')
    }
    window.setTimeout(() => setCopy('idle'), 3500)
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const who = name.trim()
    const body = who ? `${message.trim()}\n\n${who}` : message.trim()
    window.location.href =
      `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`Navastha: ${topic}`)}` +
      `&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  const field =
    'mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 focus:border-brand'

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="contact-title"
          title="Contact"
          text="Questions, library partnerships or a request about your data. Write to us and we reply by email."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">Email</h3>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="mt-2 inline-block break-all text-lg font-medium text-brand underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition hover:border-brand"
                >
                  {copy === 'yes' ? (
                    <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {copy === 'yes' ? 'Copied' : 'Copy address'}
                </button>
                <p aria-live="polite" className="mt-2 min-h-5 text-sm text-muted">
                  {copy === 'no' ? 'Could not copy. Press and hold the address to copy it.' : ''}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                For help with your account, see the{' '}
                <a href="./support.html" className="text-brand underline underline-offset-4">
                  support page
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-xl font-semibold">Send a message</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-topic" className="text-sm font-medium">
                    Topic
                  </label>
                  <select id="c-topic" value={topic} onChange={(e: ChangeEvent<HTMLSelectElement>) => setTopic(e.target.value)} className={field}>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-name" className="text-sm font-medium">
                    Your name <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="c-message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="c-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  className={field}
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-on-brand shadow-lg shadow-brand/20 transition hover:opacity-90"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Open in my email app
                </button>
                <p aria-live="polite" className="text-sm text-muted">
                  {opened
                    ? 'Your email app should open with the message ready. Press send there.'
                    : 'Nothing is sent from this page. Your own email app sends the message.'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
