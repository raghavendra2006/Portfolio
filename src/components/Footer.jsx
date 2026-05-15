import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ 
      padding: '40px 20px', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '20px' 
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com/raghavendra2006" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--dark-text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--dark-accent)'} onMouseOut={e => e.target.style.color='var(--dark-text-secondary)'}>
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/patchipulusu-raghavendra" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--dark-text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--dark-accent)'} onMouseOut={e => e.target.style.color='var(--dark-text-secondary)'}>
          <FaLinkedin />
        </a>
      </div>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' }}>
        Designed & Built by Patchipulusu Leela Krishna Raghavendra
      </p>
    </footer>
  );
}
