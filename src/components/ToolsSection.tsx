import { motion } from 'framer-motion'
import type { FC } from 'react'

const IconVSCode: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="8" y="8" width="48" height="48" rx="4" />
      <path d="M20 20h24M20 28h16M20 36h20" />
      <circle cx="44" cy="32" r="4" />
    </g>
  </svg>
)

const IconAndroidStudio: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="12" y="16" width="40" height="32" rx="4" />
      <circle cx="24" cy="28" r="3" />
      <circle cx="40" cy="28" r="3" />
      <path d="M20 40h24" />
    </g>
  </svg>
)

const IconCursor: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="8" y="12" width="48" height="40" rx="4" />
      <path d="M16 20h32M16 28h24M16 36h28" />
      <path d="M48 20l-8 8 8 8" />
    </g>
  </svg>
)

const IconGit: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="32" cy="32" r="12" />
      <path d="M20 20l12 12M44 44l-12-12M20 44l12-12M44 20l-12 12" />
    </g>
  </svg>
)

const IconPostman: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="12" y="16" width="40" height="32" rx="4" />
      <path d="M20 24h24M20 32h16M20 40h20" />
      <circle cx="44" cy="28" r="3" />
    </g>
  </svg>
)

const IconDataGrip: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="8" y="12" width="48" height="40" rx="4" />
      <path d="M16 20h32M16 28h24M16 36h28M16 44h20" />
    </g>
  </svg>
)

const IconPgAdmin: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="12" y="16" width="40" height="32" rx="4" />
      <path d="M20 24h24M20 32h16M20 40h20" />
      <circle cx="44" cy="28" r="3" />
    </g>
  </svg>
)

const IconBitbucket: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="8" y="20" width="48" height="24" rx="4" />
      <path d="M16 28h32M16 36h24" />
    </g>
  </svg>
)

const IconMongoCompass: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="32" cy="32" r="16" />
      <path d="M24 24h16v16H24z" />
      <circle cx="32" cy="32" r="4" />
    </g>
  </svg>
)

const tools = [
  { name: 'VS Code', Icon: IconVSCode },
  { name: 'Android Studio', Icon: IconAndroidStudio },
  { name: 'Cursor.sh', Icon: IconCursor },
  { name: 'Git', Icon: IconGit },
  { name: 'Postman', Icon: IconPostman },
  { name: 'DataGrip', Icon: IconDataGrip },
  { name: 'pgAdmin', Icon: IconPgAdmin },
  { name: 'Bitbucket', Icon: IconBitbucket },
  { name: 'MongoDB Compass', Icon: IconMongoCompass },
]

const ToolsSection: FC = () => {
  return (
    <section className="relative section-padding py-20 md:py-28">
      <div className="container-max">
        <div className="mb-10">
          <p className="text-champagne uppercase tracking-widest text-sm mb-3">Tools</p>
          <h2 className="text-4xl md:text-5xl font-fraunces">Development environment</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {tools.map(({ name, Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group glass-effect rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center border border-white/10 hover:border-champagne/40 transition-colors"
            >
              <div className="text-champagne group-hover:text-champagne-light transition-colors">
                <Icon />
              </div>
              <div className="font-inter text-xs text-muted-gray group-hover:text-ivory transition-colors">{name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
