import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0, width: '100%', zIndex: 1000,
      transition: 'all 0.3s ease',
      height: scrolled ? '70px' : '100px',
      backgroundColor: dark ? (scrolled ? 'rgba(5, 11, 20, 0.85)' : 'transparent') : (scrolled ? 'rgba(248, 250, 252, 0.85)' : 'transparent'),
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? (dark ? '1px solid rgba(0, 240, 255, 0.1)' : '1px solid rgba(0,0,0,0.05)') : 'none',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none'
    }}>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 40px', height: '100%', maxWidth: '1400px', margin: '0 auto'
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          style={{ fontSize: '1.5rem', fontWeight: 700, color: dark ? 'var(--dark-accent)' : 'var(--light-accent)' }}
        >
          R.
        </motion.div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {navItems.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <a href={item.href} style={{
                  color: dark ? 'var(--dark-text-primary)' : 'var(--light-text-primary)',
                  fontSize: '0.9rem', fontFamily: "'JetBrains Mono', monospace",
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={e => e.target.style.color = dark ? 'var(--dark-accent)' : 'var(--light-accent)'}
                onMouseOut={e => e.target.style.color = dark ? 'var(--dark-text-primary)' : 'var(--light-text-primary)'}
                >
                  <span style={{ color: dark ? 'var(--dark-accent)' : 'var(--light-accent)' }}>0{i+1}. </span>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => setDark(!dark)} 
            style={{
              background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem',
              color: dark ? 'var(--dark-text-primary)' : 'var(--light-text-primary)'
            }}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>

        <div className="mobile-nav-toggle" style={{ display: 'none' }} onClick={() => setMenuOpen(!menuOpen)}>
           {menuOpen ? <FaTimes size={24} color={dark ? 'var(--dark-accent)' : 'var(--light-accent)'} /> : <FaBars size={24} color={dark ? 'var(--dark-accent)' : 'var(--light-accent)'} />}
        </div>
      </nav>

      {/* Basic responsive styles via style tag for simplicity in React component without external CSS module */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: block !important; cursor: pointer; }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, right: 0, width: '75vw', height: '100vh',
              backgroundColor: dark ? 'var(--dark-bg-secondary)' : 'var(--light-bg-secondary)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem',
              boxShadow: '-10px 0px 30px -15px rgba(2,12,27,0.7)', zIndex: 999
            }}
          >
            {navItems.map((item, i) => (
              <a key={i} href={item.href} onClick={() => setMenuOpen(false)} style={{
                  color: dark ? 'var(--dark-text-primary)' : 'var(--light-text-primary)',
                  fontSize: '1.2rem', fontFamily: "'JetBrains Mono', monospace"
              }}>
                <span style={{ color: dark ? 'var(--dark-accent)' : 'var(--light-accent)' }}>0{i+1}. </span>
                {item.name}
              </a>
            ))}
            <button onClick={() => { setDark(!dark); setMenuOpen(false); }} style={{
              background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem',
              color: dark ? 'var(--dark-text-primary)' : 'var(--light-text-primary)'
            }}>
              {dark ? <FaSun /> : <FaMoon />} Switch Theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
