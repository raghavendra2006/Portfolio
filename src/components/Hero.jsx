import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 20px', maxWidth: '1000px', margin: '0 auto'
    }}>
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
        initial={{ opacity: 0, y: 30, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.9, type: 'spring' }}
        className="text-gradient"
        style={{ 
          fontSize: 'clamp(40px, 8vw, 80px)', 
          fontWeight: 800, 
          lineHeight: 1.1,
          margin: 0,
          paddingBottom: '10px'
        }}
      >
        Patchipulusu Leela<br/>Krishna Raghavendra.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        style={{ 
          fontSize: 'clamp(30px, 6vw, 60px)', 
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
        <a href="#projects" className="btn-primary">EXPLORE REPOSITORY</a>
        <a href="/raghavendra_resume.pdf" target="_blank" rel="noreferrer" className="btn-primary" style={{ border: 'none', background: 'rgba(139, 92, 246, 0.1)' }}>DOWNLOAD CV</a>
      </motion.div>
    </section>
  );
}
