import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.3 })

  // Frost the bar once the hero starts leaving
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight whichever section crosses the upper third of the viewport.
  // Computed from scroll position rather than IntersectionObserver so that
  // scrolling back into the hero — which is not one of the linked sections —
  // correctly clears the highlight instead of leaving the last one stuck on.
  useEffect(() => {
    let frame = 0

    const compute = () => {
      const line = window.innerHeight * 0.4
      let current = ''

      for (const link of LINKS) {
        const el = document.getElementById(link.id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= line && bottom > line) {
          current = link.id
          break
        }
      }

      setActive(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Don't let the page scroll behind the mobile sheet
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escape closes the sheet
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex: 100,
          background: scrolled ? 'rgba(12, 12, 12, 0.62)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
          transition:
            'background 420ms var(--ease-out-expo), backdrop-filter 420ms var(--ease-out-expo), border-color 420ms var(--ease-out-expo)',
        }}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-between px-5 sm:px-8 md:px-10 h-16 md:h-[72px]"
        >
          <a
            href="#top"
            className="font-black uppercase tracking-tight text-[#E8F0F6] text-base sm:text-lg cursor-pointer
              transition-opacity duration-300 hover:opacity-70"
          >
            Harshil
            <span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className="relative uppercase tracking-wider text-sm lg:text-[0.95rem] cursor-pointer
                      transition-colors duration-300"
                    style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-muted)' }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        transition={{ duration: 0.5, ease: EASE }}
                        className="absolute -bottom-1.5 left-0 right-0 h-px"
                        style={{ background: 'var(--accent)' }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-xl cursor-pointer
              text-[#E8F0F6] transition-colors duration-300"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Reading progress */}
        <motion.div
          aria-hidden="true"
          className="origin-left h-[2px]"
          style={{
            scaleX: progress,
            background: 'var(--brand-gradient)',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 420ms var(--ease-out-expo)',
          }}
        />
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.28, ease: EASE } }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 md:hidden flex flex-col items-center justify-center gap-2"
            style={{
              zIndex: 99,
              background: 'rgba(12, 12, 12, 0.94)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 + i * 0.06, ease: EASE }}
                className="font-black uppercase tracking-tight px-8 py-3 cursor-pointer"
                style={{
                  fontSize: 'clamp(2rem, 11vw, 3.25rem)',
                  color: active === link.id ? 'var(--text-primary)' : 'var(--text-muted)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
