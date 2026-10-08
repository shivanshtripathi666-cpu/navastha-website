import { ChevronDown } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type Item = { q: string; a: string; href?: string; link?: string }

const items: Item[] = [
  {
    q: 'Can I download Navastha now?',
    a: 'Not yet. Navastha is still being built and the app is not publicly released. Leave your email in the early-access form above and we will tell you when it launches.',
  },
  {
    q: 'What will Navastha do?',
    a: 'For students: find study libraries, book a seat, track study time and connect with friends. For libraries: manage seats and students, and be discovered by students nearby. Features are in development and may change.',
  },
  {
    q: 'I run a study library. How can I be part of Navastha?',
    a: 'Write to us with the topic "Library partnership" and tell us about your library. We reply by email.',
    href: '#contact',
    link: 'Go to contact',
  },
  {
    q: 'What happens to my data?',
    a: 'This website does not collect personal information on its own. The privacy policy also explains what the Navastha app handles.',
    href: './privacy.html',
    link: 'Read the privacy policy',
  },
  {
    q: 'How do I delete my account?',
    a: 'You can delete your account from inside the app, or ask us by email. The deletion page lists the steps and what is removed.',
    href: './delete-account.html',
    link: 'How to delete your account',
  },
  {
    q: 'I need help with something else.',
    a: 'The support page covers common questions about accounts, bookings and attendance.',
    href: './support.html',
    link: 'Open the support page',
  },
]

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading id="faq-title" title="Common questions" />
        <div className="mt-10 space-y-3">
          {items.map((it) => (
            <Reveal key={it.q}>
              <details className="group rounded-2xl border border-line bg-surface p-5 open:border-brand/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {it.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">
                  {it.a}
                  {it.href && it.link ? (
                    <>
                      {' '}
                      <a href={it.href} className="text-brand underline underline-offset-4">
                        {it.link}
                      </a>
                      .
                    </>
                  ) : null}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
