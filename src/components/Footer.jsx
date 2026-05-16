import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="navbar__logo-bracket">{'<'}</span>
              <span className="footer__logo-name">Pankaj</span>
              <span className="navbar__logo-bracket">{'/>'}</span>
            </span>
            <p className="footer__tagline">
              Building the web, one component at a time.
            </p>
          </div>

          <div className="footer__links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__socials">
            <a href="https://github.com/pankaj332004" target="_blank" rel="noopener noreferrer" className="footer__social">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/pankaj-kumar-rajbhar-b77150340/" target="_blank" rel="noopener noreferrer" className="footer__social">
              <LinkedinIcon size={18} />
            </a>
            <a href="pk902124@gmail.com" className="footer__social">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Pankaj Kumar Rajbhar. All rights reserved.
          </p>
          <p className="footer__credits">
            Built with <Heart size={12} className="footer__heart" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
