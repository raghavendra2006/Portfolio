import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
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
      <CustomCursor />
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
