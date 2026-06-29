import { CSSProperties } from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.018, delayChildren: 0.1 },
  },
}

const wordVariant = {
  hidden: { opacity: 0.15, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <motion.p
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}
