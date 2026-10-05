/* Navastha mark: an "N" whose top-right corner is a rising dot — a new state. */
const N_PATH = 'M18 50V16l28 30V30'

export function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d={N_PATH} stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="16" r="5" fill="currentColor" />
    </svg>
  )
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="rgb(var(--brand))" />
      <path d={N_PATH} stroke="rgb(var(--on-brand))" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="16" r="5" fill="rgb(var(--on-brand))" opacity="0.7" />
    </svg>
  )
}

export default function Brand() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-8 w-8" />
      <span className="font-display text-lg font-semibold tracking-[0.16em]">NAVASTHA</span>
    </span>
  )
}
