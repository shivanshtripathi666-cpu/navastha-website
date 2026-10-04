import Reveal from './Reveal'

export default function SectionHeading({
  id,
  title,
  text,
}: {
  id: string
  title: string
  text?: string
}) {
  return (
    <Reveal className="max-w-2xl">
      <h2 id={id} className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{text}</p>}
    </Reveal>
  )
}
