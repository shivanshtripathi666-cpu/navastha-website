import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export default function FeatureCard({
  icon: Icon,
  title,
  text,
  soon = false,
  index = 0,
}: {
  icon: LucideIcon
  title: string
  text?: string
  soon?: boolean
  index?: number
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/60"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {soon && (
          <span className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">Coming soon</span>
        )}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      {text && <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>}
    </motion.li>
  )
}
