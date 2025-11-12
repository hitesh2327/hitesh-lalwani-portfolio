import { motion } from 'framer-motion'

const IconCode = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M26 18L14 32L26 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 18L50 32L38 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconTeam = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="22" cy="22" r="8" stroke="currentColor" strokeWidth="3" />
    <circle cx="42" cy="22" r="6" stroke="currentColor" strokeWidth="3" />
    <path d="M8 50c2-8 10-14 18-14s16 6 18 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M36 44c1.5-5 6-9 11-9 5 0 9 4 11 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const IconSolve = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect x="12" y="12" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3" />
    <path d="M22 32h20M32 22v20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const AboutSection = () => {
  return (
    <section className="relative section-padding">
      <div className="container-max py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
            <p className="text-champagne uppercase tracking-widest text-sm mb-4">About Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-fraunces mb-6">Crafting reliable, beautiful products</h2>
            <p className="text-muted-gray text-base sm:text-lg leading-relaxed mb-4 text-justify">
              I'm a developer with over 3 years of experience specializing in Node.js, React.js, and PostgreSQL. 
              I thrive in teamwork and have successfully integrated OpenAI, third-party WhatsApp, and TMDB APIs. 
              My standout moment was completing a difficult project on a tight deadline, where I developed a 
              React Native webview for both Android and iOS with multiple environment facilities.
            </p>
            <p className="text-muted-gray text-base sm:text-lg leading-relaxed text-justify">
              I integrated push notifications using Firebase FNM, and successfully uploaded the iOS app to TestFlight, 
              enhancing our team's efficiency and project delivery. I handle complex backend development with 
              microservices, Kafka queues, and real-time systems.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {[
              { Icon: IconCode, title: 'Engineering', desc: 'Clean, modern, pragmatic' },
              { Icon: IconTeam, title: 'Collaboration', desc: 'Trusted, communicative, thoughtful' },
              { Icon: IconSolve, title: 'Problem‑Solving', desc: 'Systems thinking, impact‑driven' },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-champagne/40 transition-colors"
              >
                <div className="text-champagne mb-4">
                  <Icon />
                </div>
                <h3 className="font-fraunces text-xl mb-1">{title}</h3>
                <p className="text-muted-gray text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-champagne to-transparent"/>
      </motion.div>
    </section>
  )
}

export default AboutSection
