import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Simulate system boot
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const el = document.getElementById(href.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleClick);

    // Advanced tracking for spotlight, parallax and holography
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPct = (clientX / window.innerWidth - 0.5) * 20;
      const yPct = (clientY / window.innerHeight - 0.5) * 20;
      
      document.documentElement.style.setProperty("--mouse-x", `${clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${clientY}px`);
      document.documentElement.style.setProperty("--mouse-x-pct", `${xPct}%`);
      document.documentElement.style.setProperty("--mouse-y-pct", `${yPct}%`);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${-scrolled * 0.1}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxProvider>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99999,
              backgroundColor: '#000', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: '20px'
            }}
          >
            <div style={{ 
              width: '200px', height: '2px', backgroundColor: 'rgba(0, 240, 255, 0.1)',
              borderRadius: '2px', overflow: 'hidden', position: 'relative'
            }}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ height: '100%', backgroundColor: 'var(--dark-accent)', boxShadow: '0 0 15px var(--dark-accent)' }}
              />
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--dark-accent)' }}>
              <TypeAnimation
                sequence={[
                  'AUTHENTICATING ARCHITECT...', 500,
                  'INITIALIZING CLOUD TERMINAL...', 500,
                  'SYNCING INFRASTRUCTURE...', 500,
                  'ACCESS GRANTED.', 500
                ]}
                wrapper="span"
                cursor={false}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, height: "4px",
          background: "linear-gradient(90deg, var(--dark-accent), var(--dark-accent-hover))",
          transformOrigin: "0%", scaleX, zIndex: 10000
        }}
      />
      <div className="spotlight-bg" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ParallaxProvider>
  );
}
