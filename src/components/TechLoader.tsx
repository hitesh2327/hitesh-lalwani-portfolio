import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, type FC } from 'react'

const TechLoader: FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [terminalLines, setTerminalLines] = useState<string[]>([])

  const steps = [
    'Initializing system...',
    'Loading React components...',
    'Compiling TypeScript...',
    'Building Framer Motion animations...',
    'Optimizing Tailwind CSS...',
    'Connecting to database...',
    'Loading portfolio data...',
    'Rendering UI components...',
    'Finalizing build...',
    'System ready!'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          setTerminalLines(prevLines => [...prevLines, `$ ${steps[prev]}`])
          return prev + 1
        }
        return prev
      })
    }, 200)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        {/* Terminal Window */}
        <div className="w-full max-w-2xl mx-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-lg border border-green-500/20 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-green-500/10 border-b border-green-500/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-green-500 text-sm font-mono">hitesh-lalwani-portfolio</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              {/* ASCII Art */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-champagne mb-6 text-center"
              >
                <pre className="text-xs leading-tight text-green-500">
{`    ██╗  ██╗██╗████████╗███████╗██╗  ██╗
    ██║  ██║██║╚══██╔══╝██╔════╝██║  ██║
    ███████║██║   ██║   ███████╗███████║
    ██╔══██║██║   ██║   ╚════██║██╔══██║
    ██║  ██║██║   ██║   ███████║██║  ██║
    ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝`}
                </pre>
                <p className="text-gray-400 mt-2">Full-Stack Developer • React • Node.js • PostgreSQL</p>
              </motion.div>

              {/* Terminal Lines */}
              <div className="space-y-1 mb-6">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    {line}
                  </motion.div>
                ))}
                {currentStep < steps.length && (
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-green-500"
                  >
                    $ {steps[currentStep]} <span className="animate-pulse">█</span>
                  </motion.div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Loading Portfolio</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 border border-green-500/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Tech Stack Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex justify-center gap-4 mt-6"
              >
                {['React', 'Node', 'GraphQL', 'PostgreSQL', 'MongoDB'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-green-500 text-xs bg-green-500/10 px-2 py-1 rounded border border-green-500/20"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TechLoader
