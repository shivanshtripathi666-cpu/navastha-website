/* Navastha mark: a focus ring that opens to let a new point of light in, with an N at its centre. */
const RING = 'M56.43 23.11A26 26 0 1 1 40.89 7.57'
const N_PATH = 'M23 43V21l18 22V21'

export function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d={RING} stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d={N_PATH} stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50.4" cy="13.6" r="4.5" fill="#3fbf7a" />
    </svg>
  )
}

export const LogoMark = LeafMark

export default function Brand() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LeafMark className="h-9 w-9 text-brand" />
      <span className="font-display text-lg font-semibold tracking-[0.16em]">NAVASTHA</span>
    </span>
  )
}
