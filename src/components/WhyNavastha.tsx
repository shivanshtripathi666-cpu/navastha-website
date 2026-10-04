import Reveal from './Reveal'

export default function WhyNavastha() {
  return (
    <section id="why" aria-labelledby="why-title" className="px-5 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0d2418] p-8 text-[#eef3ec] sm:p-14">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#4abe78]/25 blur-3xl"
          aria-hidden="true"
        />
        <Reveal className="relative">
          <h2 id="why-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for the next stage.
          </h2>
        </Reveal>

        <div className="relative mt-10 grid gap-8 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <p className="font-display text-6xl font-bold tracking-tight text-[#4abe78] sm:text-7xl">NAVA</p>
            <p className="mt-3 text-lg text-[#c5d3c8]">New. Fresh. Next.</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display text-6xl font-bold tracking-tight sm:text-7xl">STHA</p>
            <p className="mt-3 text-lg text-[#c5d3c8]">Inspired by Avastha — a state or stage.</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <p className="mt-10 max-w-2xl border-t border-white/15 pt-6 text-lg leading-relaxed">
            Navastha represents moving into a new state of focus, growth and possibility.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
