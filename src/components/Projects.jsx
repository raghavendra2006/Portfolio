import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Student Management System",
    description: "Built secure REST APIs with JWT authentication and role-based access control for student CRUD operations. Implemented persistence using Spring Data JPA and integrated AWS S3 for profile photos.",
    tech: ["Java 17", "Spring Boot", "MySQL", "AWS S3", "Docker"],
    github: "https://github.com/raghavendra2006/Student-Management.git",
    external: "#"
  },
  {
    title: "Hybrid Cloud Infrastructure",
    description: "Provisioned multi-cloud infrastructure with Terraform to automate GCP and AWS (LocalStack) resources. Built a data migration pipeline from S3 to GCS with optimized transfer performance.",
    tech: ["Terraform", "GCP", "LocalStack", "Python", "Docker"],
    github: "https://github.com/raghavendra2006/Hybrid-Cloud-Architecture-with-Terraform-GCP-and-LocalStack.git",
    external: "#"
  },
  {
    title: "CloudCompare AI",
    description: "Developed a full-stack multi-cloud service recommendation engine comparing compute, storage, and AI services. Implemented a glassmorphism UI and robust Spring Boot backend.",
    tech: ["React", "Spring Boot", "Tailwind CSS", "AI Services"],
    github: "https://github.com/raghavendra2006/CLOUD-COMPARE-AI",
    external: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ paddingTop: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>03.</span>
        Some Things I've Built
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '40px' }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="glass project-card"
            style={{ 
              padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px',
              position: 'relative', overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: 'var(--dark-accent)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem' }}>Featured Project</div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--dark-text-primary)', fontSize: '1.2rem' }}>
                  <FaGithub />
                </a>
                <a href={project.external} target="_blank" rel="noreferrer" style={{ color: 'var(--dark-text-primary)', fontSize: '1.2rem' }}>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <h3 style={{ color: 'var(--dark-text-primary)', fontSize: '1.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--dark-text-secondary)' }}>{project.description}</p>
            <ul style={{ 
              display: 'flex', flexWrap: 'wrap', gap: '15px', listStyle: 'none', padding: 0,
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: 'var(--dark-text-primary)'
            }}>
              {project.tech.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <style>{`
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -15px rgba(100,255,218,0.2);
        }
      `}</style>
    </section>
  );
}
