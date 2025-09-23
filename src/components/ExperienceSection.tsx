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
    <section className="relative section-padding py-20 md:py-28">
      <div className="container-max">
        <div className="mb-12">
          <p className="text-champagne uppercase tracking-widest text-sm mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-fraunces">Where I shipped impact</h2>
        </div>

        <div className="relative">
          {/* Gold animated thread */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 -z-10"
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

          <div className="space-y-10">
            {entries.map(({ company, role, period, points, Logo }, idx) => (
              <div key={company} className="grid grid-cols-[32px_1fr] md:grid-cols-[1fr_24px_1fr] items-start gap-6 md:gap-10">
                {/* Dot / Marker */}
                <div className="hidden md:block" />
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-champagne shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="glass-effect rounded-2xl border border-white/10 hover:border-champagne/40 transition-colors p-6"
                >
                  <div className="flex items-center gap-4 mb-3 text-champagne">
                    <Logo />
                    <div>
                      <h3 className="font-fraunces text-xl text-ivory">{company}</h3>
                      <p className="text-muted-gray">{role} <span className="text-champagne/60">{period}</span></p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-muted-gray space-y-1">
                    {points.map((p) => (
                      <li key={p}>{p}</li>
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
