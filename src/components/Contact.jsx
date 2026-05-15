import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingTop: '100px', textAlign: 'center', maxWidth: '600px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'block' }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', display: 'block', marginBottom: '10px' }}>07. What's Next?</span>
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2 }}
      >
        <p style={{ margin: '20px 0 40px 0' }}>
          Although I'm currently focused on completing my B.Tech., my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:patchipulusuraghavendra@gmail.com" className="btn-primary" style={{ padding: '1.25rem 2.5rem' }}>
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
