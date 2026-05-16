import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Update active section
      const sections = ['about', 'skills', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-bracket">{'<'}</span>
          <span className="navbar__logo-name">YN</span>
          <span className="navbar__logo-bracket">{'/>'}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              className={`navbar__link ${activeSection === href.replace('#', '') ? 'active' : ''}`}
              onClick={() => handleNav(href)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <span className="navbar__status">
            <span className="status-dot" />
            Available for work
          </span>
          <button className="btn-primary navbar__cta" onClick={() => handleNav('#contact')}>
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ label, href }) => (
              <button key={label} className="navbar__mobile-link" onClick={() => handleNav(href)}>
                {label}
              </button>
            ))}
            <button className="btn-primary" onClick={() => handleNav('#contact')}>
              <span>Let's Talk</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
