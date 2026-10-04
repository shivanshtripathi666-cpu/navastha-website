import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Brand from './Brand'
import ThemeToggle from './ThemeToggle'

const links = [
  ['Home', '#home'],
  ['Why Navastha', '#why'],
  ['Students', '#students'],
  ['Libraries', '#libraries'],
  ['Features', '#features'],
  ['About', '#about'],
  ['Contact', '#contact'],
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" aria-label="Navastha home">
          <Brand />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-muted transition hover:text-fg">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#early-access"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-on-brand transition hover:opacity-90 xl:inline-block"
          >
            Coming Soon
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden xl:hidden"
          >
            <ul className="mx-auto max-w-6xl space-y-1 px-5 pb-5">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base hover:bg-surface"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#early-access"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-brand px-5 py-3 text-center font-medium text-on-brand"
                >
                  Coming Soon
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
