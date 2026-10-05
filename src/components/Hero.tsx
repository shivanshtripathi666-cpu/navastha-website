import { motion } from 'framer-motion'
import { Armchair, Search, Sparkles, Users } from 'lucide-react'
import { LogoMark } from './Brand'

const chips = [
  { icon: Search, label: 'Find a study space', pos: 'left-0 top-[8%]', delay: 0 },
  { icon: Armchair, label: 'Pick a seat', pos: 'right-0 top-[30%]', delay: 1.2 },
  { icon: Sparkles, label: 'Focus session', pos: 'left-[4%] bottom-[22%]', delay: 2.1 },
  { icon: Users, label: 'Community', pos: 'right-[6%] bottom-[4%]', delay: 0.6 },
]

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-2 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1
            id="hero-title"
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Enter Your New State of Focus.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Navastha brings students, libraries and productivity together in one modern platform built for the
            next stage of learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#students"
              className="rounded-full bg-brand px-6 py-3 font-medium text-on-brand shadow-lg shadow-brand/20 transition hover:opacity-90"
            >
              Explore Navastha
            </a>
            <a
              href="#early-access"
              className="rounded-full border border-line bg-surface/60 px-6 py-3 font-medium transition hover:border-brand"
            >
              Coming Soon
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]"
          aria-hidden="true"
        >
          <div className="absolute inset-[6%] rounded-full border border-line" />
          <div className="absolute inset-[22%] rounded-full border border-brand/30" />
          <motion.div
            className="absolute inset-[6%] rounded-full border border-dashed border-brand/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-[34%] rounded-[22%] shadow-2xl shadow-[#f0c86e]/25"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LogoMark className="h-full w-full" />
          </motion.div>
          {chips.map(({ icon: Icon, label, pos, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${pos} flex items-center gap-2 rounded-full border border-line bg-surface/85 px-3 py-2 text-xs shadow-sm backdrop-blur sm:text-sm`}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
            >
              <Icon className="h-4 w-4 text-brand" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
