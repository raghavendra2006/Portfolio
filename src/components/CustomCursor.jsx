import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: "fixed",
          left: 0,
          top: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "2px dashed var(--dark-accent)",
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          position: "fixed",
          left: "12px",
          top: "12px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "var(--dark-accent-hover)",
          boxShadow: "0 0 10px var(--dark-accent-hover)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
