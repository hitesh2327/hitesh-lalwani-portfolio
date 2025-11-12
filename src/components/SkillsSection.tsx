import { motion } from 'framer-motion'
import type { FC } from 'react'

type Skill = {
  name: string
  Icon: FC
}

const IconReact: FC = () => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="12">
      <circle cx="128" cy="128" r="16" />
      <ellipse cx="128" cy="128" rx="90" ry="36" transform="rotate(0 128 128)" />
      <ellipse cx="128" cy="128" rx="90" ry="36" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="90" ry="36" transform="rotate(120 128 128)" />
    </g>
  </svg>
)

const IconNode: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <path d="M32 4l24 14v28L32 60 8 46V18L32 4z" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M24 26h16v12H24z" fill="none" stroke="currentColor" strokeWidth="3" />
  </svg>
)

const IconGraphQL: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <polygon points="32,6 58,20 58,44 32,58 6,44 6,20" />
      <line x1="32" y1="6" x2="32" y2="58" />
      <line x1="6" y1="20" x2="58" y2="44" />
      <line x1="58" y1="20" x2="6" y2="44" />
    </g>
  </svg>
)

const IconPostgres: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <ellipse cx="32" cy="20" rx="20" ry="12" />
      <path d="M12 20v14c0 8 9 14 20 14s20-6 20-14V20" />
      <path d="M22 24v14M32 24v24M42 24v14" />
    </g>
  </svg>
)

const IconNest: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M12 32c0-11 9-20 20-20a20 20 0 0120 20c0 11-9 20-20 20" />
      <path d="M20 36c3 6 10 10 16 10" />
    </g>
  </svg>
)

const IconKafka: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="32" cy="32" r="6" />
      <circle cx="16" cy="32" r="6" />
      <circle cx="48" cy="32" r="6" />
      <circle cx="24" cy="16" r="6" />
      <circle cx="40" cy="48" r="6" />
      <line x1="22" y1="18" x2="30" y2="28" />
      <line x1="42" y1="46" x2="34" y2="36" />
      <line x1="22" y1="32" x2="26" y2="32" />
      <line x1="42" y1="32" x2="38" y2="32" />
    </g>
  </svg>
)

const IconAntDesign: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="12" y="12" width="40" height="40" rx="8" />
      <circle cx="32" cy="32" r="8" />
      <path d="M20 20l8 8M44 20l-8 8M20 44l8-8M44 44l-8-8" />
    </g>
  </svg>
)

const IconGit: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="32" cy="32" r="12" />
      <path d="M20 20l12 12M44 44l-12-12M20 44l12-12M44 20l-12 12" />
    </g>
  </svg>
)

const IconReactNative: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="8" y="16" width="48" height="32" rx="4" />
      <circle cx="32" cy="32" r="6" />
      <path d="M20 20h24M20 28h24M20 36h24M20 44h24" />
    </g>
  </svg>
)

const IconMongoDB: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M32 8c-8 0-16 6-16 16v16c0 10 8 16 16 16s16-6 16-16V24c0-10-8-16-16-16z" />
      <path d="M24 24h16v16H24z" />
    </g>
  </svg>
)

const skills: Skill[] = [
  { name: 'React.js', Icon: IconReact },
  { name: 'Node.js', Icon: IconNode },
  { name: 'Apollo GraphQL', Icon: IconGraphQL },
  { name: 'PostgreSQL', Icon: IconPostgres },
  { name: 'Nest.js', Icon: IconNest },
  { name: 'Kafka Queue', Icon: IconKafka },
  { name: 'Ant Design', Icon: IconAntDesign },
  { name: 'Git', Icon: IconGit },
  { name: 'React Native', Icon: IconReactNative },
  { name: 'MongoDB', Icon: IconMongoDB },
]

const SkillsSection: FC = () => {
  return (
    <section className="relative section-padding py-20 md:py-28">
      <div className="container-max">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-champagne uppercase tracking-widest text-xs sm:text-sm mb-3">Skills</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-fraunces">Stack I build with</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map(({ name, Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group glass-effect rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center border border-white/10 hover:border-champagne/40 transition-colors"
            >
              <div className="text-champagne group-hover:text-champagne-light transition-colors">
                <Icon />
              </div>
              <div className="font-inter text-sm text-muted-gray group-hover:text-ivory transition-colors">{name}</div>
              <div className="h-px w-10 bg-gradient-to-r from-transparent via-champagne/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
