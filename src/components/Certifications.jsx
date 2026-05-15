import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import TiltCard from "./TiltCard";

const certifications = [
  { title: "AWS Developer Associate", issuer: "Amazon Web Services", link: "https://drive.google.com/file/d/1wsZBHxZy_Vry1O9odeNXuOchrWr11Hf8/view" },
  { title: "AWS Cloud Developing", issuer: "Amazon Web Services", link: "https://drive.google.com/file/d/1wsZBHxZy_Vry1O9odeNXuOchrWr11Hf8/view" },
  { title: "Google Cloud Career Launchpad", issuer: "Google", link: "https://drive.google.com/file/d/1kB6T16NDJAtj7CQWcCfSch8pTwaUMSdk/view" },
  { title: "GFG Cloud Practitioner", issuer: "GeeksforGeeks", link: "https://drive.google.com/file/d/1iKPKb30pfJTTeJxHC9Numn-3dOwmDsBC/view" }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ paddingTop: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>07.</span>
        Professional Credentials
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '40px' }}>
        {certifications.map((cert, i) => (
          <TiltCard key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass"
              style={{ 
                padding: '25px', height: '100%', display: 'flex', flexDirection: 'column', 
                gap: '15px', border: '1px solid rgba(0, 240, 255, 0.1)',
                position: 'relative', overflow: 'hidden'
              }}
            >
              <div style={{ color: 'var(--dark-accent)', fontSize: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FaAward />
                <a href={cert.link} target="_blank" rel="noreferrer" style={{ color: 'var(--dark-text-secondary)', fontSize: '0.9rem' }}>
                  <FaExternalLinkAlt />
                </a>
              </div>
              <div>
                <h3 style={{ color: 'var(--dark-text-primary)', fontSize: '1.1rem', marginBottom: '5px' }}>{cert.title}</h3>
                <p style={{ color: 'var(--dark-accent)', fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace" }}>{cert.issuer}</p>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary" 
                  style={{ 
                    fontSize: '0.7rem', padding: '8px 15px', width: '100%', 
                    display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(0, 240, 255, 0.05)'
                  }}
                >
                  VERIFY CREDENTIAL
                </a>
              </div>
              {/* Badge Glow */}
              <div style={{ 
                position: 'absolute', top: '-20px', right: '-20px', width: '60px', height: '60px',
                background: 'var(--dark-accent)', filter: 'blur(40px)', opacity: 0.1
              }} />
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
