import { Sprout, Target, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import FeatureCard from './FeatureCard'

export default function Intro() {
  return (
    <section id="intro" aria-labelledby="intro-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="intro-title"
          title="More than a study app."
          text="Navastha is being designed as a connected ecosystem for students and study spaces."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          <FeatureCard index={0} icon={Target} title="Focus" text="Build an environment where focused study becomes easier." />
          <FeatureCard index={1} icon={Users} title="Community" text="Connect with people, libraries and useful study experiences." />
          <FeatureCard index={2} icon={Sprout} title="Growth" text="Move into your next stage with better tools and better systems." />
        </ul>
      </div>
    </section>
  )
}
