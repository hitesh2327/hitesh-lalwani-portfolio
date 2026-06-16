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

const IconPython: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M32 12c-10 0-10 4-10 10v6h20v4H18c-12 0-12-8-12-16s0-16 12-16h16c10 0 10 4 10 10" />
      <path d="M32 52c10 0 10-4 10-10v-6H22v-4h24c12 0 12 8 12 16s0 16-12 16H30c-10 0-10-4-10-10" />
    </g>
  </svg>
)

const IconLangchain: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="20" cy="32" r="8" />
      <circle cx="44" cy="32" r="8" />
      <line x1="28" y1="32" x2="36" y2="32" />
    </g>
  </svg>
)

const IconAWS: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M10 40c10 10 24 10 44 0" />
      <path d="M46 44l8-4-2-8" />
      <path d="M22 28l10-12 10 12" />
    </g>
  </svg>
)

const IconDocker: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M12 36h40v12H12z" />
      <rect x="20" y="24" width="8" height="8" />
      <rect x="28" y="24" width="8" height="8" />
      <rect x="36" y="24" width="8" height="8" />
      <rect x="28" y="16" width="8" height="8" />
    </g>
  </svg>
)

const IconTS: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="12" y="12" width="40" height="40" rx="4" />
      <path d="M22 28h12M28 28v16" />
      <path d="M36 40c0 4 6 4 6 0s-6-4-6-8 6-4 6 0" />
    </g>
  </svg>
)

const IconSocket: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="32" cy="32" r="20" />
      <path d="M32 18v28M18 32h28" />
    </g>
  </svg>
)

const IconKong: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <polygon points="32,10 52,50 12,50" />
      <circle cx="32" cy="36" r="6" />
    </g>
  </svg>
)

const IconGrafana: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M32 12a20 20 0 1 1-18 28" />
      <rect x="26" y="26" width="12" height="12" />
    </g>
  </svg>
)

const skills: Skill[] = [
  { name: 'React.js', Icon: IconReact },
  { name: 'Node.js', Icon: IconNode },
  { name: 'Apollo GraphQL', Icon: IconGraphQL },
  { name: 'PostgreSQL', Icon: IconPostgres },
  { name: 'Nest.js', Icon: IconNest },
  { name: 'Kafka', Icon: IconKafka },
  { name: 'Ant Design', Icon: IconAntDesign },
  { name: 'Git', Icon: IconGit },
  { name: 'React Native', Icon: IconReactNative },
  { name: 'MongoDB', Icon: IconMongoDB },
  { name: 'Python FastAPI', Icon: IconPython },
  { name: 'LangChain / LangGraph', Icon: IconLangchain },
  { name: 'AWS EC2', Icon: IconAWS },
  { name: 'Docker', Icon: IconDocker },
  { name: 'TypeScript', Icon: IconTS },
  { name: 'Socket.io', Icon: IconSocket },
  { name: 'Kong API Gateway', Icon: IconKong },
  { name: 'Prometheus / Grafana', Icon: IconGrafana },
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
