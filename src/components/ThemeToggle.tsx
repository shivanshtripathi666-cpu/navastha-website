import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggle() {
    const next = !dark
    const root = document.documentElement
    root.classList.add('theme-anim')
    root.classList.toggle('dark', next)
    try {
      localStorage.setItem('navastha-theme', next ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
    setDark(next)
    window.setTimeout(() => root.classList.remove('theme-anim'), 400)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/70 text-fg transition hover:border-brand"
    >
      {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  )
}
