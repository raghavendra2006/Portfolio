import { motion } from "framer-motion";

const education = [
  {
    institution: "Aditya College of Engineering and Technology",
    degree: "B.Tech. (CSE)",
    period: "2023 – Present",
    grade: "CGPA: 8.45"
  },
  {
    institution: "Narayana Junior College, AP State Board",
    degree: "Class 12th",
    period: "2021 – 2023",
    grade: "90.4%"
  }
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ paddingTop: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>05.</span>
        Education
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="glass"
            style={{ padding: '30px' }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--dark-text-primary)', marginBottom: '5px' }}>{edu.degree}</h3>
            <p style={{ color: 'var(--dark-accent)', fontWeight: 'bold', marginBottom: '10px' }}>{edu.institution}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' }}>
              <span>{edu.period}</span>
              <span style={{ color: 'var(--dark-text-primary)' }}>{edu.grade}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
