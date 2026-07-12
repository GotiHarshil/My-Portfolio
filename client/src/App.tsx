import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  useEffect(() => {
    fetch('/api/visit').catch(() => {})
  }, [])

  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
