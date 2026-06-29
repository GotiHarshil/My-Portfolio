import FadeIn from './ui/FadeIn'

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
      id="experience"
      className="bg-white
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10
                py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {svc.num}
              </span>

              {/* Name + desc */}
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {svc.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
