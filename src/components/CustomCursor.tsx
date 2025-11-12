import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { createPortal } from "react-dom";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Smooth spring values for tail effect
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Tail positions
  const tailPositions = useRef<Array<{ x: number; y: number }>>([]);
  const [tailPoints, setTailPoints] = useState<Array<{ x: number; y: number }>>(
    []
  );

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorX.set(x);
      cursorY.set(y);

      // Update tail positions
      tailPositions.current.unshift({ x, y });
      if (tailPositions.current.length > 10) {
        tailPositions.current.pop();
      }
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setTailPoints([...tailPositions.current]);
      });
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    setMounted(true);

    // Only show custom cursor on desktop (not touch devices)
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      // Re-enable cursor on touch devices
      document.documentElement.style.cursor = "auto";
      document.body.style.cursor = "auto";
      return;
    }

    // Ensure cursor is hidden
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";
    setIsVisible(true);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest('a, button, [role="button"], [onclick]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Use event delegation for better performance
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      // Restore cursor on cleanup
      document.documentElement.style.cursor = "auto";
      document.body.style.cursor = "auto";
    };
  }, [updateMousePosition]);

  if (!mounted) return null;
  if (!isVisible) {
    // Still render empty div to maintain portal
    return mounted && typeof document !== "undefined"
      ? createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 99999,
            }}
          />,
          document.body
        )
      : null;
  }

  const cursorContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
      }}
    >
      {/* Tail dots - Multiple trailing points with smooth animation */}
      {tailPoints.map((point, index) => {
        const size = Math.max(2, 6 - index * 0.5);
        const opacity = Math.max(0.1, 0.5 - index * 0.05);
        const springDelay = index * 0.03;

        return (
          <motion.div
            key={`tail-${index}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, rgba(0, 255, 136, ${opacity}) 0%, rgba(0, 255, 170, ${
                opacity * 0.5
              }) 100%)`,
              boxShadow: `0 0 ${size * 2}px rgba(0, 255, 136, ${
                opacity * 0.8
              })`,
            }}
            initial={{
              x: point.x - size / 2,
              y: point.y - size / 2,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: point.x - size / 2,
              y: point.y - size / 2,
              scale: 1,
              opacity: opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.3,
              delay: springDelay,
            }}
          />
        );
      })}

      {/* Main Cursor - Code brackets with glow */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: "translate(-20px, -20px)",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(0,255,136,0.9)]"
          style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 136, 0.8))" }}
        >
          {/* Outer glow */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="rgba(0, 255, 136, 0.15)"
            className="animate-pulse"
          />

          {/* Code brackets */}
          <g
            stroke="#00ff88"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Left bracket */}
            <path d="M12 14 L8 20 L12 26" />
            {/* Right bracket */}
            <path d="M28 14 L32 20 L28 26" />
            {/* Center dot */}
            <circle cx="20" cy="20" r="2.5" fill="#00ff88" />
          </g>
        </svg>
      </motion.div>

      {/* Outer ring - expands on hover */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: "translate(-15px, -15px)",
        }}
        animate={{
          scale: isHovering ? 2.5 : 0,
          opacity: isHovering ? 0.15 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <div className="w-[30px] h-[30px] rounded-full border-2 border-champagne/50" />
      </motion.div>
    </div>
  );

  // Render in a portal to ensure it's always on top
  return mounted && typeof document !== "undefined"
    ? createPortal(cursorContent, document.body)
    : null;
};

export default CustomCursor;
