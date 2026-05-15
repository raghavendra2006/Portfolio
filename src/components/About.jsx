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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          style={{ maxWidth: '800px', transformStyle: 'preserve-3d' }}
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
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 200px))', 
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
      </div>
    </section>
  );
}
