import { motion } from 'framer-motion'
import type { FC } from 'react'

const LogoReliable: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="10" y="14" width="44" height="36" rx="6" />
      <path d="M16 26h20M16 34h12M16 42h24" />
      <circle cx="44" cy="24" r="5" />
    </g>
  </svg>
)

const LogoInfoObjects: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="20" cy="24" r="8" />
      <rect x="32" y="16" width="20" height="16" rx="4" />
      <path d="M12 46h40" />
    </g>
  </svg>
)

const entries = [
  {
    company: 'Reliablesoft Technologies Pvt Ltd',
    role: 'Software Engineer (Full Stack Developer)',
    period: 'Oct 2021 - Dec 2024',
    points: [
      'Developed NetManazer Broadband Management System for ISPs using React.js, Node.js, GraphQL, PostgreSQL, and MongoDB',
      'Integrated WhatsApp with third-party vendor Rapbooster.com, optimizing communication workflows for clients',
      'Built real-time monitoring, remote issue management, billing, bandwidth management, and AAA solutions',
      'Proficient in Node.js development with shell scripting knowledge for automation tasks',
    ],
    Logo: LogoReliable,
  },
  {
    company: 'Infoobjects Software Pvt Ltd',
    role: 'Software Engineer (Full-Stack Developer)',
    period: 'Dec 2024 - Present',
    points: [
      'Working on Vriti.AI - Intelligent Recruitment Process Platform Powered by AI',
      'Handled work for two developers over the past two weeks to maintain project momentum while teammate was occupied',
      'Proficient in Node.js and Nest.js development with microservices and backend architecture',
      'Contributing to multiple subprojects including AI Interview Platform, Charting Library, and Data Encryption Module',
    ],
    Logo: LogoInfoObjects,
  },
]

const ExperienceSection: FC = () => {
  return (
    <section className="relative section-padding py-16 sm:py-20 md:py-28">
      <div className="container-max w-full">
        <div className="mb-8 sm:mb-12">
          <p className="text-champagne uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3">Experience</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-fraunces">Where I shipped impact</h2>
        </div>

        <div className="relative">
          {/* Gold animated thread */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 -z-10 hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-[2px] h-full origin-top bg-gradient-to-b from-champagne via-champagne/60 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </motion.div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {entries.map(({ company, role, period, points, Logo }, idx) => (
              <div key={company} className="grid grid-cols-1 md:grid-cols-[1fr_24px_1fr] items-start gap-0 md:gap-6 lg:gap-10">
                {/* Empty space for desktop timeline */}
                <div className="hidden md:block" />
                
                {/* Timeline dot - only visible on desktop */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-champagne shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </div>

                {/* Card - full width on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="glass-effect rounded-2xl border border-white/10 hover:border-champagne/40 transition-colors p-4 sm:p-6 w-full"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-3 text-champagne">
                    <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10">
                      <Logo />
                    </div>
                    <div className="flex-1 min-w-0 w-full">
                      <h3 className="font-fraunces text-base sm:text-lg md:text-xl text-ivory mb-1.5 sm:mb-1 break-words leading-tight">{company}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-gray leading-relaxed">
                        <span className="block sm:inline">{role}</span>
                        <span className="text-champagne/60 block sm:inline sm:ml-1 mt-0.5 sm:mt-0">{period}</span>
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-muted-gray space-y-2 sm:space-y-1.5 md:space-y-2">
                    {points.map((p) => (
                      <li key={p} className="pl-1 sm:pl-2 text-justify break-words leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
