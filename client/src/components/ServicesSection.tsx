import FadeIn, { FadeInItem } from './ui/FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'Full-Stack Development',
    desc: 'End-to-end web applications built on the MERN stack — React.js, Node.js, Express, and MongoDB — with clean architecture and code built to scale.',
  },
  {
    num: '02',
    name: 'API Development',
    desc: 'Designing and building RESTful APIs with secure, role-based authentication and integrations that power dynamic, data-driven features.',
  },
  {
    num: '03',
    name: 'Frontend Engineering',
    desc: 'Responsive, accessible interfaces built with React, Redux, and Tailwind CSS, focused on performance and a smooth user experience.',
  },
  {
    num: '04',
    name: 'Backend & Database',
    desc: 'Robust backend services and optimized MongoDB data layers — including ~40% query performance improvements on production workloads.',
  },
  {
    num: '05',
    name: 'Tooling & Collaboration',
    desc: 'Git-based collaborative workflows, REST tooling (Postman), Firebase, and cross-functional teamwork to debug, ship, and iterate fast.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
        >
          Services
        </h2>
      </FadeIn>

      <FadeIn stagger={0.09} className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((svc) => (
          <FadeInItem key={svc.num}>
            <div
              className="group relative flex items-start gap-5 sm:gap-8 md:gap-10
                py-8 sm:py-10 md:py-12 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-3xl
                transition-colors duration-500"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {/* Hover wash */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(182,0,168,0.07) 0%, transparent 60%)',
                }}
              />

              <span
                className="font-black leading-none flex-shrink-0 tabular transition-colors duration-500
                  relative z-10"
                style={{
                  fontSize: 'clamp(2.75rem, 10vw, 140px)',
                  color: 'var(--text-muted)',
                }}
              >
                {svc.num}
              </span>

              <div className="flex flex-col gap-2 pt-1 sm:pt-2 relative z-10">
                <h3
                  className="font-medium uppercase transition-colors duration-500"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: 'var(--text-primary)' }}
                >
                  {svc.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeInItem>
        ))}
      </FadeIn>
    </section>
  )
}
