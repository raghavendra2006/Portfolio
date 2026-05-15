import { motion } from "framer-motion";
import { FaTerminal, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingTop: '100px', maxWidth: '800px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <h2 style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>08.</span>
          Comm Link
        </h2>

        <div className="glass" style={{ 
          marginTop: '40px', padding: '40px', border: '1px solid var(--dark-accent)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'relative'
        }}>
          {/* Terminal Header */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, height: '30px', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center',
            padding: '0 15px', gap: '10px'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
            <span style={{ fontSize: '0.6rem', color: 'var(--dark-text-secondary)', fontFamily: "'JetBrains Mono', monospace", marginLeft: 'auto' }}>SECURE_CHANNEL_v4.0</span>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--dark-accent)', marginBottom: '20px' }}>
              <FaTerminal style={{ marginRight: '10px' }} /> 
              establish connection --target="Raghavendra"
            </p>
            
            <p style={{ color: 'var(--dark-text-secondary)', marginBottom: '30px', lineHeight: '1.6' }}>
              My communication terminal is currently open for professional inquiries, cloud consultations, or project collaborations. Although I'm currently focused on completing my B.Tech., I'll try my best to respond within 24 standard cycles.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--dark-accent)', fontFamily: "'JetBrains Mono', monospace" }}>[SENDER_ENVELOPE]</span>
                <a 
                  href="mailto:patchipulusuraghavendra@gmail.com" 
                  className="btn-primary" 
                  style={{ 
                    display: 'flex', justifyContent: 'center', gap: '15px', 
                    fontSize: '1rem', padding: '1.25rem' 
                  }}
                >
                  <FaPaperPlane />
                  INITIATE TRANSMISSION
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
