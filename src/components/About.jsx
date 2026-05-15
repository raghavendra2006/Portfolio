import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>01.</span>
        About Me
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', marginTop: '40px', alignItems: 'center' }} className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <p style={{ marginBottom: '15px' }}>
            Hello! My name is Raghavendra and I enjoy creating things that live on the internet. My interest in software development started back in 2021 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
          </p>
          <p style={{ marginBottom: '15px' }}>
            Fast-forward to today, and I've had the privilege of working as an intern at a <a href="#" target="_blank" rel="noreferrer">cloud solutions provider</a> and an <a href="#" target="_blank" rel="noreferrer">AI platform</a>. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 200px))', 
            gap: '10px 10px', padding: 0, margin: '20px 0 0 0', overflow: 'hidden', listStyle: 'none',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: 'var(--dark-text-secondary)'
          }}>
            {['Java (Spring Boot)', 'AWS Cloud', 'React & Vite', 'Docker & Terraform', 'MySQL & JPA', 'CI/CD (Jenkins)'].map((tech, i) => (
              <li key={i} style={{ position: 'relative', paddingLeft: '20px' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--dark-accent)' }}>▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}
          className="about-image-wrapper"
        >
          <div style={{
            position: 'relative', borderRadius: '4px', backgroundColor: 'var(--dark-accent)',
            transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)'
          }} className="img-container">
            <img 
              src="/src/assets/profile-new.jpg" 
              alt="Raghavendra" 
              style={{
                width: '100%', borderRadius: '4px', mixBlendMode: 'multiply', filter: 'grayscale(100%) contrast(1)',
                transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)', display: 'block'
              }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              border: '2px solid var(--dark-accent)', borderRadius: '4px', zIndex: -1,
              transform: 'translate(20px, 20px)', transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)'
            }} className="img-border"></div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        .img-container:hover { background-color: transparent !important; }
        .img-container:hover img { filter: none !important; mix-blend-mode: normal !important; }
        .img-container:hover .img-border { transform: translate(15px, 15px) !important; }
      `}</style>
    </section>
  );
}
