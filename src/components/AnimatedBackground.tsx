import { motion } from "framer-motion";
import { useMemo } from "react";

// Memoize particle positions to prevent re-renders
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }));
};

const AnimatedBackground = () => {
  // Memoize particles so they don't regenerate on every render
  const particles = useMemo(() => generateParticles(20), []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        willChange: "transform",
        transform: "translateZ(0)", // GPU acceleration
        backfaceVisibility: "hidden",
      }}
    >
      {/* Main gradient background - covers entire viewport */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black matrix-bg"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          willChange: "background",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, rgba(0, 255, 136, 0.05) 0%, transparent 50%, rgba(0, 255, 170, 0.05) 100%)",
            "linear-gradient(225deg, rgba(0, 255, 170, 0.05) 0%, transparent 50%, rgba(0, 255, 136, 0.05) 100%)",
            "linear-gradient(45deg, rgba(0, 255, 136, 0.05) 0%, transparent 50%, rgba(0, 255, 170, 0.05) 100%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute inset-0"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      >
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-green-500/20 rounded-full tech-glow"
          style={{ willChange: "transform" }}
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-green-400/20 rounded-full tech-glow"
          style={{ willChange: "transform" }}
          animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-green-500/20 rounded-full tech-glow"
          style={{ willChange: "transform" }}
          animate={{ y: [0, -15, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-1/3 right-20 w-16 h-16 border border-green-400/10 rotate-45"
          style={{ willChange: "transform" }}
          animate={{ rotate: [45, 225, 45], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-12 h-12 border border-green-500/10 rotate-12"
          style={{ willChange: "transform" }}
          animate={{ rotate: [12, 192, 372], scale: [1, 0.9, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-1/2 left-10 w-40 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent"
          style={{ willChange: "transform, opacity" }}
          animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-32 h-px bg-gradient-to-l from-transparent via-champagne-light/20 to-transparent"
          style={{ willChange: "transform, opacity" }}
          animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Optimized Particle system - memoized positions */}
      <div
        className="absolute inset-0"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-champagne/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              willChange: "transform, opacity",
            }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundImage: `linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
