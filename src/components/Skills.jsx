import { motion } from "framer-motion";
import { FaAws, FaDocker, FaJava, FaTools, FaCloud, FaShieldAlt, FaServer, FaChartLine } from "react-icons/fa";
import TiltCard from "./TiltCard";

const skillCategories = [
  {
    title: "Cloud Infrastructure",
    icon: <FaCloud size={30} />,
    skills: [
      { name: "AWS Services", level: "L5" },
      { name: "GCP / Azure", level: "L4" },
      { name: "Terraform", level: "L5" },
      { name: "CloudFormation", level: "L4" },
      { name: "Serverless", level: "L4" }
    ]
  },
  {
    title: "DevOps & CI/CD",
    icon: <FaDocker size={30} />,
    skills: [
      { name: "Docker & Kubernetes", level: "L5" },
      { name: "Jenkins pipelines", level: "L4" },
      { name: "GitHub Actions", level: "L4" },
      { name: "Ansible", level: "L3" },
      { name: "ArgoCD", level: "L3" }
    ]
  },
  {
    title: "Backend & Architecture",
    icon: <FaServer size={30} />,
    skills: [
      { name: "Java & Spring Boot", level: "L5" },
      { name: "Python / Go", level: "L4" },
      { name: "Microservices", level: "L5" },
      { name: "RESTful APIs", level: "L5" },
      { name: "gRPC / GraphQL", level: "L3" }
    ]
  },
  {
    title: "Monitoring & Security",
    icon: <FaShieldAlt size={30} />,
    skills: [
      { name: "Prometheus & Grafana", level: "L4" },
      { name: "ELK Stack", level: "L4" },
      { name: "Datadog", level: "L3" },
      { name: "SonarQube", level: "L4" },
      { name: "IAM & RBAC", level: "L5" }
    ]
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

      <motion.div 
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px',
          transformStyle: 'preserve-3d'
        }}
      >
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
                <li key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: 'var(--dark-text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--dark-accent)' }}>▹</span> {skill.name}
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--dark-accent)', opacity: 0.6 }}>[{skill.level}]</span>
                  </div>
                  {/* Skill Power Meter */}
                  <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(parseInt(skill.level.slice(1)) / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      style={{ height: '100%', backgroundColor: 'var(--dark-accent)', boxShadow: '0 0 10px var(--dark-accent)' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
}
