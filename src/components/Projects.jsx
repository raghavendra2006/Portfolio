import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Cloud-Native Student Management API",
    description: "Architected a scalable REST API using Spring Boot. Containerized the application with Docker and orchestrated deployments via automated CI/CD pipelines. Integrated AWS S3 for secure, high-availability profile asset storage.",
    tech: ["Java & Spring Boot", "Docker", "AWS S3", "CI/CD", "MySQL"],
    github: "https://github.com/raghavendra2006/Student-Management.git",
    external: "#"
  },
  {
    title: "Automated Hybrid Cloud Infrastructure",
    description: "Provisioned a multi-cloud infrastructure using Infrastructure as Code (Terraform). Automated resource deployment across GCP and AWS (LocalStack), establishing a high-throughput data migration pipeline between S3 and GCS.",
    tech: ["Terraform", "GCP", "LocalStack / AWS", "Docker", "Python"],
    github: "https://github.com/raghavendra2006/Hybrid-Cloud-Architecture-with-Terraform-GCP-and-LocalStack.git",
    external: "#"
  },
  {
    title: "Serverless Cloud Pricing Aggregator (CloudCompare AI)",
    description: "Developed a full-stack platform comparing multi-cloud services. Implemented a robust backend microservice architecture to process pricing intelligence, deployed with high-availability configurations and performance optimizations.",
    tech: ["React & Vite", "Spring Boot", "Microservices", "Cloud Intelligence"],
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

      <motion.div 
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '40px', transformStyle: 'preserve-3d' }}
      >
        {projects.map((project, i) => (
          <TiltCard
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              {project.tech.map((t, index) => (
                <span key={index} style={{ 
                  fontSize: '0.7rem', 
                  fontFamily: "'JetBrains Mono', monospace",
                  padding: '4px 10px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  color: 'var(--dark-accent)',
                  fontWeight: 600
                }}>
                  {t}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </motion.div>
      <style>{`
        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 240, 255, 0.4);
          box-shadow: 0 10px 30px -15px rgba(0, 240, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
