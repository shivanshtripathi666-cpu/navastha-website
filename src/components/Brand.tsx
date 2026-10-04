export function LeafMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M27 5C13 5 6 12 6 20c0 2 .5 4 1.500 5.500C9.500 17 14 12 21 9.500 15 13 11 18.500 9.500 26c1 .4 2.200.6 3.500.6C21 26.600 27 20 27 5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Brand() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LeafMark className="h-7 w-7 text-brand" />
      <span className="font-display text-lg font-semibold tracking-[0.16em]">NAVASTHA</span>
    </span>
  )
}
