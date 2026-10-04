import { Armchair, Bell, Compass, Library, MessageCircle, Sparkles, Timer, UserRound, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FeatureCard from './FeatureCard'

const items = [
  { icon: Library, title: 'Find study libraries' },
  { icon: Compass, title: 'Discover suitable study spaces' },
  { icon: Armchair, title: 'Seat booking' },
  { icon: Timer, title: 'Study productivity' },
  { icon: Users, title: 'Friends and community' },
  { icon: MessageCircle, title: 'Chat' },
  { icon: Bell, title: 'Notifications' },
  { icon: UserRound, title: 'Personal profile' },
  { icon: Sparkles, title: 'Future learning tools' },
]

export default function StudentSection() {
  return (
    <section id="students" aria-labelledby="students-title" className="border-y border-line bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="students-title"
          title="Everything students need, in one place."
          text="Navastha is in development. Everything below is planned and not yet available."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FeatureCard key={it.title} index={i} icon={it.icon} title={it.title} soon />
          ))}
        </ul>
      </div>
    </section>
  )
}
