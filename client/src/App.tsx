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
