import { Bell, Search, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

// a = available, b = booked, s = selected
const seats = 'a a b a a s b a a a b a a b a a a b'.split(' ')
const seatStyle: Record<string, string> = {
  a: 'bg-brand/15 text-brand',
  b: 'bg-line text-muted',
  s: 'bg-brand text-on-brand',
}

export default function AppPreview() {
  return (
    <section id="preview" aria-labelledby="preview-title" className="border-y border-line bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="preview-title"
          title="Preview of the Navastha experience"
          text="A concept design with sample content. This is not a released app."
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <Reveal className="mx-auto w-full max-w-[18rem]">
            <div
              role="img"
              aria-label="Concept preview of a Navastha app screen showing a profile, a library card and a seat map"
              className="rounded-[2rem] border-4 border-line bg-bg p-4 shadow-2xl shadow-brand/10"
            >
              <div aria-hidden="true" className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold text-on-brand">
                    N
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-none">Your profile</p>
                    <p className="mt-1 text-xs text-muted">Student</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-xs text-muted">
                  <Search className="h-3.5 w-3.5" /> Search libraries
                </div>
                <div className="rounded-xl border border-line bg-surface p-3">
                  <p className="text-sm font-semibold">Sample Library</p>
                  <p className="text-xs text-muted">Seats available today</p>
                  <div className="mt-3 grid grid-cols-6 gap-1.5">
                    {seats.map((s, i) => (
                      <span
                        key={i}
                        className={`flex aspect-square items-center justify-center rounded-md text-[10px] font-medium ${seatStyle[s]}`}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-3 text-[10px] text-muted">
                    <span>Available</span>
                    <span>Booked</span>
                    <span className="text-brand">Selected</span>
                  </div>
                </div>
                <div className="rounded-xl bg-brand px-3 py-2.5 text-center text-sm font-medium text-on-brand">
                  Request seat
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4" aria-hidden="true">
            <Reveal delay={0.05}>
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Bell className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Notifications</p>
                  <p className="mt-1 text-sm text-muted">Sample: your seat request was approved by the librarian.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Community</p>
                  <p className="mt-1 text-sm text-muted">Sample: friends studying at the same library today.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
