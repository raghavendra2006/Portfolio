import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certs = [
  "GFG Cloud Practitioner",
  "AWS Cloud Developing",
  "AWS Developer Associate",
  "Google Cloud Career Launchpad"
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
            className="glass"
            style={{ padding: '20px 30px', display: 'flex', alignItems: 'center', gap: '15px' }}
          >
            <FaCertificate style={{ color: 'var(--dark-accent)', fontSize: '1.5rem' }} />
            <span style={{ color: 'var(--dark-text-primary)', fontWeight: '600' }}>{cert}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
