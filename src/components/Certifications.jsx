import { motion } from "framer-motion";
import { FaAws, FaGoogle, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certs = [
  { name: "AWS Developer Associate", icon: <FaAws />, link: "https://drive.google.com/file/d/1wsZBHxZy_Vry1O9odeNXuOchrWr11Hf8/view" },
  { name: "AWS Cloud Developing", icon: <FaAws />, link: "https://drive.google.com/file/d/1wsZBHxZy_Vry1O9odeNXuOchrWr11Hf8/view" },
  { name: "Google Cloud Career Launchpad", icon: <FaGoogle />, link: "https://drive.google.com/file/d/1kB6T16NDJAtj7CQWcCfSch8pTwaUMSdk/view" },
  { name: "GFG Cloud Practitioner", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1iKPKb30pfJTTeJxHC9Numn-3dOwmDsBC/view" }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ paddingTop: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>06.</span>
        Certifications
      </motion.h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '40px' }}>
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.4)" }}
            className="glass"
            style={{ 
              padding: '25px 30px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              flex: '1 1 280px',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ color: 'var(--dark-accent)', fontSize: '2rem', display: 'flex' }}>
                {cert.icon}
              </div>
              <span style={{ color: 'var(--dark-text-primary)', fontWeight: '600', fontSize: '1rem' }}>{cert.name}</span>
            </div>
            
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                color: 'var(--dark-accent)', 
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              title="Verify Certificate"
            >
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
