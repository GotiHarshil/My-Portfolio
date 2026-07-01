import { useEffect, useState } from 'react'
import FadeIn from './ui/FadeIn'

interface Experience {
  _id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  points: string[]
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    fetch('/api/experiences')
      .then((r) => r.json())
      .then((data) => setExperiences(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  if (!experiences.length) return null

  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
        {experiences.map((exp, i) => (
          <FadeIn key={exp._id} delay={i * 0.12} y={30}>
            <div className="border border-[#D7E2EA]/15 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 flex flex-col gap-5">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div>
                  <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs mb-1">
                    {exp.company} — {exp.location}
                  </p>
                  <h3
                    className="text-[#D7E2EA] font-semibold uppercase tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)' }}
                  >
                    {exp.role}
                  </h3>
                </div>
                <span className="inline-flex items-center self-start sm:self-center flex-shrink-0 border border-[#D7E2EA]/20 rounded-full px-4 py-1.5 text-[#D7E2EA]/60 text-xs sm:text-sm font-light tracking-wide whitespace-nowrap">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-[#D7E2EA]/10" />

              {/* Bullet points */}
              <ul className="flex flex-col gap-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <span className="mt-[0.4em] w-1 h-1 rounded-full bg-[#D7E2EA]/40 flex-shrink-0" />
                    <span
                      className="text-[#D7E2EA]/70 font-light leading-relaxed"
                      style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)' }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
