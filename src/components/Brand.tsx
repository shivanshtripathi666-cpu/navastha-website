import { useId } from 'react'

/* Navastha mark: a doorway with light pouring out — an invitation into a new state of focus. */
export function LogoMark({ className = '' }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#092c1c" />
          <stop offset="1" stopColor="#18663e" />
        </linearGradient>
        <radialGradient id={`${id}door`} cx="32" cy="50" r="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f6d27a" />
          <stop offset="1" stopColor="#1e6e46" />
        </radialGradient>
        <radialGradient id={`${id}halo`} cx="32" cy="52" r="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f0c86e" stopOpacity="0.45" />
          <stop offset="1" stopColor="#f0c86e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id}bg)`} />
      <circle cx="32" cy="52" r="26" fill={`url(#${id}halo)`} />
      <path d="M17 52V31a15 15 0 0 1 30 0v21z" fill={`url(#${id}door)`} />
      <path
        d="M17 52V31a15 15 0 0 1 30 0v21"
        stroke="#f6f1e2"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const LeafMark = LogoMark

export default function Brand() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-9 w-9" />
      <span className="font-display text-lg font-semibold tracking-[0.16em]">NAVASTHA</span>
    </span>
  )
}
