import markSmall from '../assets/logo-mark-128.webp'
import markLarge from '../assets/logo-mark-384.webp'

/* Navastha mark: a glowing vine-N, nodes and leaves, on a forest-green tile. */
export function LogoMark({ className = '', large = false }: { className?: string; large?: boolean }) {
  return (
    <img
      src={large ? markLarge : markSmall}
      alt=""
      aria-hidden="true"
      width={large ? 384 : 128}
      height={large ? 384 : 128}
      decoding="async"
      className={`${className} object-contain`}
    />
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
