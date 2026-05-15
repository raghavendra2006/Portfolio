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
          border: "2px solid rgba(139, 92, 246, 0.5)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
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
          backgroundColor: "var(--dark-accent)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
