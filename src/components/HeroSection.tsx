import { motion, type Variants } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import MagneticButton from './MagneticButton'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 10,
          y: (e.clientY - rect.top - rect.height / 2) / 10,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-champagne/20 to-champagne-light/20 rounded-full blur-3xl"
          animate={{ x: mousePosition.x, y: mousePosition.y, scale: [1, 1.1, 1] }}
          transition={{ x: { type: 'spring', stiffness: 50, damping: 15 }, y: { type: 'spring', stiffness: 50, damping: 15 }, scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-champagne-light/15 to-champagne/15 rounded-full blur-3xl"
          animate={{ x: -mousePosition.x * 0.5, y: -mousePosition.y * 0.5, scale: [1.1, 1, 1.1] }}
          transition={{ x: { type: 'spring', stiffness: 30, damping: 15 }, y: { type: 'spring', stiffness: 30, damping: 15 }, scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        />
      </div>

      {/* Main Content */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 text-center max-w-6xl mx-auto section-padding">
        <motion.div variants={itemVariants} className="mb-6">
          <motion.p className="text-green-500 text-lg md:text-xl font-inter tracking-wider uppercase" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            Hello, I'm
          </motion.p>
        </motion.div>

        <motion.div variants={nameVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-fraunces font-bold leading-none">
            <motion.span className="block text-white" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}>Hitesh</motion.span>
            <motion.span className="block bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}>Lalwani</motion.span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <motion.p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-inter font-light max-w-4xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}>
            Software Engineer <span className="text-green-500 mx-4">•</span> React.js <span className="text-green-500 mx-2">•</span> Node.js <span className="text-green-500 mx-2">•</span> PostgreSQL
          </motion.p>
          <motion.p className="text-lg text-gray-500 font-inter font-light max-w-4xl mx-auto leading-relaxed mt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }}>
            Jodhpur, Rajasthan • 3+ Years Experience
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagneticButton 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-transparent border-2 border-champagne text-champagne font-inter font-medium text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-champagne hover:text-charcoal" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div className="absolute inset-0 bg-champagne" initial={{ scaleX: 0, originX: 0 }} whileHover={{ scaleX: 1, originX: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }} />
          </MagneticButton>

          <MagneticButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-champagne text-charcoal font-inter font-medium text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-champagne-light" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div className="absolute inset-0 bg-champagne-light" initial={{ scaleX: 0, originX: 1 }} whileHover={{ scaleX: 1, originX: 1 }} transition={{ duration: 0.3, ease: 'easeOut' }} />
          </MagneticButton>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.8 }}>
          <motion.div className="w-6 h-10 border-2 border-champagne/50 rounded-full flex justify-center" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <motion.div className="w-1 h-3 bg-champagne rounded-full mt-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
