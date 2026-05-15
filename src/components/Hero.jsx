import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.png";
import TiltCard from "./TiltCard";

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
        <div style={{ flex: 1.5 }}>
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
              fontSize: 'clamp(40px, 6vw, 70px)', 
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
            <a href="#projects" className="btn-primary">EXPLORE REPOSITORY</a>
            <a href="/raghavendra_resume.pdf" target="_blank" rel="noreferrer" className="btn-primary" style={{ border: 'none', background: 'rgba(139, 92, 246, 0.1)' }}>DOWNLOAD CV</a>
          </motion.div>
        </div>

        {/* Right Side: 3D Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          className="hero-image-desktop"
        >
          <TiltCard style={{ width: 'auto' }}>
            <div className="profile-img-container">
              <img src={profileImg} alt="Raghavendra Portfolio" />
              <div className="profile-img-frame" />
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-container { flex-direction: column !important; text-align: center; gap: 40px !important; }
          .hero-image-desktop { width: 100%; order: -1; }
          .hero-container div { align-items: center; }
          p { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
}
