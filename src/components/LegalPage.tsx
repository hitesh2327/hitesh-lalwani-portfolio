import type { ReactNode } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import CustomCursor from "./CustomCursor";

export const CONTACT_EMAIL = "honeylalwani1999@gmail.com";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export const LegalSection = ({ heading, children }: { heading: string; children: ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-fraunces text-2xl sm:text-3xl mb-4">{heading}</h2>
    <div className="text-muted-gray text-base sm:text-lg leading-relaxed space-y-4 [&_a]:text-champagne [&_a]:underline-offset-4 hover:[&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-ivory">
      {children}
    </div>
  </section>
);

const LegalPage = ({ eyebrow, title, lastUpdated, children }: LegalPageProps) => (
  <div className="relative w-full min-h-screen overflow-x-hidden">
    <CustomCursor />
    <AnimatedBackground />
    <div className="fixed inset-0 noise pointer-events-none z-10" />

    <motion.main
      className="relative z-20 section-padding"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto w-full py-16 md:py-24">
        <a
          href="/"
          className="inline-block font-mono text-sm text-muted-gray hover:text-champagne transition-colors mb-10"
        >
          ← Back to portfolio
        </a>

        <p className="text-champagne uppercase tracking-widest text-sm mb-4">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-fraunces mb-4">{title}</h1>
        <p className="font-mono text-sm text-muted-gray mb-12">Last updated: {lastUpdated}</p>

        <div className="glass-effect rounded-2xl p-6 sm:p-10">{children}</div>

        <footer className="mt-10 flex flex-wrap gap-6 font-mono text-sm text-muted-gray">
          <a href="/privacy/" className="hover:text-champagne transition-colors">Privacy Policy</a>
          <a href="/terms/" className="hover:text-champagne transition-colors">Terms of Service</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-champagne transition-colors">Contact</a>
        </footer>
      </div>
    </motion.main>
  </div>
);

export default LegalPage;
