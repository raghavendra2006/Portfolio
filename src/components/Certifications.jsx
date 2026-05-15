import { motion } from "framer-motion";
import { FaAws, FaGoogle, FaCertificate } from "react-icons/fa";

const certs = [
  { name: "AWS Developer Associate", icon: <FaAws /> },
  { name: "AWS Cloud Developing", icon: <FaAws /> },
  { name: "Google Cloud Career Launchpad", icon: <FaGoogle /> },
  { name: "GFG Cloud Practitioner", icon: <FaCertificate /> }
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
            whileHover={{ scale: 1.05, borderColor: "rgba(0, 240, 255, 0.4)" }}
            className="glass"
            style={{ padding: '20px 30px', display: 'flex', alignItems: 'center', gap: '15px', flex: '1 1 250px' }}
          >
            <div style={{ color: 'var(--dark-accent)', fontSize: '1.8rem', display: 'flex' }}>
              {cert.icon}
            </div>
            <span style={{ color: 'var(--dark-text-primary)', fontWeight: '600' }}>{cert.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
