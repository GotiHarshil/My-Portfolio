import { useEffect, useRef, useState } from 'react'

// TODO: Replace these with your own tech-stack/project screenshots (21 total)
const TECH_IMAGES = [
  'https://placehold.co/420x270/111/BBCCD7?text=React',
  'https://placehold.co/420x270/111/BBCCD7?text=Node.js',
  'https://placehold.co/420x270/111/BBCCD7?text=Express',
  'https://placehold.co/420x270/111/BBCCD7?text=MongoDB',
  'https://placehold.co/420x270/111/BBCCD7?text=TypeScript',
  'https://placehold.co/420x270/111/BBCCD7?text=Tailwind+CSS',
  'https://placehold.co/420x270/111/BBCCD7?text=Firebase',
  'https://placehold.co/420x270/111/BBCCD7?text=Redux',
  'https://placehold.co/420x270/111/BBCCD7?text=MANU+App',
  'https://placehold.co/420x270/111/BBCCD7?text=REST+API',
  'https://placehold.co/420x270/111/BBCCD7?text=Booking+Platform',
  'https://placehold.co/420x270/111/BBCCD7?text=Git',
  'https://placehold.co/420x270/111/BBCCD7?text=Postman',
  'https://placehold.co/420x270/111/BBCCD7?text=Vite',
  'https://placehold.co/420x270/111/BBCCD7?text=PostgreSQL',
  'https://placehold.co/420x270/111/BBCCD7?text=Docker',
  'https://placehold.co/420x270/111/BBCCD7?text=Vercel',
  'https://placehold.co/420x270/111/BBCCD7?text=AWS',
  'https://placehold.co/420x270/111/BBCCD7?text=Linux',
  'https://placehold.co/420x270/111/BBCCD7?text=JWT+Auth',
  'https://placehold.co/420x270/111/BBCCD7?text=Pace+University',
]

const ROW1 = TECH_IMAGES.slice(0, 11)
const ROW2 = TECH_IMAGES.slice(11)

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tripled = <T,>(arr: T[]) => [...arr, ...arr, ...arr]

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Row 1 — moves right */}
      <div
        className="flex gap-3 mb-3"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {tripled(ROW1).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {tripled(ROW2).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </section>
  )
}
