import { motion } from "framer-motion";
import { FaAws, FaJava, FaReact, FaDocker, FaDatabase, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Backend",
    icon: <FaJava size={30} />,
    skills: ["Java 17", "Spring Boot 3", "REST APIs", "JWT Auth", "Maven"]
  },
  {
    title: "Cloud & DevOps",
    icon: <FaAws size={30} />,
    skills: ["AWS (EC2, S3, IAM)", "Docker", "Jenkins", "GitHub Actions", "Terraform"]
  },
  {
    title: "Databases",
    icon: <FaDatabase size={30} />,
    skills: ["MySQL 8", "JPA/Hibernate", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Frontend & Tools",
    icon: <FaReact size={30} />,
    skills: ["React & Vite", "HTML/CSS/JS", "Framer Motion", "SonarQube", "Git/Bash"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ paddingTop: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>02.</span>
        Technical Arsenal
      </motion.h2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px'
      }}>
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="glass"
            style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <div style={{ color: 'var(--dark-accent)' }}>{cat.icon}</div>
            <h3 style={{ color: 'var(--dark-text-primary)', fontSize: '1.2rem' }}>{cat.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cat.skills.map((skill, i) => (
                <li key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: 'var(--dark-text-secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--dark-accent)' }}>▹</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
