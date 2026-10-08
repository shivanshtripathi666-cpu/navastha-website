import Brand from './Brand'
import { SUPPORT_EMAIL } from '../config'

const links = [
  ['Home', '#home'],
  ['Students', '#students'],
  ['Libraries', '#libraries'],
  ['Features', '#features'],
  ['About', '#about'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
  ['Support', './support.html'],
  ['Privacy', './privacy.html'],
  ['Terms', './terms.html'],
  ['Delete account', './delete-account.html'],
] as const

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Brand />
          <p className="mt-3 text-muted">A New State of Focus.</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-2 inline-block text-sm text-muted underline-offset-4 transition hover:text-fg hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
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
