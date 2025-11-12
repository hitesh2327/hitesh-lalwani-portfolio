import { motion, AnimatePresence } from "framer-motion";
import { useState, type FC } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  organization: string;
  tags: string[];
  Art: FC;
};

const ArtAI: FC = () => (
  <svg
    viewBox="0 0 160 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-28"
  >
    <defs>
      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#00ffaa" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="160" height="100" rx="12" fill="url(#g1)" />
    <g stroke="#00ff88" strokeOpacity="0.5" fill="none">
      <path d="M16 70 C 40 20, 80 20, 144 70" />
      <circle cx="30" cy="70" r="4" />
      <circle cx="80" cy="45" r="6" />
      <circle cx="130" cy="70" r="4" />
    </g>
  </svg>
);

const ArtDashboard: FC = () => (
  <svg
    viewBox="0 0 160 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-28"
  >
    <rect
      x="0"
      y="0"
      width="160"
      height="100"
      rx="12"
      fill="rgba(0,255,170,0.08)"
    />
    <g stroke="#00ffaa" strokeOpacity="0.5" fill="none">
      <rect x="16" y="16" width="56" height="24" rx="4" />
      <rect x="88" y="16" width="56" height="24" rx="4" />
      <rect x="16" y="52" width="128" height="32" rx="6" />
    </g>
  </svg>
);

const ArtNotify: FC = () => (
  <svg
    viewBox="0 0 160 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-28"
  >
    <rect
      x="0"
      y="0"
      width="160"
      height="100"
      rx="12"
      fill="rgba(0,255,136,0.08)"
    />
    <g stroke="#00ff88" strokeOpacity="0.5" fill="none">
      <path d="M28 72h104" />
      <path d="M44 28h72" />
      <path d="M32 48h96" />
      <circle cx="128" cy="28" r="4" />
    </g>
  </svg>
);

const ArtVriti: FC = () => (
  <svg
    viewBox="0 0 160 100"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-28"
  >
    <rect
      x="0"
      y="0"
      width="160"
      height="100"
      rx="12"
      fill="rgba(0,255,136,0.06)"
    />
    <g stroke="#00ffaa" strokeOpacity="0.5" fill="none">
      <polygon points="16,80 40,24 64,80" />
      <polygon points="72,80 96,24 120,80" />
    </g>
  </svg>
);

const projects: Project[] = [
  {
    title: "NetManazer Smart Bandwidth Management",
    subtitle: "Broadband Management System for ISPs",
    organization: "Reliablesoft Technologies Pvt Ltd",
    description:
      "A comprehensive BMS designed for Internet Service Providers using React.js, Node.js, GraphQL, PostgreSQL, and MongoDB. Offers real-time monitoring, remote issue management, billing, bandwidth management, and AAA solutions.",
    tags: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "MongoDB"],
    Art: ArtDashboard,
  },
  {
    title: "BMS Notify",
    subtitle: "Backend notification system",
    organization: "Reliablesoft Technologies Pvt Ltd",
    description:
      "Developed a backend system providing APIs for sending emails, SMS, and WhatsApp messages. Focuses on offering API services without UI, allowing seamless message dispatch via third-party integrations.",
    tags: ["Node.js", "APIs", "WhatsApp", "SMS", "Email"],
    Art: ArtNotify,
  },
  {
    title: "Vriti.AI - AI Interview Platform",
    subtitle: "Intelligent recruitment with AI",
    organization: "Infoobjects Software Pvt Ltd",
    description:
      "Built frontend for AI interview platform. Integrated WebRTC, Socket.io, media recording, and live transcription for seamless interview experiences.",
    tags: ["React.js", "WebRTC", "Socket.io", "AI", "Transcription"],
    Art: ArtAI,
  },
  {
    title: "Vriti.AI - Charting Library",
    subtitle: "Dynamic charting engine",
    organization: "Infoobjects Software Pvt Ltd",
    description:
      "Developed backend services for a dynamic charting engine that generates various chart types from Excel/CSV datasets with centralized status management.",
    tags: ["Node.js", "Nest.js", "Data Processing", "Charts", "Excel/CSV"],
    Art: ArtVriti,
  },
  {
    title: "Vriti.AI - Staging Application",
    subtitle: "Centralized status management system",
    organization: "Infoobjects Software Pvt Ltd",
    description:
      "Engineered backend logic for a centralized status management system with a global Kanban board to streamline project tracking and workflow management.",
    tags: ["Node.js", "Nest.js", "Kanban", "Status Management", "Backend"],
    Art: ArtDashboard,
  },
  {
    title: "Vriti.AI - Data Encryption Module",
    subtitle: "Secure data encryption system",
    organization: "Infoobjects Software Pvt Ltd",
    description:
      "Implemented secure backend processes to encrypt sensitive database data using scheduled cron jobs, ensuring data security and compliance.",
    tags: ["Node.js", "Encryption", "Cron Jobs", "Security", "Database"],
    Art: ArtNotify,
  },
  {
    title: "LendEasy - Effortless Lending Solution",
    subtitle: "Effortless Lending Solution",
    organization: "",
    description:
      "Developed a comprehensive lending solution using Next.js, and Supabase. Features include loan application, approval, disbursement, and repayment management, with a focus on user-friendly interface and secure data handling.",
    tags: ["Next.js", "Security", "Database"],
    Art: ArtAI,
  },
];

const ProjectsSection: FC = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="relative section-padding py-20 md:py-28">
      <div className="container-max">
        <div className="mb-10">
          <p className="text-champagne uppercase tracking-widest text-sm mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-fraunces">Selected work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map(
            (
              { title, subtitle, organization, description, tags, Art },
              idx
            ) => (
              <motion.button
                key={title}
                onClick={() => setActive(projects[idx])}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="text-left group glass-effect rounded-2xl border border-white/10 hover:border-champagne/40 transition-colors overflow-hidden"
              >
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-fraunces text-xl text-ivory mb-1">
                      {title}
                    </h3>
                    <p className="text-muted-gray mb-1">{subtitle}</p>
                    <p className="text-champagne text-sm mb-3">
                      {organization}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-gray group-hover:text-ivory"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-champagne w-40 shrink-0">
                    <Art />
                  </div>
                </div>
                <div className="px-6 pb-6 text-muted-gray">{description}</div>
              </motion.button>
            )
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="glass-effect max-w-2xl w-full rounded-2xl border border-white/10 overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <div className="p-6 flex items-start gap-4">
                <div className="text-champagne w-40 hidden md:block">
                  <active.Art />
                </div>
                <div>
                  <h3 className="font-fraunces text-2xl text-ivory mb-1">
                    {active.title}
                  </h3>
                  <p className="text-muted-gray mb-1">{active.subtitle}</p>
                  <p className="text-champagne text-sm mb-3">
                    {active.organization}
                  </p>
                  <p className="text-muted-gray/90">{active.description}</p>
                </div>
              </div>
              <div className="px-6 pb-6 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-gray"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
