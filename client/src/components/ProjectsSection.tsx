import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from './ui/LiveProjectButton'
import FadeIn from './ui/FadeIn'

interface ProjectData {
  num: string
  category: string
  name: string
  tags: string[]
  buttonLabel: string
  buttonHref: string
  col1Top: string
  col1Bottom: string
  col2: string
}

const PROJECTS: ProjectData[] = [
  {
    num: '01',
    category: 'Personal',
    name: 'MANU — Food Vendor E-Commerce',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Redux'],
    buttonLabel: 'Live Project',
    buttonHref: 'https://food-vendor-ecommerce.vercel.app',
    // TODO: replace with real screenshots
    col1Top: 'https://placehold.co/400x230/0C0C0C/BBCCD7?text=MANU+Dashboard',
    col1Bottom: 'https://placehold.co/400x340/0C0C0C/BBCCD7?text=MANU+Storefront',
    col2: 'https://placehold.co/600x600/0C0C0C/BBCCD7?text=MANU+Checkout',
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Accommodation Booking Platform',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    buttonLabel: '',
    buttonHref: '',
    // TODO: replace with real screenshots
    col1Top: 'https://placehold.co/400x230/0C0C0C/BBCCD7?text=Property+Search',
    col1Bottom: 'https://placehold.co/400x340/0C0C0C/BBCCD7?text=Booking+Flow',
    col2: 'https://placehold.co/600x600/0C0C0C/BBCCD7?text=Property+Detail',
  },
]

const TOTAL = PROJECTS.length

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1])

  const borderRadius = 'clamp(24px, 5vw, 60px)'

  return (
    <div
      ref={ref}
      className="h-[85vh] sticky"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          borderRadius,
          background: 'rgba(18, 18, 20, 0.72)',
          backdropFilter: 'blur(24px) saturate(140%)',
          WebkitBackdropFilter: 'blur(24px) saturate(140%)',
          border: '1px solid var(--border-strong)',
          boxShadow: '0 32px 80px rgba(0, 0, 0, 0.55)',
        }}
        className="h-full p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 md:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase tracking-tight leading-tight"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.6rem)' }}
              >
                {project.name}
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#D7E2EA]/60 text-xs border border-[#D7E2EA]/20 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {project.buttonHref && (
            <LiveProjectButton href={project.buttonHref} label={project.buttonLabel} />
          )}
        </div>

        {/* Bottom row — image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          {/* Left col — 40% */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1Top}
              alt=""
              loading="lazy"
              className="w-full object-cover"
              style={{
                height: 'clamp(130px, 16vw, 230px)',
                borderRadius,
              }}
            />
            <img
              src={project.col1Bottom}
              alt=""
              loading="lazy"
              className="w-full object-cover flex-1"
              style={{
                height: 'clamp(160px, 22vw, 340px)',
                borderRadius,
              }}
            />
          </div>
          {/* Right col — 60% */}
          <div style={{ width: '60%' }}>
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ borderRadius }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
