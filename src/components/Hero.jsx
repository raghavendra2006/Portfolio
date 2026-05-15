import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile-new.jpg";
import TiltCard from "./TiltCard";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }
  })
};

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 20px', maxWidth: '1200px', margin: '0 auto'
    }}>
      <div className="hero-container" style={{
        display: 'flex', width: '100%', gap: '60px', alignItems: 'center',
        flexDirection: 'row'
      }}>
        {/* Left Side: Content */}
        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p style={{ 
              fontFamily: "'JetBrains Mono', monospace", 
              color: 'var(--dark-accent)', 
              marginBottom: '20px',
              fontSize: '1rem',
              letterSpacing: '2px'
            }}>
              00. SYSTEM INITIALIZED // HI, MY NAME IS
            </p>
          </motion.div>

          <motion.h1
            className="text-gradient"
            style={{ 
              fontSize: 'var(--font-size-h1)', 
              fontWeight: 800, 
              lineHeight: 1.05,
              margin: 0,
              paddingBottom: '10px',
              letterSpacing: '-0.03em'
            }}
          >
            {"Patchipulusu Leela Krishna Raghavendra.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i + 10}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word === "Leela" ? <><br/>{word}</> : word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{ 
              fontSize: 'clamp(24px, 4vw, 40px)', 
              fontWeight: 700, 
              color: 'var(--dark-text-secondary)',
              lineHeight: 1.1,
              marginTop: '10px',
              marginBottom: '20px'
            }}
          >
            <TypeAnimation
              sequence={[
                "Cloud & DevOps Architect.", 2000,
                "Infrastructure Automation.", 2000,
                "Kubernetes Specialist.", 2000,
              ]}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
              style={{ display: 'inline-block', color: 'var(--dark-accent)' }}
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <p style={{ maxWidth: '600px', marginTop: '20px', fontSize: '1.1rem', lineHeight: '1.8' }}>
              I'm a Cloud & DevOps Architect specializing in designing and automating scalable, highly available infrastructure. Currently, I'm focused on multi-cloud environments, CI/CD pipelines, and Kubernetes orchestrations to deliver robust enterprise solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{ marginTop: '50px', display: 'flex', gap: '20px' }}
          >
            <motion.a 
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="btn-primary magnetic"
            >
              EXPLORE REPOSITORY
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, x: -10 }}
              whileTap={{ scale: 0.95 }}
              href="/raghavendra_resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary magnetic" 
              style={{ border: 'none', background: 'rgba(59, 130, 246, 0.1)' }}
            >
              DOWNLOAD CV
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
          className="hero-image-container"
        >
          <TiltCard style={{ width: 'auto' }}>
            <div className="profile-img-container">
              <img src={profileImg} alt="Raghavendra Profile" />
              <div className="profile-img-frame" />
              {/* Laser Scan Line */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute', left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--dark-accent), transparent)',
                  boxShadow: '0 0 15px var(--dark-accent)',
                  zIndex: 2, pointerEvents: 'none'
                }}
              />
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-container { flex-direction: column !important; text-align: center; gap: 40px !important; }
          .hero-image-container { width: 100%; order: -1; }
          .hero-container div { align-items: center; }
          p { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
}
