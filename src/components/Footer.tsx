import Brand from './Brand'

const links = [
  ['Home', '#home'],
  ['Students', '#students'],
  ['Libraries', '#libraries'],
  ['Features', '#features'],
  ['About', '#about'],
  ['Contact', '#contact'],
  ['Privacy', './privacy.html'],
] as const

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Brand />
          <p className="mt-3 text-muted">A New State of Focus.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-sm text-muted transition hover:text-fg">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">
        © 2026 Navastha. All rights reserved.
      </div>
    </footer>
  )
}
