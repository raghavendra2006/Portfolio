import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const experience = [
  {
    role: "AWS Cloud Intern",
    company: "Technical Hub Pvt Ltd",
    period: "May 2025 – June 2025",
    link: "https://drive.google.com/file/d/1uIoucOXvtXpXrFVi441Z5WLCoTkgtD7L/view",
    description: [
      "Configured VPC networking, subnets, route tables, and security groups to support 10+ EC2 instances with high availability.",
      "Hardened IAM policies using least-privilege access patterns, reducing excessive permissions and improving security posture.",
      "Supported deployment of client-server web workloads on AWS, improving reliability through standardized configurations."
    ]
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    period: "Sep 2025 – Nov 2025",
    link: "https://drive.google.com/file/d/1OSC9Z4b0YEn80vOYMzoO9W4gIAjCqN8i/view",
    description: [
      "Built an AI-driven agricultural assistant and integrated model outputs into backend services for near real-time recommendations.",
      "Improved inference latency by deploying services on AWS and optimizing the request/response workflow."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ paddingTop: '100px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>04.</span>
        Where I've Worked
      </motion.h2>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            style={{ 
              borderLeft: '2px solid var(--dark-accent)', paddingLeft: '20px',
              position: 'relative'
            }}
          >
            <div style={{ 
              position: 'absolute', left: '-6px', top: 0, width: '10px', height: '10px',
              borderRadius: '50%', backgroundColor: 'var(--dark-accent)',
              boxShadow: '0 0 10px var(--dark-accent)'
            }} />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--dark-text-primary)', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span>{job.role} <span className="text-gradient">@ {job.company}</span></span>
              {job.link && (
                <a 
                  href={job.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ color: 'var(--dark-accent)', fontSize: '0.9rem', display: 'flex', opacity: 0.7 }}
                  title="Verify Experience"
                  onMouseOver={e => e.currentTarget.style.opacity = '1'}
                  onMouseOut={e => e.currentTarget.style.opacity = '0.7'}
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </h3>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', marginBottom: '15px' }}>
              {job.period}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {job.description.map((desc, idx) => (
                <li key={idx} style={{ position: 'relative', paddingLeft: '20px', color: 'var(--dark-text-secondary)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--dark-accent)' }}>▹</span>
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
