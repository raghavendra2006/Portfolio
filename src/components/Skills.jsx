import { motion } from "framer-motion";
import { FaAws, FaDocker, FaJava, FaTools, FaCloud, FaShieldAlt, FaServer, FaChartLine } from "react-icons/fa";
import TiltCard from "./TiltCard";

const skillCategories = [
  {
    title: "Cloud Infrastructure",
    icon: <FaCloud size={30} />,
    skills: ["AWS (EC2, S3, EKS, IAM)", "GCP / Azure", "Terraform", "CloudFormation", "Serverless"]
  },
  {
    title: "DevOps & CI/CD",
    icon: <FaDocker size={30} />,
    skills: ["Docker & Kubernetes", "Jenkins pipelines", "GitHub Actions", "Ansible", "ArgoCD"]
  },
  {
    title: "Backend & Architecture",
    icon: <FaServer size={30} />,
    skills: ["Java & Spring Boot", "Python / Go", "Microservices", "RESTful APIs", "gRPC / GraphQL"]
  },
  {
    title: "Monitoring & Security",
    icon: <FaShieldAlt size={30} />,
    skills: ["Prometheus & Grafana", "ELK Stack", "Datadog", "SonarQube", "IAM & RBAC"]
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
          <TiltCard
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
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
