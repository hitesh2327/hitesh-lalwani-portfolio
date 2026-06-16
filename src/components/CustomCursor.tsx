// src/components/CustomCursor.tsx

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { createPortal } from "react-dom";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const tailPositions = useRef<Array<{ x: number; y: number }>>([]);
  const [tailPoints, setTailPoints] = useState<Array<{ x: number; y: number }>>([]);

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorX.set(x);
      cursorY.set(y);

      tailPositions.current.unshift({ x, y });
      if (tailPositions.current.length > 8) {
        tailPositions.current.pop();
      }
      requestAnimationFrame(() => {
        setTailPoints([...tailPositions.current]);
      });
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    setMounted(true);

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.documentElement.style.cursor = "auto";
      document.body.style.cursor = "auto";
      return;
    }

    // Hide ALL cursors globally
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

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

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.style.cursor = "auto";
      document.body.style.cursor = "auto";
      const injected = document.getElementById("custom-cursor-style");
      if (injected) document.head.removeChild(injected);
    };
  }, [updateMousePosition]);

  if (!mounted) return null;

  if (!isVisible) {
    return mounted && typeof document !== "undefined"
      ? createPortal(
        <div style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 99999 }} />,
        document.body
      )
      : null;
  }

  // Pixel arrow: each cell is 3x3px, cursor is 12x14 pixels = 36x42px total
  // Pixel map: 1 = green fill, 2 = highlight, 0 = transparent, B = dark border
  const B = "B", G = "G", H = "H", _ = "_";
  type Cell = "B" | "G" | "H" | "_";

  const pixelMap: Cell[][] = [
    [B, _, _, _, _, _, _, _, _, _, _, _],
    [B, B, _, _, _, _, _, _, _, _, _, _],
    [B, G, B, _, _, _, _, _, _, _, _, _],
    [B, H, G, B, _, _, _, _, _, _, _, _],
    [B, H, G, G, B, _, _, _, _, _, _, _],
    [B, H, G, G, G, B, _, _, _, _, _, _],
    [B, H, G, G, G, G, B, _, _, _, _, _],
    [B, H, G, G, G, G, G, B, _, _, _, _],
    [B, H, G, G, G, G, G, G, B, _, _, _],
    [B, H, G, G, G, G, B, B, _, _, _, _],
    [B, H, G, G, B, G, B, _, _, _, _, _],
    [B, H, G, B, _, B, G, B, _, _, _, _],
    [B, B, B, _, _, _, B, G, B, _, _, _],
    [_, _, _, _, _, _, _, B, B, _, _, _],
  ];

  const cellSize = 3;
  const svgW = 12 * cellSize;
  const svgH = 14 * cellSize;

  const colorMap: Record<Cell, string | null> = {
    B: "#061a0e",   // very dark green-black border (replaces pure black, theme-synced)
    G: "#39ff7a",   // primary green
    H: "#7affaa",   // highlight — lighter green for top-left 3D edge
    _: null,        // transparent
  };

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
      {/* Trailing tail dots */}
      {tailPoints.map((point, index) => {
        const size = Math.max(2, 5 - index * 0.4);
        const opacity = Math.max(0.05, 0.4 - index * 0.05);

        return (
          <motion.div
            key={`tail-${index}`}
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: `${size}px`,
              height: `${size}px`,
              background: `rgba(57, 255, 122, ${opacity})`,
              boxShadow: `0 0 ${size * 2}px rgba(57, 255, 122, ${opacity * 0.8})`,
            }}
            initial={{ x: point.x - size / 2, y: point.y - size / 2, scale: 0, opacity: 0 }}
            animate={{ x: point.x - size / 2, y: point.y - size / 2, scale: 1, opacity }}
            transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.3, delay: index * 0.02 }}
          />
        );
      })}

      {/* Pixel cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          // Offset so hotspot is at top-left pixel (0,0)
          translateX: "0px",
          translateY: "0px",
          filter: isHovering
            ? "drop-shadow(0 0 8px rgba(57,255,122,0.95))"
            : "drop-shadow(0 0 4px rgba(57,255,122,0.5))",
        }}
        animate={{
          scale: isClicking ? 0.85 : isHovering ? 1.25 : 1,
          rotate: isClicking ? -8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <svg
          width={svgW}
          height={svgH}
          viewBox={`0 0 ${svgW} ${svgH}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ imageRendering: "pixelated", display: "block" }}
        >
          {pixelMap.map((row, rowIdx) =>
            row.map((cell, colIdx) => {
              const color = colorMap[cell];
              if (!color) return null;
              return (
                <rect
                  key={`${rowIdx}-${colIdx}`}
                  x={colIdx * cellSize}
                  y={rowIdx * cellSize}
                  width={cellSize}
                  height={cellSize}
                  fill={color}
                />
              );
            })
          )}
        </svg>
      </motion.div>

      {/* Expand ring on hover — subtle green tint */}
      <motion.div
        style={{
          position: "absolute",
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-14px",
          translateY: "-14px",
        }}
        animate={{
          scale: isHovering ? 2.8 : 0,
          opacity: isHovering ? 0.12 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1.5px solid rgba(57, 255, 122, 0.6)",
          }}
        />
      </motion.div>
    </div>
  );

  return mounted && typeof document !== "undefined"
    ? createPortal(cursorContent, document.body)
    : null;
};

export default CustomCursor;