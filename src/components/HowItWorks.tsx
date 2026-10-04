import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const steps = [
  { n: '01', title: 'Discover', text: 'Find the right study environment.' },
  { n: '02', title: 'Connect', text: 'Connect with libraries and the Navastha community.' },
  { n: '03', title: 'Focus', text: 'Build your next state of focused productivity.' },
]

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="border-y border-line bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading id="how-title" title="How Navastha works" />
        <ol className="relative mt-12 space-y-10 border-l border-line pl-8 md:ml-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
              className="relative"
            >
              <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border border-brand bg-bg font-display text-sm font-semibold text-brand">
                {s.n}
              </span>
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-1.5 max-w-md text-muted">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
