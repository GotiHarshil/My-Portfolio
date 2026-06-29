import type { CSSProperties } from 'react'
import FadeIn from './ui/FadeIn'
import AnimatedText from './ui/AnimatedText'
import ContactButton from './ui/ContactButton'

const ABOUT_TEXT =
  "I'm a software engineer pursuing my master of science in computer science at pace university in new york. with professional experience as a junior software engineer at squarebit in india, i've built and shipped responsive, data-driven web applications used by real clients. my core strength lies in the mern stack — react, node, express, and mongodb — where i design clean architectures, build robust apis, and create interfaces people enjoy using. let's build something great together!"

const CORNER_IMGS = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'moon',
    className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    fadeX: -80,
    delay: 0.1,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3d object',
    className: 'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    fadeX: -80,
    delay: 0.25,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'lego',
    className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    fadeX: 80,
    delay: 0.15,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3d group',
    className: 'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    fadeX: 80,
    delay: 0.3,
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center
        px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Corner decorative images */}
      {CORNER_IMGS.map((img) => (
        <FadeIn key={img.alt} delay={img.delay} x={img.fadeX} y={0} duration={0.9} className={img.className}>
          <img src={img.src} alt={img.alt} />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10 relative">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as CSSProperties}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 z-10 relative">
        <ContactButton />
      </div>
    </section>
  )
}
