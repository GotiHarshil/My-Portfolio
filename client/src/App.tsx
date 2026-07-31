import { useEffect } from 'react'
import { logVisit } from './utils/api'
import SmoothScroll from './components/ui/SmoothScroll'
import AmbientGlow from './components/ui/AmbientGlow'
import SiteNav from './components/SiteNav'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  // Ping the server once per browser session so a visit gets logged (and
  // emailed, at most once a day per IP). Never let a failure surface.
  useEffect(() => {
    if (sessionStorage.getItem('visit-logged')) return
    sessionStorage.setItem('visit-logged', '1')
    logVisit().catch(() => {})
  }, [])

  return (
    <SmoothScroll>
      <div
        id="top"
        style={{ background: 'var(--bg)', overflowX: 'clip', position: 'relative' }}
      >
        <AmbientGlow />
        <SiteNav />

        {/* Sections ride above the ambient layer; the dark ones stay
            transparent so the drifting light reads through them. */}
        <main style={{ position: 'relative', zIndex: 10 }}>
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  )
}
