import {
  Bell,
  BookOpen,
  ClipboardList,
  Compass,
  MousePointerClick,
  ShieldCheck,
  Armchair,
  CalendarClock,
  Users,
  Hourglass,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import FeatureCard from './FeatureCard'
import Reveal from './Reveal'

const items = [
  { icon: BookOpen, title: 'Digital library presence' },
  { icon: Armchair, title: 'Seat management' },
  { icon: MousePointerClick, title: 'Real-time seat selection' },
  { icon: Hourglass, title: 'Temporary/offline booking requests' },
  { icon: CalendarClock, title: 'Monthly/permanent seat allocation' },
  { icon: ShieldCheck, title: 'Librarian approval' },
  { icon: Users, title: 'Student management' },
  { icon: Bell, title: 'Notifications' },
  { icon: Compass, title: 'Library discovery' },
]

export default function LibrarySection() {
  return (
    <section id="libraries" aria-labelledby="libraries-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="libraries-title"
          title="Smarter libraries. Better study spaces."
          text="The Navastha library ecosystem is planned to help study spaces manage seats and students, and help students find the right place. Features are in development."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FeatureCard key={it.title} index={i} icon={it.icon} title={it.title} soon />
          ))}
        </ul>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-line bg-surface p-6">
              <span className="inline-flex items-center gap-2 text-brand">
                <CalendarClock className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-medium">Planned booking type</span>
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">Permanent / monthly</h3>
              <p className="mt-2 leading-relaxed text-muted">
                A student can receive a specific seat for the membership/plan period, with the seat automatically
                becoming available when the plan expires or is cancelled.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6">
              <span className="inline-flex items-center gap-2 text-brand">
                <ClipboardList className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-medium">Planned booking type</span>
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">Temporary / offline</h3>
              <p className="mt-2 leading-relaxed text-muted">
                A student can request a seat for a limited date, period or shift. The seat can be temporarily held
                and requires librarian approval before confirmation.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
