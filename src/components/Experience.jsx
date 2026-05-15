import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="section" ref={containerRef} style={{ paddingTop: '100px', position: 'relative' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--dark-accent)', marginRight: '10px' }}>04.</span>
        Professional Narrative
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '60px', position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* Animated Timeline Path */}
        <div style={{ 
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', 
          backgroundColor: 'rgba(59, 130, 246, 0.1)' 
        }} />
        <motion.div style={{ 
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', 
          backgroundColor: 'var(--dark-accent)',
          boxShadow: '0 0 15px var(--dark-accent)',
          scaleY, transformOrigin: 'top'
        }} />

        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            style={{ 
              paddingLeft: '40px',
              position: 'relative'
            }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              style={{ 
                position: 'absolute', left: '-4px', top: '8px', width: '10px', height: '10px',
                borderRadius: '50%', backgroundColor: 'var(--dark-bg)',
                border: '2px solid var(--dark-accent)',
                boxShadow: '0 0 10px var(--dark-accent)',
                zIndex: 2
              }} 
            />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-text-primary)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <span>{job.role}</span> 
              <span className="text-gradient" style={{ fontSize: '1.2rem' }}>@ {job.company}</span>
              {job.link && (
                <a 
                  href={job.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ color: 'var(--dark-accent)', fontSize: '0.9rem', display: 'flex', opacity: 0.6 }}
                  title="Verify Experience"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </h3>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: 'var(--dark-accent)', marginBottom: '15px', fontWeight: 600 }}>
              {job.period}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {job.description.map((desc, idx) => (
                <li key={idx} style={{ position: 'relative', paddingLeft: '25px', color: 'var(--dark-text-secondary)', fontSize: '1rem' }}>
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
