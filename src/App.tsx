import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import ToolsSection from './components/ToolsSection'
import Navigation from './components/Navigation'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 noise pointer-events-none z-10" />
      
      {/* Main Content */}
      <motion.main 
        style={{ y }}
        className="relative z-20 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <div id="about"><AboutSection /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="experience"><ExperienceSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="education"><EducationSection /></div>
        <div id="tools"><ToolsSection /></div>
        <div id="contact"><ContactSection /></div>
      </motion.main>
    </div>
  )
}

export default App
