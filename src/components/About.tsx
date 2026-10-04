import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-y border-line bg-surface/40 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl px-5">
        <h2 id="about-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          About Navastha
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Navastha is being built with the idea that students deserve more than isolated tools. Their study
          environment, productivity, community and access to study spaces can work together.
        </p>
      </Reveal>
    </section>
  )
}
