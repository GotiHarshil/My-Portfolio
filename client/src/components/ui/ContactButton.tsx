import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ContactButton({
  label = 'Contact Me',
  href = 'mailto:harshilgoti01@gmail.com',
}: {
  label?: string
  href?: string
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className="group inline-flex items-center gap-2 rounded-full font-medium uppercase
        tracking-widest text-white cursor-pointer
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base"
      style={{
        background: 'var(--brand-gradient)',
        boxShadow:
          '0 4px 24px rgba(181, 1, 167, 0.28), inset 4px 4px 12px rgba(119, 33, 177, 0.9)',
        outline: '2px solid rgba(255,255,255,0.92)',
        outlineOffset: '-3px',
      }}
    >
      {label}
      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  )
}
