import { motion } from 'framer-motion'
import Magnet from './ui/Magnet'
import ContactButton from './ui/ContactButton'

const fade = (delay: number, y = 30, x = 0) => ({
  initial: { opacity: 0, y, x },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <motion.nav
        {...fade(0, -20)}
        className="flex justify-between items-center
          px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider
              text-sm md:text-lg lg:text-[1.4rem]
              transition-opacity duration-200 hover:opacity-70"
          >
            {link}
          </a>
        ))}
      </motion.nav>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <motion.h1
          {...fade(0.15, 40)}
          className="hero-heading font-black uppercase tracking-tight leading-none
            whitespace-nowrap w-full text-center
            mt-6 sm:mt-4 md:-mt-5"
          style={{ fontSize: 'clamp(2.5rem, 12.5vw, 200px)' }}
        >
          Hi, i&apos;m harshil
        </motion.h1>
      </div>

      {/* Portrait — centered absolutely */}
      <motion.div
        {...fade(0.6, 30)}
        className="absolute left-1/2 -translate-x-1/2 z-10
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3}>
          <div className="relative">
            <img
              src="/harshil.png"
              alt="Harshil Goti"
              className="w-full object-contain"
              style={{ mixBlendMode: 'luminosity' }}
              loading="eager"
            />
            {/* Fade portrait into dark background */}
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

      {/* Bottom bar */}
      <div
        className="flex justify-between items-end mt-auto
          px-6 md:px-10 pb-7 sm:pb-8 md:pb-10"
      >
        {/* Left text */}
        <motion.p
          {...fade(0.35, 20)}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
            max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a full-stack engineer driven by building performant, user-focused web applications
        </motion.p>

        {/* Contact button */}
        <motion.div {...fade(0.5, 20)}>
          <ContactButton />
        </motion.div>
      </div>
    </section>
  )
}
