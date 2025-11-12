import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import ToolsSection from "./components/ToolsSection";
import Navigation from "./components/Navigation";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Fixed Background Layer - z-0 */}
      <AnimatedBackground />

      {/* Fixed Noise Overlay - z-10 */}
      <div className="fixed inset-0 noise pointer-events-none z-10" />

      {/* Main Content - z-20 */}
      <motion.main
        className="relative z-20 pt-16"
        style={{
          willChange: "transform",
          transform: "translateZ(0)", // GPU acceleration
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="tools">
          <ToolsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </motion.main>

      {/* Navigation - z-30 (highest) */}
      <Navigation />
    </div>
  );
}

export default App;
