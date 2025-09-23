import { motion } from 'framer-motion'
import type { FC } from 'react'

const IconCap: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M8 24l24-10 24 10-24 10-24-10z" />
      <path d="M16 30v10c4 3 12 6 16 6s12-3 16-6V30" />
    </g>
  </svg>
)

const IconBook: FC = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M12 14h20c4 0 8 4 8 8v28H12V14z" />
      <path d="M32 14h20v36H32" />
      <path d="M20 22h12M20 28h12" />
    </g>
  </svg>
)

const schools = [
  {
    name: 'Jai Narayan Vyas University',
    degree: 'Bachelor of Computer Applications (2019-2022)',
    Logo: IconCap,
  },
  {
    name: 'Bikaner Technical University',
    degree: 'Master of Computer Applications (2022-2025)',
    Logo: IconBook,
  },
]

const EducationSection: FC = () => {
  return (
    <section className="relative section-padding py-20 md:py-28">
      <div className="container-max">
        <div className="mb-10">
          <p className="text-champagne uppercase tracking-widest text-sm mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-fraunces">Foundations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {schools.map(({ name, degree, Logo }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="glass-effect rounded-2xl border border-white/10 hover:border-champagne/40 transition-colors p-6 flex items-start gap-4"
            >
              <div className="text-champagne"><Logo /></div>
              <div>
                <h3 className="font-fraunces text-xl text-ivory">{name}</h3>
                <p className="text-muted-gray">{degree}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <motion.div aria-hidden className="pointer-events-none mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-champagne to-transparent"/>
      </motion.div>
    </section>
  )
}

export default EducationSection
