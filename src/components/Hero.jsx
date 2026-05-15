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
          marginBottom: '20px' 
        }}>
          Hi, my name is
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ 
          fontSize: 'clamp(40px, 8vw, 80px)', 
          fontWeight: 800, 
          color: 'var(--dark-text-primary)',
          lineHeight: 1.1,
          margin: 0
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
            "Software Engineer.", 2000,
            "Backend Developer.", 2000,
            "Cloud Enthusiast.", 2000,
          ]}
          repeat={Infinity}
        />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <p style={{ maxWidth: '540px', marginTop: '20px', fontSize: '1.1rem' }}>
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building secure, scalable web applications using Java, Spring Boot, and AWS.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{ marginTop: '50px', display: 'flex', gap: '20px' }}
      >
        <a href="#projects" className="btn-primary btn-filled">Check out my work!</a>
        <a href="/raghavendra_resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">View Resume</a>
      </motion.div>
    </section>
  );
}
