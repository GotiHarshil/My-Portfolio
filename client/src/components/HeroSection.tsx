import { motion } from 'framer-motion'
import Magnet from './ui/Magnet'
import ContactButton from './ui/ContactButton'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fade = (delay: number, y = 30, x = 0) => ({
  initial: { opacity: 0, y, x },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
})

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Hero heading — top padding clears the fixed nav */}
      <div className="overflow-hidden relative z-10 pt-24 md:pt-28">
        <motion.h1
          {...fade(0.1, 44)}
          className="hero-heading font-black uppercase tracking-tight leading-none
            whitespace-nowrap w-full text-center"
          style={{ fontSize: 'clamp(2.5rem, 12.5vw, 200px)' }}
        >
          Hi, i&apos;m harshil
        </motion.h1>
      </div>

      {/* Portrait — outer div owns all positioning/transforms; motion.div only fades */}
      <div
        className="absolute z-10
          left-1/2 -translate-x-1/2 w-[86vw] top-[52%] -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0 sm:w-[360px]
          md:w-[440px] lg:w-[520px]"
      >
        <motion.div {...fade(0.55, 30)}>
          <Magnet padding={150} strength={3}>
            <div className="relative">
              <img
                src="/harshil.png"
                alt="Harshil Goti"
                className="w-full object-contain"
                style={{ mixBlendMode: 'luminosity' }}
                loading="eager"
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: '35%',
                  background: 'linear-gradient(to top, #0C0C0C 30%, transparent)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-20 flex justify-between items-end mt-auto
          px-6 md:px-10 pb-7 sm:pb-8 md:pb-10"
      >
        <motion.p
          {...fade(0.3, 20)}
          className="font-light uppercase tracking-wide leading-snug
            max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)', color: 'var(--text-secondary)' }}
        >
          a full-stack engineer driven by building performant, user-focused web applications
        </motion.p>

        <motion.div {...fade(0.45, 20)}>
          <ContactButton />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10
          hidden sm:flex flex-col items-center gap-2"
      >
        <span
          className="uppercase tracking-[0.25em] text-[0.6rem]"
          style={{ color: 'var(--text-muted)' }}
        >
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 7, 0], opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-6"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
